import { useMemo, useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { LearningDataBoundary } from '../../components/ui/LearningDataBoundary'
import { PageIntro } from '../../components/ui/PageIntro'
import {
  KANJI_N3_TOPIC_CATALOG,
  KANJI_N4_TOPIC_CATALOG,
  VOCAB_N3_TOPIC_CATALOG,
  VOCAB_N4_TOPIC_CATALOG,
} from '../../data/openjlpt/generated/catalog'
import {
  KANA_TOPIC_CATALOG,
  KANJI_N5_TOPIC_CATALOG,
  type LearningTopicMeta,
  VOCAB_N5_TOPIC_CATALOG,
} from '../../data/n5/topicCatalog'
import { useLearningData } from '../shared/useLearningData'

type PracticeLimit = '5' | '10' | '20'

const GROUPS: Array<{ title: string; eyebrow: string; topics: readonly LearningTopicMeta[] }> = [
  { title: 'Kana', eyebrow: 'FOUNDATION', topics: KANA_TOPIC_CATALOG },
  { title: 'N5 Vocabulary', eyebrow: 'JLPT N5 · AUDITED', topics: VOCAB_N5_TOPIC_CATALOG },
  { title: 'N5 Kanji', eyebrow: 'JLPT N5 · AUDITED', topics: KANJI_N5_TOPIC_CATALOG },
  { title: 'N4 Vocabulary', eyebrow: 'N4 · OPEN STUDY SET', topics: VOCAB_N4_TOPIC_CATALOG },
  { title: 'N4 Kanji', eyebrow: 'N4 · OPEN STUDY SET', topics: KANJI_N4_TOPIC_CATALOG },
  { title: 'N3 Vocabulary', eyebrow: 'N3 · OPEN STUDY SET', topics: VOCAB_N3_TOPIC_CATALOG },
  { title: 'N3 Kanji', eyebrow: 'N3 · OPEN STUDY SET', topics: KANJI_N3_TOPIC_CATALOG },
]

export function CustomPracticePage() {
  const navigate = useNavigate()
  const { cards, loading, error, refresh } = useLearningData()
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])
  const [limit, setLimit] = useState<PracticeLimit>('10')

  const selectedSet = useMemo(() => new Set(selectedTopics), [selectedTopics])
  const availableCount = useMemo(
    () => cards.filter((card) => selectedSet.has(card.topicId)).length,
    [cards, selectedSet],
  )

  function toggleTopic(topicId: string) {
    setSelectedTopics((current) => current.includes(topicId)
      ? current.filter((item) => item !== topicId)
      : [...current, topicId])
  }

  function setGroup(topics: readonly LearningTopicMeta[], enabled: boolean) {
    const ids = new Set(topics.map((topic) => topic.topicId))
    setSelectedTopics((current) => {
      if (enabled) return [...new Set([...current, ...ids])]
      return current.filter((item) => !ids.has(item))
    })
  }

  function submit(event: FormEvent) {
    event.preventDefault()
    if (selectedTopics.length === 0 || availableCount === 0) return
    const params = new URLSearchParams()
    for (const topicId of selectedTopics) params.append('topic', topicId)
    params.set('limit', limit)
    navigate('/session/custom?' + params.toString())
  }

  return (
    <section className="page-stack">
      <PageIntro
        eyebrow="Practice"
        title="Tạo phiên Custom Practice"
        description="Chọn đúng các topic bạn muốn luyện. Phiên custom dùng chung StudyEvent, SRS và progress với Learn/Review; nó không tạo hệ thống điểm riêng."
      />
      <LearningDataBoundary loading={loading} error={error} onRetry={refresh}>
      <form className="custom-practice-form" onSubmit={submit}>
        {GROUPS.map((group) => {
          const groupIds = group.topics.map((topic) => topic.topicId)
          const allSelected = groupIds.every((id) => selectedSet.has(id))
          return (
            <section className="surface-card practice-topic-group" key={group.title} aria-labelledby={'practice-' + group.title}>
              <div className="practice-group-heading">
                <div>
                  <p className="card-kicker">{group.eyebrow}</p>
                  <h2 id={'practice-' + group.title}>{group.title}</h2>
                </div>
                <button className="text-button" type="button" onClick={() => setGroup(group.topics, !allSelected)}>
                  {allSelected ? 'Bỏ chọn nhóm' : 'Chọn cả nhóm'}
                </button>
              </div>
              <div className="practice-topic-grid">
                {group.topics.map((topic) => (
                  <label className={'practice-topic-option' + (selectedSet.has(topic.topicId) ? ' is-selected' : '')} key={topic.topicId}>
                    <input
                      type="checkbox"
                      checked={selectedSet.has(topic.topicId)}
                      onChange={() => toggleTopic(topic.topicId)}
                    />
                    <span><strong>{topic.label}</strong><small>{topic.count} cards</small></span>
                  </label>
                ))}
              </div>
            </section>
          )
        })}

        <section className="surface-card practice-launch-card">
          <div>
            <p className="card-kicker">SESSION</p>
            <h2>{selectedTopics.length} topic · {loading ? '…' : availableCount + ' cards khả dụng'}</h2>
            <p>Custom Practice lấy tối đa số card đã chọn theo thứ tự canonical. Scheduled Review vẫn là luồng ôn tập chính.</p>
          </div>
          <label htmlFor="practice-limit">Số câu
            <select id="practice-limit" value={limit} onChange={(event) => setLimit(event.target.value as PracticeLimit)}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </label>
          <button className="button primary" type="submit" disabled={loading || selectedTopics.length === 0 || availableCount === 0}>
            Bắt đầu Custom Practice
          </button>
        </section>
      </form>
      </LearningDataBoundary>
    </section>
  )
}
