import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LearningDataBoundary } from '../../components/ui/LearningDataBoundary'
import { PageIntro } from '../../components/ui/PageIntro'
import {
  KANJI_N3_TOPIC_CATALOG,
  KANJI_N4_TOPIC_CATALOG,
  OPENJLPT_SOURCE_COMMIT,
  VOCAB_N3_TOPIC_CATALOG,
  VOCAB_N4_TOPIC_CATALOG,
} from '../../data/openjlpt/generated/catalog'
import { KANA_TOPIC_CATALOG, KANJI_N5_TOPIC_CATALOG, type LearningTopicMeta, VOCAB_N5_TOPIC_CATALOG } from '../../data/n5/topicCatalog'
import type { ContentCard } from '../../domain/content/types'
import type { ProgressRecord } from '../../domain/learning/types'
import { deriveLearningOverview } from '../../domain/progress/overview'
import { useLearningData } from '../shared/useLearningData'

type CurriculumLevelFilter = 'all' | 'kana' | 'n5' | 'n4' | 'n3'

const LEVEL_FILTERS: ReadonlyArray<{ value: CurriculumLevelFilter; label: string; glyph: string }> = [
  { value: 'all', label: 'Tất cả cấp độ', glyph: '全' },
  { value: 'kana', label: 'Hệ chữ Kana', glyph: 'あ' },
  { value: 'n5', label: 'Sơ cấp N5', glyph: '五' },
  { value: 'n4', label: 'Sơ – Trung cấp N4', glyph: '四' },
  { value: 'n3', label: 'Trung cấp N3', glyph: '三' },
]

const PRACTICE_MODES: ReadonlyArray<{
  to: string
  label: string
  glyph: string
  subtitle: string
  primary?: boolean
}> = [
  { to: '/practice/custom', label: 'Tạo Custom Practice', glyph: '選', subtitle: 'Tự ghép nhiều chủ đề để ôn tập', primary: true },
  { to: '/practice/writing', label: 'Luyện Writing', glyph: '書', subtitle: 'Tập viết bút thuận Trace · Copy · Recall' },
  { to: '/practice/time-attack', label: 'Time Attack', glyph: '速', subtitle: 'Phản xạ gõ đáp án bấm giờ' },
  { to: '/practice/survival', label: 'Survival', glyph: '命', subtitle: 'Thử thách chuẩn xác với 3 mạng' },
  { to: '/practice/match', label: 'Match', glyph: '結', subtitle: 'Ghép nhanh mặt chữ với cách đọc' },
  { to: '/practice/confusables', label: 'Confusables', glyph: '辨', subtitle: 'Phân biệt các cặp chữ dễ nhầm' },
]

function sampleGlyphs(cards: ContentCard[]): string {
  const samples = cards.slice(0, 3).map((card) => (card.contentType === 'vocabulary' ? card.term : card.character))
  return samples.join(' · ')
}

interface TopicCardProps {
  topic: LearningTopicMeta
  cards: ContentCard[]
  progress: ProgressRecord[]
  now: number
  loading: boolean
  accent: 'kana' | 'vocab' | 'kanji'
}

function TopicCard({ topic, cards, progress, now, loading, accent }: TopicCardProps) {
  const scoped = cards.filter((card) => card.topicId === topic.topicId)
  const stats = deriveLearningOverview(scoped, progress, now)
  const studiedPercent = topic.count > 0 ? Math.min(100, Math.round((stats.studiedCards / topic.count) * 100)) : 0
  const preview = sampleGlyphs(scoped)

  return (
    <article className={`surface-card topic-card accent-${accent}`}>
      <div className="topic-card-top">
        <h3>{topic.label}</h3>
        <span className="topic-count-pill">{topic.count}</span>
      </div>
      {preview && (
        <div className="topic-jp-preview" lang="ja" aria-hidden="true">
          {preview}
        </div>
      )}
      <div className="topic-progress-bar" aria-hidden="true">
        <span style={{ width: `${studiedPercent}%` }} />
      </div>
      <div className="topic-stats-row">
        <p>{loading ? 'Đang đọc tiến độ…' : `${stats.studiedCards}/${topic.count} đã học · ${stats.dueCards} đến hạn`}</p>
        {!loading && stats.masteredCards > 0 && <small className="topic-mastered-tag">{stats.masteredCards} thuộc</small>}
      </div>
      <Link className="button secondary" aria-label={`Học ${topic.label}`} to={`/session/learn/${topic.topicId}`}>Học chủ đề</Link>
    </article>
  )
}

function TopicSection({ sectionId, eyebrow, title, description, topics, cards, progress, now, loading, accent }: {
  sectionId: string
  eyebrow: string
  title: string
  description: string
  topics: readonly LearningTopicMeta[]
  cards: ContentCard[]
  progress: ProgressRecord[]
  now: number
  loading: boolean
  accent: TopicCardProps['accent']
}) {
  const total = topics.reduce((sum, topic) => sum + topic.count, 0)
  return (
    <section className="learning-section" aria-labelledby={`${sectionId}-title`}>
      <div className="section-heading">
        <div><p className="card-kicker">{eyebrow}</p><h2 id={`${sectionId}-title`}>{title}</h2><p>{description}</p></div>
        <span className="status-pill">{total} cards</span>
      </div>
      <div className="topic-grid">
        {topics.map((topic) => <TopicCard key={topic.topicId} topic={topic} cards={cards} progress={progress} now={now} loading={loading} accent={accent} />)}
      </div>
    </section>
  )
}

export function LearnPage() {
  const { loading, error, cards, progress, capturedAt, refresh } = useLearningData()
  const [levelFilter, setLevelFilter] = useState<CurriculumLevelFilter>('all')

  const showKana = levelFilter === 'all' || levelFilter === 'kana'
  const showN5 = levelFilter === 'all' || levelFilter === 'n5'
  const showN4 = levelFilter === 'all' || levelFilter === 'n4'
  const showN3 = levelFilter === 'all' || levelFilter === 'n3'

  return (
    <section className="page-stack">
      <PageIntro
        eyebrow="Learn · Giáo trình phân cấp"
        title="Học theo lộ trình"
        description="Chọn cấp độ để học theo chủ đề hoặc mở nhanh 6 chế độ rèn luyện phản xạ và bút thuận bên dưới."
      />
      <LearningDataBoundary loading={loading} error={error} onRetry={refresh}>
        <>
          <article className="surface-card roadmap-entry-callout">
            <div className="roadmap-callout-left">
              <span className="bento-glyph" aria-hidden="true" lang="ja">道</span>
              <div>
                <p className="card-kicker">ROADMAP 6 CHẶNG</p>
                <h2>Xem stage nào đang thật sự tiến triển</h2>
                <p>Theo dõi tiến trình thành thạo từ Hiragana đến N3.</p>
              </div>
            </div>
            <Link className="button secondary" to="/roadmap">Mở Roadmap</Link>
          </article>

          <section className="surface-card custom-practice-callout" aria-label="Các chế độ rèn luyện">
            <div className="practice-hub-header">
              <div>
                <p className="card-kicker">PRACTICE MODES · 6 CHẾ ĐỘ</p>
                <h2>Tự chọn nội dung cần luyện</h2>
              </div>
              <span className="status-pill">Đồng bộ SRS</span>
            </div>
            <div className="practice-bento-grid">
              {PRACTICE_MODES.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  aria-label={item.label}
                  className={`practice-bento-card${item.primary ? ' is-primary' : ''}`}
                >
                  <span className="bento-glyph" aria-hidden="true" lang="ja">{item.glyph}</span>
                  <div className="bento-copy">
                    <strong>{item.label}</strong>
                    <small>{item.subtitle}</small>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <nav className="surface-card curriculum-filter-bar" aria-label="Lọc cấp độ giáo trình">
            <span className="curriculum-filter-label">Cấp độ:</span>
            {LEVEL_FILTERS.map((item) => (
              <button
                key={item.value}
                type="button"
                className={`filter-chip${levelFilter === item.value ? ' is-active' : ''}`}
                aria-pressed={levelFilter === item.value}
                onClick={() => setLevelFilter(item.value)}
              >
                <span className="chip-glyph" aria-hidden="true" lang="ja">{item.glyph}</span>
                {item.label}
              </button>
            ))}
          </nav>

          {showKana && <TopicSection sectionId="kana" eyebrow="FOUNDATION · 92 KÝ TỰ" title="Kana" description="Nền tảng bảng chữ cái Hiragana và Katakana." topics={KANA_TOPIC_CATALOG} cards={cards} progress={progress} now={capturedAt} loading={loading} accent="kana" />}
          {showN5 && (
            <>
              <TopicSection sectionId="n5-vocab" eyebrow="JLPT N5 · SƠ CẤP" title="N5 Vocabulary" description="923 từ vựng sơ cấp thiết yếu chia theo 15 chủ đề." topics={VOCAB_N5_TOPIC_CATALOG} cards={cards} progress={progress} now={capturedAt} loading={loading} accent="vocab" />
              <TopicSection sectionId="n5-kanji" eyebrow="JLPT N5 · SƠ CẤP" title="N5 Kanji" description="109 Hán tự nền tảng kèm âm Hán Việt, âm đọc và câu gợi nhớ." topics={KANJI_N5_TOPIC_CATALOG} cards={cards} progress={progress} now={capturedAt} loading={loading} accent="kanji" />
            </>
          )}
          {showN4 && (
            <>
              <TopicSection sectionId="n4-vocab" eyebrow="N4 · SƠ – TRUNG CẤP" title="N4 Vocabulary" description="569 từ vựng mở rộng trình độ N4 kèm nghĩa đối chiếu." topics={VOCAB_N4_TOPIC_CATALOG} cards={cards} progress={progress} now={capturedAt} loading={loading} accent="vocab" />
              <TopicSection sectionId="n4-kanji" eyebrow="N4 · SƠ – TRUNG CẤP" title="N4 Kanji" description="140 Hán tự trình độ N4 mở rộng khả năng đọc văn bản." topics={KANJI_N4_TOPIC_CATALOG} cards={cards} progress={progress} now={capturedAt} loading={loading} accent="kanji" />
            </>
          )}
          {showN3 && (
            <>
              <TopicSection sectionId="n3-vocab" eyebrow="N3 · TRUNG CẤP" title="N3 Vocabulary" description="1.668 từ vựng trung cấp N3 phục vụ đọc hiểu và giao tiếp." topics={VOCAB_N3_TOPIC_CATALOG} cards={cards} progress={progress} now={capturedAt} loading={loading} accent="vocab" />
              <TopicSection sectionId="n3-kanji" eyebrow="N3 · TRUNG CẤP" title="N3 Kanji" description="366 Hán tự trung cấp N3 kèm đầy đủ âm đọc và nghĩa." topics={KANJI_N3_TOPIC_CATALOG} cards={cards} progress={progress} now={capturedAt} loading={loading} accent="kanji" />
            </>
          )}

          <article className="surface-card roadmap-deferred">
            <p className="card-kicker">NGUỒN HỌC LIỆU MỞ</p>
            <h2>N4/N3 source: OpenJLPT</h2>
            <p>Phiên bản dữ liệu <code>{OPENJLPT_SOURCE_COMMIT.slice(0, 12)}</code> theo giấy phép CC BY-SA 4.0 (JMdict / KANJIDIC2).</p>
            <div className="roadmap-stage-actions">
              <a className="text-link" href="https://github.com/evanclan/OpenJLPT" target="_blank" rel="noreferrer">OpenJLPT source →</a>
              <a className="text-link" href="https://www.edrdg.org/edrdg/licence.html" target="_blank" rel="noreferrer">EDRDG license →</a>
              <a className="text-link" href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">CC BY-SA 4.0 →</a>
            </div>
          </article>
        </>
      </LearningDataBoundary>
    </section>
  )
}
