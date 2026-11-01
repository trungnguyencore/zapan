import { useCallback, useEffect, useMemo, useRef, useState, type FormEvent } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useAppServices } from '../../app/AppServicesContext'
import { PageIntro } from '../../components/ui/PageIntro'
import { buildArcadeQueue, nextSurvivalLives, remainingSeconds, type ArcadeMode, type TimeAttackDuration } from '../../domain/arcade/arcade'
import { primaryMeaning } from '../../domain/content/meaning'
import type { ContentCard } from '../../domain/content/types'
import { buildMultipleChoiceOptions, checkTypedAnswer, primaryAnswerFor } from '../../domain/session/answer'
import { randomUuid } from '../../services/id/uuid'
import { epochNowMs, monotonicNowMs } from '../../services/time/clock'
import { KANJI_N3_TOPIC_CATALOG, KANJI_N4_TOPIC_CATALOG, VOCAB_N3_TOPIC_CATALOG, VOCAB_N4_TOPIC_CATALOG } from '../../data/openjlpt/generated/catalog'
import { KANA_TOPIC_CATALOG, KANJI_N5_TOPIC_CATALOG, VOCAB_N5_TOPIC_CATALOG, type LearningTopicMeta } from '../../data/n5/topicCatalog'

const TOPICS: readonly LearningTopicMeta[] = [...KANA_TOPIC_CATALOG, ...VOCAB_N5_TOPIC_CATALOG, ...KANJI_N5_TOPIC_CATALOG, ...VOCAB_N4_TOPIC_CATALOG, ...KANJI_N4_TOPIC_CATALOG, ...VOCAB_N3_TOPIC_CATALOG, ...KANJI_N3_TOPIC_CATALOG]
const DURATIONS: TimeAttackDuration[] = [30, 60, 120]

function promptFor(card: ContentCard): string {
  if (card.contentType === 'kana' || card.contentType === 'kanji') return card.character
  return card.term
}

function instructionFor(card: ContentCard): string {
  return card.contentType === 'kana' ? 'Chọn romaji đúng (A · B · C · D)' : 'Chọn cách đọc đúng (A · B · C · D)'
}

function ArcadeSetup({ mode, onStart }: { mode: ArcadeMode; onStart: (topicId: string, duration: TimeAttackDuration) => void }) {
  const [topicId, setTopicId] = useState('kana-hiragana-main')
  const [duration, setDuration] = useState<TimeAttackDuration>(60)
  const title = mode === 'time-attack' ? 'Time Attack' : 'Survival'

  return <section className="page-stack">
    <PageIntro
      eyebrow="Arcade Practice"
      title={title}
      description={mode === 'time-attack'
        ? 'Chọn nhanh đáp án A · B · C · D trong thời gian đếm ngược. Chạm 1 lần là chấm điểm và chuyển câu ngay.'
        : 'Bạn có 3 mạng. Chọn 1 trong 4 đáp án A · B · C · D, trả lời sai sẽ mất 1 mạng.'}
    />
    <section className="surface-card arcade-setup">
      <label htmlFor="arcade-topic">Chủ đề</label>
      <select id="arcade-topic" value={topicId} onChange={(event) => setTopicId(event.target.value)}>
        <optgroup label="Kana">{KANA_TOPIC_CATALOG.map((topic) => <option key={topic.topicId} value={topic.topicId}>{topic.label} · {topic.count}</option>)}</optgroup>
        <optgroup label="Vocabulary N5">{VOCAB_N5_TOPIC_CATALOG.map((topic) => <option key={topic.topicId} value={topic.topicId}>{topic.label} · {topic.count}</option>)}</optgroup>
        <optgroup label="Kanji N5">{KANJI_N5_TOPIC_CATALOG.map((topic) => <option key={topic.topicId} value={topic.topicId}>{topic.label} · {topic.count}</option>)}</optgroup>
        <optgroup label="Vocabulary N4 · Open study set">{VOCAB_N4_TOPIC_CATALOG.map((topic) => <option key={topic.topicId} value={topic.topicId}>{topic.label} · {topic.count}</option>)}</optgroup>
        <optgroup label="Kanji N4 · Open study set">{KANJI_N4_TOPIC_CATALOG.map((topic) => <option key={topic.topicId} value={topic.topicId}>{topic.label} · {topic.count}</option>)}</optgroup>
        <optgroup label="Vocabulary N3 · Open study set">{VOCAB_N3_TOPIC_CATALOG.map((topic) => <option key={topic.topicId} value={topic.topicId}>{topic.label} · {topic.count}</option>)}</optgroup>
        <optgroup label="Kanji N3 · Open study set">{KANJI_N3_TOPIC_CATALOG.map((topic) => <option key={topic.topicId} value={topic.topicId}>{topic.label} · {topic.count}</option>)}</optgroup>
      </select>
      {mode === 'time-attack' && <fieldset className="arcade-duration-fieldset"><legend>Thời lượng</legend>{DURATIONS.map((value) => <label key={value} className={duration === value ? 'is-selected' : ''}><input type="radio" name="arcade-duration" checked={duration === value} onChange={() => setDuration(value)} />{value}s</label>)}</fieldset>}
      {mode === 'survival' && <div className="arcade-rule-note"><strong>3 lives</strong><span>Không giới hạn giờ · tối đa 20 câu · chọn 1 lần ra kết quả ngay</span></div>}
      <button className="button primary" type="button" onClick={() => onStart(topicId, duration)}>Bắt đầu {title}</button>
    </section>
  </section>
}

function ArcadeSession({ mode, topicId, duration, onExit }: { mode: ArcadeMode; topicId: string; duration: TimeAttackDuration; onExit: () => void }) {
  const { content, learning, identity, sync } = useAppServices()
  const [scope] = useState(() => ({ content, learning, userId: identity.userId }))
  const allCards = useMemo(() => scope.content.listCards(), [scope])
  const queue = useMemo(() => buildArcadeQueue(allCards, topicId, mode === 'time-attack' ? 50 : 20), [allCards, mode, topicId])
  const sessionIdRef = useRef('session-' + randomUuid())
  const [startedAt] = useState(() => Date.now())
  const questionStartedAt = useRef(0)
  const deadlineRef = useRef<number | null>(null)
  const finishedRef = useRef(false)
  const [status, setStatus] = useState<'preparing' | 'active' | 'complete' | 'error'>('preparing')
  const [index, setIndex] = useState(0)
  const [answer, setAnswer] = useState('')
  const [score, setScore] = useState(0)
  const [attempts, setAttempts] = useState(0)
  const [missedCards, setMissedCards] = useState<ContentCard[]>([])
  const [lives, setLives] = useState(3)
  const [remaining, setRemaining] = useState<number>(duration)
  const [saving, setSaving] = useState(false)
  const [lastFeedback, setLastFeedback] = useState<{ correct: boolean; text: string } | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [syncMessage, setSyncMessage] = useState<string | null>(null)

  const finishSession = useCallback(async () => {
    if (finishedRef.current || status === 'complete' || status === 'error') return
    finishedRef.current = true
    setSaving(true)
    try {
      await scope.learning.completeSession(sessionIdRef.current, Date.now())
      setStatus('complete')
      if (sync && identity.userId === scope.userId) {
        setSyncMessage('Đã lưu local · đang đồng bộ…')
        void sync.sync().then(() => setSyncMessage('Đã đồng bộ với cloud')).catch(() => setSyncMessage('Đã lưu local · cloud sync đang chờ thử lại'))
      } else if (identity.userId !== scope.userId) {
        setSyncMessage('Đã lưu local · arcade giữ nguyên hồ sơ ban đầu, cloud sync chờ đúng tài khoản')
      }
    } catch (reason) {
      finishedRef.current = false
      setError(reason instanceof Error ? reason.message : 'Không thể kết thúc arcade session.')
    } finally {
      setSaving(false)
    }
  }, [identity.userId, scope, status, sync])

  useEffect(() => {
    let active = true
    async function prepare() {
      if (queue.length === 0) { setError('Topic này không có card phù hợp.'); setStatus('error'); return }
      try {
        await scope.learning.createSession({ sessionId: sessionIdRef.current, userId: scope.userId, mode, startedAt, endedAt: null, eventIds: [], schemaVersion: 1 })
        if (!active) return
        if (mode === 'time-attack' && deadlineRef.current === null) deadlineRef.current = Date.now() + duration * 1000
        questionStartedAt.current = performance.now()
        setStatus('active')
      } catch (reason) {
        if (!active) return
        setError(reason instanceof Error ? reason.message : 'Không thể bắt đầu arcade session.')
        setStatus('error')
      }
    }
    void prepare()
    return () => { active = false }
  }, [duration, mode, queue.length, scope, startedAt])

  useEffect(() => {
    if (mode !== 'time-attack' || status !== 'active') return undefined
    const timer = window.setInterval(() => {
      const deadline = deadlineRef.current
      if (deadline === null) return
      const next = remainingSeconds(deadline, Date.now())
      setRemaining(next)
      if (next === 0) {
        window.clearInterval(timer)
        void finishSession()
      }
    }, 250)
    return () => window.clearInterval(timer)
  }, [finishSession, mode, status])

  const current = queue[index]
  const options = useMemo(
    () => (current ? buildMultipleChoiceOptions(current, allCards, index) : []),
    [allCards, current, index],
  )

  async function evaluateAnswer(rawAnswer: string) {
    if (!current || status !== 'active' || saving || rawAnswer.trim().length === 0) return
    if (mode === 'time-attack' && deadlineRef.current !== null && epochNowMs() >= deadlineRef.current) {
      await finishSession()
      return
    }

    const checked = checkTypedAnswer(current, rawAnswer)
    const responseTimeMs = Math.max(0, Math.round(monotonicNowMs() - questionStartedAt.current))
    setSaving(true)
    try {
      await scope.learning.recordEvent({
        eventId: 'event-' + randomUuid(),
        sessionId: sessionIdRef.current,
        cardId: current.cardId,
        mode,
        result: checked.correct ? 'correct' : 'incorrect',
        rating: checked.correct ? 'good' : 'again',
        responseTimeMs,
        occurredAt: epochNowMs(),
        inputKind: 'typing',
        schemaVersion: 1,
      })

      const nextLives = mode === 'survival' ? nextSurvivalLives(lives, checked.correct) : lives
      const nextIndex = index + 1
      setAttempts((value) => value + 1)
      if (checked.correct) {
        setScore((value) => value + 1)
      } else {
        setMissedCards((prev) => (prev.some((item) => item.cardId === current.cardId) ? prev : [...prev, current]))
      }
      if (mode === 'survival') setLives(nextLives)
      setLastFeedback({
        correct: checked.correct,
        text: checked.correct
          ? `Đúng (${rawAnswer}) · +1 điểm`
          : `Sai (chọn ${rawAnswer}) · đáp án: ${checked.acceptedAnswers.join(' / ')}`,
      })

      if ((mode === 'survival' && nextLives === 0) || nextIndex >= queue.length) {
        await finishSession()
      } else {
        setIndex(nextIndex)
        setAnswer('')
        questionStartedAt.current = monotonicNowMs()
      }
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Không thể lưu câu trả lời arcade.')
    } finally {
      setSaving(false)
    }
  }

  async function submit(event: FormEvent) {
    event.preventDefault()
    await evaluateAnswer(answer)
  }

  if (status === 'preparing') return <section className="page-stack"><p className="loading-copy" role="status">Đang chuẩn bị arcade…</p></section>
  if (status === 'error') return <section className="page-stack"><article className="surface-card error-card"><h1>Không thể mở arcade</h1><p>{error}</p><button className="button secondary" type="button" onClick={onExit}>Chọn lại</button></article></section>
  if (status === 'complete') {
    return (
      <section className="page-stack session-complete">
        <p className="eyebrow">ARCADE COMPLETE</p>
        <h1>{mode === 'time-attack' ? 'Time Attack kết thúc' : 'Survival kết thúc'}</h1>
        <div className="summary-grid">
          <div><strong>{attempts}</strong><span>Câu đã làm</span></div>
          <div><strong>{score}</strong><span>Đúng</span></div>
          <div><strong>{attempts === 0 ? '—' : Math.round(score / attempts * 100) + '%'}</strong><span>Accuracy</span></div>
        </div>
        {missedCards.length > 0 && (
          <article className="surface-card mistake-summary-card" aria-label="Các câu vừa trả lời sai">
            <div className="mistake-summary-head">
              <div>
                <p className="card-kicker">LƯU Ý CÂU SAI · MISTAKE RECOVERY</p>
                <h3>Đã lưu {missedCards.length} câu sai vào danh sách ưu tiên học lại</h3>
                <p>Hệ thống tự động hạ bậc SRS của các thẻ này để nhắc lại cho bạn:</p>
              </div>
              <Link className="button primary" to="/session/mistakes">Ôn lại các câu sai</Link>
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
          <button className="button primary" type="button" onClick={onExit}>Chơi lại</button>
          <Link className="button secondary" to="/progress">Xem Progress</Link>
        </div>
      </section>
    )
  }

  return <section className="page-stack arcade-session">
    <div className="session-header"><button className="text-button" type="button" onClick={onExit}>← Thoát</button><span>{index + 1} / {queue.length}</span></div>
    <div className="arcade-hud" aria-label="Trạng thái arcade">
      <div><span>Score</span><strong>{score}</strong></div>
      {mode === 'time-attack' ? <div><span>Time</span><strong>{remaining}s</strong></div> : <div><span>Lives</span><strong>{'♥'.repeat(lives)}{'♡'.repeat(3 - lives)}</strong></div>}
    </div>
    <article className="question-card arcade-question">
      <p className="card-kicker">{mode === 'time-attack' ? 'TIME ATTACK' : 'SURVIVAL'}</p>
      <div className={'question-glyph' + (current?.contentType === 'vocabulary' ? ' is-term' : '')} lang="ja">{current ? promptFor(current) : ''}</div>
      <p className="question-hint">{current ? instructionFor(current) : ''}</p>
    </article>

    <div className="mcq-grid" role="group" aria-label="Chọn đáp án A B C D">
      {options.map((option) => (
        <button
          key={option.key}
          type="button"
          className="mcq-option"
          disabled={saving}
          onClick={() => void evaluateAnswer(option.value)}
        >
          <span className="mcq-badge">{option.key}</span>
          <strong className="mcq-value" lang="ja">{option.value}</strong>
        </button>
      ))}
    </div>

    {lastFeedback && (
      <p className={`arcade-feedback ${lastFeedback.correct ? 'is-correct' : 'is-incorrect'}`} role="status">
        {lastFeedback.text}
      </p>
    )}

    <form className="answer-form sr-typing-fallback" onSubmit={submit}>
      <label htmlFor="arcade-answer">Câu trả lời</label>
      <input id="arcade-answer" value={answer} onChange={(event) => setAnswer(event.target.value)} disabled={saving} autoComplete="off" autoCapitalize="none" autoFocus />
      <button className="button primary" type="submit" disabled={saving || answer.trim().length === 0}>{saving ? 'Đang lưu…' : 'Trả lời'}</button>
    </form>
    {error && <p className="inline-error" role="alert">{error}</p>}
  </section>
}

export function ArcadePracticePage({ mode }: { mode: ArcadeMode }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const topicId = searchParams.get('topic')
  const validTopic = topicId ? TOPICS.some((topic) => topic.topicId === topicId) : false
  const durationValue = Number(searchParams.get('duration') ?? 60)
  const duration: TimeAttackDuration = durationValue === 30 || durationValue === 120 ? durationValue : 60

  if (!validTopic || !topicId) {
    return <ArcadeSetup mode={mode} onStart={(nextTopic, nextDuration) => setSearchParams(mode === 'time-attack' ? { topic: nextTopic, duration: String(nextDuration) } : { topic: nextTopic })} />
  }

  return <ArcadeSession key={mode + ':' + topicId + ':' + duration} mode={mode} topicId={topicId} duration={duration} onExit={() => setSearchParams({})} />
}
