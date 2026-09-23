import { Link } from 'react-router-dom'
import { PageIntro } from '../../components/ui/PageIntro'
import { deriveLearningOverview } from '../../domain/progress/overview'
import { useLearningData } from '../shared/useLearningData'

export function LearnPage() {
  const { loading, error, cards, progress, capturedAt } = useLearningData()
  const now = capturedAt
  const hira = cards.filter((card) => card.topicId === 'kana-hiragana-main')
  const kata = cards.filter((card) => card.topicId === 'kana-katakana-main')
  const hiraStats = deriveLearningOverview(hira, progress, now)
  const kataStats = deriveLearningOverview(kata, progress, now)

  return <section className="page-stack">
    <PageIntro eyebrow="Learn" title="Học theo lộ trình" description="Phase 2 hiện mở bộ Kana cơ bản đã audit. Vocabulary/Kanji vẫn khóa cho tới khi bundle của chúng được kiểm chứng riêng." />
    {error && <p className="inline-error" role="alert">{error}</p>}
    <div className="grid-cards">
      <article className="surface-card accent-kana"><p className="card-kicker">FOUNDATION · 46 CARDS</p><h3>Hiragana</h3><p>{loading ? 'Đang đọc…' : `${hiraStats.studiedCards}/46 đã học · ${hiraStats.dueCards} đến hạn`}</p><Link className="button primary" to="/session/learn/kana-hiragana-main">Học Hiragana</Link></article>
      <article className="surface-card accent-kana"><p className="card-kicker">FOUNDATION · 46 CARDS</p><h3>Katakana</h3><p>{loading ? 'Đang đọc…' : `${kataStats.studiedCards}/46 đã học · ${kataStats.dueCards} đến hạn`}</p><Link className="button primary" to="/session/learn/kana-katakana-main">Học Katakana</Link></article>
      <article className="surface-card locked-card"><p className="card-kicker">AUDIT PENDING</p><h3>Vocabulary N5</h3><p>Chưa mở: dữ liệu legacy chưa qua pipeline audit v2.</p></article>
      <article className="surface-card locked-card"><p className="card-kicker">AUDIT PENDING</p><h3>Kanji N5</h3><p>Chưa mở: dữ liệu legacy chưa qua pipeline audit v2.</p></article>
    </div>
  </section>
}
