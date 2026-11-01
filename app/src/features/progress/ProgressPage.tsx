import { LearningDataBoundary } from '../../components/ui/LearningDataBoundary'
import { PageIntro } from '../../components/ui/PageIntro'
import { deriveActivityMetrics, type ActivityDay } from '../../domain/activity/activity'
import { useLearningData } from '../shared/useLearningData'

const BROWSER_TIME_ZONE = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'

function formatMeasuredMinutes(ms: number): string {
  if (ms <= 0) return '0'
  const minutes = ms / 60_000
  if (minutes < 1) return '<1'
  if (minutes < 10) return minutes.toFixed(1)
  return String(Math.round(minutes))
}

function heatLevel(day: ActivityDay): number {
  if (day.eventCount === 0) return 0
  if (day.eventCount <= 2) return 1
  if (day.eventCount <= 5) return 2
  if (day.eventCount <= 10) return 3
  return 4
}

export function ProgressPage() {
  const { loading, error, overview, events, capturedAt, refresh } = useLearningData()
  const activity = deriveActivityMetrics(events, capturedAt, BROWSER_TIME_ZONE)

  return (
    <section className="page-stack">
      <PageIntro
        eyebrow="Progress · Phân tích năng lực"
        title="Tiến độ từ dữ liệu thật"
        description="Các chỉ số thành thạo và thời lượng phản xạ được tổng hợp trực tiếp từ lịch sử trả lời thực tế của bạn, không cộng dồn thời gian chờ hay ước lượng ảo."
      />

      <LearningDataBoundary loading={loading} error={error} onRetry={refresh}>
        <>
          <div className="metric-grid">
            <article className="metric-card"><strong>{overview.studiedCards}/{overview.totalCards}</strong><span>Cards studied</span></article>
            <article className="metric-card"><strong>{overview.masteredCards}</strong><span>Mastered</span></article>
            <article className="metric-card"><strong>{overview.weakCards}</strong><span>Weak</span></article>
            <article className="metric-card"><strong>{overview.accuracy === null ? '—' : Math.round(overview.accuracy * 100) + '%'}</strong><span>Accuracy</span></article>
            <article className="metric-card"><strong>{formatMeasuredMinutes(activity.measuredResponseMs)}</strong><span>Phút học đo được</span></article>
            <article className="metric-card"><strong>{activity.currentStreakDays}</strong><span>Ngày streak hiện tại</span></article>
            <article className="metric-card"><strong>{activity.activeDays}</strong><span>Ngày đã học</span></article>
            <article className="metric-card"><strong>{activity.last7EventCount}</strong><span>Lượt trong 7 ngày</span></article>
          </div>

          <article className="surface-card activity-card">
            <div className="section-heading">
              <div>
                <p className="card-kicker">ACTIVITY · 28 DAYS</p>
                <h2>Nhịp học gần đây</h2>
                <p>Biểu đồ mật độ học tập trong 28 ngày gần nhất theo múi giờ <code>{activity.timeZone}</code>. Chuỗi ngày học (Streak) được duy trì khi bạn hoàn thành ít nhất một lượt ôn tập mỗi ngày.</p>
              </div>
              <span className="status-pill">{activity.totalEvents} events</span>
            </div>
            <div className="activity-heatmap" role="group" aria-label="Hoạt động học 28 ngày gần nhất">
              {activity.last28Days.map((day) => (
                <span
                  key={day.dayKey}
                  className={'heat-cell heat-level-' + heatLevel(day) + (day.eventCount > 0 ? ' has-activity' : '')}
                  title={day.dayKey + ': ' + day.eventCount + ' lượt'}
                  aria-label={day.dayKey + ': ' + day.eventCount + ' lượt'}
                />
              ))}
            </div>
            <div className="activity-summary-row">
              <span><strong>{activity.last7EventCount}</strong> lượt / 7 ngày</span>
              <span><strong>{formatMeasuredMinutes(activity.last7MeasuredResponseMs)}</strong> phút đo được / 7 ngày</span>
            </div>
          </article>

          <article className="surface-card">
            <p className="card-kicker">ANSWERS</p>
            <h3>{overview.attempts} lượt trả lời đã lưu</h3>
            <p>{overview.correctCount} lượt đúng · {Math.max(0, overview.attempts - overview.correctCount)} lượt sai.</p>
          </article>
        </>
      </LearningDataBoundary>
    </section>
  )
}
