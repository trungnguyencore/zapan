import { Link } from 'react-router-dom'
import { LearningDataBoundary } from '../../components/ui/LearningDataBoundary'
import { PageIntro } from '../../components/ui/PageIntro'
import { useAppServices } from '../../app/AppServicesContext'
import { useLearningData } from '../shared/useLearningData'

export function HomePage() {
  const { guest, identity } = useAppServices()
  const { loading, error, overview, refresh } = useLearningData()

  return (
    <section className="page-stack">
      <PageIntro eyebrow="Today" title="Hôm nay học gì?" description="ZaPan ưu tiên review đến hạn trước, sau đó thêm một lượng nhỏ thẻ mới. Tất cả số liệu dưới đây đọc trực tiếp từ tiến độ đã lưu trên thiết bị." />
      <LearningDataBoundary loading={loading} error={error} onRetry={refresh}>
        <>
          <div className="hero-card today-card">
            <div>
              <p className="card-kicker">TODAY'S SESSION</p>
              <h2>{overview.dueCards > 0 ? `${overview.dueCards} thẻ đang đến hạn` : 'Sẵn sàng học Kana mới'}</h2>
              <p>{`Đã học ${overview.studiedCards}/${overview.totalCards} thẻ · còn ${overview.unseenCards} thẻ chưa học.`}</p>
              <Link className="button primary" to="/session/today">Bắt đầu phiên hôm nay</Link>
            </div>
            <span className="status-pill">{identity.kind === 'account' ? (identity.user.email ?? 'Account') : guest.persistent ? 'Guest · local saved' : 'Guest · temporary'}</span>
          </div>
          <div className="metric-grid" aria-label="Tiến độ hôm nay">
            <article className="metric-card"><strong>{overview.dueCards}</strong><span>Due review</span></article>
            <article className="metric-card"><strong>{overview.unseenCards}</strong><span>Chưa học</span></article>
            <article className="metric-card"><strong>{overview.attempts}</strong><span>Lượt trả lời</span></article>
            <article className="metric-card"><strong>{overview.accuracy === null ? '—' : `${Math.round(overview.accuracy * 100)}%`}</strong><span>Accuracy thật</span></article>
          </div>
        </>
      </LearningDataBoundary>
    </section>
  )
}
