import { useMemo, useState } from 'react'
import { PageIntro } from '../../components/ui/PageIntro'
import { filterLibraryCards, type LibraryContentFilter } from '../../domain/content/libraryFilter'
import type { ContentCard } from '../../domain/content/types'
import {
  KANA_TOPIC_CATALOG,
  KANJI_N5_TOPIC_CATALOG,
  VOCAB_N5_TOPIC_CATALOG,
} from '../../data/n5/topicCatalog'
import { useLearningData } from '../shared/useLearningData'

const MAX_VISIBLE_RESULTS = 60
const FILTERS: Array<{ value: LibraryContentFilter; label: string }> = [
  { value: 'all', label: 'Tất cả' },
  { value: 'kana', label: 'Kana' },
  { value: 'vocabulary', label: 'Vocabulary' },
  { value: 'kanji', label: 'Kanji' },
]

const TOPIC_LABELS = new Map(
  [...KANA_TOPIC_CATALOG, ...VOCAB_N5_TOPIC_CATALOG, ...KANJI_N5_TOPIC_CATALOG]
    .map((topic) => [topic.topicId, topic.label] as const),
)

function accentFor(card: ContentCard) {
  if (card.contentType === 'kana') return 'kana'
  if (card.contentType === 'vocabulary') return 'vocab'
  return 'kanji'
}

function LibraryCard({ card }: { card: ContentCard }) {
  if (card.contentType === 'kana') {
    return (
      <article className={'library-card accent-' + accentFor(card)}>
        <div className="library-card-top">
          <span className="library-glyph" lang="ja">{card.character}</span>
          <span className="library-type">Kana</span>
        </div>
        <strong>{card.romanizations.join(' / ')}</strong>
        <p>{card.script === 'hiragana' ? 'Hiragana' : 'Katakana'} · {TOPIC_LABELS.get(card.topicId) ?? card.topicId}</p>
      </article>
    )
  }

  if (card.contentType === 'vocabulary') {
    return (
      <article className={'library-card accent-' + accentFor(card)}>
        <div className="library-card-top">
          <span className="library-term" lang="ja">{card.term}</span>
          <span className="library-type">Vocab</span>
        </div>
        <strong>{card.readings.join(' / ')}</strong>
        <p>{card.meanings.vi}</p>
        <small>{TOPIC_LABELS.get(card.topicId) ?? card.topicId}</small>
      </article>
    )
  }

  return (
    <article className={'library-card accent-' + accentFor(card)}>
      <div className="library-card-top">
        <span className="library-glyph" lang="ja">{card.character}</span>
        <span className="library-type">Kanji</span>
      </div>
      <strong>{card.readings.join(' / ')}</strong>
      <p>{card.meanings.vi}{card.hanViet ? ' · Hán Việt: ' + card.hanViet : ''}</p>
      <small>{card.strokeCount} nét · {TOPIC_LABELS.get(card.topicId) ?? card.topicId}</small>
    </article>
  )
}

export function LibraryPage() {
  const { cards, loading, error } = useLearningData()
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<LibraryContentFilter>('all')

  const filtered = useMemo(() => filterLibraryCards(cards, query, filter), [cards, filter, query])
  const visible = filtered.slice(0, MAX_VISIBLE_RESULTS)

  return (
    <section className="page-stack">
      <PageIntro
        eyebrow="Library"
        title="Tra cứu nội dung đã xác minh"
        description="Tìm trong toàn bộ Kana, N5 Vocabulary và N5 Kanji hiện đã được audit. Library chỉ hiển thị dữ liệu có thật trong content bundle, không tự bổ sung nghĩa hoặc reading."
      />

      {error && <p className="inline-error" role="alert">{error}</p>}

      <section className="library-controls surface-card" aria-label="Bộ lọc thư viện">
        <label htmlFor="library-search">Tìm ký tự, từ, reading hoặc nghĩa</label>
        <input
          id="library-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Ví dụ: いつつ, Nhất, shi…"
          autoComplete="off"
        />
        <div className="library-filter-row" role="group" aria-label="Loại nội dung">
          {FILTERS.map((item) => (
            <button
              key={item.value}
              className={'filter-chip' + (filter === item.value ? ' is-active' : '')}
              type="button"
              aria-pressed={filter === item.value}
              onClick={() => setFilter(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </section>

      <div className="library-result-meta" aria-live="polite">
        <strong>{loading ? 'Đang đọc dữ liệu…' : filtered.length + ' kết quả'}</strong>
        {!loading && filtered.length > MAX_VISIBLE_RESULTS && <span>Hiển thị {MAX_VISIBLE_RESULTS} kết quả đầu. Hãy tìm cụ thể hơn để thu hẹp.</span>}
      </div>

      {!loading && filtered.length === 0 ? (
        <article className="surface-card empty-state">
          <span className="empty-mark" aria-hidden="true">探</span>
          <div><h3>Không có kết quả phù hợp</h3><p>Thử đổi từ khóa hoặc chọn lại loại nội dung.</p></div>
        </article>
      ) : (
        <div className="library-grid">
          {visible.map((card) => <LibraryCard key={card.cardId} card={card} />)}
        </div>
      )}
    </section>
  )
}
