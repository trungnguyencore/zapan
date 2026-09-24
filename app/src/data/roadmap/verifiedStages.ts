import type { RoadmapStageDefinition } from '../../domain/roadmap/roadmap'
import {
  KANJI_N3_TOPIC_CATALOG,
  KANJI_N4_TOPIC_CATALOG,
  VOCAB_N3_TOPIC_CATALOG,
  VOCAB_N4_TOPIC_CATALOG,
} from '../openjlpt/generated/catalog'
import { KANA_TOPIC_CATALOG, KANJI_N5_TOPIC_CATALOG, VOCAB_N5_TOPIC_CATALOG } from '../n5/topicCatalog'

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
    description: '923 từ đã audit từ legacy source, học theo chủ đề với new-card limits và scheduled Review.',
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
  {
    stageId: 'n4-open-study',
    order: 5,
    eyebrow: 'STAGE 5 · N4 OPEN STUDY SET',
    title: 'N4 Vocabulary + Kanji',
    description: '709 learnable cards giữ lại từ 798 raw OpenJLPT records sau khi loại prompt trùng N5. Level assignment là community approximation vì JLPT không công bố official N4 vocabulary/kanji list.',
    topicIds: [...VOCAB_N4_TOPIC_CATALOG, ...KANJI_N4_TOPIC_CATALOG].map((topic) => topic.topicId),
    learnPath: '/learn',
  },
  {
    stageId: 'n3-open-study',
    order: 6,
    eyebrow: 'STAGE 6 · N3 OPEN STUDY SET',
    title: 'N3 Vocabulary + Kanji',
    description: '2.034 learnable cards giữ lại từ 2.151 raw OpenJLPT records sau khi loại prompt trùng level thấp hơn. Dùng để học/ôn theo study set, không được diễn giải là official JLPT content specification.',
    topicIds: [...VOCAB_N3_TOPIC_CATALOG, ...KANJI_N3_TOPIC_CATALOG].map((topic) => topic.topicId),
    learnPath: '/learn',
  },
]

export const VERIFIED_ROADMAP_TOTAL = [
  ...KANA_TOPIC_CATALOG,
  ...VOCAB_N5_TOPIC_CATALOG,
  ...KANJI_N5_TOPIC_CATALOG,
  ...VOCAB_N4_TOPIC_CATALOG,
  ...KANJI_N4_TOPIC_CATALOG,
  ...VOCAB_N3_TOPIC_CATALOG,
  ...KANJI_N3_TOPIC_CATALOG,
].reduce((sum, topic) => sum + topic.count, 0)
