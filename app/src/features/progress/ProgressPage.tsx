import { PageIntro } from '../../components/ui/PageIntro'

export function ProgressPage() {
  return (
    <section className="page-stack">
      <PageIntro eyebrow="Progress" title="Chỉ hiển thị số liệu có bằng chứng" description="Mastery, streak, heatmap, study minutes và weak cards sẽ được tính từ StudyEvent thật. Không render metric giả để lấp giao diện." />
      <div className="grid-cards">
        <article className="surface-card"><p className="card-kicker">CANONICAL</p><h3>StudyEvent</h3><p>Mọi mode học đủ điều kiện sẽ phát event về cùng một pipeline.</p></article>
        <article className="surface-card"><p className="card-kicker">DERIVED</p><h3>ProgressRecord</h3><p>Accuracy, response time, SRS và mastery dùng chung schema.</p></article>
      </div>
    </section>
  )
}
