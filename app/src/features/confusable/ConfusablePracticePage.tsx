import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useAppServices } from '../../app/AppServicesContext'
import { PageIntro } from '../../components/ui/PageIntro'
import { CONFUSABLE_KANA_GROUPS, CONFUSABLE_KANA_SOURCE_VERSION } from '../../data/practice/confusableKana'
import { buildConfusableQuestions, type ConfusableScriptFilter } from '../../domain/confusable/confusable'
import { epochNowMs, monotonicNowMs } from '../../services/time/clock'

function isScript(value: string | null): value is ConfusableScriptFilter {
  return value === 'all' || value === 'hiragana' || value === 'katakana'
}

function ConfusableSetup({ onStart }: { onStart: (script: ConfusableScriptFilter) => void }) {
  const [script, setScript] = useState<ConfusableScriptFilter>('all')

  return <section className="page-stack">
    <PageIntro
      eyebrow="Confusables"
      title="Phân biệt Kana dễ nhầm"
      description="Bộ nhóm này được migrate đúng từ legacy ZaPan gameData và được kiểm tra lại với canonical Kana v2. Mỗi lựa chọn vẫn cập nhật StudyEvent/SRS chung."
    />
    <section className="surface-card confusable-setup">
      <fieldset>
        <legend>Phạm vi</legend>
        {(['all', 'hiragana', 'katakana'] as const).map((value) => (
          <label key={value} className={script === value ? 'is-selected' : ''}>
            <input type="radio" name="confusable-script" checked={script === value} onChange={() => setScript(value)} />
            {value === 'all' ? 'Tất cả' : value === 'hiragana' ? 'Hiragana' : 'Katakana'}
          </label>
        ))}
      </fieldset>
      <p className="muted-copy">Source version: <code>{CONFUSABLE_KANA_SOURCE_VERSION}</code></p>
      <button className="button primary" type="button" onClick={() => onStart(script)}>Bắt đầu Confusables · 10 câu</button>
    </section>
  </section>
}

function ConfusableSession({ script, onExit }: { script: ConfusableScriptFilter; onExit: () => void }) {
  const { content, learning, identity, sync } = useAppServices()
  const [scope] = useState(() => ({ content, learning, userId: identity.userId }))
  const questions = useMemo(
    () => buildConfusableQuestions(scope.content.listCards(), CONFUSABLE_KANA_GROUPS, script, 10),
    [scope, script],
  )
  const sessionIdRef = useRef('session-' + crypto.randomUUID())
  const [startedAt] = useState(() => Date.now())
  const questionStartedAt = useRef(0)
  const [status, setStatus] = useState<'preparing' | 'active' | 'complete' | 'error'>('preparing')
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [feedback, setFeedback] = useState<{ correct: boolean; selected: string } | null>(null)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [syncMessage, setSyncMessage] = useState<string | null>(null)

  useEffect(() => {
    let active = true
    async function prepare() {
      if (questions.length === 0) { setError('Không có Confusable question phù hợp.'); setStatus('error'); return }
      try {
        await scope.learning.createSession({
          sessionId: sessionIdRef.current,
          userId: scope.userId,
          mode: 'confusable',
          startedAt,
          endedAt: null,
          eventIds: [],
          schemaVersion: 1,
        })
        if (!active) return
        questionStartedAt.current = monotonicNowMs()
        setStatus('active')
      } catch (reason) {
        if (!active) return
        setError(reason instanceof Error ? reason.message : 'Không thể bắt đầu Confusables.')
        setStatus('error')
      }
    }
    void prepare()
    return () => { active = false }
  }, [questions.length, scope, startedAt])

  const current = questions[index]

  async function choose(character: string) {
    if (!current || feedback || saving || status !== 'active') return
    const correct = character === current.card.character
    const responseTimeMs = Math.max(0, Math.round(monotonicNowMs() - questionStartedAt.current))
    setSaving(true)
    try {
      await scope.learning.recordEvent({
        eventId: 'event-' + crypto.randomUUID(),
        sessionId: sessionIdRef.current,
        cardId: current.card.cardId,
        mode: 'confusable',
        result: correct ? 'correct' : 'incorrect',
        rating: correct ? 'good' : 'again',
        responseTimeMs,
        occurredAt: epochNowMs(),
        inputKind: 'multiple-choice',
        schemaVersion: 1,
      })
      if (correct) setScore((value) => value + 1)
      setFeedback({ correct, selected: character })
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Không thể lưu kết quả Confusables.')
    } finally {
      setSaving(false)
    }
  }

  async function next() {
    if (!feedback || saving) return
    if (index >= questions.length - 1) {
      setSaving(true)
      try {
        await scope.learning.completeSession(sessionIdRef.current, epochNowMs())
        setStatus('complete')
        if (sync && identity.userId === scope.userId) {
          setSyncMessage('Đã lưu local · đang đồng bộ…')
          void sync.sync().then(() => setSyncMessage('Đã đồng bộ với cloud')).catch(() => setSyncMessage('Đã lưu local · cloud sync đang chờ thử lại'))
        } else if (identity.userId !== scope.userId) {
          setSyncMessage('Đã lưu local · Confusables giữ nguyên hồ sơ ban đầu, cloud sync chờ đúng tài khoản')
        }
      } catch (reason) {
        setError(reason instanceof Error ? reason.message : 'Không thể kết thúc Confusables.')
      } finally {
        setSaving(false)
      }
      return
    }

    setIndex((value) => value + 1)
    setFeedback(null)
    setError(null)
    questionStartedAt.current = monotonicNowMs()
  }

  if (status === 'preparing') return <section className="page-stack"><p className="loading-copy" role="status">Đang chuẩn bị Confusables…</p></section>
  if (status === 'error') return <section className="page-stack"><article className="surface-card error-card"><h1>Không thể mở Confusables</h1><p>{error}</p><button className="button secondary" type="button" onClick={onExit}>Chọn lại</button></article></section>
  if (status === 'complete') return <section className="page-stack session-complete"><p className="eyebrow">CONFUSABLE COMPLETE</p><h1>Hoàn thành Confusables</h1><div className="summary-grid"><div><strong>{questions.length}</strong><span>Câu</span></div><div><strong>{score}</strong><span>Đúng</span></div><div><strong>{Math.round(score / Math.max(questions.length, 1) * 100)}%</strong><span>Accuracy</span></div></div>{syncMessage && <p className="sync-message" role="status">{syncMessage}</p>}<div className="session-actions"><button className="button primary" type="button" onClick={onExit}>Luyện lại</button><Link className="button secondary" to="/progress">Xem Progress</Link></div></section>

  return <section className="page-stack confusable-session">
    <div className="session-header"><button className="text-button" type="button" onClick={onExit}>← Thoát</button><span>{index + 1} / {questions.length}</span></div>
    <div className="session-progress" aria-label={'Tiến độ ' + (index + 1) + ' trên ' + questions.length}><span style={{ width: ((index + 1) / questions.length * 100) + '%' }} /></div>
    <article className="surface-card confusable-question">
      <p className="card-kicker">{current?.script === 'hiragana' ? 'HIRAGANA' : 'KATAKANA'}</p>
      <p>Chọn chữ có romaji:</p>
      <strong className="confusable-romaji">{current?.romanization}</strong>
      <div className="confusable-options" role="group" aria-label="Các chữ Kana">
        {current?.options.map((character) => {
          const isTarget = character === current.card.character
          const isSelected = feedback?.selected === character
          const resolvedClass = feedback ? isTarget ? ' is-correct' : isSelected ? ' is-wrong' : ' is-muted' : ''
          return <button
            key={character}
            className={'confusable-option' + resolvedClass}
            type="button"
            disabled={Boolean(feedback) || saving}
            aria-label={'Chọn ' + character}
            onClick={() => void choose(character)}
          >{character}</button>
        })}
      </div>
      {feedback && <div className={'feedback-card ' + (feedback.correct ? 'correct' : 'incorrect')} role="status">
        <strong>{feedback.correct ? 'Đúng' : 'Chưa đúng'}</strong>
        <span>Đáp án: {current?.card.character} ({current?.romanization})</span>
        <button className="button primary" type="button" onClick={() => void next()} disabled={saving}>{index === questions.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo'}</button>
      </div>}
    </article>
    {error && <p className="inline-error" role="alert">{error}</p>}
  </section>
}

export function ConfusablePracticePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const scriptParam = searchParams.get('script')
  const script = isScript(scriptParam) ? scriptParam : null

  if (!script) return <ConfusableSetup onStart={(nextScript) => setSearchParams({ script: nextScript })} />
  return <ConfusableSession key={script} script={script} onExit={() => setSearchParams({})} />
}
