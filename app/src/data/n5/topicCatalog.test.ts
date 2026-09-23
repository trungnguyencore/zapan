import { describe, expect, it } from 'vitest'
import { loadVerifiedContentRepository } from '../../services/content/loadVerifiedContentRepository'
import { KANA_TOPIC_CATALOG, KANJI_N5_TOPIC_CATALOG, VOCAB_N5_TOPIC_CATALOG } from './topicCatalog'

describe('N5 topic catalog', () => {
  it('matches the verified content repository exactly', async () => {
    const repo = await loadVerifiedContentRepository()
    const topics = [...KANA_TOPIC_CATALOG, ...VOCAB_N5_TOPIC_CATALOG, ...KANJI_N5_TOPIC_CATALOG]
    expect(new Set(topics.map((topic) => topic.topicId)).size).toBe(topics.length)
    for (const topic of topics) {
      expect(repo.listByTopic(topic.topicId)).toHaveLength(topic.count)
    }
    expect(topics.reduce((sum, topic) => sum + topic.count, 0)).toBe(1124)
  })
})
