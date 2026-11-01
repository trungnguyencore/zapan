import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { LearningDataBoundary } from '../../components/ui/LearningDataBoundary'
import { PageIntro } from '../../components/ui/PageIntro'
import { primaryMeaning } from '../../domain/content/meaning'
import type { ContentCard } from '../../domain/content/types'
import { primaryAnswerFor } from '../../domain/session/answer'
import { buildMistakeQueue } from '../../domain/session/sessionBuilder'
import { useLearningData } from '../shared/useLearningData'

function promptFor(card: ContentCard): string {
  return card.contentType === 'vocabulary' ? card.term : card.character
}

export function ReviewPage() {
  const { loading, error, cards, progress, overview, refresh } = useLearningData()
  const mistakeCards = useMemo(() => buildMistakeQueue(cards, progress, 20), [cards, progress])
  const progressById = useMemo(() => new Map(progress.map((record) => [record.cardId, record])), [progress])

  return (
    <section className="page-stack">
      <PageIntro
        eyebrow="Review · Truy xuất ngắt quãng & Sửa sai"
        title="Ôn đúng thứ cần ôn"
        description="Hệ thống tự động ưu tiên các thẻ đến hạn và lưu riêng mọi câu bạn từng trả lời sai để bạn ôn lại bất cứ lúc nào."
      />
      <LearningDataBoundary loading={loading} error={error} onRetry={refresh}>
        <>
          <article className="surface-card review-hero">
            <p className="card-kicker">DUE NOW</p>
            <div className="review-count">{overview.dueCards}</div>
            <p>{overview.dueCards > 0 ? 'thẻ cần ôn ngay.' : 'Chưa có thẻ đến hạn. Bạn có thể học thêm thẻ mới.'}</p>
            {overview.dueCards > 0 ? <Link className="button primary" to="/session/review">Bắt đầu Review</Link> : <Link className="button secondary" to="/learn">Mở Learn</Link>}
          </article>

          <article className="surface-card mistake-summary-card" aria-label="Danh sách câu sai cần lưu ý">
            <div className="mistake-summary-head">
              <div>
                <p className="card-kicker">MISTAKE RECOVERY · CÂU SAI ĐÃ LƯU</p>
                <h2>{mistakeCards.length > 0 ? `${mistakeCards.length} câu trả lời sai cần lưu ý học lại` : 'Không có câu sai tồn đọng'}</h2>
                <p>
                  {mistakeCards.length > 0
                    ? 'Mỗi câu bạn chọn sai ở bất kỳ chế độ nào đều được lưu vào đây cho đến khi bạn trả lời đúng liên tiếp ít nhất 2 lần.'
                    : 'Khi bạn trả lời sai bất kỳ câu nào trong Learn, Today, Time Attack hay Survival, hệ thống sẽ tự động gom vào đây để bạn ôn lại.'}
                </p>
              </div>
              {mistakeCards.length > 0 && (
                <Link className="button primary" to="/session/mistakes">
                  Ôn lại {mistakeCards.length} câu sai ngay
                </Link>
              )}
            </div>
            {mistakeCards.length > 0 && (
              <div className="mistake-pill-list">
                {mistakeCards.map((card) => {
                  const rec = progressById.get(card.cardId)
                  return (
                    <div key={card.cardId} className="mistake-item-pill">
                      <strong className="mistake-glyph" lang="ja">{promptFor(card)}</strong>
                      <span>{primaryAnswerFor(card)}</span>
                      {card.contentType !== 'kana' && <small>{primaryMeaning(card)}</small>}
                      {rec && <span className="mistake-count-tag">Sai {rec.incorrectCount} lần</span>}
                    </div>
                  )
                })}
              </div>
            )}
          </article>
        </>
      </LearningDataBoundary>
    </section>
  )
}
