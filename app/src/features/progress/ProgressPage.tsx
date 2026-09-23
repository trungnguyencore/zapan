import { PageIntro } from '../../components/ui/PageIntro'
import { useLearningData } from '../shared/useLearningData'

export function ProgressPage() {
  const { error, overview } = useLearningData()
  return <section className="page-stack">
    <PageIntro eyebrow="Progress" title="Tiến độ từ dữ liệu thật" description="Các metric hiện tại chỉ được tính từ StudyEvent/ProgressRecord đã lưu. Streak, heatmap và study minutes chưa hiển thị vì tracking tương ứng chưa hoàn thành." />
    {error && <p className="inline-error" role="alert">{error}</p>}
    <div className="metric-grid">
      <article className="metric-card"><strong>{overview.studiedCards}/{overview.totalCards}</strong><span>Cards studied</span></article>
      <article className="metric-card"><strong>{overview.masteredCards}</strong><span>Mastered</span></article>
      <article className="metric-card"><strong>{overview.weakCards}</strong><span>Weak</span></article>
      <article className="metric-card"><strong>{overview.accuracy === null ? '—' : `${Math.round(overview.accuracy * 100)}%`}</strong><span>Accuracy</span></article>
    </div>
    <article className="surface-card"><p className="card-kicker">ACTIVITY</p><h3>{overview.attempts} lượt trả lời đã lưu</h3><p>{overview.correctCount} lượt đúng · {Math.max(0, overview.attempts - overview.correctCount)} lượt sai.</p></article>
  </section>
}
