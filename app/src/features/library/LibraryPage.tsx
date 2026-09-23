import { PageIntro } from '../../components/ui/PageIntro'

export function LibraryPage() {
  return (
    <section className="page-stack">
      <PageIntro eyebrow="Library" title="Một thư viện, nhiều loại tài liệu" description="Kana, vocabulary, kanji, grammar, reading, listening và PDF reference sẽ nằm trong một cấu trúc tìm kiếm thống nhất khi dữ liệu được nhập và xác minh." />
      <article className="surface-card empty-state">
        <span className="empty-mark" aria-hidden="true">文</span>
        <div><h3>Content chưa được import trong Phase 1</h3><p>Legacy data chỉ là nguồn tham khảo; ZaPan v2 sẽ dùng content bundle có version và provenance rõ ràng.</p></div>
      </article>
    </section>
  )
}
