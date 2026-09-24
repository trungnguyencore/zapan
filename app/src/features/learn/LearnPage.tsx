import { Link } from 'react-router-dom'
import { PageIntro } from '../../components/ui/PageIntro'
import type { ContentCard } from '../../domain/content/types'
import type { ProgressRecord } from '../../domain/learning/types'
import { deriveLearningOverview } from '../../domain/progress/overview'
import { KANA_TOPIC_CATALOG, KANJI_N5_TOPIC_CATALOG, type LearningTopicMeta, VOCAB_N5_TOPIC_CATALOG } from '../../data/n5/topicCatalog'
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

function TopicSection({ eyebrow, title, description, topics, cards, progress, now, loading, accent }: {
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
    <section className="learning-section" aria-labelledby={`${accent}-section-title`}>
      <div className="section-heading">
        <div><p className="card-kicker">{eyebrow}</p><h2 id={`${accent}-section-title`}>{title}</h2><p>{description}</p></div>
        <span className="status-pill">{total} cards</span>
      </div>
      <div className="topic-grid">
        {topics.map((topic) => <TopicCard key={topic.topicId} topic={topic} cards={cards} progress={progress} now={now} loading={loading} accent={accent} />)}
      </div>
    </section>
  )
}

export function LearnPage() {
  const { loading, error, cards, progress, capturedAt } = useLearningData()
  return (
    <section className="page-stack">
      <PageIntro eyebrow="Learn" title="Học theo lộ trình" description="ZaPan hiện mở ba content pack đã qua audit: Kana cơ bản, N5 Vocabulary và N5 Kanji. Mỗi chủ đề dùng cùng StudyEvent/SRS/progress pipeline." />
      {error && <p className="inline-error" role="alert">{error}</p>}
      <article className="surface-card custom-practice-callout">
        <div><p className="card-kicker">PRACTICE</p><h2>Tự chọn nội dung cần luyện</h2><p>Ghép nhiều topic Kana, Vocabulary và Kanji vào một phiên nhưng vẫn dùng chung StudyEvent/SRS/progress.</p></div>
        <div className="practice-entry-actions"><Link className="button primary" to="/practice/custom">Tạo Custom Practice</Link><Link className="button secondary" to="/practice/writing">Luyện Writing</Link><Link className="button secondary" to="/practice/time-attack">Time Attack</Link><Link className="button secondary" to="/practice/survival">Survival</Link></div>
      </article>
      <TopicSection eyebrow="FOUNDATION" title="Kana" description="Nhận diện Hiragana và Katakana cơ bản trước khi mở rộng sang các nhóm biến âm." topics={KANA_TOPIC_CATALOG} cards={cards} progress={progress} now={capturedAt} loading={loading} accent="kana" />
      <TopicSection eyebrow="JLPT N5" title="Vocabulary" description="923 từ đã audit, chia thành 15 chủ đề. Phiên typing hiện kiểm tra cách đọc bằng kana." topics={VOCAB_N5_TOPIC_CATALOG} cards={cards} progress={progress} now={capturedAt} loading={loading} accent="vocab" />
      <TopicSection eyebrow="JLPT N5" title="Kanji" description="109 Kanji đã audit với readings, nghĩa, Hán Việt, stroke count và mnemonic memory aid." topics={KANJI_N5_TOPIC_CATALOG} cards={cards} progress={progress} now={capturedAt} loading={loading} accent="kanji" />
    </section>
  )
}
