import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { useAppServices } from '../../app/AppServicesContext'
import { primaryMeaning } from '../../domain/content/meaning'
import type { ContentCard } from '../../domain/content/types'
import type { StudyMode } from '../../domain/learning/types'
import { buildMultipleChoiceOptions, checkTypedAnswer, primaryAnswerFor } from '../../domain/session/answer'
import { buildCustomPracticeQueue, buildMistakeQueue, buildReviewQueue, buildTodayQueue } from '../../domain/session/sessionBuilder'
import { randomUuid } from '../../services/id/uuid'
import { epochNowMs, monotonicNowMs } from '../../services/time/clock'

interface Feedback {
  correct: boolean
  selectedAnswer: string
  acceptedAnswers: string[]
}

type SessionStatus = 'loading' | 'active' | 'empty' | 'complete' | 'error'

function promptFor(card: ContentCard): string {
  if (card.contentType === 'kana') return card.character
  if (card.contentType === 'vocabulary') return card.term
  return card.character
}

function modeFor(kind: string | undefined): StudyMode {
  if (kind === 'review' || kind === 'mistakes') return 'review'
  if (kind === 'today') return 'today'
  if (kind === 'custom') return 'custom'
  return 'learn'
}

function answerInstruction(card: ContentCard | undefined): string {
  return card?.contentType === 'kana' ? 'Chọn A · B · C · D (Nhập romaji)' : 'Chọn A · B · C · D (Nhập cách đọc bằng kana)'
}

function contentLabel(card: ContentCard | undefined): string {
  if (!card) return ''
  if (card.contentType === 'kana') return `${card.script} · ${card.group}`
  if (card.contentType === 'vocabulary') return `Vocabulary · ${card.level.toUpperCase()}`
  return `Kanji · ${card.level.toUpperCase()}`
}

export function SessionPage() {
  const { sessionKind, topicId } = useParams()
  const [searchParams] = useSearchParams()
  const { content, learning, identity, sync } = useAppServices()
  const [sessionScope] = useState(() => ({ content, learning, userId: identity.userId }))
  const allRepositoryCards = useMemo(() => sessionScope.content.listCards(), [sessionScope])
  const sessionIdRef = useRef(`session-${randomUuid()}`)
  const questionStartedAt = useRef(0)
  const [status, setStatus] = useState<SessionStatus>('loading')
  const [cards, setCards] = useState<ContentCard[]>([])
  const [index, setIndex] = useState(0)
  const [answer, setAnswer] = useState('')
  const [feedback, setFeedback] = useState<Feedback | null>(null)
  const [correctCount, setCorrectCount] = useState(0)
  const [missedCards, setMissedCards] = useState<ContentCard[]>([])
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [syncMessage, setSyncMessage] = useState<string | null>(null)
  const mode = useMemo(() => modeFor(sessionKind), [sessionKind])
  const customQuery = searchParams.toString()
  const customOptions = useMemo(() => {
    const params = new URLSearchParams(customQuery)
    const requestedLimit = Number(params.get('limit') ?? 10)
    const limit = requestedLimit === 5 || requestedLimit === 10 || requestedLimit === 20 ? requestedLimit : 10
    return { topicIds: params.getAll('topic').filter(Boolean), limit }
  }, [customQuery])
  const backPath = mode === 'review' ? '/review' : mode === 'custom' ? '/practice/custom' : '/learn'

  useEffect(() => {
    let active = true
    async function prepare() {
      try {
        const now = Date.now()
        const allCards = sessionKind === 'custom' || sessionKind === 'mistakes'
          ? sessionScope.content.listCards()
          : topicId ? sessionScope.content.listByTopic(topicId) : sessionScope.content.listCards()
        const progress = await sessionScope.learning.listProgress()
        let queue: ContentCard[]
        if (sessionKind === 'review') queue = buildReviewQueue(allCards, progress, now, 20)
        else if (sessionKind === 'mistakes') queue = buildMistakeQueue(allCards, progress, 20)
        else if (sessionKind === 'today') queue = buildTodayQueue(allCards, progress, now, { reviewLimit: 10, newLimit: 5 })
        else if (sessionKind === 'custom') queue = buildCustomPracticeQueue(allCards, customOptions.topicIds, customOptions.limit)
        else queue = buildTodayQueue(allCards, progress, now, { reviewLimit: 5, newLimit: 5 })

        if (!active) return
        if (queue.length === 0) { setStatus('empty'); return }
        const sessionId = sessionIdRef.current
        await sessionScope.learning.createSession({ sessionId, userId: sessionScope.userId, mode, startedAt: now, endedAt: null, eventIds: [], schemaVersion: 1 })
        if (!active) return
        setCards(queue)
        setMissedCards([])
        questionStartedAt.current = performance.now()
        setStatus('active')
      } catch (reason) {
        if (!active) return
        setError(reason instanceof Error ? reason.message : 'Không thể bắt đầu phiên học.')
        setStatus('error')
      }
    }
    void prepare()
    return () => { active = false }
  }, [customOptions, mode, sessionKind, sessionScope, topicId])

  const current = cards[index]
  const options = useMemo(
    () => (current ? buildMultipleChoiceOptions(current, allRepositoryCards, index) : []),
    [allRepositoryCards, current, index],
  )

  async function evaluateAnswer(rawAnswer: string) {
    if (!current || feedback || saving || rawAnswer.trim().length === 0) return
    const checked = checkTypedAnswer(current, rawAnswer)
    setSaving(true)
    try {
      const occurredAt = epochNowMs()
      await sessionScope.learning.recordEvent({
        eventId: `event-${randomUuid()}`,
        sessionId: sessionIdRef.current,
        cardId: current.cardId,
        mode,
        result: checked.correct ? 'correct' : 'incorrect',
        rating: checked.correct ? 'good' : 'again',
        responseTimeMs: Math.max(0, Math.round(monotonicNowMs() - questionStartedAt.current)),
        occurredAt,
        inputKind: 'typing',
        schemaVersion: 1,
      })
      if (checked.correct) {
        setCorrectCount((count) => count + 1)
      } else {
        setMissedCards((prev) => (prev.some((item) => item.cardId === current.cardId) ? prev : [...prev, current]))
      }
      setFeedback({
        correct: checked.correct,
        selectedAnswer: rawAnswer,
        acceptedAnswers: checked.acceptedAnswers,
      })
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Không thể lưu câu trả lời.')
    } finally {
      setSaving(false)
    }
  }

  async function submit(event: FormEvent) {
    event.preventDefault()
    await evaluateAnswer(answer)
  }

  async function retryMissedNow() {
    if (missedCards.length === 0 || saving) return
    setSaving(true)
    try {
      const nextSessionId = `session-${randomUuid()}`
      sessionIdRef.current = nextSessionId
      await sessionScope.learning.createSession({
        sessionId: nextSessionId,
        userId: sessionScope.userId,
        mode: 'review',
        startedAt: epochNowMs(),
        endedAt: null,
        eventIds: [],
        schemaVersion: 1,
      })
      setCards(missedCards)
      setIndex(0)
      setCorrectCount(0)
      setMissedCards([])
      setAnswer('')
      setFeedback(null)
      setError(null)
      setSyncMessage(null)
      questionStartedAt.current = monotonicNowMs()
      setStatus('active')
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Không thể mở phiên ôn câu sai.')
    } finally {
      setSaving(false)
    }
  }

  async function next() {
    if (!feedback || saving) return
    if (index >= cards.length - 1) {
      setSaving(true)
      try {
        await sessionScope.learning.completeSession(sessionIdRef.current, epochNowMs())
        setStatus('complete')
        if (sync && identity.userId === sessionScope.userId) {
          setSyncMessage('Đã lưu local · đang đồng bộ…')
          void sync.sync().then(() => setSyncMessage('Đã đồng bộ với cloud')).catch(() => setSyncMessage('Đã lưu local · cloud sync đang chờ thử lại'))
        } else if (identity.userId !== sessionScope.userId) {
          setSyncMessage('Đã lưu local · phiên học giữ nguyên hồ sơ ban đầu, cloud sync sẽ chờ đúng tài khoản')
        }
      } catch (reason) {
        setError(reason instanceof Error ? reason.message : 'Không thể kết thúc phiên học.')
      } finally {
        setSaving(false)
      }
      return
    }
    setIndex((value) => value + 1)
    setAnswer('')
    setFeedback(null)
    setError(null)
    questionStartedAt.current = monotonicNowMs()
  }

  if (status === 'loading') return <section className="page-stack"><p className="loading-copy" role="status">Đang chuẩn bị phiên học…</p></section>
  if (status === 'error') return <section className="page-stack"><div className="surface-card error-card"><h1>Không thể bắt đầu</h1><p>{error}</p><Link className="button secondary" to="/">Về Today</Link></div></section>
  if (status === 'empty') return <section className="page-stack"><div className="surface-card empty-state"><div><h1>Không có thẻ phù hợp lúc này</h1><p>{sessionKind === 'review' ? 'Bạn chưa có thẻ đến hạn. Có thể học thẻ mới ở Learn.' : sessionKind === 'mistakes' ? 'Tuyệt vời! Hiện bạn không có câu sai nào đang tồn đọng.' : sessionKind === 'custom' ? 'Custom Practice chưa có topic hợp lệ hoặc không có card phù hợp.' : 'Topic này hiện không có thẻ mới hoặc review phù hợp.'}</p><Link className="button primary" to={backPath}>{sessionKind === 'custom' ? 'Chọn lại Custom Practice' : 'Mở Learn'}</Link></div></div></section>

  if (status === 'complete') {
    const accuracy = cards.length > 0 ? Math.round((correctCount / cards.length) * 100) : 0
    return (
      <section className="page-stack session-complete">
        <p className="eyebrow">SESSION COMPLETE</p>
        <h1>Hoàn thành phiên học</h1>
        <div className="summary-grid">
          <div><strong>{cards.length}</strong><span>Câu đã làm</span></div>
          <div><strong>{correctCount}</strong><span>Trả lời đúng</span></div>
          <div><strong>{accuracy}%</strong><span>Accuracy</span></div>
        </div>
        {missedCards.length > 0 && (
          <article className="surface-card mistake-summary-card" aria-label="Các câu vừa trả lời sai">
            <div className="mistake-summary-head">
              <div>
                <p className="card-kicker">LƯU Ý CÂU SAI · MISTAKE RECOVERY</p>
                <h3>{missedCards.length} câu trả lời sai đã được hệ thống ghi nhận ưu tiên</h3>
                <p>Các thẻ này đã được hạ bậc SRS để tự động nhắc lại sớm. Bạn cũng có thể ôn lại ngay lập tức:</p>
              </div>
              <button className="button primary" type="button" onClick={() => void retryMissedNow()} disabled={saving}>
                Ôn lại ngay {missedCards.length} câu sai
              </button>
            </div>
            <div className="mistake-pill-list">
              {missedCards.map((card) => (
                <div key={card.cardId} className="mistake-item-pill">
                  <strong className="mistake-glyph" lang="ja">{promptFor(card)}</strong>
                  <span>{primaryAnswerFor(card)}</span>
                  {card.contentType !== 'kana' && <small>{primaryMeaning(card)}</small>}
                </div>
              ))}
            </div>
          </article>
        )}
        {syncMessage && <p className="sync-message" role="status">{syncMessage}</p>}
        <div className="session-actions">
          <Link className="button primary" to="/">Về Today</Link>
          <Link className="button secondary" to="/review">Xem Review</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="page-stack session-page">
      <div className="session-header">
        <Link className="text-link" to={backPath}>← Thoát</Link>
        <span>{index + 1} / {cards.length}</span>
      </div>
      <div className="session-progress" aria-label={`Tiến độ ${index + 1} trên ${cards.length}`}><span style={{ width: `${((index + 1) / cards.length) * 100}%` }} /></div>
      <article className={`question-card accent-${current?.contentType === 'vocabulary' ? 'vocab' : current?.contentType ?? 'kana'}`}>
        <span className="question-type-badge">{contentLabel(current)}</span>
        <div className={`question-glyph${current?.contentType === 'vocabulary' ? ' is-term' : ''}`} lang="ja">{current ? promptFor(current) : ''}</div>
        <p className="question-hint">{answerInstruction(current)}</p>
      </article>

      <div className="mcq-grid" role="group" aria-label="Chọn đáp án A B C D">
        {options.map((option) => {
          const isSelected = feedback?.selectedAnswer === option.value
          const stateClass = feedback
            ? option.isCorrect
              ? ' is-correct'
              : isSelected
                ? ' is-wrong'
                : ' is-muted'
            : ''
          return (
            <button
              key={option.key}
              type="button"
              className={`mcq-option${stateClass}`}
              disabled={Boolean(feedback) || saving}
              onClick={() => void evaluateAnswer(option.value)}
            >
              <span className="mcq-badge">{option.key}</span>
              <strong className="mcq-value" lang="ja">{option.value}</strong>
            </button>
          )
        })}
      </div>

      <form className="answer-form sr-typing-fallback" onSubmit={submit}>
        <label htmlFor="study-answer">Câu trả lời</label>
        <input id="study-answer" value={answer} onChange={(event) => setAnswer(event.target.value)} disabled={Boolean(feedback) || saving} autoComplete="off" autoCapitalize="none" />
        {!feedback && <button className="button primary" type="submit" disabled={saving || answer.trim().length === 0}>{saving ? 'Đang lưu…' : 'Kiểm tra'}</button>}
      </form>

      {feedback && (
        <div className={`feedback-card ${feedback.correct ? 'correct' : 'incorrect'}`} role="status">
          <div className="feedback-top-row">
            <div className="feedback-status-group">
              <strong className={`feedback-verdict ${feedback.correct ? 'is-correct' : 'is-incorrect'}`}>
                {feedback.correct ? 'Đúng' : 'Chưa đúng'}
              </strong>
              <span className="feedback-reading" lang="ja">Đáp án: {feedback.acceptedAnswers.join(' / ')}</span>
            </div>
            <button className="button primary" type="button" onClick={() => void next()} disabled={saving} autoFocus>
              {index === cards.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo'}
            </button>
          </div>
          {current?.contentType === 'vocabulary' && (
            <div className="feedback-lexicon-details">
              <div className="lexicon-meaning-box">Nghĩa: {primaryMeaning(current)}</div>
            </div>
          )}
          {current?.contentType === 'kanji' && (
            <div className="feedback-lexicon-details">
              <div className="lexicon-meaning-row">
                <span className="lexicon-meaning-box">Nghĩa: {primaryMeaning(current)}</span>
                {current.hanViet && <span className="lexicon-badge hanviet">Hán Việt: {current.hanViet}</span>}
                <span className="lexicon-badge strokes">{current.strokeCount} nét</span>
              </div>
              <div className="lexicon-reading-chips">
                <span className="lexicon-chip" lang="ja">On: {current.onYomi || '—'}</span>
                <span className="lexicon-chip" lang="ja">Kun: {current.kunYomi || '—'}</span>
              </div>
              {current.mnemonic && <div className="memory-aid">Gợi nhớ: {current.mnemonic}</div>}
            </div>
          )}
        </div>
      )}
      {error && <p className="inline-error" role="alert">{error}</p>}
    </section>
  )
}
