import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { useAppServices } from '../../app/AppServicesContext'
import type { ContentCard } from '../../domain/content/types'
import type { StudyMode } from '../../domain/learning/types'
import { checkTypedAnswer } from '../../domain/session/answer'
import { buildCustomPracticeQueue, buildReviewQueue, buildTodayQueue } from '../../domain/session/sessionBuilder'

interface Feedback {
  correct: boolean
  acceptedAnswers: string[]
}

type SessionStatus = 'loading' | 'active' | 'empty' | 'complete' | 'error'

function promptFor(card: ContentCard): string {
  if (card.contentType === 'kana') return card.character
  if (card.contentType === 'vocabulary') return card.term
  return card.character
}

function modeFor(kind: string | undefined): StudyMode {
  if (kind === 'review') return 'review'
  if (kind === 'today') return 'today'
  if (kind === 'custom') return 'custom'
  return 'learn'
}

function answerInstruction(card: ContentCard | undefined): string {
  return card?.contentType === 'kana' ? 'Nhập romaji' : 'Nhập cách đọc bằng kana'
}

function contentLabel(card: ContentCard | undefined): string {
  if (!card) return ''
  if (card.contentType === 'kana') return `${card.script} · ${card.group}`
  if (card.contentType === 'vocabulary') return 'Vocabulary · N5'
  return 'Kanji · N5'
}

export function SessionPage() {
  const { sessionKind, topicId } = useParams()
  const [searchParams] = useSearchParams()
  const { content, learning, identity, sync } = useAppServices()
  const [sessionScope] = useState(() => ({ content, learning, userId: identity.userId }))
  const sessionIdRef = useRef(`session-${crypto.randomUUID()}`)
  const questionStartedAt = useRef(0)
  const [status, setStatus] = useState<SessionStatus>('loading')
  const [cards, setCards] = useState<ContentCard[]>([])
  const [index, setIndex] = useState(0)
  const [answer, setAnswer] = useState('')
  const [feedback, setFeedback] = useState<Feedback | null>(null)
  const [correctCount, setCorrectCount] = useState(0)
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
        const allCards = sessionKind === 'custom'
          ? sessionScope.content.listCards()
          : topicId ? sessionScope.content.listByTopic(topicId) : sessionScope.content.listCards()
        const progress = await sessionScope.learning.listProgress()
        let queue: ContentCard[]
        if (sessionKind === 'review') queue = buildReviewQueue(allCards, progress, now, 20)
        else if (sessionKind === 'today') queue = buildTodayQueue(allCards, progress, now, { reviewLimit: 10, newLimit: 5 })
        else if (sessionKind === 'custom') queue = buildCustomPracticeQueue(allCards, customOptions.topicIds, customOptions.limit)
        else queue = buildTodayQueue(allCards, progress, now, { reviewLimit: 5, newLimit: 5 })

        if (!active) return
        if (queue.length === 0) { setStatus('empty'); return }
        const sessionId = sessionIdRef.current
        await sessionScope.learning.createSession({ sessionId, userId: sessionScope.userId, mode, startedAt: now, endedAt: null, eventIds: [], schemaVersion: 1 })
        if (!active) return
        setCards(queue)
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

  async function submit(event: FormEvent) {
    event.preventDefault()
    if (!current || feedback || saving) return
    const checked = checkTypedAnswer(current, answer)
    setSaving(true)
    try {
      const occurredAt = Date.now()
      await sessionScope.learning.recordEvent({
        eventId: `event-${crypto.randomUUID()}`,
        sessionId: sessionIdRef.current,
        cardId: current.cardId,
        mode,
        result: checked.correct ? 'correct' : 'incorrect',
        rating: checked.correct ? 'good' : 'again',
        responseTimeMs: Math.max(0, Math.round(performance.now() - questionStartedAt.current)),
        occurredAt,
        inputKind: 'typing',
        schemaVersion: 1,
      })
      if (checked.correct) setCorrectCount((count) => count + 1)
      setFeedback({ correct: checked.correct, acceptedAnswers: checked.acceptedAnswers })
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Không thể lưu câu trả lời.')
    } finally {
      setSaving(false)
    }
  }

  async function next() {
    if (!feedback || saving) return
    if (index >= cards.length - 1) {
      setSaving(true)
      try {
        await sessionScope.learning.completeSession(sessionIdRef.current, Date.now())
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
    questionStartedAt.current = performance.now()
  }

  if (status === 'loading') return <section className="page-stack"><p className="loading-copy">Đang chuẩn bị phiên học…</p></section>
  if (status === 'error') return <section className="page-stack"><div className="surface-card error-card"><h1>Không thể bắt đầu</h1><p>{error}</p><Link className="button secondary" to="/">Về Today</Link></div></section>
  if (status === 'empty') return <section className="page-stack"><div className="surface-card empty-state"><div><h1>Không có thẻ phù hợp lúc này</h1><p>{sessionKind === 'review' ? 'Bạn chưa có thẻ đến hạn. Có thể học thẻ mới ở Learn.' : sessionKind === 'custom' ? 'Custom Practice chưa có topic hợp lệ hoặc không có card phù hợp.' : 'Topic này hiện không có thẻ mới hoặc review phù hợp.'}</p><Link className="button primary" to={backPath}>{sessionKind === 'custom' ? 'Chọn lại Custom Practice' : 'Mở Learn'}</Link></div></div></section>

  if (status === 'complete') {
    const accuracy = cards.length > 0 ? Math.round((correctCount / cards.length) * 100) : 0
    return <section className="page-stack session-complete"><p className="eyebrow">SESSION COMPLETE</p><h1>Hoàn thành phiên học</h1><div className="summary-grid"><div><strong>{cards.length}</strong><span>Câu đã làm</span></div><div><strong>{correctCount}</strong><span>Trả lời đúng</span></div><div><strong>{accuracy}%</strong><span>Accuracy</span></div></div>{syncMessage && <p className="sync-message" role="status">{syncMessage}</p>}<div className="session-actions"><Link className="button primary" to="/">Về Today</Link><Link className="button secondary" to="/review">Xem Review</Link></div></section>
  }

  return (
    <section className="page-stack session-page">
      <div className="session-header">
        <Link className="text-link" to={backPath}>← Thoát</Link>
        <span>{index + 1} / {cards.length}</span>
      </div>
      <div className="session-progress" aria-label={`Tiến độ ${index + 1} trên ${cards.length}`}><span style={{ width: `${((index + 1) / cards.length) * 100}%` }} /></div>
      <article className="question-card">
        <p className="card-kicker">{contentLabel(current)}</p>
        <div className={`question-glyph${current?.contentType === 'vocabulary' ? ' is-term' : ''}`} lang="ja">{current ? promptFor(current) : ''}</div>
        <p className="question-hint">{answerInstruction(current)}</p>
      </article>
      <form className="answer-form" onSubmit={submit}>
        <label htmlFor="study-answer">Câu trả lời</label>
        <input id="study-answer" value={answer} onChange={(event) => setAnswer(event.target.value)} disabled={Boolean(feedback) || saving} autoComplete="off" autoCapitalize="none" autoFocus />
        {!feedback && <button className="button primary" type="submit" disabled={saving || answer.trim().length === 0}>{saving ? 'Đang lưu…' : 'Kiểm tra'}</button>}
      </form>
      {feedback && <div className={`feedback-card ${feedback.correct ? 'correct' : 'incorrect'}`} role="status">
        <strong>{feedback.correct ? 'Đúng' : 'Chưa đúng'}</strong>
        <span>Đáp án: {feedback.acceptedAnswers.join(' / ')}</span>
        {current?.contentType === 'vocabulary' && <span>Nghĩa: {current.meanings.vi}</span>}
        {current?.contentType === 'kanji' && <>
          <span>Nghĩa: {current.meanings.vi} · Hán Việt: {current.hanViet}</span>
          <span>On: {current.onYomi || '—'} · Kun: {current.kunYomi || '—'} · {current.strokeCount} nét</span>
          {current.mnemonic && <span className="memory-aid">Gợi nhớ: {current.mnemonic}</span>}
        </>}
        <button className="button primary" type="button" onClick={() => void next()} disabled={saving}>{index === cards.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo'}</button>
      </div>}
      {error && <p className="inline-error" role="alert">{error}</p>}
    </section>
  )
}
