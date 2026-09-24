import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useAppServices } from '../../app/AppServicesContext'
import { PageIntro } from '../../components/ui/PageIntro'
import { KANA_TOPIC_CATALOG, KANJI_N5_TOPIC_CATALOG, VOCAB_N5_TOPIC_CATALOG, type LearningTopicMeta } from '../../data/n5/topicCatalog'
import { buildMatchPairs, rotateMatchAnswers } from '../../domain/matching/matching'
import { epochNowMs, monotonicNowMs } from '../../services/time/clock'

const TOPICS: readonly LearningTopicMeta[] = [...KANA_TOPIC_CATALOG, ...VOCAB_N5_TOPIC_CATALOG, ...KANJI_N5_TOPIC_CATALOG]

function MatchSetup({ onStart }: { onStart: (topicId: string) => void }) {
  const [topicId, setTopicId] = useState('kana-hiragana-main')

  return <section className="page-stack">
    <PageIntro
      eyebrow="Match"
      title="Ghép prompt với đáp án"
      description="Chọn một prompt rồi ghép với đáp án tương ứng. Mỗi lần ghép đúng/sai đều đi vào cùng StudyEvent/SRS; điểm chỉ là feedback của phiên."
    />
    <section className="surface-card match-setup">
      <label htmlFor="match-topic">Chủ đề</label>
      <select id="match-topic" value={topicId} onChange={(event) => setTopicId(event.target.value)}>
        <optgroup label="Kana">{KANA_TOPIC_CATALOG.map((topic) => <option key={topic.topicId} value={topic.topicId}>{topic.label} · {topic.count}</option>)}</optgroup>
        <optgroup label="Vocabulary N5">{VOCAB_N5_TOPIC_CATALOG.map((topic) => <option key={topic.topicId} value={topic.topicId}>{topic.label} · {topic.count}</option>)}</optgroup>
        <optgroup label="Kanji N5">{KANJI_N5_TOPIC_CATALOG.map((topic) => <option key={topic.topicId} value={topic.topicId}>{topic.label} · {topic.count}</option>)}</optgroup>
      </select>
      <p className="muted-copy">ZaPan dùng tối đa 6 pair có answer label khác nhau để tránh tile mơ hồ.</p>
      <button className="button primary" type="button" onClick={() => onStart(topicId)}>Bắt đầu Match</button>
    </section>
  </section>
}

function MatchSession({ topicId, onExit }: { topicId: string; onExit: () => void }) {
  const { content, learning, identity, sync } = useAppServices()
  const [scope] = useState(() => ({ content, learning, userId: identity.userId }))
  const pairs = useMemo(() => buildMatchPairs(scope.content.listCards(), topicId, 6), [scope, topicId])
  const answers = useMemo(() => rotateMatchAnswers(pairs, 2), [pairs])
  const sessionIdRef = useRef('session-' + crypto.randomUUID())
  const [startedAt] = useState(() => Date.now())
  const selectedAtRef = useRef(0)
  const [status, setStatus] = useState<'preparing' | 'active' | 'complete' | 'error'>('preparing')
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null)
  const [matchedCardIds, setMatchedCardIds] = useState<string[]>([])
  const [score, setScore] = useState(0)
  const [attempts, setAttempts] = useState(0)
  const [feedback, setFeedback] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [syncMessage, setSyncMessage] = useState<string | null>(null)

  useEffect(() => {
    let active = true
    async function prepare() {
      if (pairs.length < 2) { setError('Topic này chưa có đủ pair unique để chơi Match.'); setStatus('error'); return }
      try {
        await scope.learning.createSession({
          sessionId: sessionIdRef.current,
          userId: scope.userId,
          mode: 'match',
          startedAt,
          endedAt: null,
          eventIds: [],
          schemaVersion: 1,
        })
        if (active) setStatus('active')
      } catch (reason) {
        if (!active) return
        setError(reason instanceof Error ? reason.message : 'Không thể bắt đầu Match.')
        setStatus('error')
      }
    }
    void prepare()
    return () => { active = false }
  }, [pairs.length, scope, startedAt])

  async function finishSession() {
    await scope.learning.completeSession(sessionIdRef.current, epochNowMs())
    setStatus('complete')
    if (sync && identity.userId === scope.userId) {
      setSyncMessage('Đã lưu local · đang đồng bộ…')
      void sync.sync().then(() => setSyncMessage('Đã đồng bộ với cloud')).catch(() => setSyncMessage('Đã lưu local · cloud sync đang chờ thử lại'))
    } else if (identity.userId !== scope.userId) {
      setSyncMessage('Đã lưu local · Match giữ nguyên hồ sơ ban đầu, cloud sync chờ đúng tài khoản')
    }
  }

  function selectPrompt(cardId: string) {
    if (status !== 'active' || saving || matchedCardIds.includes(cardId)) return
    setSelectedCardId(cardId)
    selectedAtRef.current = monotonicNowMs()
    setFeedback(null)
  }

  async function selectAnswer(answerCardId: string) {
    if (!selectedCardId || status !== 'active' || saving) return
    const selectedPair = pairs.find((pair) => pair.card.cardId === selectedCardId)
    if (!selectedPair) return

    const correct = answerCardId === selectedCardId
    const responseTimeMs = Math.max(0, Math.round(monotonicNowMs() - selectedAtRef.current))
    setSaving(true)
    try {
      await scope.learning.recordEvent({
        eventId: 'event-' + crypto.randomUUID(),
        sessionId: sessionIdRef.current,
        cardId: selectedPair.card.cardId,
        mode: 'match',
        result: correct ? 'correct' : 'incorrect',
        rating: correct ? 'good' : 'again',
        responseTimeMs,
        occurredAt: epochNowMs(),
        inputKind: 'matching',
        schemaVersion: 1,
      })
      setAttempts((value) => value + 1)
      setFeedback(correct ? 'Ghép đúng' : 'Chưa đúng · thử lại prompt này')

      if (correct) {
        const nextMatched = [...matchedCardIds, selectedCardId]
        setMatchedCardIds(nextMatched)
        setScore((value) => value + 1)
        setSelectedCardId(null)
        if (nextMatched.length >= pairs.length) await finishSession()
      } else {
        setSelectedCardId(null)
      }
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Không thể lưu kết quả Match.')
    } finally {
      setSaving(false)
    }
  }

  if (status === 'preparing') return <section className="page-stack"><p className="loading-copy" role="status">Đang chuẩn bị Match…</p></section>
  if (status === 'error') return <section className="page-stack"><article className="surface-card error-card"><h1>Không thể mở Match</h1><p>{error}</p><button className="button secondary" type="button" onClick={onExit}>Chọn lại</button></article></section>
  if (status === 'complete') return <section className="page-stack session-complete"><p className="eyebrow">MATCH COMPLETE</p><h1>Hoàn thành Match</h1><div className="summary-grid"><div><strong>{pairs.length}</strong><span>Pairs</span></div><div><strong>{score}</strong><span>Ghép đúng</span></div><div><strong>{attempts}</strong><span>Lượt chọn đáp án</span></div></div>{syncMessage && <p className="sync-message" role="status">{syncMessage}</p>}<div className="session-actions"><button className="button primary" type="button" onClick={onExit}>Chơi lại</button><Link className="button secondary" to="/progress">Xem Progress</Link></div></section>

  return <section className="page-stack match-session">
    <div className="session-header"><button className="text-button" type="button" onClick={onExit}>← Thoát</button><span>{matchedCardIds.length} / {pairs.length} pair</span></div>
    <div className="match-hud"><span>Score <strong>{score}</strong></span><span>Attempts <strong>{attempts}</strong></span></div>
    <div className="match-board">
      <section aria-label="Prompt cards">
        <p className="card-kicker">PROMPTS</p>
        <div className="match-column">
          {pairs.map((pair) => {
            const cardId = pair.card.cardId
            const matched = matchedCardIds.includes(cardId)
            const selected = selectedCardId === cardId
            return <button
              key={cardId}
              className={'match-tile prompt' + (selected ? ' is-selected' : '') + (matched ? ' is-matched' : '')}
              type="button"
              disabled={matched || saving}
              aria-pressed={selected}
              aria-label={'Prompt ' + pair.prompt}
              onClick={() => selectPrompt(cardId)}
            >{pair.prompt}</button>
          })}
        </div>
      </section>
      <section aria-label="Answer cards">
        <p className="card-kicker">ANSWERS</p>
        <div className="match-column">
          {answers.map((pair) => {
            const cardId = pair.card.cardId
            const matched = matchedCardIds.includes(cardId)
            return <button
              key={cardId}
              className={'match-tile answer' + (matched ? ' is-matched' : '')}
              type="button"
              disabled={matched || saving || selectedCardId === null}
              aria-label={'Đáp án ' + pair.answer}
              onClick={() => void selectAnswer(cardId)}
            >{pair.answer}</button>
          })}
        </div>
      </section>
    </div>
    {feedback && <p className="match-feedback" role="status">{feedback}</p>}
    {error && <p className="inline-error" role="alert">{error}</p>}
  </section>
}

export function MatchPracticePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const topicId = searchParams.get('topic')
  const validTopic = topicId ? TOPICS.some((topic) => topic.topicId === topicId) : false

  if (!validTopic || !topicId) return <MatchSetup onStart={(nextTopic) => setSearchParams({ topic: nextTopic })} />
  return <MatchSession key={topicId} topicId={topicId} onExit={() => setSearchParams({})} />
}
