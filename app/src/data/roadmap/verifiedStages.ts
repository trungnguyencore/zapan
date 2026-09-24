import { KANA_TOPIC_CATALOG, KANJI_N5_TOPIC_CATALOG, VOCAB_N5_TOPIC_CATALOG } from '../n5/topicCatalog'
import type { RoadmapStageDefinition } from '../../domain/roadmap/roadmap'

export const VERIFIED_ROADMAP_STAGES: readonly RoadmapStageDefinition[] = [
  {
    stageId: 'hiragana',
    order: 1,
    eyebrow: 'STAGE 1 · FOUNDATION',
    title: 'Hiragana',
    description: 'Nhận diện, recall, writing familiarity và các cặp dễ nhầm; mastery cần lặp lại theo thời gian.',
    topicIds: ['kana-hiragana-main'],
    learnPath: '/session/learn/kana-hiragana-main',
  },
  {
    stageId: 'katakana',
    order: 2,
    eyebrow: 'STAGE 2 · FOUNDATION',
    title: 'Katakana',
    description: 'Củng cố nhận diện và scheduled recall, với trọng tâm thêm vào các dạng ký tự dễ nhầm.',
    topicIds: ['kana-katakana-main'],
    learnPath: '/session/learn/kana-katakana-main',
  },
  {
    stageId: 'n5-vocabulary',
    order: 3,
    eyebrow: 'STAGE 3 · JLPT N5',
    title: 'N5 core vocabulary',
    description: '923 từ đã audit, học theo chủ đề với new-card limits và scheduled Review.',
    topicIds: VOCAB_N5_TOPIC_CATALOG.map((topic) => topic.topicId),
    learnPath: '/learn',
  },
  {
    stageId: 'n5-kanji',
    order: 4,
    eyebrow: 'STAGE 4 · JLPT N5',
    title: 'N5 core Kanji',
    description: '109 Kanji đã audit: recognition, readings, nghĩa, Hán Việt và writing/stroke familiarity.',
    topicIds: KANJI_N5_TOPIC_CATALOG.map((topic) => topic.topicId),
    learnPath: '/learn',
  },
]

export const VERIFIED_ROADMAP_TOTAL = [
  ...KANA_TOPIC_CATALOG,
  ...VOCAB_N5_TOPIC_CATALOG,
  ...KANJI_N5_TOPIC_CATALOG,
].reduce((sum, topic) => sum + topic.count, 0)
