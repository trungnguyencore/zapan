import { PageIntro } from '../../components/ui/PageIntro'

export function ReviewPage() {
  return (
    <section className="page-stack">
      <PageIntro eyebrow="Review" title="Ôn đúng thứ cần ôn" description="Queue thực sẽ được sinh từ cùng một ProgressRecord/SRS engine. Phase 1 chưa hiển thị số thẻ đến hạn vì chưa có persistence/content thật." />
      <article className="surface-card empty-state">
        <span className="empty-mark" aria-hidden="true">R</span>
        <div><h3>Review engine foundation đã được tách khỏi UI</h3><p>UI review đầy đủ sẽ được kết nối ở Phase 2 sau khi content và persistence có test end-to-end.</p></div>
      </article>
    </section>
  )
}
