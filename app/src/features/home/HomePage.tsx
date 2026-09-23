import { PageIntro } from '../../components/ui/PageIntro'

export function HomePage() {
  return (
    <section className="page-stack">
      <PageIntro
        eyebrow="ZaPan v2 · Foundation"
        title="Hôm nay học gì?"
        description="Dashboard ngày sẽ chỉ hiển thị lịch học, review và tiến độ sau khi tracking thật được kết nối. Phase 1 hiện chỉ dựng khung sản phẩm sạch và có thể kiểm chứng."
      />
      <div className="hero-card" aria-label="Trạng thái nền tảng ZaPan v2">
        <div>
          <p className="card-kicker">CURRENT FOUNDATION</p>
          <h2>Learn → Review → Practice → Measure → Adapt</h2>
          <p>Không dùng dữ liệu giả cho streak, mastery hay review count. Các chỉ số sẽ xuất hiện khi event/progress pipeline thật sự hoạt động.</p>
        </div>
        <span className="status-pill">Phase 1</span>
      </div>
      <div className="grid-cards">
        <article className="surface-card"><p className="card-kicker">NEXT</p><h3>Core learning loop</h3><p>Auth/Guest, content N5, Review queue và persistence sẽ vào Phase 2 sau khi foundation xanh.</p></article>
        <article className="surface-card"><p className="card-kicker">QUALITY GATE</p><h3>Không pass thì không đi tiếp</h3><p>Unit test, lint, build và browser smoke test là điều kiện của từng bước.</p></article>
      </div>
    </section>
  )
}
