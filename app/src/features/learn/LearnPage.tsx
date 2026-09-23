import { PageIntro } from '../../components/ui/PageIntro'

export function LearnPage() {
  return (
    <section className="page-stack">
      <PageIntro eyebrow="Learn" title="Học theo lộ trình, không theo menu rời rạc" description="Nội dung N5 sẽ được đưa vào theo Kana, Vocabulary và Kanji sau khi content pipeline và progress schema được xác minh." />
      <div className="grid-cards">
        <article className="surface-card accent-kana"><p className="card-kicker">FOUNDATION</p><h3>Kana</h3><p>Hiragana, Katakana và nhóm chữ dễ nhầm.</p></article>
        <article className="surface-card accent-vocab"><p className="card-kicker">N5</p><h3>Vocabulary</h3><p>Học theo chủ đề, giới hạn thẻ mới và review bằng SRS.</p></article>
        <article className="surface-card accent-kanji"><p className="card-kicker">N5</p><h3>Kanji</h3><p>Nhận diện, nghĩa, reading và writing theo dữ liệu đã kiểm chứng.</p></article>
      </div>
    </section>
  )
}
