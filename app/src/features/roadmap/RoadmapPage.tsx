import { Link } from 'react-router-dom'
import { LearningDataBoundary } from '../../components/ui/LearningDataBoundary'
import { PageIntro } from '../../components/ui/PageIntro'
import { VERIFIED_ROADMAP_STAGES, VERIFIED_ROADMAP_TOTAL } from '../../data/roadmap/verifiedStages'
import { deriveRoadmap, type RoadmapStageSnapshot, type RoadmapStageStatus } from '../../domain/roadmap/roadmap'
import { useLearningData } from '../shared/useLearningData'

function statusLabel(status: RoadmapStageStatus): string {
  if (status === 'complete') return 'Complete'
  if (status === 'in-progress') return 'Đang học'
  return 'Chưa bắt đầu'
}

function RoadmapStageCard({ stage, suggested }: { stage: RoadmapStageSnapshot; suggested: boolean }) {
  const masteryPercent = stage.totalCards > 0 ? Math.round(stage.masteredCards / stage.totalCards * 100) : 0

  return <article className={'roadmap-stage surface-card status-' + stage.status + (suggested ? ' is-suggested' : '')}>
    <div className="roadmap-stage-head">
      <div>
        <p className="card-kicker">{stage.eyebrow}</p>
        <h2>{stage.title}</h2>
      </div>
      <div className="roadmap-stage-badges">
        {suggested && <span className="status-pill roadmap-suggested">Gợi ý tiếp theo</span>}
        <span className="status-pill">{statusLabel(stage.status)}</span>
      </div>
    </div>

    <p className="roadmap-stage-description">{stage.description}</p>

    <div className="roadmap-mastery-bar" aria-label={stage.masteredCards + ' trên ' + stage.totalCards + ' mastered'}>
      <span style={{ width: masteryPercent + '%' }} />
    </div>

    <div className="roadmap-stage-metrics">
      <span><strong>{stage.masteredCards}/{stage.totalCards}</strong> mastered</span>
      <span><strong>{stage.studiedCards}</strong> đã học</span>
      <span><strong>{stage.dueCards}</strong> đến hạn</span>
      <span><strong>{stage.weakCards}</strong> weak</span>
    </div>

    <div className="roadmap-stage-actions">
      <Link className="button secondary" to={stage.learnPath}>{stage.status === 'not-started' ? 'Bắt đầu stage' : 'Mở nội dung'}</Link>
      {stage.dueCards > 0 && <Link className="text-link" to="/review">Ôn thẻ đến hạn →</Link>}
    </div>
  </article>
}

export function RoadmapPage() {
  const { cards, progress, capturedAt, loading, error, refresh } = useLearningData()
  const roadmap = deriveRoadmap(cards, progress, capturedAt, VERIFIED_ROADMAP_STAGES)

  return <section className="page-stack">
    <PageIntro
      eyebrow="Roadmap · Tiến trình cấp độ"
      title="Lộ trình dựa trên mastery thật"
      description="Lộ trình học thuật đo lường mức độ nắm vững thực chất: việc mới xem qua thẻ chưa được tính là hoàn tất, một chặng chỉ hoàn thành khi toàn bộ thẻ trong chặng đạt trạng thái thành thạo bền vững (Mastered)."
    />
    <LearningDataBoundary loading={loading} error={error} onRetry={refresh}>
      <>
    <article className="surface-card roadmap-summary">
      <div>
        <p className="card-kicker">VERIFIED PATH</p>
        <h2>{roadmap.completedStages}/{roadmap.stages.length} stage complete</h2>
        <p>{loading ? 'Đang đọc tiến độ…' : VERIFIED_ROADMAP_TOTAL + ' cards hiện có trong learner path.'}</p>
      </div>
      <Link className="button secondary" to="/learn">Mở Learn</Link>
    </article>

    <div className="roadmap-stage-list">
      {roadmap.stages.map((stage) => (
        <RoadmapStageCard key={stage.stageId} stage={stage} suggested={roadmap.suggestedStageId === stage.stageId} />
      ))}
    </div>

    <article className="surface-card roadmap-deferred" aria-label="Các stage chưa kích hoạt">
      <p className="card-kicker">NOT ACTIVE YET</p>
      <h2>Grammar · Reading/Listening · N5/N4/N3 exam practice</h2>
      <p>Các học phần Ngữ pháp, Đọc hiểu, Nghe hiểu và Đề luyện thi JLPT đang trong giai đoạn kiểm duyệt nguồn học liệu chuẩn và sẽ được mở khi hoàn tất xác minh.</p>
    </article>
      </>
    </LearningDataBoundary>
  </section>
}
