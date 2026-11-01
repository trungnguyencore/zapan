import { Link } from 'react-router-dom'
import { LearningDataBoundary } from '../../components/ui/LearningDataBoundary'
import { PageIntro } from '../../components/ui/PageIntro'
import { useAppServices } from '../../app/AppServicesContext'
import { useLearningData } from '../shared/useLearningData'

export function HomePage() {
  const { guest, identity } = useAppServices()
  const { loading, error, overview, refresh } = useLearningData()

  const learningCards = Math.max(0, overview.studiedCards - overview.masteredCards - overview.weakCards)
  const total = Math.max(1, overview.totalCards)
  const masteredPct = (overview.masteredCards / total) * 100
  const learningPct = (learningCards / total) * 100
  const weakPct = (overview.weakCards / total) * 100

  return (
    <section className="page-stack">
      <PageIntro
        eyebrow="Today · Bàn học SRS"
        title="Hôm nay học gì?"
        description="Ưu tiên ôn tập các thẻ đến điểm rơi quên lãng trước, sau đó mở thêm thẻ mới vừa sức."
      />
      <LearningDataBoundary loading={loading} error={error} onRetry={refresh}>
        <>
          <div className="today-command-grid">
            <div className="hero-card today-card">
              <div className="today-card-main">
                <div className="today-card-top">
                  <p className="card-kicker">TODAY'S SESSION</p>
                  <span className="status-pill">
                    {identity.kind === 'account' ? (identity.user.email ?? 'Account') : guest.persistent ? 'Guest · local saved' : 'Guest · temporary'}
                  </span>
                </div>
                <h2>{overview.dueCards > 0 ? `${overview.dueCards} thẻ đang đến hạn` : 'Sẵn sàng học Kana mới'}</h2>
                <p>{`Đã học ${overview.studiedCards}/${overview.totalCards} thẻ · còn ${overview.unseenCards} thẻ chưa học.`}</p>
                <div className="today-card-actions">
                  <Link className="button primary" to="/session/today">Bắt đầu phiên hôm nay</Link>
                  <Link className="button secondary" to="/learn">Chọn bài theo chủ đề</Link>
                </div>
              </div>
              <div className="today-kanji-emblem" aria-hidden="true" lang="ja">学</div>
            </div>

            <aside className="surface-card today-quick-queue" aria-label="Hàng đợi ôn tập nhanh">
              <div>
                <div className="today-card-top">
                  <p className="card-kicker">REVIEW QUEUE</p>
                  <span className={`status-pill${overview.dueCards > 0 ? ' is-due' : ''}`}>
                    {overview.dueCards > 0 ? 'Cần ôn ngay' : 'Đã sạch hàng đợi'}
                  </span>
                </div>
                <div className="today-queue-number">{overview.dueCards}</div>
                <p className="today-queue-caption">
                  {overview.dueCards > 0
                    ? 'Thẻ đến hạn cần truy xuất để giữ chuỗi ghi nhớ.'
                    : 'Không có thẻ quá hạn. Thời điểm lý tưởng để học bài mới hoặc luyện viết.'}
                </p>
              </div>
              <div className="today-queue-actions">
                <Link className="button secondary" to="/review">Mở hàng đợi Review</Link>
                <Link className="button secondary" to="/practice/writing">Luyện viết chữ</Link>
              </div>
            </aside>
          </div>

          <div className="metric-grid" aria-label="Tiến độ hôm nay">
            <article className="metric-card accent-kana"><strong>{overview.dueCards}</strong><span>Due review</span></article>
            <article className="metric-card accent-vocab"><strong>{overview.unseenCards}</strong><span>Chưa học</span></article>
            <article className="metric-card accent-kanji"><strong>{overview.attempts}</strong><span>Lượt trả lời</span></article>
            <article className="metric-card"><strong>{overview.accuracy === null ? '—' : `${Math.round(overview.accuracy * 100)}%`}</strong><span>Accuracy thật</span></article>
          </div>

          <section className="surface-card srs-distribution-card" aria-label="Phân bổ mức độ ghi nhớ SRS">
            <div className="srs-distribution-head">
              <div>
                <p className="card-kicker">SRS MASTERY STAGES</p>
                <h3>Phân bổ 3.867 đơn vị kiến thức</h3>
              </div>
              <Link className="text-link" to="/roadmap">Xem lộ trình 6 chặng →</Link>
            </div>
            <div className="srs-bar-track" aria-hidden="true">
              <span className="srs-segment mastered" style={{ width: `${masteredPct}%` }} />
              <span className="srs-segment learning" style={{ width: `${learningPct}%` }} />
              <span className="srs-segment weak" style={{ width: `${weakPct}%` }} />
            </div>
            <div className="srs-legend-grid">
              <div className="srs-legend-item"><span className="srs-dot mastered" /><div><strong>{overview.masteredCards}</strong><small>Mastered (Thuộc vững)</small></div></div>
              <div className="srs-legend-item"><span className="srs-dot learning" /><div><strong>{learningCards}</strong><small>Learning (Đang nhớ)</small></div></div>
              <div className="srs-legend-item"><span className="srs-dot weak" /><div><strong>{overview.weakCards}</strong><small>Weak (Hay nhầm)</small></div></div>
              <div className="srs-legend-item"><span className="srs-dot unseen" /><div><strong>{overview.unseenCards}</strong><small>Unseen (Chưa mở)</small></div></div>
            </div>
          </section>
        </>
      </LearningDataBoundary>
    </section>
  )
}
