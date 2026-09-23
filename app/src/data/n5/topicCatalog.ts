export interface LearningTopicMeta {
  topicId: string
  label: string
  count: number
}

export const KANA_TOPIC_CATALOG: readonly LearningTopicMeta[] = [
  { topicId: 'kana-hiragana-main', label: 'Hiragana', count: 46 },
  { topicId: 'kana-katakana-main', label: 'Katakana', count: 46 },
]

export const VOCAB_N5_TOPIC_CATALOG: readonly LearningTopicMeta[] = [
  { topicId: 'vocab-n5-numbers', label: 'Số đếm & Lượng từ', count: 42 },
  { topicId: 'vocab-n5-time', label: 'Thời gian & Ngày tháng', count: 101 },
  { topicId: 'vocab-n5-people', label: 'Con người & Gia đình', count: 34 },
  { topicId: 'vocab-n5-places', label: 'Địa điểm & Nơi chốn', count: 64 },
  { topicId: 'vocab-n5-objects', label: 'Đồ vật trong nhà', count: 50 },
  { topicId: 'vocab-n5-school', label: 'Trường học & Văn phòng', count: 28 },
  { topicId: 'vocab-n5-food', label: 'Ẩm thực', count: 37 },
  { topicId: 'vocab-n5-body', label: 'Cơ thể & Sức khỏe', count: 26 },
  { topicId: 'vocab-n5-nature', label: 'Tự nhiên & Thời tiết', count: 23 },
  { topicId: 'vocab-n5-colors', label: 'Màu sắc', count: 11 },
  { topicId: 'vocab-n5-clothes', label: 'Trang phục', count: 20 },
  { topicId: 'vocab-n5-transport', label: 'Phương tiện GTVT', count: 14 },
  { topicId: 'vocab-n5-adjectives', label: 'Tính từ', count: 109 },
  { topicId: 'vocab-n5-verbs', label: 'Động từ', count: 193 },
  { topicId: 'vocab-n5-others', label: 'Khác (Phó từ, Liên từ,...)', count: 171 },
]

export const KANJI_N5_TOPIC_CATALOG: readonly LearningTopicMeta[] = [
  { topicId: 'kanji-n5-numbers', label: 'Số đếm', count: 14 },
  { topicId: 'kanji-n5-time', label: 'Thời gian', count: 13 },
  { topicId: 'kanji-n5-people', label: 'Con người', count: 11 },
  { topicId: 'kanji-n5-nature', label: 'Tự nhiên', count: 14 },
  { topicId: 'kanji-n5-body', label: 'Cơ thể', count: 5 },
  { topicId: 'kanji-n5-actions', label: 'Hành động', count: 16 },
  { topicId: 'kanji-n5-study', label: 'Học tập', count: 6 },
  { topicId: 'kanji-n5-directions', label: 'Vị trí & Hướng', count: 10 },
  { topicId: 'kanji-n5-size', label: 'Kích thước', count: 10 },
  { topicId: 'kanji-n5-misc', label: 'Khác', count: 10 },
]
