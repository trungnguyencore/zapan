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
  return (
    <article className={`surface-card topic-card accent-${accent}`}>
      <div className="topic-card-top"><h3>{topic.label}</h3><span>{topic.count}</span></div>
      <p>{loading ? 'Đang đọc tiến độ…' : `${stats.studiedCards}/${topic.count} đã học · ${stats.dueCards} đến hạn`}</p>
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
  return (
    <section className="page-stack">
      <PageIntro
        eyebrow="Learn"
        title="Học theo lộ trình"
        description="Kana + N5 audited content và N4/N3 open-data study sets đều dùng chung StudyEvent/SRS/progress pipeline. N4/N3 là community level approximation, không phải official JLPT item list."
      />
      <LearningDataBoundary loading={loading} error={error} onRetry={refresh}>
        <>
      <article className="surface-card roadmap-entry-callout">
        <div><p className="card-kicker">ROADMAP</p><h2>Xem stage nào đang thật sự tiến triển</h2><p>Roadmap dùng chính ProgressRecord hiện tại; stage chỉ complete khi toàn bộ cards trong stage đang mastered.</p></div>
        <Link className="button secondary" to="/roadmap">Mở Roadmap</Link>
      </article>
      <article className="surface-card custom-practice-callout">
        <div><p className="card-kicker">PRACTICE</p><h2>Tự chọn nội dung cần luyện</h2><p>Ghép nhiều topic Kana, Vocabulary và Kanji vào một phiên nhưng vẫn dùng chung StudyEvent/SRS/progress.</p></div>
        <div className="practice-entry-actions"><Link className="button primary" to="/practice/custom">Tạo Custom Practice</Link><Link className="button secondary" to="/practice/writing">Luyện Writing</Link><Link className="button secondary" to="/practice/time-attack">Time Attack</Link><Link className="button secondary" to="/practice/survival">Survival</Link><Link className="button secondary" to="/practice/match">Match</Link><Link className="button secondary" to="/practice/confusables">Confusables</Link></div>
      </article>

      <TopicSection sectionId="kana" eyebrow="FOUNDATION" title="Kana" description="Nhận diện Hiragana và Katakana cơ bản." topics={KANA_TOPIC_CATALOG} cards={cards} progress={progress} now={capturedAt} loading={loading} accent="kana" />
      <TopicSection sectionId="n5-vocab" eyebrow="JLPT N5 · AUDITED LEGACY" title="N5 Vocabulary" description="923 từ đã audit từ ZaPan legacy source. Phiên typing kiểm tra cách đọc bằng kana." topics={VOCAB_N5_TOPIC_CATALOG} cards={cards} progress={progress} now={capturedAt} loading={loading} accent="vocab" />
      <TopicSection sectionId="n5-kanji" eyebrow="JLPT N5 · AUDITED LEGACY" title="N5 Kanji" description="109 Kanji đã audit với readings, nghĩa, Hán Việt, stroke count và mnemonic memory aid." topics={KANJI_N5_TOPIC_CATALOG} cards={cards} progress={progress} now={capturedAt} loading={loading} accent="kanji" />

      <TopicSection sectionId="n4-vocab" eyebrow="N4 · OPEN STUDY SET" title="N4 Vocabulary" description="569 learnable cards giữ lại từ 632 raw OpenJLPT records sau khi loại prompt trùng N5. English meaning giữ nguyên provenance; Vietnamese chưa được AI tự điền." topics={VOCAB_N4_TOPIC_CATALOG} cards={cards} progress={progress} now={capturedAt} loading={loading} accent="vocab" />
      <TopicSection sectionId="n4-kanji" eyebrow="N4 · OPEN STUDY SET" title="N4 Kanji" description="140 learnable cards giữ lại từ 166 raw OpenJLPT/KANJIDIC2 records sau khi loại prompt trùng N5." topics={KANJI_N4_TOPIC_CATALOG} cards={cards} progress={progress} now={capturedAt} loading={loading} accent="kanji" />
      <TopicSection sectionId="n3-vocab" eyebrow="N3 · OPEN STUDY SET" title="N3 Vocabulary" description="1.668 learnable cards giữ lại từ 1.784 raw OpenJLPT records sau khi loại prompt trùng N5/N4. Level assignment là community approximation vì JLPT không công bố official vocabulary list." topics={VOCAB_N3_TOPIC_CATALOG} cards={cards} progress={progress} now={capturedAt} loading={loading} accent="vocab" />
      <TopicSection sectionId="n3-kanji" eyebrow="N3 · OPEN STUDY SET" title="N3 Kanji" description="366 learnable cards giữ lại từ 367 raw OpenJLPT/KANJIDIC2 records sau khi loại prompt trùng N5; không dùng KANJIDIC pre-2010 jlpt field để tự suy ra N3." topics={KANJI_N3_TOPIC_CATALOG} cards={cards} progress={progress} now={capturedAt} loading={loading} accent="kanji" />

      <article className="surface-card roadmap-deferred">
        <p className="card-kicker">CONTENT PROVENANCE</p>
        <h2>N4/N3 source: OpenJLPT</h2>
        <p>Snapshot pinned tại commit <code>{OPENJLPT_SOURCE_COMMIT.slice(0, 12)}</code>. Dataset derivative được giữ theo CC BY-SA 4.0. JLPT chính thức không phát hành danh sách từ vựng/kanji N4/N3 hiện hành, nên các level này được trình bày là study set thay vì official specification.</p>
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
