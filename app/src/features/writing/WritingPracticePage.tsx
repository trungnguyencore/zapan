import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useAppServices } from '../../app/AppServicesContext'
import { PageIntro } from '../../components/ui/PageIntro'
import type { ContentCard } from '../../domain/content/types'
import {
  KANA_TOPIC_CATALOG,
  KANJI_N5_TOPIC_CATALOG,
  type LearningTopicMeta,
} from '../../data/n5/topicCatalog'
import { buildWritingQueue, type WritingStyle, writingCharacter } from '../../domain/writing/writing'
import { StrokeOrderPanel } from './StrokeOrderPanel'
import { WritingCanvas } from './WritingCanvas'

const WRITING_TOPICS: readonly LearningTopicMeta[] = [...KANA_TOPIC_CATALOG, ...KANJI_N5_TOPIC_CATALOG]
const WRITING_STYLES: Array<{ value: WritingStyle; title: string; description: string }> = [
  { value: 'trace', title: 'Trace', description: 'Đồ theo guide mờ ngay trong ô viết.' },
  { value: 'copy', title: 'Copy', description: 'Nhìn mẫu bên cạnh rồi tự viết vào ô trống.' },
  { value: 'recall', title: 'Recall', description: 'Viết từ trí nhớ trước, sau đó reveal để tự chấm.' },
]

function isWritingStyle(value: string | null): value is WritingStyle {
  return value === 'trace' || value === 'copy' || value === 'recall'
}

function WritingSetup({ onStart }: { onStart: (topicId: string, style: WritingStyle) => void }) {
  const [topicId, setTopicId] = useState('kana-hiragana-main')
  const [style, setStyle] = useState<WritingStyle>('trace')

  return (
    <section className="page-stack">
      <PageIntro
        eyebrow="Writing"
        title="Trace · Copy · Recall"
        description="Luyện viết Kana/Kanji bằng một progress model duy nhất. Bạn tự chấm sau khi viết; ZaPan không dùng nhận dạng nét AI để giả vờ biết chữ viết đúng hay sai."
      />
      <section className="surface-card writing-setup">
        <div>
          <p className="card-kicker">CONTENT</p>
          <label htmlFor="writing-topic">Chủ đề</label>
          <select id="writing-topic" value={topicId} onChange={(event) => setTopicId(event.target.value)}>
            <optgroup label="Kana">
              {KANA_TOPIC_CATALOG.map((topic) => <option key={topic.topicId} value={topic.topicId}>{topic.label} · {topic.count} cards</option>)}
            </optgroup>
            <optgroup label="Kanji N5">
              {KANJI_N5_TOPIC_CATALOG.map((topic) => <option key={topic.topicId} value={topic.topicId}>{topic.label} · {topic.count} cards</option>)}
            </optgroup>
          </select>
        </div>
        <fieldset className="writing-style-fieldset">
          <legend>Kiểu luyện</legend>
          {WRITING_STYLES.map((item) => (
            <label key={item.value} className={'writing-style-option' + (style === item.value ? ' is-selected' : '')}>
              <input type="radio" name="writing-style" value={item.value} checked={style === item.value} onChange={() => setStyle(item.value)} />
              <span><strong>{item.title}</strong><small>{item.description}</small></span>
            </label>
          ))}
        </fieldset>
        <button className="button primary" type="button" onClick={() => onStart(topicId, style)}>Bắt đầu Writing · 5 cards</button>
      </section>
    </section>
  )
}

function referenceSummary(card: ContentCard) {
  if (card.contentType === 'kana') return card.romanizations.join(' / ')
  if (card.contentType === 'kanji') return [card.meanings.vi, card.hanViet ? 'Hán Việt: ' + card.hanViet : ''].filter(Boolean).join(' · ')
  return ''
}

function WritingSession({ topicId, style, onExit }: { topicId: string; style: WritingStyle; onExit: () => void }) {
  const { content, learning, identity, sync } = useAppServices()
  const [scope] = useState(() => ({ content, learning, userId: identity.userId }))
  const queue = useMemo(() => buildWritingQueue(scope.content.listCards(), topicId, 5), [scope, topicId])
  const sessionIdRef = useRef('session-' + crypto.randomUUID())
  const [startedAt] = useState(() => Date.now())
  const [status, setStatus] = useState<'preparing' | 'active' | 'complete' | 'error'>('preparing')
  const [index, setIndex] = useState(0)
  const [hasInk, setHasInk] = useState(false)
  const [revealed, setRevealed] = useState(style !== 'recall')
  const [clearToken, setClearToken] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [syncMessage, setSyncMessage] = useState<string | null>(null)

  useEffect(() => {
    let active = true
    async function prepare() {
      if (queue.length === 0) { setError('Topic này chưa có Kana/Kanji phù hợp cho Writing.'); setStatus('error'); return }
      try {
        await scope.learning.createSession({
          sessionId: sessionIdRef.current,
          userId: scope.userId,
          mode: 'writing',
          startedAt,
          endedAt: null,
          eventIds: [],
          schemaVersion: 1,
        })
        if (active) setStatus('active')
      } catch (reason) {
        if (!active) return
        setError(reason instanceof Error ? reason.message : 'Không thể bắt đầu Writing.')
        setStatus('error')
      }
    }
    void prepare()
    return () => { active = false }
  }, [queue.length, scope, startedAt])

  const current = queue[index]
  const character = current ? writingCharacter(current) : ''
  const referenceVisible = style !== 'recall' || revealed
  const canGrade = hasInk && referenceVisible && status === 'active' && !saving

  function resetCanvasForNext() {
    setHasInk(false)
    setRevealed(style !== 'recall')
    setClearToken((value) => value + 1)
    setError(null)
  }

  async function grade(correct: boolean) {
    if (!current || !canGrade) return
    setSaving(true)
    try {
      await scope.learning.recordEvent({
        eventId: 'event-' + crypto.randomUUID(),
        sessionId: sessionIdRef.current,
        cardId: current.cardId,
        mode: 'writing',
        result: correct ? 'correct' : 'incorrect',
        rating: correct ? 'good' : 'again',
        occurredAt: Date.now(),
        inputKind: 'drawing',
        schemaVersion: 1,
      })
      if (correct) setCorrectCount((value) => value + 1)

      if (index >= queue.length - 1) {
        await scope.learning.completeSession(sessionIdRef.current, Date.now())
        setStatus('complete')
        if (sync && identity.userId === scope.userId) {
          setSyncMessage('Đã lưu local · đang đồng bộ…')
          void sync.sync().then(() => setSyncMessage('Đã đồng bộ với cloud')).catch(() => setSyncMessage('Đã lưu local · cloud sync đang chờ thử lại'))
        } else if (identity.userId !== scope.userId) {
          setSyncMessage('Đã lưu local · Writing giữ nguyên hồ sơ ban đầu, cloud sync chờ đúng tài khoản')
        }
      } else {
        setIndex((value) => value + 1)
        resetCanvasForNext()
      }
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Không thể lưu kết quả Writing.')
    } finally {
      setSaving(false)
    }
  }

  if (status === 'preparing') return <section className="page-stack"><p className="loading-copy" role="status">Đang chuẩn bị Writing…</p></section>
  if (status === 'error') return <section className="page-stack"><article className="surface-card error-card"><h1>Không thể mở Writing</h1><p>{error}</p><button className="button secondary" type="button" onClick={onExit}>Chọn lại</button></article></section>
  if (status === 'complete') return (
    <section className="page-stack session-complete">
      <p className="eyebrow">WRITING COMPLETE</p>
      <h1>Hoàn thành Writing</h1>
      <div className="summary-grid"><div><strong>{queue.length}</strong><span>Cards</span></div><div><strong>{correctCount}</strong><span>Tự chấm đạt</span></div><div><strong>{queue.length - correctCount}</strong><span>Cần luyện lại</span></div></div>
      {syncMessage && <p className="sync-message" role="status">{syncMessage}</p>}
      <div className="session-actions"><button className="button primary" type="button" onClick={onExit}>Luyện bộ khác</button><Link className="button secondary" to="/progress">Xem Progress</Link></div>
    </section>
  )

  return (
    <section className="page-stack writing-session">
      <div className="session-header"><button className="text-button" type="button" onClick={onExit}>← Chọn lại</button><span>{index + 1} / {queue.length} · {style.toUpperCase()}</span></div>
      <div className="session-progress" aria-label={'Tiến độ ' + (index + 1) + ' trên ' + queue.length}><span style={{ width: ((index + 1) / queue.length * 100) + '%' }} /></div>

      <div className="writing-workspace">
        <div className="writing-main">
          <article className="writing-reference surface-card">
            <p className="card-kicker">{style === 'trace' ? 'TRACE' : style === 'copy' ? 'COPY' : 'RECALL'}</p>
            {referenceVisible ? <><strong className="writing-reference-char" lang="ja">{character}</strong><p>{referenceSummary(current)}</p></> : <><strong>Viết từ trí nhớ</strong><p>Mẫu chữ và stroke order đang được ẩn. Viết xong rồi reveal để tự đối chiếu.</p></>}
          </article>

          <WritingCanvas character={character} showGuide={style === 'trace'} clearToken={clearToken} onInk={() => setHasInk(true)} />

          <div className="writing-controls">
            <button className="button secondary" type="button" onClick={() => { setClearToken((value) => value + 1); setHasInk(false) }}>Xóa nét</button>
            {style === 'recall' && !revealed && <button className="button primary" type="button" disabled={!hasInk} onClick={() => setRevealed(true)}>Hiện đáp án</button>}
          </div>

          {referenceVisible && <div className="writing-grade-panel" aria-label="Tự chấm Writing">
            <div><strong>Tự chấm sau khi đối chiếu</strong><p>ZaPan lưu kết quả bạn chọn; không tự suy diễn chất lượng nét viết.</p></div>
            <button className="button secondary" type="button" disabled={!canGrade} onClick={() => void grade(false)}>Cần luyện lại</button>
            <button className="button primary" type="button" disabled={!canGrade} onClick={() => void grade(true)}>Viết đạt</button>
          </div>}
          {error && <p className="inline-error" role="alert">{error}</p>}
        </div>

        <StrokeOrderPanel character={character} visible={referenceVisible} />
      </div>
    </section>
  )
}

export function WritingPracticePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const topicId = searchParams.get('topic')
  const styleParam = searchParams.get('style')
  const validTopic = topicId ? WRITING_TOPICS.some((topic) => topic.topicId === topicId) : false
  const style = isWritingStyle(styleParam) ? styleParam : null

  if (!validTopic || !topicId || !style) {
    return <WritingSetup onStart={(nextTopic, nextStyle) => setSearchParams({ topic: nextTopic, style: nextStyle })} />
  }

  return <WritingSession key={topicId + ':' + style} topicId={topicId} style={style} onExit={() => setSearchParams({})} />
}
