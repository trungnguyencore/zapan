import { Link } from 'react-router-dom'
import { LearningDataBoundary } from '../../components/ui/LearningDataBoundary'
import { PageIntro } from '../../components/ui/PageIntro'
import { useLearningData } from '../shared/useLearningData'

export function ReviewPage() {
  const { loading, error, overview, refresh } = useLearningData()

  return (
    <section className="page-stack">
      <PageIntro eyebrow="Review" title="Ôn đúng thứ cần ôn" description="Queue review lấy trực tiếp từ `nextReviewAt` của ProgressRecord và xếp thẻ quá hạn lâu hơn lên trước." />
      <LearningDataBoundary loading={loading} error={error} onRetry={refresh}>
        <article className="surface-card review-hero">
          <p className="card-kicker">DUE NOW</p>
          <div className="review-count">{overview.dueCards}</div>
          <p>{overview.dueCards > 0 ? 'thẻ cần ôn ngay.' : 'Chưa có thẻ đến hạn. Bạn có thể học thêm thẻ mới.'}</p>
          {overview.dueCards > 0 ? <Link className="button primary" to="/session/review">Bắt đầu Review</Link> : <Link className="button secondary" to="/learn">Mở Learn</Link>}
        </article>
      </LearningDataBoundary>
    </section>
  )
}
