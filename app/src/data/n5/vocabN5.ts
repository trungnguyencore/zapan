import { parseContentBundle } from '../schema'

export const VOCAB_N5_SOURCE_VERSION = 'vocab-n5-legacy-audit-v1' as const

export const VOCAB_N5_TOPICS = [
  {
    "topicId": "vocab-n5-numbers",
    "legacyGroupId": "n5_numbers",
    "label": "Số đếm & Lượng từ",
    "count": 42
  },
  {
    "topicId": "vocab-n5-time",
    "legacyGroupId": "n5_time",
    "label": "Thời gian & Ngày tháng",
    "count": 101
  },
  {
    "topicId": "vocab-n5-people",
    "legacyGroupId": "n5_people",
    "label": "Con người & Gia đình",
    "count": 34
  },
  {
    "topicId": "vocab-n5-places",
    "legacyGroupId": "n5_places",
    "label": "Địa điểm & Nơi chốn",
    "count": 64
  },
  {
    "topicId": "vocab-n5-objects",
    "legacyGroupId": "n5_objects",
    "label": "Đồ vật trong nhà",
    "count": 50
  },
  {
    "topicId": "vocab-n5-school",
    "legacyGroupId": "n5_school",
    "label": "Trường học & Văn phòng",
    "count": 28
  },
  {
    "topicId": "vocab-n5-food",
    "legacyGroupId": "n5_food",
    "label": "Ẩm thực",
    "count": 37
  },
  {
    "topicId": "vocab-n5-body",
    "legacyGroupId": "n5_body",
    "label": "Cơ thể & Sức khỏe",
    "count": 26
  },
  {
    "topicId": "vocab-n5-nature",
    "legacyGroupId": "n5_nature",
    "label": "Tự nhiên & Thời tiết",
    "count": 23
  },
  {
    "topicId": "vocab-n5-colors",
    "legacyGroupId": "n5_colors",
    "label": "Màu sắc",
    "count": 11
  },
  {
    "topicId": "vocab-n5-clothes",
    "legacyGroupId": "n5_clothes",
    "label": "Trang phục",
    "count": 20
  },
  {
    "topicId": "vocab-n5-transport",
    "legacyGroupId": "n5_transport",
    "label": "Phương tiện GTVT",
    "count": 14
  },
  {
    "topicId": "vocab-n5-adjectives",
    "legacyGroupId": "n5_adjectives",
    "label": "Tính từ",
    "count": 109
  },
  {
    "topicId": "vocab-n5-verbs",
    "legacyGroupId": "n5_verbs",
    "label": "Động từ",
    "count": 193
  },
  {
    "topicId": "vocab-n5-others",
    "legacyGroupId": "n5_others",
    "label": "Khác (Phó từ, Liên từ,...)",
    "count": 171
  }
] as const

export const VOCAB_N5_BUNDLE = parseContentBundle({
  "bundleId": "n5-vocabulary-v1",
  "schemaVersion": 1,
  "sourceVersion": "vocab-n5-legacy-audit-v1",
  "cards": [
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-001",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "五つ",
      "readings": [
        "いつつ"
      ],
      "meanings": {
        "vi": "năm cái ( đếm đồ vật nói chung)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-002",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "大勢",
      "readings": [
        "おおぜい"
      ],
      "meanings": {
        "vi": "Nhiều ( người)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-003",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "方",
      "readings": [
        "かた"
      ],
      "meanings": {
        "vi": "vị, người ( cách nói lịch sự của　人） , cách (làm việc gì đó)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-004",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "九つ",
      "readings": [
        "ここのつ"
      ],
      "meanings": {
        "vi": "9 cái ( vật nói chung)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-005",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "ゼロ",
      "readings": [
        "ゼロ"
      ],
      "meanings": {
        "vi": "số 0"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-006",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "七つ",
      "readings": [
        "ななつ"
      ],
      "meanings": {
        "vi": "bảy cái ( đếm vật nói chung)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-007",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "二十歳",
      "readings": [
        "はたち",
        "にじゅっさい"
      ],
      "meanings": {
        "vi": "20 tuổi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-008",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "番号",
      "readings": [
        "ばんごう"
      ],
      "meanings": {
        "vi": "số"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-009",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "人",
      "readings": [
        "ひと"
      ],
      "meanings": {
        "vi": "người"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-010",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "一つ",
      "readings": [
        "ひとつ"
      ],
      "meanings": {
        "vi": "một cái ( đếm vật nói chung )"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-011",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "一人",
      "readings": [
        "ひとり"
      ],
      "meanings": {
        "vi": "một người"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-012",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "二つ",
      "readings": [
        "ふたつ"
      ],
      "meanings": {
        "vi": "hai cái ( đếm vật nói chung)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-013",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "二人",
      "readings": [
        "ふたり"
      ],
      "meanings": {
        "vi": "hai người"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-014",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "三つ",
      "readings": [
        "みっつ"
      ],
      "meanings": {
        "vi": "ba cái ( đếm đồ vật nói chung)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-015",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "六つ",
      "readings": [
        "むっつ"
      ],
      "meanings": {
        "vi": "sáu cái ( đếm đồ vật nói chung)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-016",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "八つ",
      "readings": [
        "やっつ"
      ],
      "meanings": {
        "vi": "tám cái( đếm vật nói chung)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-017",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "四つ",
      "readings": [
        "よっつ"
      ],
      "meanings": {
        "vi": "bốn cái ( đếm đồ vật nói chung )"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-018",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "三人",
      "readings": [
        "さんにん"
      ],
      "meanings": {
        "vi": "3 người"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-019",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "四人",
      "readings": [
        "よにん"
      ],
      "meanings": {
        "vi": "4 người"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-020",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "十つ",
      "readings": [
        "とお"
      ],
      "meanings": {
        "vi": "mười cái"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-021",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "何人",
      "readings": [
        "なんにん"
      ],
      "meanings": {
        "vi": "bao nhiêu người"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-022",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "何本",
      "readings": [
        "なんぼん"
      ],
      "meanings": {
        "vi": "bao nhiêu cái (dài)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-023",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "何枚",
      "readings": [
        "なんまい"
      ],
      "meanings": {
        "vi": "bao nhiêu tấm/tờ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-024",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "何台",
      "readings": [
        "なんだい"
      ],
      "meanings": {
        "vi": "bao nhiêu chiếc (máy)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-025",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "何冊",
      "readings": [
        "なんさつ"
      ],
      "meanings": {
        "vi": "bao nhiêu cuốn"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-026",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "一枚",
      "readings": [
        "いちまい"
      ],
      "meanings": {
        "vi": "một tấm/tờ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-027",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "一台",
      "readings": [
        "いちだい"
      ],
      "meanings": {
        "vi": "một chiếc (máy/xe)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-028",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "一本",
      "readings": [
        "いっぽん"
      ],
      "meanings": {
        "vi": "một cái (dài)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-029",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "一冊",
      "readings": [
        "いっさつ"
      ],
      "meanings": {
        "vi": "một cuốn"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-030",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "一杯",
      "readings": [
        "いっぱい"
      ],
      "meanings": {
        "vi": "một cốc/bát"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-031",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "全部",
      "readings": [
        "ぜんぶ"
      ],
      "meanings": {
        "vi": "tất cả, toàn bộ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-032",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "両方",
      "readings": [
        "りょうほう"
      ],
      "meanings": {
        "vi": "cả hai"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-033",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "二十",
      "readings": [
        "にじゅう"
      ],
      "meanings": {
        "vi": "hai mươi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-034",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "三十",
      "readings": [
        "さんじゅう"
      ],
      "meanings": {
        "vi": "ba mươi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-035",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "四十",
      "readings": [
        "よんじゅう"
      ],
      "meanings": {
        "vi": "bốn mươi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-036",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "五十",
      "readings": [
        "ごじゅう"
      ],
      "meanings": {
        "vi": "năm mươi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-037",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "何歳",
      "readings": [
        "なんさい"
      ],
      "meanings": {
        "vi": "bao nhiêu tuổi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-038",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "～個",
      "readings": [
        "～こ"
      ],
      "meanings": {
        "vi": "...cái (đếm vật nhỏ)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-039",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "～回",
      "readings": [
        "～かい"
      ],
      "meanings": {
        "vi": "...lần"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-040",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "～階",
      "readings": [
        "～かい"
      ],
      "meanings": {
        "vi": "...tầng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-041",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "～番",
      "readings": [
        "～ばん"
      ],
      "meanings": {
        "vi": "số..."
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:numbers-042",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-numbers",
      "contentType": "vocabulary",
      "term": "第一",
      "readings": [
        "だいいち"
      ],
      "meanings": {
        "vi": "thứ nhất"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-001",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "朝",
      "readings": [
        "あさ"
      ],
      "meanings": {
        "vi": "buổi sáng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-002",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "朝ご飯",
      "readings": [
        "あさごはん"
      ],
      "meanings": {
        "vi": "bữa ăn sáng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-003",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "あさって",
      "readings": [
        "あさって"
      ],
      "meanings": {
        "vi": "ngày kia"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-004",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "明日",
      "readings": [
        "あした"
      ],
      "meanings": {
        "vi": "ngày mai"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-005",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "春",
      "readings": [
        "はる"
      ],
      "meanings": {
        "vi": "mùa xuân"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-006",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "夏",
      "readings": [
        "なつ"
      ],
      "meanings": {
        "vi": "mùa hạ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-007",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "秋",
      "readings": [
        "あき"
      ],
      "meanings": {
        "vi": "mùa thu"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-008",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "冬",
      "readings": [
        "ふゆ"
      ],
      "meanings": {
        "vi": "mùa đông"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-009",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "一日",
      "readings": [
        "いちにち",
        "ついたち"
      ],
      "meanings": {
        "vi": "Một ngày, ngày mồng 1"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-010",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "二日",
      "readings": [
        "ふつか"
      ],
      "meanings": {
        "vi": "2 ngày, ngày mồng 2"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-011",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "三日",
      "readings": [
        "みっか"
      ],
      "meanings": {
        "vi": "3 ngày, ngày mồng 3"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-012",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "四日",
      "readings": [
        "よっか"
      ],
      "meanings": {
        "vi": "4 ngày, ngày mồng 4"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-013",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "五日",
      "readings": [
        "いつか"
      ],
      "meanings": {
        "vi": "năm ngày, ngày mồng 5"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-014",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "六日",
      "readings": [
        "むいか"
      ],
      "meanings": {
        "vi": "6 ngày, ngày mồng 6"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-015",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "七日",
      "readings": [
        "なのか"
      ],
      "meanings": {
        "vi": "7 ngày, ngày mồng 7"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-016",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "八日",
      "readings": [
        "ようか"
      ],
      "meanings": {
        "vi": "8 ngày, ngày mồng 8"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-017",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "九日",
      "readings": [
        "ここのか"
      ],
      "meanings": {
        "vi": "9 ngày, ngày mồng 9"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-018",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "十日",
      "readings": [
        "とおか"
      ],
      "meanings": {
        "vi": "10 ngày, ngày mồng 10"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-019",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "今",
      "readings": [
        "いま"
      ],
      "meanings": {
        "vi": "bây giờ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-020",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "一昨年",
      "readings": [
        "おととし"
      ],
      "meanings": {
        "vi": "Năm kia"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-021",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "火曜日",
      "readings": [
        "かようび"
      ],
      "meanings": {
        "vi": "Thứ ba"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-022",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "昨日",
      "readings": [
        "きのう"
      ],
      "meanings": {
        "vi": "Hôm qua"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-023",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "今日",
      "readings": [
        "きょう"
      ],
      "meanings": {
        "vi": "Hôm nay"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-024",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "去年",
      "readings": [
        "きょねん"
      ],
      "meanings": {
        "vi": "năm ngoái"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-025",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "金曜日",
      "readings": [
        "きんようび"
      ],
      "meanings": {
        "vi": "Thứ sáu"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-026",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "今朝",
      "readings": [
        "けさ"
      ],
      "meanings": {
        "vi": "sáng nay"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-027",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "月曜日",
      "readings": [
        "げつようび"
      ],
      "meanings": {
        "vi": "thứ hai"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-028",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "午前",
      "readings": [
        "ごぜん"
      ],
      "meanings": {
        "vi": "buổi sáng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-029",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "今年",
      "readings": [
        "ことし"
      ],
      "meanings": {
        "vi": "năm nay"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-030",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "今月",
      "readings": [
        "こんげつ"
      ],
      "meanings": {
        "vi": "tháng này"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-031",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "今週",
      "readings": [
        "こんしゅう"
      ],
      "meanings": {
        "vi": "tuần này"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-032",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "今晩",
      "readings": [
        "こんばん"
      ],
      "meanings": {
        "vi": "tối nay"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-033",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "再来年",
      "readings": [
        "さらいねん"
      ],
      "meanings": {
        "vi": "năm sau nữa"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-034",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "授業",
      "readings": [
        "じゅぎょう"
      ],
      "meanings": {
        "vi": "giờ học"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-035",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "水曜日",
      "readings": [
        "すいようび"
      ],
      "meanings": {
        "vi": "Thứ tư"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-036",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "先月",
      "readings": [
        "せんげつ"
      ],
      "meanings": {
        "vi": "tháng trước"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-037",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "先週",
      "readings": [
        "せんしゅう"
      ],
      "meanings": {
        "vi": "tuần trước"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-038",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "年",
      "readings": [
        "とし"
      ],
      "meanings": {
        "vi": "năm"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-039",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "土曜日",
      "readings": [
        "どようび"
      ],
      "meanings": {
        "vi": "Thứ bảy"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-040",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "二十日",
      "readings": [
        "はつか"
      ],
      "meanings": {
        "vi": "ngày 20, 20 ngày"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-041",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "晩",
      "readings": [
        "ばん"
      ],
      "meanings": {
        "vi": "buổi tối"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-042",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "晩御飯",
      "readings": [
        "ばんごはん"
      ],
      "meanings": {
        "vi": "bữa ăn tối"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-043",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "東",
      "readings": [
        "ひがし"
      ],
      "meanings": {
        "vi": "phía Đông"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-044",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "一月",
      "readings": [
        "いちがつ"
      ],
      "meanings": {
        "vi": "tháng 1"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-045",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "昼",
      "readings": [
        "ひる"
      ],
      "meanings": {
        "vi": "buổi trưa, ban ngày"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-046",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "昼ご飯",
      "readings": [
        "ひるごはん"
      ],
      "meanings": {
        "vi": "ăn trưa"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-047",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "毎朝",
      "readings": [
        "まいあさ"
      ],
      "meanings": {
        "vi": "mỗi buổi sáng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-048",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "毎月",
      "readings": [
        "まいげつ/まいつき"
      ],
      "meanings": {
        "vi": "mỗi tháng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-049",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "毎週",
      "readings": [
        "まいしゅう"
      ],
      "meanings": {
        "vi": "mỗi tuần"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-050",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "毎日",
      "readings": [
        "まいにち"
      ],
      "meanings": {
        "vi": "mỗi ngày"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-051",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "毎年",
      "readings": [
        "まいねん/まいとし"
      ],
      "meanings": {
        "vi": "mỗi năm"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-052",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "毎晩",
      "readings": [
        "まいばん"
      ],
      "meanings": {
        "vi": "mỗi tối"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-053",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "木曜日",
      "readings": [
        "もくようび"
      ],
      "meanings": {
        "vi": "Thứ năm"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-054",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "夕方",
      "readings": [
        "ゆうがた"
      ],
      "meanings": {
        "vi": "chiều tối"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-055",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "夕飯",
      "readings": [
        "ゆうはん"
      ],
      "meanings": {
        "vi": "bữa ăn tối"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-056",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "ゆうべ",
      "readings": [
        "ゆうべ"
      ],
      "meanings": {
        "vi": "đêm qua"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-057",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "夜",
      "readings": [
        "よる"
      ],
      "meanings": {
        "vi": "buổi tối, ban đêm"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-058",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "来月",
      "readings": [
        "らいげつ"
      ],
      "meanings": {
        "vi": "tháng sau"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-059",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "来週",
      "readings": [
        "らいしゅう"
      ],
      "meanings": {
        "vi": "tuần sau"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-060",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "来年",
      "readings": [
        "らいねん"
      ],
      "meanings": {
        "vi": "năm sau"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-061",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "十四日",
      "readings": [
        "じゅうよっか"
      ],
      "meanings": {
        "vi": "Ngày 14"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-062",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "二十四日",
      "readings": [
        "にじゅうよっか"
      ],
      "meanings": {
        "vi": "Ngày 24"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-063",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "二月",
      "readings": [
        "にがつ"
      ],
      "meanings": {
        "vi": "Tháng 2"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-064",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "三月",
      "readings": [
        "さんがつ"
      ],
      "meanings": {
        "vi": "Tháng 3"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-065",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "四月",
      "readings": [
        "しがつ"
      ],
      "meanings": {
        "vi": "Tháng 4"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-066",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "五月",
      "readings": [
        "ごがつ"
      ],
      "meanings": {
        "vi": "Tháng 5"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-067",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "六月",
      "readings": [
        "ろくがつ"
      ],
      "meanings": {
        "vi": "Tháng 6"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-068",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "七月",
      "readings": [
        "しちがつ"
      ],
      "meanings": {
        "vi": "Tháng 7"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-069",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "八月",
      "readings": [
        "はちがつ"
      ],
      "meanings": {
        "vi": "Tháng 8"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-070",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "九月",
      "readings": [
        "くがつ"
      ],
      "meanings": {
        "vi": "Tháng 9"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-071",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "十月",
      "readings": [
        "じゅうがつ"
      ],
      "meanings": {
        "vi": "Tháng 10"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-072",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "十一月",
      "readings": [
        "じゅういちがつ"
      ],
      "meanings": {
        "vi": "Tháng 11"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-073",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "十二月",
      "readings": [
        "じゅうにがつ"
      ],
      "meanings": {
        "vi": "Tháng 12"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-074",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "一か月",
      "readings": [
        "いっかげつ"
      ],
      "meanings": {
        "vi": "1 tháng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-075",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "二か月",
      "readings": [
        "にかげつ"
      ],
      "meanings": {
        "vi": "2 tháng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-076",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "三か月",
      "readings": [
        "さんかげつ"
      ],
      "meanings": {
        "vi": "3 tháng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-077",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "四か月",
      "readings": [
        "よんかげつ"
      ],
      "meanings": {
        "vi": "4 tháng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-078",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "五か月",
      "readings": [
        "ごかげつ"
      ],
      "meanings": {
        "vi": "5 tháng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-079",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "六か月",
      "readings": [
        "ろっかげつ"
      ],
      "meanings": {
        "vi": "6 tháng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-080",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "一時",
      "readings": [
        "いちじ"
      ],
      "meanings": {
        "vi": "1 giờ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-081",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "二時",
      "readings": [
        "にじ"
      ],
      "meanings": {
        "vi": "2 giờ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-082",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "三時",
      "readings": [
        "さんじ"
      ],
      "meanings": {
        "vi": "3 giờ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-083",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "四時",
      "readings": [
        "よじ"
      ],
      "meanings": {
        "vi": "4 giờ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-084",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "五時",
      "readings": [
        "ごじ"
      ],
      "meanings": {
        "vi": "5 giờ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-085",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "六時",
      "readings": [
        "ろくじ"
      ],
      "meanings": {
        "vi": "6 giờ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-086",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "七時",
      "readings": [
        "しちじ"
      ],
      "meanings": {
        "vi": "7 giờ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-087",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "八時",
      "readings": [
        "はちじ"
      ],
      "meanings": {
        "vi": "8 giờ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-088",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "九時",
      "readings": [
        "くじ"
      ],
      "meanings": {
        "vi": "9 giờ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-089",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "十時",
      "readings": [
        "じゅうじ"
      ],
      "meanings": {
        "vi": "10 giờ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-090",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "十一時",
      "readings": [
        "じゅういちじ"
      ],
      "meanings": {
        "vi": "11 giờ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-091",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "十二時",
      "readings": [
        "じゅうにじ"
      ],
      "meanings": {
        "vi": "12 giờ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-092",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "一分",
      "readings": [
        "いっぷん"
      ],
      "meanings": {
        "vi": "1 phút"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-093",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "五分",
      "readings": [
        "ごふん"
      ],
      "meanings": {
        "vi": "5 phút"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-094",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "三十分",
      "readings": [
        "さんじゅっぷん"
      ],
      "meanings": {
        "vi": "30 phút"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-095",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "一時間",
      "readings": [
        "いちじかん"
      ],
      "meanings": {
        "vi": "1 tiếng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-096",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "一週間",
      "readings": [
        "いっしゅうかん"
      ],
      "meanings": {
        "vi": "1 tuần"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-097",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "一年",
      "readings": [
        "いちねん"
      ],
      "meanings": {
        "vi": "1 năm"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-098",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "今度",
      "readings": [
        "こんど"
      ],
      "meanings": {
        "vi": "lần này, lần tới"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-099",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "時",
      "readings": [
        "とき"
      ],
      "meanings": {
        "vi": "khi, lúc"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-100",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "頃",
      "readings": [
        "ごろ"
      ],
      "meanings": {
        "vi": "khoảng (thời gian)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:time-101",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-time",
      "contentType": "vocabulary",
      "term": "休憩",
      "readings": [
        "きゅうけい"
      ],
      "meanings": {
        "vi": "giải lao"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:people-001",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-people",
      "contentType": "vocabulary",
      "term": "兄",
      "readings": [
        "あに"
      ],
      "meanings": {
        "vi": "Anh trai ( mình)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:people-002",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-people",
      "contentType": "vocabulary",
      "term": "姉",
      "readings": [
        "あね"
      ],
      "meanings": {
        "vi": "Chị gái( mình)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:people-003",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-people",
      "contentType": "vocabulary",
      "term": "妹",
      "readings": [
        "いもうと"
      ],
      "meanings": {
        "vi": "em gái ( mình)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:people-004",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-people",
      "contentType": "vocabulary",
      "term": "英語",
      "readings": [
        "えいご"
      ],
      "meanings": {
        "vi": "Tiếng Anh"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:people-005",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-people",
      "contentType": "vocabulary",
      "term": "おじいさん",
      "readings": [
        "おじいさん"
      ],
      "meanings": {
        "vi": "ông ( nội, ngoại), ông già"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:people-006",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-people",
      "contentType": "vocabulary",
      "term": "弟",
      "readings": [
        "おとうと"
      ],
      "meanings": {
        "vi": "em trai ( mình)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:people-007",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-people",
      "contentType": "vocabulary",
      "term": "おばあさん",
      "readings": [
        "おばあさん"
      ],
      "meanings": {
        "vi": "bà ( nội, ngoại), bà già"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:people-008",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-people",
      "contentType": "vocabulary",
      "term": "家族",
      "readings": [
        "かぞく"
      ],
      "meanings": {
        "vi": "Gia đình"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:people-009",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-people",
      "contentType": "vocabulary",
      "term": "家庭",
      "readings": [
        "かてい"
      ],
      "meanings": {
        "vi": "gia đình"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:people-010",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-people",
      "contentType": "vocabulary",
      "term": "兄弟",
      "readings": [
        "きょうだい"
      ],
      "meanings": {
        "vi": "anh chị em"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:people-011",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-people",
      "contentType": "vocabulary",
      "term": "友達",
      "readings": [
        "ともだち"
      ],
      "meanings": {
        "vi": "bạn bè"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:people-012",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-people",
      "contentType": "vocabulary",
      "term": "両親",
      "readings": [
        "りょうしん"
      ],
      "meanings": {
        "vi": "bố mẹ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:people-013",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-people",
      "contentType": "vocabulary",
      "term": "母",
      "readings": [
        "はは"
      ],
      "meanings": {
        "vi": "Mẹ (của mình)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:people-014",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-people",
      "contentType": "vocabulary",
      "term": "イギリス",
      "readings": [
        "イギリス"
      ],
      "meanings": {
        "vi": "Anh"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:people-015",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-people",
      "contentType": "vocabulary",
      "term": "お母さん",
      "readings": [
        "おかあさん"
      ],
      "meanings": {
        "vi": "Mẹ ( khi nói về mẹ người khác)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:people-016",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-people",
      "contentType": "vocabulary",
      "term": "お父さん",
      "readings": [
        "おとうさん"
      ],
      "meanings": {
        "vi": "bố( dùng để nói về bố người khác)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:people-017",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-people",
      "contentType": "vocabulary",
      "term": "お兄さん",
      "readings": [
        "おにいさん"
      ],
      "meanings": {
        "vi": "anh trai( người khác)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:people-018",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-people",
      "contentType": "vocabulary",
      "term": "お姉さん",
      "readings": [
        "おねえさん"
      ],
      "meanings": {
        "vi": "chị gái( người khác)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:people-019",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-people",
      "contentType": "vocabulary",
      "term": "おじさん",
      "readings": [
        "おじさん"
      ],
      "meanings": {
        "vi": "chú, bác ( người đàn ông trung niên)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:people-020",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-people",
      "contentType": "vocabulary",
      "term": "奥さん",
      "readings": [
        "おくさん"
      ],
      "meanings": {
        "vi": "vợ ( khi nói về vợ người khác)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:people-021",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-people",
      "contentType": "vocabulary",
      "term": "大人",
      "readings": [
        "おとな"
      ],
      "meanings": {
        "vi": "người lớn"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:people-022",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-people",
      "contentType": "vocabulary",
      "term": "子供",
      "readings": [
        "こども"
      ],
      "meanings": {
        "vi": "trẻ em, con cái"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:people-023",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-people",
      "contentType": "vocabulary",
      "term": "外国人",
      "readings": [
        "がいこくじん"
      ],
      "meanings": {
        "vi": "người nước ngoài"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:people-024",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-people",
      "contentType": "vocabulary",
      "term": "皆さん",
      "readings": [
        "みなさん"
      ],
      "meanings": {
        "vi": "tất cả mọi người"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:people-025",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-people",
      "contentType": "vocabulary",
      "term": "男の人",
      "readings": [
        "おとこのひと"
      ],
      "meanings": {
        "vi": "đàn ông"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:people-026",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-people",
      "contentType": "vocabulary",
      "term": "女の人",
      "readings": [
        "おんなのひと"
      ],
      "meanings": {
        "vi": "phụ nữ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:people-027",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-people",
      "contentType": "vocabulary",
      "term": "警察",
      "readings": [
        "けいさつ"
      ],
      "meanings": {
        "vi": "cảnh sát"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:people-028",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-people",
      "contentType": "vocabulary",
      "term": "店員",
      "readings": [
        "てんいん"
      ],
      "meanings": {
        "vi": "nhân viên cửa hàng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:people-029",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-people",
      "contentType": "vocabulary",
      "term": "彼",
      "readings": [
        "かれ"
      ],
      "meanings": {
        "vi": "anh ấy"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:people-030",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-people",
      "contentType": "vocabulary",
      "term": "彼女",
      "readings": [
        "かのじょ"
      ],
      "meanings": {
        "vi": "cô ấy"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:people-031",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-people",
      "contentType": "vocabulary",
      "term": "お客さん",
      "readings": [
        "おきゃくさん"
      ],
      "meanings": {
        "vi": "khách"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:people-032",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-people",
      "contentType": "vocabulary",
      "term": "社長",
      "readings": [
        "しゃちょう"
      ],
      "meanings": {
        "vi": "giám đốc"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:people-033",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-people",
      "contentType": "vocabulary",
      "term": "部長",
      "readings": [
        "ぶちょう"
      ],
      "meanings": {
        "vi": "trưởng phòng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:people-034",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-people",
      "contentType": "vocabulary",
      "term": "課長",
      "readings": [
        "かちょう"
      ],
      "meanings": {
        "vi": "trưởng ban"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-001",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "ここ",
      "readings": [
        "ここ"
      ],
      "meanings": {
        "vi": "chỗ này"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-002",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "そこ",
      "readings": [
        "そこ"
      ],
      "meanings": {
        "vi": "chỗ đó"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-003",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "あそこ",
      "readings": [
        "あそこ"
      ],
      "meanings": {
        "vi": "Chỗ kia, đằng kia"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-004",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "そちら",
      "readings": [
        "そちら"
      ],
      "meanings": {
        "vi": "phía đó"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-005",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "あちら",
      "readings": [
        "あちら"
      ],
      "meanings": {
        "vi": "phía kia"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-006",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "家",
      "readings": [
        "いえ"
      ],
      "meanings": {
        "vi": "nhà"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-007",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "後ろ",
      "readings": [
        "うしろ"
      ],
      "meanings": {
        "vi": "đằng sau"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-008",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "海",
      "readings": [
        "うみ"
      ],
      "meanings": {
        "vi": "biển"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-009",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "駅",
      "readings": [
        "えき"
      ],
      "meanings": {
        "vi": "nhà ga"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-010",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "お手洗い",
      "readings": [
        "おてあらい"
      ],
      "meanings": {
        "vi": "nhà vệ sinh"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-011",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "一昨日",
      "readings": [
        "おととい"
      ],
      "meanings": {
        "vi": "hôm kia"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-012",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "外国",
      "readings": [
        "がいこく"
      ],
      "meanings": {
        "vi": "nước ngoài"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-013",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "会社",
      "readings": [
        "かいしゃ"
      ],
      "meanings": {
        "vi": "Công ty"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-014",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "学校",
      "readings": [
        "がっこう"
      ],
      "meanings": {
        "vi": "trường học"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-015",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "教室",
      "readings": [
        "きょうしつ"
      ],
      "meanings": {
        "vi": "phòng học, lớp học"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-016",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "銀行",
      "readings": [
        "ぎんこう"
      ],
      "meanings": {
        "vi": "Ngân hàng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-017",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "国",
      "readings": [
        "くに"
      ],
      "meanings": {
        "vi": "đất nước"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-018",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "クラス",
      "readings": [
        "クラス"
      ],
      "meanings": {
        "vi": "lớp học"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-019",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "公園",
      "readings": [
        "こうえん"
      ],
      "meanings": {
        "vi": "công viên"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-020",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "砂糖",
      "readings": [
        "さとう"
      ],
      "meanings": {
        "vi": "đường"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-021",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "宿題",
      "readings": [
        "しゅくだい"
      ],
      "meanings": {
        "vi": "bài tập về nhà"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-022",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "食堂",
      "readings": [
        "しょくどう"
      ],
      "meanings": {
        "vi": "phòng ăn, nhà ăn"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-023",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "そっち",
      "readings": [
        "そっち"
      ],
      "meanings": {
        "vi": "phía đó ( thể thông thường của そちら)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-024",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "外",
      "readings": [
        "そと"
      ],
      "meanings": {
        "vi": "ngoài"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-025",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "そば",
      "readings": [
        "そば"
      ],
      "meanings": {
        "vi": "gần, bên cạnh"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-026",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "大学",
      "readings": [
        "だいがく"
      ],
      "meanings": {
        "vi": "đại học"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-027",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "台所",
      "readings": [
        "だいどころ"
      ],
      "meanings": {
        "vi": "nhà bếp"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-028",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "建物",
      "readings": [
        "たてもの"
      ],
      "meanings": {
        "vi": "tòa nhà"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-029",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "デパート",
      "readings": [
        "デパート"
      ],
      "meanings": {
        "vi": "cửa hàng bách hóa"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-030",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "トイレ",
      "readings": [
        "トイレ"
      ],
      "meanings": {
        "vi": "nhà vệ sinh"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-031",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "所",
      "readings": [
        "ところ"
      ],
      "meanings": {
        "vi": "nơi, chỗ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-032",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "隣",
      "readings": [
        "となり"
      ],
      "meanings": {
        "vi": "bên cạnh"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-033",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "中",
      "readings": [
        "なか"
      ],
      "meanings": {
        "vi": "trong"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-034",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "左",
      "readings": [
        "ひだり"
      ],
      "meanings": {
        "vi": "phía bên tay trái"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-035",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "病院",
      "readings": [
        "びょういん"
      ],
      "meanings": {
        "vi": "bệnh viện"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-036",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "部屋",
      "readings": [
        "へや"
      ],
      "meanings": {
        "vi": "căn phòng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-037",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "前",
      "readings": [
        "まえ"
      ],
      "meanings": {
        "vi": "trước"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-038",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "右",
      "readings": [
        "みぎ"
      ],
      "meanings": {
        "vi": "bên phải"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-039",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "水",
      "readings": [
        "みず"
      ],
      "meanings": {
        "vi": "nước"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-040",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "店",
      "readings": [
        "みせ"
      ],
      "meanings": {
        "vi": "cửa hàng, cửa tiệm"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-041",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "道",
      "readings": [
        "みち"
      ],
      "meanings": {
        "vi": "đường phố"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-042",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "向こう",
      "readings": [
        "むこう"
      ],
      "meanings": {
        "vi": "phía bên kia"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-043",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "八百屋",
      "readings": [
        "やおや"
      ],
      "meanings": {
        "vi": "cửa hàng rau"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-044",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "郵便局",
      "readings": [
        "ゆうびんきょく"
      ],
      "meanings": {
        "vi": "bưu điện"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-045",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "横",
      "readings": [
        "よこ"
      ],
      "meanings": {
        "vi": "bên cạnh, bên, chiều rộng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-046",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "レストラン",
      "readings": [
        "レストラン"
      ],
      "meanings": {
        "vi": "nhà hàng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-047",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "後",
      "readings": [
        "あと"
      ],
      "meanings": {
        "vi": "sau đó"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-048",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "あのう",
      "readings": [
        "あのう"
      ],
      "meanings": {
        "vi": "à, ừm… (dùng trong giao tiếp, biểu thị sự ngại ngùng, do dự)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-049",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "その",
      "readings": [
        "その"
      ],
      "meanings": {
        "vi": "~đó"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-050",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "それから",
      "readings": [
        "それから"
      ],
      "meanings": {
        "vi": "sau đó"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-051",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "どこ",
      "readings": [
        "どこ"
      ],
      "meanings": {
        "vi": "chỗ nào"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-052",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "スーパー",
      "readings": [
        "スーパー"
      ],
      "meanings": {
        "vi": "Siêu thị"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-053",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "間",
      "readings": [
        "あいだ"
      ],
      "meanings": {
        "vi": "Giữa"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-054",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "会社員",
      "readings": [
        "かいしゃいん"
      ],
      "meanings": {
        "vi": "Nhân viên công ty"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-055",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "屋上",
      "readings": [
        "おくじょう"
      ],
      "meanings": {
        "vi": "sân thượng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-056",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "地下",
      "readings": [
        "ちか"
      ],
      "meanings": {
        "vi": "tầng hầm"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-057",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "受付",
      "readings": [
        "うけつけ"
      ],
      "meanings": {
        "vi": "quầy lễ tân"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-058",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "本屋",
      "readings": [
        "ほんや"
      ],
      "meanings": {
        "vi": "hiệu sách"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-059",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "花屋",
      "readings": [
        "はなや"
      ],
      "meanings": {
        "vi": "tiệm hoa"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-060",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "薬局",
      "readings": [
        "やっきょく"
      ],
      "meanings": {
        "vi": "nhà thuốc"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-061",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "動物園",
      "readings": [
        "どうぶつえん"
      ],
      "meanings": {
        "vi": "sở thú"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-062",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "神社",
      "readings": [
        "じんじゃ"
      ],
      "meanings": {
        "vi": "đền thờ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-063",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "お寺",
      "readings": [
        "おてら"
      ],
      "meanings": {
        "vi": "chùa"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:places-064",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-places",
      "contentType": "vocabulary",
      "term": "プラットホーム",
      "readings": [
        "プラットホーム"
      ],
      "meanings": {
        "vi": "sân ga"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-001",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "椅子",
      "readings": [
        "いす"
      ],
      "meanings": {
        "vi": "ghế"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-002",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "映画",
      "readings": [
        "えいが"
      ],
      "meanings": {
        "vi": "phim (điện ảnh)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-003",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "エレベーター",
      "readings": [
        "エレベーター"
      ],
      "meanings": {
        "vi": "thang máy"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-004",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "かぎ",
      "readings": [
        "かぎ"
      ],
      "meanings": {
        "vi": "chìa khóa"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-005",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "角",
      "readings": [
        "かど"
      ],
      "meanings": {
        "vi": "góc ( bàn,cua, quẹo)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-006",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "カメラ",
      "readings": [
        "カメラ"
      ],
      "meanings": {
        "vi": "máy ảnh"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-007",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "自動車",
      "readings": [
        "じどうしゃ"
      ],
      "meanings": {
        "vi": "ô tô, xe hơi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-008",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "写真",
      "readings": [
        "しゃしん"
      ],
      "meanings": {
        "vi": "ảnh"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-009",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "食べ物",
      "readings": [
        "たべもの"
      ],
      "meanings": {
        "vi": "đồ ăn"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-010",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "地図",
      "readings": [
        "ちず"
      ],
      "meanings": {
        "vi": "Bản đồ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-011",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "机",
      "readings": [
        "つくえ"
      ],
      "meanings": {
        "vi": "bàn"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-012",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "テープレコーダー",
      "readings": [
        "テープレコーダー"
      ],
      "meanings": {
        "vi": "máy ghi âm"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-013",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "出口",
      "readings": [
        "でぐち"
      ],
      "meanings": {
        "vi": "cửa ra, lối ra"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-014",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "テレビ",
      "readings": [
        "テレビ"
      ],
      "meanings": {
        "vi": "Tivi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-015",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "電話",
      "readings": [
        "でんわ"
      ],
      "meanings": {
        "vi": "điện thoại"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-016",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "戸",
      "readings": [
        "と"
      ],
      "meanings": {
        "vi": "Cửa"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-017",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "ドア",
      "readings": [
        "ドア"
      ],
      "meanings": {
        "vi": "Cửa"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-018",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "時計",
      "readings": [
        "とけい"
      ],
      "meanings": {
        "vi": "đồng hồ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-019",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "荷物",
      "readings": [
        "にもつ"
      ],
      "meanings": {
        "vi": "hành lý, đồ đạc"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-020",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "飲み物",
      "readings": [
        "のみもの"
      ],
      "meanings": {
        "vi": "đồ uống"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-021",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "箸",
      "readings": [
        "はし"
      ],
      "meanings": {
        "vi": "đũa"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-022",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "飛行機",
      "readings": [
        "ひこうき"
      ],
      "meanings": {
        "vi": "máy bay"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-023",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "窓",
      "readings": [
        "まど"
      ],
      "meanings": {
        "vi": "cửa sổ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-024",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "物",
      "readings": [
        "もの"
      ],
      "meanings": {
        "vi": "đồ vật"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-025",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "門",
      "readings": [
        "もん"
      ],
      "meanings": {
        "vi": "cổng, cửa"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-026",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "冷蔵庫",
      "readings": [
        "れいぞうこ"
      ],
      "meanings": {
        "vi": "tủ lạnh"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-027",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "コンピュ－タ－",
      "readings": [
        "コンピューター"
      ],
      "meanings": {
        "vi": "Máy vi tính"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-028",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "お金",
      "readings": [
        "おかね"
      ],
      "meanings": {
        "vi": "tiền"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-029",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "傘",
      "readings": [
        "かさ"
      ],
      "meanings": {
        "vi": "cái ô"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-030",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "お皿",
      "readings": [
        "おさら"
      ],
      "meanings": {
        "vi": "Cái đĩa"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-031",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "財布",
      "readings": [
        "さいふ"
      ],
      "meanings": {
        "vi": "cái ví"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-032",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "スプーン",
      "readings": [
        "スプーン"
      ],
      "meanings": {
        "vi": "cái thìa"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-033",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "ちゃわん",
      "readings": [
        "ちゃわん"
      ],
      "meanings": {
        "vi": "cái bát"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-034",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "テーブル",
      "readings": [
        "テーブル"
      ],
      "meanings": {
        "vi": "cái bàn"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-035",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "箱",
      "readings": [
        "はこ"
      ],
      "meanings": {
        "vi": "cái hộp"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-036",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "ベッド",
      "readings": [
        "ベッド"
      ],
      "meanings": {
        "vi": "cái giường"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-037",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "本",
      "readings": [
        "ほん"
      ],
      "meanings": {
        "vi": "cuốn sách"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-038",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "鞄",
      "readings": [
        "かばん"
      ],
      "meanings": {
        "vi": "Cái cặp, túi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-039",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "鍵",
      "readings": [
        "かぎ"
      ],
      "meanings": {
        "vi": "chìa khóa"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-040",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "鏡",
      "readings": [
        "かがみ"
      ],
      "meanings": {
        "vi": "cái gương"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-041",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "石鹸",
      "readings": [
        "せっけん"
      ],
      "meanings": {
        "vi": "xà phòng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-042",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "タオル",
      "readings": [
        "タオル"
      ],
      "meanings": {
        "vi": "khăn tắm"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-043",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "はさみ",
      "readings": [
        "はさみ"
      ],
      "meanings": {
        "vi": "cái kéo"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-044",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "のり",
      "readings": [
        "のり"
      ],
      "meanings": {
        "vi": "keo dán"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-045",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "お土産",
      "readings": [
        "おみやげ"
      ],
      "meanings": {
        "vi": "quà lưu niệm"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-046",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "お釣り",
      "readings": [
        "おつり"
      ],
      "meanings": {
        "vi": "tiền thối lại"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-047",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "エアコン",
      "readings": [
        "エアコン"
      ],
      "meanings": {
        "vi": "máy lạnh"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-048",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "洗濯機",
      "readings": [
        "せんたくき"
      ],
      "meanings": {
        "vi": "máy giặt"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-049",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "棚",
      "readings": [
        "たな"
      ],
      "meanings": {
        "vi": "kệ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:objects-050",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-objects",
      "contentType": "vocabulary",
      "term": "引き出し",
      "readings": [
        "ひきだし"
      ],
      "meanings": {
        "vi": "ngăn kéo"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:school-001",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-school",
      "contentType": "vocabulary",
      "term": "歌",
      "readings": [
        "うた"
      ],
      "meanings": {
        "vi": "bài hát"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:school-002",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-school",
      "contentType": "vocabulary",
      "term": "鉛筆",
      "readings": [
        "えんぴつ"
      ],
      "meanings": {
        "vi": "bút chì"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:school-003",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-school",
      "contentType": "vocabulary",
      "term": "学生",
      "readings": [
        "がくせい"
      ],
      "meanings": {
        "vi": "học sinh, sinh viên"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:school-004",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-school",
      "contentType": "vocabulary",
      "term": "かばん",
      "readings": [
        "かばん"
      ],
      "meanings": {
        "vi": "cặp, túi sách"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:school-005",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-school",
      "contentType": "vocabulary",
      "term": "漢字",
      "readings": [
        "かんじ"
      ],
      "meanings": {
        "vi": "chữ hán"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:school-006",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-school",
      "contentType": "vocabulary",
      "term": "声",
      "readings": [
        "こえ"
      ],
      "meanings": {
        "vi": "tiếng, giọng nói"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:school-007",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-school",
      "contentType": "vocabulary",
      "term": "雑誌",
      "readings": [
        "ざっし"
      ],
      "meanings": {
        "vi": "tạp chí"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:school-008",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-school",
      "contentType": "vocabulary",
      "term": "辞書",
      "readings": [
        "じしょ"
      ],
      "meanings": {
        "vi": "từ điển"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:school-009",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-school",
      "contentType": "vocabulary",
      "term": "新聞",
      "readings": [
        "しんぶん"
      ],
      "meanings": {
        "vi": "báo"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:school-010",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-school",
      "contentType": "vocabulary",
      "term": "生徒",
      "readings": [
        "せいと"
      ],
      "meanings": {
        "vi": "học sinh"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:school-011",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-school",
      "contentType": "vocabulary",
      "term": "先生",
      "readings": [
        "せんせい"
      ],
      "meanings": {
        "vi": "giáo viên, bác sĩ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:school-012",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-school",
      "contentType": "vocabulary",
      "term": "ペン",
      "readings": [
        "ペン"
      ],
      "meanings": {
        "vi": "bút"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:school-013",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-school",
      "contentType": "vocabulary",
      "term": "ボールペン",
      "readings": [
        "ボールペン"
      ],
      "meanings": {
        "vi": "bút bi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:school-014",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-school",
      "contentType": "vocabulary",
      "term": "ポケット",
      "readings": [
        "ポケット"
      ],
      "meanings": {
        "vi": "túi ( áo, quần)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:school-015",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-school",
      "contentType": "vocabulary",
      "term": "本棚",
      "readings": [
        "ほんだな"
      ],
      "meanings": {
        "vi": "giá sách"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:school-016",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-school",
      "contentType": "vocabulary",
      "term": "万年筆",
      "readings": [
        "まんねんひつ"
      ],
      "meanings": {
        "vi": "bút mực"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:school-017",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-school",
      "contentType": "vocabulary",
      "term": "留学生",
      "readings": [
        "りゅうがくせい"
      ],
      "meanings": {
        "vi": "du học sinh"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:school-018",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-school",
      "contentType": "vocabulary",
      "term": "廊下",
      "readings": [
        "ろうか"
      ],
      "meanings": {
        "vi": "hành lang"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:school-019",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-school",
      "contentType": "vocabulary",
      "term": "ノート",
      "readings": [
        "ノート"
      ],
      "meanings": {
        "vi": "Quyển vở"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:school-020",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-school",
      "contentType": "vocabulary",
      "term": "試験",
      "readings": [
        "しけん"
      ],
      "meanings": {
        "vi": "kỳ thi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:school-021",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-school",
      "contentType": "vocabulary",
      "term": "答え",
      "readings": [
        "こたえ"
      ],
      "meanings": {
        "vi": "câu trả lời"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:school-022",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-school",
      "contentType": "vocabulary",
      "term": "黒板",
      "readings": [
        "こくばん"
      ],
      "meanings": {
        "vi": "bảng đen"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:school-023",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-school",
      "contentType": "vocabulary",
      "term": "成績",
      "readings": [
        "せいせき"
      ],
      "meanings": {
        "vi": "thành tích"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:school-024",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-school",
      "contentType": "vocabulary",
      "term": "卒業",
      "readings": [
        "そつぎょう"
      ],
      "meanings": {
        "vi": "tốt nghiệp"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:school-025",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-school",
      "contentType": "vocabulary",
      "term": "入学",
      "readings": [
        "にゅうがく"
      ],
      "meanings": {
        "vi": "nhập học"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:school-026",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-school",
      "contentType": "vocabulary",
      "term": "休学",
      "readings": [
        "きゅうがく"
      ],
      "meanings": {
        "vi": "nghỉ học"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:school-027",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-school",
      "contentType": "vocabulary",
      "term": "遅刻",
      "readings": [
        "ちこく"
      ],
      "meanings": {
        "vi": "đi muộn"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:school-028",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-school",
      "contentType": "vocabulary",
      "term": "早退",
      "readings": [
        "そうたい"
      ],
      "meanings": {
        "vi": "về sớm"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-001",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "飴",
      "readings": [
        "あめ"
      ],
      "meanings": {
        "vi": "kẹo ( ngậm)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-002",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "お菓子",
      "readings": [
        "おかし"
      ],
      "meanings": {
        "vi": "Bánh, kẹo"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-003",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "お酒",
      "readings": [
        "おさけ"
      ],
      "meanings": {
        "vi": "rượu,"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-004",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "お茶",
      "readings": [
        "おちゃ"
      ],
      "meanings": {
        "vi": "trà"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-005",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "お弁当",
      "readings": [
        "おべんとう"
      ],
      "meanings": {
        "vi": "cơm hộp"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-006",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "牛肉",
      "readings": [
        "ぎゅうにく"
      ],
      "meanings": {
        "vi": "thịt bò"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-007",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "牛乳",
      "readings": [
        "ぎゅうにゅう"
      ],
      "meanings": {
        "vi": "sữa( bò)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-008",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "紅茶",
      "readings": [
        "こうちゃ"
      ],
      "meanings": {
        "vi": "trà đen"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-009",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "コーヒー",
      "readings": [
        "コーヒー"
      ],
      "meanings": {
        "vi": "cà phê"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-010",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "御飯",
      "readings": [
        "ごはん"
      ],
      "meanings": {
        "vi": "cơm, bữa ăn"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-011",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "魚",
      "readings": [
        "さかな"
      ],
      "meanings": {
        "vi": "cá"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-012",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "卵",
      "readings": [
        "たまご"
      ],
      "meanings": {
        "vi": "trứng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-013",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "茶色",
      "readings": [
        "ちゃいろ"
      ],
      "meanings": {
        "vi": "màu nâu( màu trà)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-014",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "とり肉",
      "readings": [
        "とりにく"
      ],
      "meanings": {
        "vi": "thịt gà"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-015",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "肉",
      "readings": [
        "にく"
      ],
      "meanings": {
        "vi": "thịt"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-016",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "パン",
      "readings": [
        "パン"
      ],
      "meanings": {
        "vi": "bánh mì"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-017",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "豚肉",
      "readings": [
        "ぶたにく"
      ],
      "meanings": {
        "vi": "thịt lợn"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-018",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "野菜",
      "readings": [
        "やさい"
      ],
      "meanings": {
        "vi": "rau"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-019",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "料理",
      "readings": [
        "りょうり"
      ],
      "meanings": {
        "vi": "nấu ăn, món ăn"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-020",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "食べる",
      "readings": [
        "たべる"
      ],
      "meanings": {
        "vi": "ăn"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-021",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "作る",
      "readings": [
        "つくる"
      ],
      "meanings": {
        "vi": "làm, chế tạo, nấu ăn"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-022",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "飲む",
      "readings": [
        "のむ"
      ],
      "meanings": {
        "vi": "uống"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-023",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "食べます",
      "readings": [
        "たべます",
        "たべる"
      ],
      "meanings": {
        "vi": "Ăn"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-024",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "飲みます",
      "readings": [
        "のみます",
        "のむ"
      ],
      "meanings": {
        "vi": "Uống"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-025",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "果物",
      "readings": [
        "くだもの"
      ],
      "meanings": {
        "vi": "hoa quả, trái cây"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-026",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "ジュース",
      "readings": [
        "じゅーす"
      ],
      "meanings": {
        "vi": "Nước ép quả"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-027",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "ご飯",
      "readings": [
        "ごはん"
      ],
      "meanings": {
        "vi": "cơm"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-028",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "味噌汁",
      "readings": [
        "みそしる"
      ],
      "meanings": {
        "vi": "canh miso"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-029",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "弁当",
      "readings": [
        "べんとう"
      ],
      "meanings": {
        "vi": "cơm hộp"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-030",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "晩ご飯",
      "readings": [
        "ばんごはん"
      ],
      "meanings": {
        "vi": "bữa tối"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-031",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "おにぎり",
      "readings": [
        "おにぎり"
      ],
      "meanings": {
        "vi": "cơm nắm"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-032",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "うどん",
      "readings": [
        "うどん"
      ],
      "meanings": {
        "vi": "mì udon"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-033",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "ラーメン",
      "readings": [
        "ラーメン"
      ],
      "meanings": {
        "vi": "mì ramen"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-034",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "サラダ",
      "readings": [
        "サラダ"
      ],
      "meanings": {
        "vi": "salad"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-035",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "サンドイッチ",
      "readings": [
        "サンドイッチ"
      ],
      "meanings": {
        "vi": "bánh sandwich"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-036",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "りんご",
      "readings": [
        "りんご"
      ],
      "meanings": {
        "vi": "táo"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:food-037",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-food",
      "contentType": "vocabulary",
      "term": "みかん",
      "readings": [
        "みかん"
      ],
      "meanings": {
        "vi": "quýt"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:body-001",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-body",
      "contentType": "vocabulary",
      "term": "足",
      "readings": [
        "あし"
      ],
      "meanings": {
        "vi": "chân"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:body-002",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-body",
      "contentType": "vocabulary",
      "term": "頭",
      "readings": [
        "あたま"
      ],
      "meanings": {
        "vi": "đầu"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:body-003",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-body",
      "contentType": "vocabulary",
      "term": "おなか",
      "readings": [
        "おなか"
      ],
      "meanings": {
        "vi": "bụng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:body-004",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-body",
      "contentType": "vocabulary",
      "term": "カップ",
      "readings": [
        "カップ"
      ],
      "meanings": {
        "vi": "Cốc ( có tay cầm)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:body-005",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-body",
      "contentType": "vocabulary",
      "term": "薬",
      "readings": [
        "くすり"
      ],
      "meanings": {
        "vi": "thuốc"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:body-006",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-body",
      "contentType": "vocabulary",
      "term": "口",
      "readings": [
        "くち"
      ],
      "meanings": {
        "vi": "miệng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:body-007",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-body",
      "contentType": "vocabulary",
      "term": "背",
      "readings": [
        "せ"
      ],
      "meanings": {
        "vi": "lưng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:body-008",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-body",
      "contentType": "vocabulary",
      "term": "手",
      "readings": [
        "て"
      ],
      "meanings": {
        "vi": "tay"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:body-009",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-body",
      "contentType": "vocabulary",
      "term": "歯",
      "readings": [
        "は"
      ],
      "meanings": {
        "vi": "răng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:body-010",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-body",
      "contentType": "vocabulary",
      "term": "灰皿",
      "readings": [
        "はいざら"
      ],
      "meanings": {
        "vi": "gạt tàn thuốc"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:body-011",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-body",
      "contentType": "vocabulary",
      "term": "鼻",
      "readings": [
        "はな"
      ],
      "meanings": {
        "vi": "mũi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:body-012",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-body",
      "contentType": "vocabulary",
      "term": "ハンカチ",
      "readings": [
        "ハンカチ"
      ],
      "meanings": {
        "vi": "khăn tay"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:body-013",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-body",
      "contentType": "vocabulary",
      "term": "病気",
      "readings": [
        "びょうき"
      ],
      "meanings": {
        "vi": "bệnh"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:body-014",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-body",
      "contentType": "vocabulary",
      "term": "耳",
      "readings": [
        "みみ"
      ],
      "meanings": {
        "vi": "tai"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:body-015",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-body",
      "contentType": "vocabulary",
      "term": "目",
      "readings": [
        "め"
      ],
      "meanings": {
        "vi": "mắt"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:body-016",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-body",
      "contentType": "vocabulary",
      "term": "痛い",
      "readings": [
        "いたい"
      ],
      "meanings": {
        "vi": "đau"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:body-017",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-body",
      "contentType": "vocabulary",
      "term": "顔",
      "readings": [
        "かお"
      ],
      "meanings": {
        "vi": "Khuôn mặt"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:body-018",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-body",
      "contentType": "vocabulary",
      "term": "お腹",
      "readings": [
        "おなか"
      ],
      "meanings": {
        "vi": "Bụng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:body-019",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-body",
      "contentType": "vocabulary",
      "term": "指",
      "readings": [
        "ゆび"
      ],
      "meanings": {
        "vi": "ngón tay"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:body-020",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-body",
      "contentType": "vocabulary",
      "term": "首",
      "readings": [
        "くび"
      ],
      "meanings": {
        "vi": "cổ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:body-021",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-body",
      "contentType": "vocabulary",
      "term": "肩",
      "readings": [
        "かた"
      ],
      "meanings": {
        "vi": "vai"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:body-022",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-body",
      "contentType": "vocabulary",
      "term": "胸",
      "readings": [
        "むね"
      ],
      "meanings": {
        "vi": "ngực"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:body-023",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-body",
      "contentType": "vocabulary",
      "term": "膝",
      "readings": [
        "ひざ"
      ],
      "meanings": {
        "vi": "đầu gối"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:body-024",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-body",
      "contentType": "vocabulary",
      "term": "涙",
      "readings": [
        "なみだ"
      ],
      "meanings": {
        "vi": "nước mắt"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:body-025",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-body",
      "contentType": "vocabulary",
      "term": "体",
      "readings": [
        "からだ"
      ],
      "meanings": {
        "vi": "cơ thể"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:body-026",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-body",
      "contentType": "vocabulary",
      "term": "力",
      "readings": [
        "ちから"
      ],
      "meanings": {
        "vi": "sức lực"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:nature-001",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-nature",
      "contentType": "vocabulary",
      "term": "雨",
      "readings": [
        "あめ"
      ],
      "meanings": {
        "vi": "mưa"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:nature-002",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-nature",
      "contentType": "vocabulary",
      "term": "犬",
      "readings": [
        "いぬ"
      ],
      "meanings": {
        "vi": "con chó"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:nature-003",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-nature",
      "contentType": "vocabulary",
      "term": "風",
      "readings": [
        "かぜ"
      ],
      "meanings": {
        "vi": "gió"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:nature-004",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-nature",
      "contentType": "vocabulary",
      "term": "花瓶",
      "readings": [
        "かびん"
      ],
      "meanings": {
        "vi": "bình hoa, lọ hoa"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:nature-005",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-nature",
      "contentType": "vocabulary",
      "term": "川",
      "readings": [
        "かわ"
      ],
      "meanings": {
        "vi": "sông"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:nature-006",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-nature",
      "contentType": "vocabulary",
      "term": "木",
      "readings": [
        "き"
      ],
      "meanings": {
        "vi": "cây, gỗ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:nature-007",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-nature",
      "contentType": "vocabulary",
      "term": "シャワー",
      "readings": [
        "シャワー"
      ],
      "meanings": {
        "vi": "vòi hoa sen"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:nature-008",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-nature",
      "contentType": "vocabulary",
      "term": "空",
      "readings": [
        "そら"
      ],
      "meanings": {
        "vi": "bầu trời"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:nature-009",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-nature",
      "contentType": "vocabulary",
      "term": "動物",
      "readings": [
        "どうぶつ"
      ],
      "meanings": {
        "vi": "động vật"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:nature-010",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-nature",
      "contentType": "vocabulary",
      "term": "鳥",
      "readings": [
        "とり"
      ],
      "meanings": {
        "vi": "con chim"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:nature-011",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-nature",
      "contentType": "vocabulary",
      "term": "猫",
      "readings": [
        "ねこ"
      ],
      "meanings": {
        "vi": "mèo"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:nature-012",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-nature",
      "contentType": "vocabulary",
      "term": "花",
      "readings": [
        "はな"
      ],
      "meanings": {
        "vi": "hoa"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:nature-013",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-nature",
      "contentType": "vocabulary",
      "term": "町",
      "readings": [
        "まち"
      ],
      "meanings": {
        "vi": "thị xã, thành phố"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:nature-014",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-nature",
      "contentType": "vocabulary",
      "term": "緑",
      "readings": [
        "みどり"
      ],
      "meanings": {
        "vi": "màu xanh lá cây"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:nature-015",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-nature",
      "contentType": "vocabulary",
      "term": "村",
      "readings": [
        "むら"
      ],
      "meanings": {
        "vi": "làng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:nature-016",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-nature",
      "contentType": "vocabulary",
      "term": "山",
      "readings": [
        "やま"
      ],
      "meanings": {
        "vi": "núi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:nature-017",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-nature",
      "contentType": "vocabulary",
      "term": "池",
      "readings": [
        "いけ"
      ],
      "meanings": {
        "vi": "cái ao"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:nature-018",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-nature",
      "contentType": "vocabulary",
      "term": "星",
      "readings": [
        "ほし"
      ],
      "meanings": {
        "vi": "ngôi sao"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:nature-019",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-nature",
      "contentType": "vocabulary",
      "term": "月",
      "readings": [
        "つき"
      ],
      "meanings": {
        "vi": "mặt trăng, tháng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:nature-020",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-nature",
      "contentType": "vocabulary",
      "term": "太陽",
      "readings": [
        "たいよう"
      ],
      "meanings": {
        "vi": "mặt trời"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:nature-021",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-nature",
      "contentType": "vocabulary",
      "term": "虫",
      "readings": [
        "むし"
      ],
      "meanings": {
        "vi": "côn trùng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:nature-022",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-nature",
      "contentType": "vocabulary",
      "term": "象",
      "readings": [
        "ぞう"
      ],
      "meanings": {
        "vi": "con voi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:nature-023",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-nature",
      "contentType": "vocabulary",
      "term": "島",
      "readings": [
        "しま"
      ],
      "meanings": {
        "vi": "hòn đảo"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:colors-001",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-colors",
      "contentType": "vocabulary",
      "term": "色",
      "readings": [
        "いろ"
      ],
      "meanings": {
        "vi": "màu"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:colors-002",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-colors",
      "contentType": "vocabulary",
      "term": "黄色",
      "readings": [
        "きいろ"
      ],
      "meanings": {
        "vi": "màu vàng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:colors-003",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-colors",
      "contentType": "vocabulary",
      "term": "黒",
      "readings": [
        "くろ"
      ],
      "meanings": {
        "vi": "đen, màu đen"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:colors-004",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-colors",
      "contentType": "vocabulary",
      "term": "青い",
      "readings": [
        "あおい"
      ],
      "meanings": {
        "vi": "Xanh da trời"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:colors-005",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-colors",
      "contentType": "vocabulary",
      "term": "赤い",
      "readings": [
        "あかい"
      ],
      "meanings": {
        "vi": "màu đỏ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:colors-006",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-colors",
      "contentType": "vocabulary",
      "term": "黄色い",
      "readings": [
        "きいろい"
      ],
      "meanings": {
        "vi": "màu vàng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:colors-007",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-colors",
      "contentType": "vocabulary",
      "term": "白い",
      "readings": [
        "しろい"
      ],
      "meanings": {
        "vi": "trắng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:colors-008",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-colors",
      "contentType": "vocabulary",
      "term": "黒い",
      "readings": [
        "くろい"
      ],
      "meanings": {
        "vi": "Đen"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:colors-009",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-colors",
      "contentType": "vocabulary",
      "term": "灰色",
      "readings": [
        "はいいろ"
      ],
      "meanings": {
        "vi": "màu xám"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:colors-010",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-colors",
      "contentType": "vocabulary",
      "term": "紫",
      "readings": [
        "むらさき"
      ],
      "meanings": {
        "vi": "màu tím"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:colors-011",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-colors",
      "contentType": "vocabulary",
      "term": "オレンジ",
      "readings": [
        "オレンジ"
      ],
      "meanings": {
        "vi": "màu cam"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:clothes-001",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-clothes",
      "contentType": "vocabulary",
      "term": "上着",
      "readings": [
        "うわぎ"
      ],
      "meanings": {
        "vi": "áo khoác"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:clothes-002",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-clothes",
      "contentType": "vocabulary",
      "term": "靴",
      "readings": [
        "くつ"
      ],
      "meanings": {
        "vi": "giày dép"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:clothes-003",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-clothes",
      "contentType": "vocabulary",
      "term": "コート",
      "readings": [
        "コート"
      ],
      "meanings": {
        "vi": "áo khoác"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:clothes-004",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-clothes",
      "contentType": "vocabulary",
      "term": "シャツ",
      "readings": [
        "シャツ"
      ],
      "meanings": {
        "vi": "áo sơ mi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:clothes-005",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-clothes",
      "contentType": "vocabulary",
      "term": "ズボン",
      "readings": [
        "ズボン"
      ],
      "meanings": {
        "vi": "quần"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:clothes-006",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-clothes",
      "contentType": "vocabulary",
      "term": "セーター",
      "readings": [
        "セーター"
      ],
      "meanings": {
        "vi": "áo len"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:clothes-007",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-clothes",
      "contentType": "vocabulary",
      "term": "ネクタイ",
      "readings": [
        "ネクタイ"
      ],
      "meanings": {
        "vi": "cà vạt, cà vạt"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:clothes-008",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-clothes",
      "contentType": "vocabulary",
      "term": "服",
      "readings": [
        "ふく"
      ],
      "meanings": {
        "vi": "quần áo"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:clothes-009",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-clothes",
      "contentType": "vocabulary",
      "term": "帽子",
      "readings": [
        "ぼうし"
      ],
      "meanings": {
        "vi": "mũ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:clothes-010",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-clothes",
      "contentType": "vocabulary",
      "term": "眼鏡",
      "readings": [
        "めがね"
      ],
      "meanings": {
        "vi": "kính"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:clothes-011",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-clothes",
      "contentType": "vocabulary",
      "term": "洋服",
      "readings": [
        "ようふく"
      ],
      "meanings": {
        "vi": "quần áo kiểu phương Tây"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:clothes-012",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-clothes",
      "contentType": "vocabulary",
      "term": "ワイシャツ",
      "readings": [
        "ワイシャツ"
      ],
      "meanings": {
        "vi": "áo sơ mi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:clothes-013",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-clothes",
      "contentType": "vocabulary",
      "term": "着る",
      "readings": [
        "きる"
      ],
      "meanings": {
        "vi": "mặc( đưa từ trên xuống như áo…)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:clothes-014",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-clothes",
      "contentType": "vocabulary",
      "term": "履く",
      "readings": [
        "はく"
      ],
      "meanings": {
        "vi": "mặc, đi ( từ dưới lên)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:clothes-015",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-clothes",
      "contentType": "vocabulary",
      "term": "持つ",
      "readings": [
        "もつ"
      ],
      "meanings": {
        "vi": "mang, cầm"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:clothes-016",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-clothes",
      "contentType": "vocabulary",
      "term": "靴下",
      "readings": [
        "くつした"
      ],
      "meanings": {
        "vi": "cái tất"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:clothes-017",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-clothes",
      "contentType": "vocabulary",
      "term": "ジーンズ",
      "readings": [
        "ジーンズ"
      ],
      "meanings": {
        "vi": "quần jean"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:clothes-018",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-clothes",
      "contentType": "vocabulary",
      "term": "手袋",
      "readings": [
        "てぶくろ"
      ],
      "meanings": {
        "vi": "găng tay"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:clothes-019",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-clothes",
      "contentType": "vocabulary",
      "term": "サンダル",
      "readings": [
        "サンダル"
      ],
      "meanings": {
        "vi": "dép xăng đan"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:clothes-020",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-clothes",
      "contentType": "vocabulary",
      "term": "アクセサリー",
      "readings": [
        "アクセサリー"
      ],
      "meanings": {
        "vi": "phụ kiện"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:transport-001",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-transport",
      "contentType": "vocabulary",
      "term": "切符",
      "readings": [
        "きっぷ"
      ],
      "meanings": {
        "vi": "vé (tàu, xe)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:transport-002",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-transport",
      "contentType": "vocabulary",
      "term": "車",
      "readings": [
        "くるま"
      ],
      "meanings": {
        "vi": "xe hơi, xe"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:transport-003",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-transport",
      "contentType": "vocabulary",
      "term": "自転車",
      "readings": [
        "じてんしゃ"
      ],
      "meanings": {
        "vi": "xe đạp"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:transport-004",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-transport",
      "contentType": "vocabulary",
      "term": "タクシー",
      "readings": [
        "タクシー"
      ],
      "meanings": {
        "vi": "xe taxi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:transport-005",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-transport",
      "contentType": "vocabulary",
      "term": "地下鉄",
      "readings": [
        "ちかてつ"
      ],
      "meanings": {
        "vi": "tàu điện ngầm"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:transport-006",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-transport",
      "contentType": "vocabulary",
      "term": "電車",
      "readings": [
        "でんしゃ"
      ],
      "meanings": {
        "vi": "tàu điện"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:transport-007",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-transport",
      "contentType": "vocabulary",
      "term": "バス",
      "readings": [
        "バス"
      ],
      "meanings": {
        "vi": "xe buýt"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:transport-008",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-transport",
      "contentType": "vocabulary",
      "term": "船",
      "readings": [
        "ふね"
      ],
      "meanings": {
        "vi": "Thuyền"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:transport-009",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-transport",
      "contentType": "vocabulary",
      "term": "信号",
      "readings": [
        "しんごう"
      ],
      "meanings": {
        "vi": "Đèn giao thông"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:transport-010",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-transport",
      "contentType": "vocabulary",
      "term": "バイク",
      "readings": [
        "バイク"
      ],
      "meanings": {
        "vi": "xe máy"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:transport-011",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-transport",
      "contentType": "vocabulary",
      "term": "空港",
      "readings": [
        "くうこう"
      ],
      "meanings": {
        "vi": "sân bay"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:transport-012",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-transport",
      "contentType": "vocabulary",
      "term": "止まります",
      "readings": [
        "とまります",
        "とまる"
      ],
      "meanings": {
        "vi": "dừng lại"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:transport-013",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-transport",
      "contentType": "vocabulary",
      "term": "乗り物",
      "readings": [
        "のりもの"
      ],
      "meanings": {
        "vi": "phương tiện"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:transport-014",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-transport",
      "contentType": "vocabulary",
      "term": "運転",
      "readings": [
        "うんてん"
      ],
      "meanings": {
        "vi": "lái xe"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-001",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "こんな",
      "readings": [
        "こんな"
      ],
      "meanings": {
        "vi": "như thế này"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-002",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "みんな",
      "readings": [
        "みんな"
      ],
      "meanings": {
        "vi": "tất cả"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-003",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "明い",
      "readings": [
        "あかるい"
      ],
      "meanings": {
        "vi": "sáng, tươi sáng, vui vẻ, sáng sủa"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-004",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "暖かい",
      "readings": [
        "あたたかい"
      ],
      "meanings": {
        "vi": "ấm áp"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-005",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "新しい",
      "readings": [
        "あたらしい"
      ],
      "meanings": {
        "vi": "mới"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-006",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "暑い",
      "readings": [
        "あつい"
      ],
      "meanings": {
        "vi": "nóng( thời tiết)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-007",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "熱い",
      "readings": [
        "あつい"
      ],
      "meanings": {
        "vi": "nóng ( khi chạm vào)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-008",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "厚い",
      "readings": [
        "あつい"
      ],
      "meanings": {
        "vi": "dày"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-009",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "危ない",
      "readings": [
        "あぶない"
      ],
      "meanings": {
        "vi": "nguy hiểm"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-010",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "甘い",
      "readings": [
        "あまい"
      ],
      "meanings": {
        "vi": "ngọt,ngọt ngào"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-011",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "いい/よい",
      "readings": [
        "いい/よい"
      ],
      "meanings": {
        "vi": "tốt"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-012",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "忙しい",
      "readings": [
        "いそがしい"
      ],
      "meanings": {
        "vi": "bận rộn"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-013",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "うるさい",
      "readings": [
        "うるさい"
      ],
      "meanings": {
        "vi": "ồn ào, gây phiền nhiễu"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-014",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "美味しい",
      "readings": [
        "おいしい"
      ],
      "meanings": {
        "vi": "ngon"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-015",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "多い",
      "readings": [
        "おおい"
      ],
      "meanings": {
        "vi": "nhiều"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-016",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "大きい",
      "readings": [
        "おおきい"
      ],
      "meanings": {
        "vi": "to, lớn"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-017",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "遅い",
      "readings": [
        "おそい"
      ],
      "meanings": {
        "vi": "muộn, chậm"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-018",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "重い",
      "readings": [
        "おもい"
      ],
      "meanings": {
        "vi": "nặng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-019",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "おもしろい",
      "readings": [
        "おもしろい"
      ],
      "meanings": {
        "vi": "thú vị"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-020",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "辛い",
      "readings": [
        "からい"
      ],
      "meanings": {
        "vi": "cay"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-021",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "軽い",
      "readings": [
        "かるい"
      ],
      "meanings": {
        "vi": "nhẹ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-022",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "かわいい",
      "readings": [
        "かわいい"
      ],
      "meanings": {
        "vi": "dễ thương"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-023",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "汚い",
      "readings": [
        "きたない"
      ],
      "meanings": {
        "vi": "bẩn"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-024",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "暗い",
      "readings": [
        "くらい"
      ],
      "meanings": {
        "vi": "tối"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-025",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "寒い",
      "readings": [
        "さむい"
      ],
      "meanings": {
        "vi": "lạnh"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-026",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "少ない",
      "readings": [
        "すくない"
      ],
      "meanings": {
        "vi": "một chút, một ít"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-027",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "涼しい",
      "readings": [
        "すずしい"
      ],
      "meanings": {
        "vi": "mát"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-028",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "狭い",
      "readings": [
        "せまい"
      ],
      "meanings": {
        "vi": "hẹp"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-029",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "楽しい",
      "readings": [
        "たのしい"
      ],
      "meanings": {
        "vi": "vui"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-030",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "小さい",
      "readings": [
        "ちいさい"
      ],
      "meanings": {
        "vi": "nhỏ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-031",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "近い",
      "readings": [
        "ちかい"
      ],
      "meanings": {
        "vi": "gần"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-032",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "つまらない",
      "readings": [
        "つまらない"
      ],
      "meanings": {
        "vi": "nhàm chán"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-033",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "冷たい",
      "readings": [
        "つめたい"
      ],
      "meanings": {
        "vi": "lạnh,buốt ( khi chạm vào)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-034",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "遠い",
      "readings": [
        "とおい"
      ],
      "meanings": {
        "vi": "xa"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-035",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "長い",
      "readings": [
        "ながい"
      ],
      "meanings": {
        "vi": "dài"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-036",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "早い",
      "readings": [
        "はやい"
      ],
      "meanings": {
        "vi": "sớm"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-037",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "速い",
      "readings": [
        "はやい"
      ],
      "meanings": {
        "vi": "nhanh chóng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-038",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "広い",
      "readings": [
        "ひろい"
      ],
      "meanings": {
        "vi": "rộng rãi, rộng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-039",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "太い",
      "readings": [
        "ふとい"
      ],
      "meanings": {
        "vi": "béo"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-040",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "古い",
      "readings": [
        "ふるい"
      ],
      "meanings": {
        "vi": "cũ ( không dùng cho người)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-041",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "欲しい",
      "readings": [
        "ほしい"
      ],
      "meanings": {
        "vi": "muốn"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-042",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "細い",
      "readings": [
        "ほそい"
      ],
      "meanings": {
        "vi": "gầy, hẹp, thon"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-043",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "まずい",
      "readings": [
        "まずい"
      ],
      "meanings": {
        "vi": "dở ( món ăn), không ổn rồi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-044",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "丸い",
      "readings": [
        "まるい"
      ],
      "meanings": {
        "vi": "tròn,"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-045",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "短い",
      "readings": [
        "みじかい"
      ],
      "meanings": {
        "vi": "ngắn"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-046",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "難しい",
      "readings": [
        "むずかしい"
      ],
      "meanings": {
        "vi": "khó"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-047",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "安い",
      "readings": [
        "やすい"
      ],
      "meanings": {
        "vi": "giá rẻ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-048",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "弱い",
      "readings": [
        "よわい"
      ],
      "meanings": {
        "vi": "yếu"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-049",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "強い",
      "readings": [
        "つよい"
      ],
      "meanings": {
        "vi": "mạnh"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-050",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "若い",
      "readings": [
        "わかい"
      ],
      "meanings": {
        "vi": "trẻ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-051",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "悪い",
      "readings": [
        "わるい"
      ],
      "meanings": {
        "vi": "xấu"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-052",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "嫌",
      "readings": [
        "いや"
      ],
      "meanings": {
        "vi": "Chán, ghét, khó chịu"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-053",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "いろいろ",
      "readings": [
        "いろいろ"
      ],
      "meanings": {
        "vi": "Nhiều, đa dạng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-054",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "すてき",
      "readings": [
        "すてき"
      ],
      "meanings": {
        "vi": "Đẹp, hay"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-055",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "嫌い",
      "readings": [
        "きらい"
      ],
      "meanings": {
        "vi": "ghét, không thích"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-056",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "きれい",
      "readings": [
        "きれい"
      ],
      "meanings": {
        "vi": "đẹp, sạch sẽ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-057",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "結構",
      "readings": [
        "けっこう"
      ],
      "meanings": {
        "vi": "đủ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-058",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "元気",
      "readings": [
        "げんき"
      ],
      "meanings": {
        "vi": "khỏe mạnh"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-059",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "静か",
      "readings": [
        "しずか"
      ],
      "meanings": {
        "vi": "yên tĩnh"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-060",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "上手",
      "readings": [
        "じょうず"
      ],
      "meanings": {
        "vi": "giỏi, khéo"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-061",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "丈夫",
      "readings": [
        "じょうぶ"
      ],
      "meanings": {
        "vi": "chắc, bền"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-062",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "好き",
      "readings": [
        "すき"
      ],
      "meanings": {
        "vi": "thích"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-063",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "大丈夫",
      "readings": [
        "だいじょうぶ"
      ],
      "meanings": {
        "vi": "không sao, không vấn đề gì"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-064",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "大好き",
      "readings": [
        "だいすき"
      ],
      "meanings": {
        "vi": "rất thích"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-065",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "大切",
      "readings": [
        "たいせつ"
      ],
      "meanings": {
        "vi": "quan trọng, quý giá"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-066",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "大変",
      "readings": [
        "たいへん"
      ],
      "meanings": {
        "vi": "khó khăn, vất vả"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-067",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "小さな",
      "readings": [
        "ちいさな"
      ],
      "meanings": {
        "vi": "Nhỏ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-068",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "賑やか",
      "readings": [
        "にぎやか"
      ],
      "meanings": {
        "vi": "náo nhiệt"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-069",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "暇",
      "readings": [
        "ひま"
      ],
      "meanings": {
        "vi": "rảnh rỗi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-070",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "便利",
      "readings": [
        "べんり"
      ],
      "meanings": {
        "vi": "tiện lợi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-071",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "りっぱ",
      "readings": [
        "りっぱ"
      ],
      "meanings": {
        "vi": "lộng lẫy, tuyệt vời"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-072",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "不便",
      "readings": [
        "ふべん"
      ],
      "meanings": {
        "vi": "Bất tiện"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-073",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "簡単",
      "readings": [
        "かんたん"
      ],
      "meanings": {
        "vi": "Đơn giản"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-074",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "ケーキ",
      "readings": [
        "ケーキ"
      ],
      "meanings": {
        "vi": "Bánh ngọt"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-075",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "何曜日",
      "readings": [
        "なんようび"
      ],
      "meanings": {
        "vi": "Thứ mấy"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-076",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "父",
      "readings": [
        "ちち"
      ],
      "meanings": {
        "vi": "Bố (của mình)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-077",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "良い",
      "readings": [
        "いい",
        "よい"
      ],
      "meanings": {
        "vi": "Tốt"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-078",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "易しい",
      "readings": [
        "やさしい"
      ],
      "meanings": {
        "vi": "Dễ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-079",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "高い",
      "readings": [
        "たかい"
      ],
      "meanings": {
        "vi": "Cao, Đắt"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-080",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "低い",
      "readings": [
        "ひくい"
      ],
      "meanings": {
        "vi": "Thấp"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-081",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "面白い",
      "readings": [
        "おもしろい"
      ],
      "meanings": {
        "vi": "Thú vị"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-082",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "きれいな",
      "readings": [
        "きれいな"
      ],
      "meanings": {
        "vi": "Đẹp, sạch sẽ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-083",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "静かな",
      "readings": [
        "しずかな"
      ],
      "meanings": {
        "vi": "Yên tĩnh"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-084",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "にぎやかな",
      "readings": [
        "にぎやかな"
      ],
      "meanings": {
        "vi": "Náo nhiệt"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-085",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "有名な",
      "readings": [
        "ゆうめいな"
      ],
      "meanings": {
        "vi": "Nổi tiếng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-086",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "親切な",
      "readings": [
        "しんせつな"
      ],
      "meanings": {
        "vi": "Tốt bụng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-087",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "元気な",
      "readings": [
        "げんきな"
      ],
      "meanings": {
        "vi": "Khỏe mạnh"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-088",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "暇な",
      "readings": [
        "ひまな"
      ],
      "meanings": {
        "vi": "Rảnh rỗi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-089",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "便利な",
      "readings": [
        "べんりな"
      ],
      "meanings": {
        "vi": "Tiện lợi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-090",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "すてきな",
      "readings": [
        "すてきな"
      ],
      "meanings": {
        "vi": "Tuyệt vời"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-091",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "苦い",
      "readings": [
        "にがい"
      ],
      "meanings": {
        "vi": "Đắng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-092",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "すっぱい",
      "readings": [
        "すっぱい"
      ],
      "meanings": {
        "vi": "Chua"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-093",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "塩辛い",
      "readings": [
        "しおからい"
      ],
      "meanings": {
        "vi": "Mặn"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-094",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "温かい",
      "readings": [
        "あたたかい"
      ],
      "meanings": {
        "vi": "Ấm áp"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-095",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "明るい",
      "readings": [
        "あかるい"
      ],
      "meanings": {
        "vi": "Tươi sáng, Sáng sủa"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-096",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "寂しい",
      "readings": [
        "さびしい"
      ],
      "meanings": {
        "vi": "Buồn bã, cô đơn"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-097",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "下手",
      "readings": [
        "へた"
      ],
      "meanings": {
        "vi": "Dở, Kém"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-098",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "親切",
      "readings": [
        "しんせつ"
      ],
      "meanings": {
        "vi": "Tốt bụng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-099",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "にぎやか",
      "readings": [
        "にぎやか"
      ],
      "meanings": {
        "vi": "Náo nhiệt"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-100",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "有名",
      "readings": [
        "ゆうめい"
      ],
      "meanings": {
        "vi": "Nổi tiếng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-101",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "素敵",
      "readings": [
        "すてき"
      ],
      "meanings": {
        "vi": "Tuyệt vời"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-102",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "髪",
      "readings": [
        "かみ"
      ],
      "meanings": {
        "vi": "Tóc"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-103",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "牛",
      "readings": [
        "うし"
      ],
      "meanings": {
        "vi": "Con bò"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-104",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "雪",
      "readings": [
        "ゆき"
      ],
      "meanings": {
        "vi": "Tuyết"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-105",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "大切な",
      "readings": [
        "たいせつな"
      ],
      "meanings": {
        "vi": "quan trọng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-106",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "大丈夫な",
      "readings": [
        "だいじょうぶな"
      ],
      "meanings": {
        "vi": "không sao"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-107",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "上手な",
      "readings": [
        "じょうずな"
      ],
      "meanings": {
        "vi": "giỏi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-108",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "特別な",
      "readings": [
        "とくべつな"
      ],
      "meanings": {
        "vi": "đặc biệt"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:adjectives-109",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-adjectives",
      "contentType": "vocabulary",
      "term": "必要な",
      "readings": [
        "ひつような"
      ],
      "meanings": {
        "vi": "cần thiết"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-001",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "会う",
      "readings": [
        "あう"
      ],
      "meanings": {
        "vi": "Gặp mặt"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-002",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "開く",
      "readings": [
        "あく"
      ],
      "meanings": {
        "vi": "mở ( tự động từ)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-003",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "開ける",
      "readings": [
        "あける"
      ],
      "meanings": {
        "vi": "mở (tha động từ)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-004",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "上げる",
      "readings": [
        "あげる"
      ],
      "meanings": {
        "vi": "Nâng lên, tăng lên"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-005",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "遊ぶ",
      "readings": [
        "あそぶ"
      ],
      "meanings": {
        "vi": "Chơi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-006",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "浴びる",
      "readings": [
        "あびる"
      ],
      "meanings": {
        "vi": "tắm ( vòi hoa sen)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-007",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "洗う",
      "readings": [
        "あらう"
      ],
      "meanings": {
        "vi": "rửa"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-008",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "ある",
      "readings": [
        "ある"
      ],
      "meanings": {
        "vi": "Có ( dùng cho đồ vật, vật vô tri vô giác)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-009",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "歩く",
      "readings": [
        "あるく"
      ],
      "meanings": {
        "vi": "đi bộ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-010",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "いる",
      "readings": [
        "いる"
      ],
      "meanings": {
        "vi": "có  (được sử dụng cho người và động vật)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-011",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "要る",
      "readings": [
        "いる"
      ],
      "meanings": {
        "vi": "cần"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-012",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "入れる",
      "readings": [
        "いれる"
      ],
      "meanings": {
        "vi": "Cho vào, đưa vào"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-013",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "歌う",
      "readings": [
        "うたう"
      ],
      "meanings": {
        "vi": "hát"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-014",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "生まれる",
      "readings": [
        "うまれる"
      ],
      "meanings": {
        "vi": "được sinh ra"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-015",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "売る",
      "readings": [
        "うる"
      ],
      "meanings": {
        "vi": "bán"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-016",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "教える",
      "readings": [
        "おしえる"
      ],
      "meanings": {
        "vi": "dạy, chỉ cho biết"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-017",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "覚える",
      "readings": [
        "おぼえる"
      ],
      "meanings": {
        "vi": "nhớ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-018",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "降りる",
      "readings": [
        "おりる"
      ],
      "meanings": {
        "vi": "xuống"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-019",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "終る",
      "readings": [
        "おわる"
      ],
      "meanings": {
        "vi": "kết thúc"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-020",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "買う",
      "readings": [
        "かう"
      ],
      "meanings": {
        "vi": "mua"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-021",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "返す",
      "readings": [
        "かえす"
      ],
      "meanings": {
        "vi": "trả lại"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-022",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "帰る",
      "readings": [
        "かえる"
      ],
      "meanings": {
        "vi": "về"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-023",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "かかる",
      "readings": [
        "かかる"
      ],
      "meanings": {
        "vi": "mất, tốn( thời gian, tiền bạc…)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-024",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "書く",
      "readings": [
        "かく"
      ],
      "meanings": {
        "vi": "viết"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-025",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "貸す",
      "readings": [
        "かす"
      ],
      "meanings": {
        "vi": "cho vay, cho mượn"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-026",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "借りる",
      "readings": [
        "かりる"
      ],
      "meanings": {
        "vi": "vay, mượn"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-027",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "消える",
      "readings": [
        "きえる"
      ],
      "meanings": {
        "vi": "biến mất, tắt ( điện)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-028",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "聞く",
      "readings": [
        "きく"
      ],
      "meanings": {
        "vi": "nghe, hỏi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-029",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "切る",
      "readings": [
        "きる"
      ],
      "meanings": {
        "vi": "cắt"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-030",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "曇る",
      "readings": [
        "くもる"
      ],
      "meanings": {
        "vi": "có mây, nhiều mây"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-031",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "来る",
      "readings": [
        "くる"
      ],
      "meanings": {
        "vi": "đến"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-032",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "答える",
      "readings": [
        "こたえる"
      ],
      "meanings": {
        "vi": "trả lời"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-033",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "コピーする",
      "readings": [
        "コピーする"
      ],
      "meanings": {
        "vi": "copy, sao chép"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-034",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "困る",
      "readings": [
        "こまる"
      ],
      "meanings": {
        "vi": "bối rối, khó khăn, rắc rối"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-035",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "散歩",
      "readings": [
        "さんぽする"
      ],
      "meanings": {
        "vi": "đi dạo"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-036",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "閉まる",
      "readings": [
        "しまる"
      ],
      "meanings": {
        "vi": "đóng ( tự động từ)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-037",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "閉める",
      "readings": [
        "しめる"
      ],
      "meanings": {
        "vi": "đóng ( tha động từ)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-038",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "知る",
      "readings": [
        "しる"
      ],
      "meanings": {
        "vi": "biết"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-039",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "吸う",
      "readings": [
        "すう"
      ],
      "meanings": {
        "vi": "hút"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-040",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "住む",
      "readings": [
        "すむ"
      ],
      "meanings": {
        "vi": "sống"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-041",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "する",
      "readings": [
        "する"
      ],
      "meanings": {
        "vi": "làm, chơi, tổ chức…"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-042",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "座る",
      "readings": [
        "すわる"
      ],
      "meanings": {
        "vi": "ngồi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-043",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "掃除する",
      "readings": [
        "そうじする"
      ],
      "meanings": {
        "vi": "dọn dẹp"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-044",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "出す",
      "readings": [
        "だす"
      ],
      "meanings": {
        "vi": "lấy ra, nộp, gửi (thư)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-045",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "立つ",
      "readings": [
        "たつ"
      ],
      "meanings": {
        "vi": "đứng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-046",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "頼む",
      "readings": [
        "たのむ"
      ],
      "meanings": {
        "vi": "nhờ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-047",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "使う",
      "readings": [
        "つかう"
      ],
      "meanings": {
        "vi": "sử dụng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-048",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "疲れる",
      "readings": [
        "つかれる"
      ],
      "meanings": {
        "vi": "mệt mỏi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-049",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "着く",
      "readings": [
        "つく"
      ],
      "meanings": {
        "vi": "đến"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-050",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "つける",
      "readings": [
        "つける"
      ],
      "meanings": {
        "vi": "bật"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-051",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "勤める",
      "readings": [
        "つとめる"
      ],
      "meanings": {
        "vi": "làm việc"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-052",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "出かける",
      "readings": [
        "でかける"
      ],
      "meanings": {
        "vi": "đi ra ngoài"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-053",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "出る",
      "readings": [
        "でる"
      ],
      "meanings": {
        "vi": "ra, rời khỏi, xuất hiện"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-054",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "飛ぶ",
      "readings": [
        "とぶ"
      ],
      "meanings": {
        "vi": "bay, nhảy"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-055",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "止まる",
      "readings": [
        "とまる"
      ],
      "meanings": {
        "vi": "dừng lại ( tự động từ)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-056",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "止める",
      "readings": [
        "とめる"
      ],
      "meanings": {
        "vi": "Đỗ, đậu ( xe, đài..) ( Tha động từ)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-057",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "取る",
      "readings": [
        "とる"
      ],
      "meanings": {
        "vi": "lấy ( muối…)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-058",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "撮る",
      "readings": [
        "とる"
      ],
      "meanings": {
        "vi": "chụp ảnh hoặc quay phim"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-059",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "鳴く",
      "readings": [
        "なく"
      ],
      "meanings": {
        "vi": "kêu , hót"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-060",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "無くす",
      "readings": [
        "なくす"
      ],
      "meanings": {
        "vi": "làm mất, đánh mất"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-061",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "習う",
      "readings": [
        "ならう"
      ],
      "meanings": {
        "vi": "học"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-062",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "並ぶ",
      "readings": [
        "ならぶ"
      ],
      "meanings": {
        "vi": "xếp hàng, ngang bằng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-063",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "並べる",
      "readings": [
        "ならべる"
      ],
      "meanings": {
        "vi": "sắp xếp, bố trí"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-064",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "なる",
      "readings": [
        "なる"
      ],
      "meanings": {
        "vi": "trở nên, trở thành"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-065",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "脱ぐ",
      "readings": [
        "ぬぐ"
      ],
      "meanings": {
        "vi": "cởi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-066",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "寝る",
      "readings": [
        "ねる"
      ],
      "meanings": {
        "vi": "đi ngủ, ngủ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-067",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "登る",
      "readings": [
        "のぼる"
      ],
      "meanings": {
        "vi": "leo lên"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-068",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "乗る",
      "readings": [
        "のる"
      ],
      "meanings": {
        "vi": "lên ( tàu, xe…) cưỡi ngựa"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-069",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "入る",
      "readings": [
        "はいる"
      ],
      "meanings": {
        "vi": "vào, đi vào"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-070",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "始まる",
      "readings": [
        "はじまる"
      ],
      "meanings": {
        "vi": "được bắt đầu ( tự động từ)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-071",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "始める",
      "readings": [
        "はじめる"
      ],
      "meanings": {
        "vi": "bắt đầu( tha động từ)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-072",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "走る",
      "readings": [
        "はしる"
      ],
      "meanings": {
        "vi": "chạy"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-073",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "働く",
      "readings": [
        "はたらく"
      ],
      "meanings": {
        "vi": "làm việc"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-074",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "話す",
      "readings": [
        "はなす"
      ],
      "meanings": {
        "vi": "nói chuyện"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-075",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "貼る",
      "readings": [
        "はる"
      ],
      "meanings": {
        "vi": "dán"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-076",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "晴れる",
      "readings": [
        "はれる"
      ],
      "meanings": {
        "vi": "có nắng, thời tiết đẹp"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-077",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "引く",
      "readings": [
        "ひく"
      ],
      "meanings": {
        "vi": "kéo"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-078",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "弾く",
      "readings": [
        "ひく"
      ],
      "meanings": {
        "vi": "chơi ( nhạc cụ)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-079",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "吹く",
      "readings": [
        "ふく"
      ],
      "meanings": {
        "vi": "thổi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-080",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "降る",
      "readings": [
        "ふる"
      ],
      "meanings": {
        "vi": "rơi (mưa, tuyết)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-081",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "勉強する",
      "readings": [
        "べんきょうする"
      ],
      "meanings": {
        "vi": "học"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-082",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "曲る",
      "readings": [
        "まがる"
      ],
      "meanings": {
        "vi": "rẽ, cong"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-083",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "待つ",
      "readings": [
        "まつ"
      ],
      "meanings": {
        "vi": "chờ đợi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-084",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "見せる",
      "readings": [
        "みせる"
      ],
      "meanings": {
        "vi": "cho xem"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-085",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "見る",
      "readings": [
        "みる"
      ],
      "meanings": {
        "vi": "xem, nhìn, trông"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-086",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "休む",
      "readings": [
        "やすむ"
      ],
      "meanings": {
        "vi": "nghỉ, nghỉ ngơi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-087",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "やる",
      "readings": [
        "やる"
      ],
      "meanings": {
        "vi": "làm"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-088",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "呼ぶ",
      "readings": [
        "よぶ"
      ],
      "meanings": {
        "vi": "gọi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-089",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "読む",
      "readings": [
        "よむ"
      ],
      "meanings": {
        "vi": "đọc"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-090",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "練習",
      "readings": [
        "れんしゅうする"
      ],
      "meanings": {
        "vi": "thực hành, luyện tập"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-091",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "分かる",
      "readings": [
        "わかる"
      ],
      "meanings": {
        "vi": "hiểu, nắm được"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-092",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "忘れる",
      "readings": [
        "わすれる"
      ],
      "meanings": {
        "vi": "quên"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-093",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "渡す",
      "readings": [
        "わたす"
      ],
      "meanings": {
        "vi": "đưa cho"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-094",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "渡る",
      "readings": [
        "わたる"
      ],
      "meanings": {
        "vi": "đi qua, băng qua"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-095",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "ビール",
      "readings": [
        "ビール"
      ],
      "meanings": {
        "vi": "Bia"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-096",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "アイスクリーム",
      "readings": [
        "アイスクリーム"
      ],
      "meanings": {
        "vi": "Kem"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-097",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "シャープペンシル",
      "readings": [
        "シャープペンシル"
      ],
      "meanings": {
        "vi": "Bút chì kim"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-098",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "近く",
      "readings": [
        "ちかく"
      ],
      "meanings": {
        "vi": "Gần"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-099",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "ご家族",
      "readings": [
        "ごかぞく"
      ],
      "meanings": {
        "vi": "Gia đình (người khác)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-100",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "見ます",
      "readings": [
        "みます",
        "みる"
      ],
      "meanings": {
        "vi": "Xem"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-101",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "聞きます",
      "readings": [
        "ききます",
        "きく"
      ],
      "meanings": {
        "vi": "Nghe"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-102",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "読みます",
      "readings": [
        "よみます",
        "よむ"
      ],
      "meanings": {
        "vi": "Đọc"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-103",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "書きます",
      "readings": [
        "かきます",
        "かく"
      ],
      "meanings": {
        "vi": "Viết"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-104",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "買います",
      "readings": [
        "かいます",
        "かう"
      ],
      "meanings": {
        "vi": "Mua"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-105",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "撮ります",
      "readings": [
        "とります",
        "とる"
      ],
      "meanings": {
        "vi": "Chụp (ảnh)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-106",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "します",
      "readings": [
        "します",
        "する"
      ],
      "meanings": {
        "vi": "Làm"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-107",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "会います",
      "readings": [
        "あいます",
        "あう"
      ],
      "meanings": {
        "vi": "Gặp (ai đó)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-108",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "行きます",
      "readings": [
        "いきます",
        "いく"
      ],
      "meanings": {
        "vi": "Đi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-109",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "来ます",
      "readings": [
        "きます",
        "くる"
      ],
      "meanings": {
        "vi": "Đến"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-110",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "帰ります",
      "readings": [
        "かえります",
        "かえる"
      ],
      "meanings": {
        "vi": "Về"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-111",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "寝ます",
      "readings": [
        "ねます",
        "ねる"
      ],
      "meanings": {
        "vi": "Ngủ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-112",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "起きます",
      "readings": [
        "おきます",
        "おきる"
      ],
      "meanings": {
        "vi": "Thức dậy"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-113",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "働きます",
      "readings": [
        "はたらきます",
        "はたらく"
      ],
      "meanings": {
        "vi": "Làm việc"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-114",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "休みます",
      "readings": [
        "やすみます",
        "やすむ"
      ],
      "meanings": {
        "vi": "Nghỉ ngơi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-115",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "勉強します",
      "readings": [
        "べんきょうします"
      ],
      "meanings": {
        "vi": "Học bài"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-116",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "終わります",
      "readings": [
        "おわります",
        "おわる"
      ],
      "meanings": {
        "vi": "Kết thúc"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-117",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "始まります",
      "readings": [
        "はじまります",
        "はじまる"
      ],
      "meanings": {
        "vi": "Bắt đầu"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-118",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "切ります",
      "readings": [
        "きります",
        "きる"
      ],
      "meanings": {
        "vi": "Cắt"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-119",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "送ります",
      "readings": [
        "おくります",
        "おくる"
      ],
      "meanings": {
        "vi": "Gửi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-120",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "あげます",
      "readings": [
        "あげます",
        "あげる"
      ],
      "meanings": {
        "vi": "Cho, tặng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-121",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "もらいます",
      "readings": [
        "もらいます",
        "もらう"
      ],
      "meanings": {
        "vi": "Nhận"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-122",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "貸します",
      "readings": [
        "かします",
        "かす"
      ],
      "meanings": {
        "vi": "Cho mượn"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-123",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "借ります",
      "readings": [
        "かります",
        "かりる"
      ],
      "meanings": {
        "vi": "Mượn"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-124",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "教えます",
      "readings": [
        "おしえます",
        "おしえる"
      ],
      "meanings": {
        "vi": "Dạy"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-125",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "習います",
      "readings": [
        "ならいます",
        "ならう"
      ],
      "meanings": {
        "vi": "Học (từ ai đó)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-126",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "わかります",
      "readings": [
        "わかります",
        "わかる"
      ],
      "meanings": {
        "vi": "Hiểu"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-127",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "あります",
      "readings": [
        "あります",
        "ある"
      ],
      "meanings": {
        "vi": "Có (đồ vật)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-128",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "います",
      "readings": [
        "います",
        "いる"
      ],
      "meanings": {
        "vi": "Có (người/đv)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-129",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "かかります",
      "readings": [
        "かかります",
        "かかる"
      ],
      "meanings": {
        "vi": "Mất, tốn (thời gian/tiền)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-130",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "泳ぎます",
      "readings": [
        "およぎます",
        "およぐ"
      ],
      "meanings": {
        "vi": "Bơi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-131",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "遊びます",
      "readings": [
        "あそびます",
        "あそぶ"
      ],
      "meanings": {
        "vi": "Chơi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-132",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "待ちます",
      "readings": [
        "まちます",
        "まつ"
      ],
      "meanings": {
        "vi": "Chờ đợi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-133",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "呼びます",
      "readings": [
        "よびます",
        "よぶ"
      ],
      "meanings": {
        "vi": "Gọi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-134",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "急ぎます",
      "readings": [
        "いそぎます",
        "いそぐ"
      ],
      "meanings": {
        "vi": "Vội vã"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-135",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "降ります",
      "readings": [
        "ふります",
        "ふる"
      ],
      "meanings": {
        "vi": "Rơi (mưa/tuyết)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-136",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "ハンサムな",
      "readings": [
        "ハンサムな"
      ],
      "meanings": {
        "vi": "Đẹp trai"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-137",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "ベトナム",
      "readings": [
        "ベトナム"
      ],
      "meanings": {
        "vi": "Việt Nam"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-138",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "中国",
      "readings": [
        "ちゅうごく"
      ],
      "meanings": {
        "vi": "Trung Quốc"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-139",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "韓国",
      "readings": [
        "かんこく"
      ],
      "meanings": {
        "vi": "Hàn Quốc"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-140",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "消す",
      "readings": [
        "けす"
      ],
      "meanings": {
        "vi": "Tắt"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-141",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "点く",
      "readings": [
        "つく"
      ],
      "meanings": {
        "vi": "(Tự động) Sáng, bật"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-142",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "払う",
      "readings": [
        "はらう"
      ],
      "meanings": {
        "vi": "Trang trải, trả tiền"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-143",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "泳ぐ",
      "readings": [
        "およぐ"
      ],
      "meanings": {
        "vi": "Bơi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-144",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "治る",
      "readings": [
        "なおる"
      ],
      "meanings": {
        "vi": "Khỏi (bệnh), hồi phục"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-145",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "言う",
      "readings": [
        "いう"
      ],
      "meanings": {
        "vi": "Nói, Gọi là"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-146",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "急ぐ",
      "readings": [
        "いそぐ"
      ],
      "meanings": {
        "vi": "Vội"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-147",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "曲がる",
      "readings": [
        "まがる"
      ],
      "meanings": {
        "vi": "Rẽ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-148",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "死ぬ",
      "readings": [
        "しぬ"
      ],
      "meanings": {
        "vi": "Chết"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-149",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "終わる",
      "readings": [
        "おわる"
      ],
      "meanings": {
        "vi": "Kết thúc"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-150",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "送る",
      "readings": [
        "おくる"
      ],
      "meanings": {
        "vi": "Gửi đi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-151",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "あげる",
      "readings": [
        "あげる"
      ],
      "meanings": {
        "vi": "Cho, tặng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-152",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "もらう",
      "readings": [
        "もらう"
      ],
      "meanings": {
        "vi": "Nhận"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-153",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "咲く",
      "readings": [
        "さく"
      ],
      "meanings": {
        "vi": "Nở (hoa)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-154",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "差す",
      "readings": [
        "さす"
      ],
      "meanings": {
        "vi": "Giương (ô)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-155",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "太る",
      "readings": [
        "ふとる"
      ],
      "meanings": {
        "vi": "Béo lên"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-156",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "痩せる",
      "readings": [
        "やせる"
      ],
      "meanings": {
        "vi": "Gầy đi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-157",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "怒る",
      "readings": [
        "おこる"
      ],
      "meanings": {
        "vi": "Tức giận"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-158",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "泣く",
      "readings": [
        "なく"
      ],
      "meanings": {
        "vi": "Khóc"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-159",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "笑う",
      "readings": [
        "わらう"
      ],
      "meanings": {
        "vi": "Cười"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-160",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "話します",
      "readings": [
        "はなします",
        "はなす"
      ],
      "meanings": {
        "vi": "nói chuyện"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-161",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "使います",
      "readings": [
        "つかいます",
        "つかう"
      ],
      "meanings": {
        "vi": "sử dụng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-162",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "持ちます",
      "readings": [
        "もちます",
        "もつ"
      ],
      "meanings": {
        "vi": "cầm, giữ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-163",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "座ります",
      "readings": [
        "すわります",
        "すわる"
      ],
      "meanings": {
        "vi": "ngồi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-164",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "立ちます",
      "readings": [
        "たちます",
        "たつ"
      ],
      "meanings": {
        "vi": "đứng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-165",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "歩きます",
      "readings": [
        "あるきます",
        "あるく"
      ],
      "meanings": {
        "vi": "đi bộ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-166",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "走ります",
      "readings": [
        "はしります",
        "はしる"
      ],
      "meanings": {
        "vi": "chạy"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-167",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "乗ります",
      "readings": [
        "のります",
        "のる"
      ],
      "meanings": {
        "vi": "lên (xe)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-168",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "開けます",
      "readings": [
        "あけます",
        "あける"
      ],
      "meanings": {
        "vi": "mở (cửa)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-169",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "閉めます",
      "readings": [
        "しめます",
        "しめる"
      ],
      "meanings": {
        "vi": "đóng (cửa)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-170",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "つけます",
      "readings": [
        "つけます",
        "つける"
      ],
      "meanings": {
        "vi": "bật (điện)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-171",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "消します",
      "readings": [
        "けします",
        "けす"
      ],
      "meanings": {
        "vi": "tắt (điện)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-172",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "入ります",
      "readings": [
        "はいります",
        "はいる"
      ],
      "meanings": {
        "vi": "vào"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-173",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "出ます",
      "readings": [
        "でます",
        "でる"
      ],
      "meanings": {
        "vi": "ra"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-174",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "洗います",
      "readings": [
        "あらいます",
        "あらう"
      ],
      "meanings": {
        "vi": "rửa, giặt"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-175",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "作ります",
      "readings": [
        "つくります",
        "つくる"
      ],
      "meanings": {
        "vi": "làm, tạo"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-176",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "売ります",
      "readings": [
        "うります",
        "うる"
      ],
      "meanings": {
        "vi": "bán"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-177",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "知ります",
      "readings": [
        "しります",
        "しる"
      ],
      "meanings": {
        "vi": "biết"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-178",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "住みます",
      "readings": [
        "すみます",
        "すむ"
      ],
      "meanings": {
        "vi": "sống, ở"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-179",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "置きます",
      "readings": [
        "おきます",
        "おく"
      ],
      "meanings": {
        "vi": "đặt"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-180",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "届けます",
      "readings": [
        "とどけます",
        "とどける"
      ],
      "meanings": {
        "vi": "giao, chuyển"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-181",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "見せます",
      "readings": [
        "みせます",
        "みせる"
      ],
      "meanings": {
        "vi": "cho xem"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-182",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "着きます",
      "readings": [
        "つきます",
        "つく"
      ],
      "meanings": {
        "vi": "đến nơi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-183",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "出かけます",
      "readings": [
        "でかけます",
        "でかける"
      ],
      "meanings": {
        "vi": "đi ra ngoài"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-184",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "答えます",
      "readings": [
        "こたえます",
        "こたえる"
      ],
      "meanings": {
        "vi": "trả lời"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-185",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "忘れます",
      "readings": [
        "わすれます",
        "わすれる"
      ],
      "meanings": {
        "vi": "quên"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-186",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "覚えます",
      "readings": [
        "おぼえます",
        "おぼえる"
      ],
      "meanings": {
        "vi": "nhớ, học thuộc"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-187",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "考えます",
      "readings": [
        "かんがえます",
        "かんがえる"
      ],
      "meanings": {
        "vi": "suy nghĩ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-188",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "変えます",
      "readings": [
        "かえます",
        "かえる"
      ],
      "meanings": {
        "vi": "thay đổi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-189",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "決めます",
      "readings": [
        "きめます",
        "きめる"
      ],
      "meanings": {
        "vi": "quyết định"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-190",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "比べます",
      "readings": [
        "くらべます",
        "くらべる"
      ],
      "meanings": {
        "vi": "so sánh"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-191",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "探します",
      "readings": [
        "さがします",
        "さがす"
      ],
      "meanings": {
        "vi": "tìm kiếm"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-192",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "直します",
      "readings": [
        "なおします",
        "なおす"
      ],
      "meanings": {
        "vi": "sửa chữa"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:verbs-193",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-verbs",
      "contentType": "vocabulary",
      "term": "掃除します",
      "readings": [
        "そうじします"
      ],
      "meanings": {
        "vi": "dọn dẹp"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-001",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "こちら",
      "readings": [
        "こちら"
      ],
      "meanings": {
        "vi": "phía này"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-002",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "あなた",
      "readings": [
        "あなた"
      ],
      "meanings": {
        "vi": "bạn"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-003",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "アパート",
      "readings": [
        "アパート"
      ],
      "meanings": {
        "vi": "căn hộ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-004",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "医者",
      "readings": [
        "いしゃ"
      ],
      "meanings": {
        "vi": "bác sĩ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-005",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "一",
      "readings": [
        "いち"
      ],
      "meanings": {
        "vi": "một"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-006",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "意味",
      "readings": [
        "いみ"
      ],
      "meanings": {
        "vi": "ý nghĩa"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-007",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "入口",
      "readings": [
        "いりぐち"
      ],
      "meanings": {
        "vi": "lối vào"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-008",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "上",
      "readings": [
        "うえ"
      ],
      "meanings": {
        "vi": "trên"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-009",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "絵",
      "readings": [
        "え"
      ],
      "meanings": {
        "vi": "bức tranh"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-010",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "映画館",
      "readings": [
        "えいがかん"
      ],
      "meanings": {
        "vi": "rạp chiếu phim"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-011",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "男",
      "readings": [
        "おとこ"
      ],
      "meanings": {
        "vi": "nam giới, con trai"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-012",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "男の子",
      "readings": [
        "おとこのこ"
      ],
      "meanings": {
        "vi": "bé trai"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-013",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "同じ",
      "readings": [
        "おなじ"
      ],
      "meanings": {
        "vi": "giống nhau"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-014",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "おばさん",
      "readings": [
        "おばさん"
      ],
      "meanings": {
        "vi": "Cô, dì"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-015",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "お風呂",
      "readings": [
        "おふろ"
      ],
      "meanings": {
        "vi": "Bồn tắm"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-016",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "おまわりさん",
      "readings": [
        "おまわりさん"
      ],
      "meanings": {
        "vi": "cảnh sát"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-017",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "音楽",
      "readings": [
        "おんがく"
      ],
      "meanings": {
        "vi": "âm nhạc"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-018",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "女の子",
      "readings": [
        "おんなのこ"
      ],
      "meanings": {
        "vi": "bé gái"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-019",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "階段",
      "readings": [
        "かいだん"
      ],
      "meanings": {
        "vi": "Cầu thang"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-020",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "買い物",
      "readings": [
        "かいもの"
      ],
      "meanings": {
        "vi": "mua sắm"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-021",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "風邪",
      "readings": [
        "かぜ"
      ],
      "meanings": {
        "vi": "cảm, cúm"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-022",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "コップ",
      "readings": [
        "コップ"
      ],
      "meanings": {
        "vi": "Cốc ( không quai)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-023",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "紙",
      "readings": [
        "かみ"
      ],
      "meanings": {
        "vi": "giấy"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-024",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "カレー",
      "readings": [
        "カレー"
      ],
      "meanings": {
        "vi": "Cà ri"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-025",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "カレンダー",
      "readings": [
        "カレンダー"
      ],
      "meanings": {
        "vi": "tờ lịch"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-026",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "北",
      "readings": [
        "きた"
      ],
      "meanings": {
        "vi": "phía Bắc"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-027",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "ギター",
      "readings": [
        "ギター"
      ],
      "meanings": {
        "vi": "Guitar"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-028",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "喫茶店",
      "readings": [
        "きっさてん"
      ],
      "meanings": {
        "vi": "quán giải khát"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-029",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "切手",
      "readings": [
        "きって"
      ],
      "meanings": {
        "vi": "tem"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-030",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "キロ/キログラム",
      "readings": [
        "キロ/キログラム"
      ],
      "meanings": {
        "vi": "kg"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-031",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "キロ/キロメートル",
      "readings": [
        "キロ/キロメートル"
      ],
      "meanings": {
        "vi": "km"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-032",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "曇り",
      "readings": [
        "くもり"
      ],
      "meanings": {
        "vi": "có mây, nhiều mây"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-033",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "グラム",
      "readings": [
        "グラム"
      ],
      "meanings": {
        "vi": "gram"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-034",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "警官",
      "readings": [
        "けいかん"
      ],
      "meanings": {
        "vi": "cảnh sát"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-035",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "結婚",
      "readings": [
        "けっこん"
      ],
      "meanings": {
        "vi": "kết hôn"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-036",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "玄関",
      "readings": [
        "げんかん"
      ],
      "meanings": {
        "vi": "lối đi vào"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-037",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "交差点",
      "readings": [
        "こうさてん"
      ],
      "meanings": {
        "vi": "ngã tư"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-038",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "交番",
      "readings": [
        "こうばん"
      ],
      "meanings": {
        "vi": "bốt, trạm cảnh sát"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-039",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "午後",
      "readings": [
        "ごご"
      ],
      "meanings": {
        "vi": "buổi chiều"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-040",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "こっち",
      "readings": [
        "こっち"
      ],
      "meanings": {
        "vi": "phía này ( cách nói ngắn gọn của こちら）"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-041",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "言葉",
      "readings": [
        "ことば"
      ],
      "meanings": {
        "vi": "từ, từ vựng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-042",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "作文",
      "readings": [
        "さくぶん"
      ],
      "meanings": {
        "vi": "làm văn"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-043",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "三",
      "readings": [
        "さん"
      ],
      "meanings": {
        "vi": "ba"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-044",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "四",
      "readings": [
        "し / よん"
      ],
      "meanings": {
        "vi": "bốn"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-045",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "塩",
      "readings": [
        "しお"
      ],
      "meanings": {
        "vi": "muối"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-046",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "時間",
      "readings": [
        "じかん"
      ],
      "meanings": {
        "vi": "Thời gian"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-047",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "仕事",
      "readings": [
        "しごと"
      ],
      "meanings": {
        "vi": "công việc"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-048",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "下",
      "readings": [
        "した"
      ],
      "meanings": {
        "vi": "dưới"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-049",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "七",
      "readings": [
        "しち / なな"
      ],
      "meanings": {
        "vi": "bảy"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-050",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "質問",
      "readings": [
        "しつもん"
      ],
      "meanings": {
        "vi": "Câu hỏi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-051",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "自分",
      "readings": [
        "じぶん"
      ],
      "meanings": {
        "vi": "bản thân, tự mình"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-052",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "十",
      "readings": [
        "じゅう"
      ],
      "meanings": {
        "vi": "mười"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-053",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "しょうゆ",
      "readings": [
        "しょうゆ"
      ],
      "meanings": {
        "vi": "xì dầu"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-054",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "スカート",
      "readings": [
        "スカート"
      ],
      "meanings": {
        "vi": "váy ngắn"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-055",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "ストーブ",
      "readings": [
        "ストーブ"
      ],
      "meanings": {
        "vi": "lò sưởi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-056",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "スポーツ",
      "readings": [
        "スポーツ"
      ],
      "meanings": {
        "vi": "Thể thao"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-057",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "せっけん",
      "readings": [
        "せっけん"
      ],
      "meanings": {
        "vi": "xà bông"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-058",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "千",
      "readings": [
        "せん"
      ],
      "meanings": {
        "vi": "nghìn"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-059",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "洗濯",
      "readings": [
        "せんたく"
      ],
      "meanings": {
        "vi": "việc giặt giũ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-060",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "掃除",
      "readings": [
        "そうじ"
      ],
      "meanings": {
        "vi": "dọn dẹp"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-061",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "大使館",
      "readings": [
        "たいしかん"
      ],
      "meanings": {
        "vi": "Đại sứ quán"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-062",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "誕生日",
      "readings": [
        "たんじょうび"
      ],
      "meanings": {
        "vi": "sinh nhật"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-063",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "手紙",
      "readings": [
        "てがみ"
      ],
      "meanings": {
        "vi": "thư"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-064",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "テスト",
      "readings": [
        "テスト"
      ],
      "meanings": {
        "vi": "kiểm tra"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-065",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "天気",
      "readings": [
        "てんき"
      ],
      "meanings": {
        "vi": "thời tiết"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-066",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "電気",
      "readings": [
        "でんき"
      ],
      "meanings": {
        "vi": "điện, đèn điện"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-067",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "図書館",
      "readings": [
        "としょかん"
      ],
      "meanings": {
        "vi": "thư viện"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-068",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "時々",
      "readings": [
        "ときどき"
      ],
      "meanings": {
        "vi": "thỉnh thoảng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-069",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "ナイフ",
      "readings": [
        "ナイフ"
      ],
      "meanings": {
        "vi": "dao"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-070",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "夏休み",
      "readings": [
        "なつやすみ"
      ],
      "meanings": {
        "vi": "kỳ nghỉ hè"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-071",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "名前",
      "readings": [
        "なまえ"
      ],
      "meanings": {
        "vi": "tên"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-072",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "二",
      "readings": [
        "に"
      ],
      "meanings": {
        "vi": "hai"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-073",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "西",
      "readings": [
        "にし"
      ],
      "meanings": {
        "vi": "phía Tây"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-074",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "日曜日",
      "readings": [
        "にちようび"
      ],
      "meanings": {
        "vi": "Chủ Nhật"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-075",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "ニュース",
      "readings": [
        "ニュース"
      ],
      "meanings": {
        "vi": "tin tức"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-076",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "庭",
      "readings": [
        "にわ"
      ],
      "meanings": {
        "vi": "vườn"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-077",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "パーティー",
      "readings": [
        "パーティー"
      ],
      "meanings": {
        "vi": "tiệc"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-078",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "葉書",
      "readings": [
        "はがき"
      ],
      "meanings": {
        "vi": "bưu thiếp"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-079",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "橋",
      "readings": [
        "はし"
      ],
      "meanings": {
        "vi": "cầu"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-080",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "バター",
      "readings": [
        "バター"
      ],
      "meanings": {
        "vi": "bơ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-081",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "八",
      "readings": [
        "はち"
      ],
      "meanings": {
        "vi": "tám"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-082",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "話",
      "readings": [
        "はなし"
      ],
      "meanings": {
        "vi": "câu chuyện"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-083",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "半",
      "readings": [
        "はん"
      ],
      "meanings": {
        "vi": "một nửa"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-084",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "半分",
      "readings": [
        "はんぶん"
      ],
      "meanings": {
        "vi": "một nửa"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-085",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "百",
      "readings": [
        "ひゃく"
      ],
      "meanings": {
        "vi": "trăm"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-086",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "フィルム",
      "readings": [
        "フィルム"
      ],
      "meanings": {
        "vi": "cuộn phim"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-087",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "封筒",
      "readings": [
        "ふうとう"
      ],
      "meanings": {
        "vi": "phong bì"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-088",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "プール",
      "readings": [
        "プール"
      ],
      "meanings": {
        "vi": "hồ bơi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-089",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "フォーク",
      "readings": [
        "フォーク"
      ],
      "meanings": {
        "vi": "dĩa"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-090",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "文章",
      "readings": [
        "ぶんしょう"
      ],
      "meanings": {
        "vi": "câu văn, đoạn văn"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-091",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "ページ",
      "readings": [
        "ページ"
      ],
      "meanings": {
        "vi": "trang"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-092",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "ペット",
      "readings": [
        "ペット"
      ],
      "meanings": {
        "vi": "thú cưng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-093",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "辺",
      "readings": [
        "へん"
      ],
      "meanings": {
        "vi": "khu vực"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-094",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "ボタン",
      "readings": [
        "ボタン"
      ],
      "meanings": {
        "vi": "nút"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-095",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "ホテル",
      "readings": [
        "ホテル"
      ],
      "meanings": {
        "vi": "khách sạn"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-096",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "本当",
      "readings": [
        "ほんとう"
      ],
      "meanings": {
        "vi": "sự thật"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-097",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "万",
      "readings": [
        "まん"
      ],
      "meanings": {
        "vi": "vạn ( mười nghìn)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-098",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "南",
      "readings": [
        "みなみ"
      ],
      "meanings": {
        "vi": "phía Nam"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-099",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "メートル",
      "readings": [
        "メートル"
      ],
      "meanings": {
        "vi": "mét"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-100",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "もう一度",
      "readings": [
        "もういちど"
      ],
      "meanings": {
        "vi": "một lần nữa"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-101",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "問題",
      "readings": [
        "もんだい"
      ],
      "meanings": {
        "vi": "vấn đề"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-102",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "休み",
      "readings": [
        "やすみ"
      ],
      "meanings": {
        "vi": "nghỉ, nghỉ ngơi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-103",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "ラジオ",
      "readings": [
        "ラジオ"
      ],
      "meanings": {
        "vi": "radio"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-104",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "ラジカセ / ラジオカセット",
      "readings": [
        "ラジカセ / ラジオカセット"
      ],
      "meanings": {
        "vi": "đài cassette"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-105",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "旅行",
      "readings": [
        "りょこう"
      ],
      "meanings": {
        "vi": "du lịch"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-106",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "六",
      "readings": [
        "ろく"
      ],
      "meanings": {
        "vi": "sáu"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-107",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "私",
      "readings": [
        "わたくし"
      ],
      "meanings": {
        "vi": "tôi( khiêm nhường ngữ)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-108",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "あまり",
      "readings": [
        "あまり"
      ],
      "meanings": {
        "vi": "Không~lắm"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-109",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "一緒",
      "readings": [
        "いっしょ"
      ],
      "meanings": {
        "vi": "cùng nhau"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-110",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "いいえ",
      "readings": [
        "いいえ"
      ],
      "meanings": {
        "vi": "không"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-111",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "いかが",
      "readings": [
        "いかが"
      ],
      "meanings": {
        "vi": "như thế nào( cách nói lịch sự của どう）"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-112",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "いつ",
      "readings": [
        "いつ"
      ],
      "meanings": {
        "vi": "khi nào"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-113",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "いつも",
      "readings": [
        "いつも"
      ],
      "meanings": {
        "vi": "luôn luôn"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-114",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "ええ",
      "readings": [
        "ええ"
      ],
      "meanings": {
        "vi": "Vâng, có..( bằng　はい）"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-115",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "しかし",
      "readings": [
        "しかし"
      ],
      "meanings": {
        "vi": "Tuy nhiên"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-116",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "すぐに",
      "readings": [
        "すぐに"
      ],
      "meanings": {
        "vi": "ngay lập tức"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-117",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "それでは",
      "readings": [
        "それでは"
      ],
      "meanings": {
        "vi": "vậy thì, thế thì"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-118",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "たくさん",
      "readings": [
        "たくさん"
      ],
      "meanings": {
        "vi": "nhiều"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-119",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "たぶん",
      "readings": [
        "たぶん"
      ],
      "meanings": {
        "vi": "có thể, có lẽ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-120",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "だんだん",
      "readings": [
        "だんだん"
      ],
      "meanings": {
        "vi": "dần"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-121",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "ちょうど",
      "readings": [
        "ちょうど"
      ],
      "meanings": {
        "vi": "vừa đúng, vừa đủ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-122",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "ちょっと",
      "readings": [
        "ちょっと"
      ],
      "meanings": {
        "vi": "một ít, một chút"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-123",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "次",
      "readings": [
        "つぎ"
      ],
      "meanings": {
        "vi": "tiếp theo"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-124",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "どう",
      "readings": [
        "どう"
      ],
      "meanings": {
        "vi": "như thế nào"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-125",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "どうして",
      "readings": [
        "どうして"
      ],
      "meanings": {
        "vi": "tại sao"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-126",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "どうぞ",
      "readings": [
        "どうぞ"
      ],
      "meanings": {
        "vi": "xin mời"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-127",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "どちら",
      "readings": [
        "どちら"
      ],
      "meanings": {
        "vi": "phía nào"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-128",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "どっち",
      "readings": [
        "どっち"
      ],
      "meanings": {
        "vi": "phía nào ( thân mật của どちら)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-129",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "なぜ",
      "readings": [
        "なぜ"
      ],
      "meanings": {
        "vi": "tại sao"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-130",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "など",
      "readings": [
        "など"
      ],
      "meanings": {
        "vi": "vân vân"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-131",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "はい",
      "readings": [
        "はい"
      ],
      "meanings": {
        "vi": "vâng, có"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-132",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "ほか",
      "readings": [
        "ほか"
      ],
      "meanings": {
        "vi": "khác,"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-133",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "まっすぐ",
      "readings": [
        "まっすぐ"
      ],
      "meanings": {
        "vi": "thẳng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-134",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "さあ",
      "readings": [
        "さあ"
      ],
      "meanings": {
        "vi": "dùng để chuyển đề tài"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-135",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "チョコレート",
      "readings": [
        "チョコレート"
      ],
      "meanings": {
        "vi": "Sô-cô-la"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-136",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "日本",
      "readings": [
        "にほん",
        "にっぽん"
      ],
      "meanings": {
        "vi": "Nhật Bản"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-137",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "アメリカ",
      "readings": [
        "アメリカ"
      ],
      "meanings": {
        "vi": "Mỹ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-138",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "馬",
      "readings": [
        "うま"
      ],
      "meanings": {
        "vi": "Con ngựa"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-139",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "豚",
      "readings": [
        "ぶた"
      ],
      "meanings": {
        "vi": "Con lợn"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-140",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "美術館",
      "readings": [
        "びじゅつかん"
      ],
      "meanings": {
        "vi": "Bảo tàng"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-141",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "これ",
      "readings": [
        "これ"
      ],
      "meanings": {
        "vi": "cái này"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-142",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "それ",
      "readings": [
        "それ"
      ],
      "meanings": {
        "vi": "cái đó"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-143",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "あれ",
      "readings": [
        "あれ"
      ],
      "meanings": {
        "vi": "cái kia"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-144",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "どれ",
      "readings": [
        "どれ"
      ],
      "meanings": {
        "vi": "cái nào"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-145",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "何",
      "readings": [
        "なん/なに"
      ],
      "meanings": {
        "vi": "gì, cái gì"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-146",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "誰",
      "readings": [
        "だれ"
      ],
      "meanings": {
        "vi": "ai, người nào"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-147",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "いくつ",
      "readings": [
        "いくつ"
      ],
      "meanings": {
        "vi": "bao nhiêu cái?   bao nhiêu tuổi?"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-148",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "いくら",
      "readings": [
        "いくら"
      ],
      "meanings": {
        "vi": "bao nhiêu? ( Hỏi giá tiền)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-149",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "先",
      "readings": [
        "さき"
      ],
      "meanings": {
        "vi": "trước ( làm cái gì đó trước)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-150",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "そして",
      "readings": [
        "そして"
      ],
      "meanings": {
        "vi": "và, rồi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-151",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "でも",
      "readings": [
        "でも"
      ],
      "meanings": {
        "vi": "nhưng mà"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-152",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "から",
      "readings": [
        "から"
      ],
      "meanings": {
        "vi": "vì, từ"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-153",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "まで",
      "readings": [
        "まで"
      ],
      "meanings": {
        "vi": "đến, cho đến"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-154",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "もう",
      "readings": [
        "もう"
      ],
      "meanings": {
        "vi": "đã, rồi"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-155",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "まだ",
      "readings": [
        "まだ"
      ],
      "meanings": {
        "vi": "vẫn, chưa"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-156",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "とても",
      "readings": [
        "とても"
      ],
      "meanings": {
        "vi": "rất"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-157",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "少し",
      "readings": [
        "すこし"
      ],
      "meanings": {
        "vi": "một chút"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-158",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "初めて",
      "readings": [
        "はじめて"
      ],
      "meanings": {
        "vi": "lần đầu tiên"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-159",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "よく",
      "readings": [
        "よく"
      ],
      "meanings": {
        "vi": "thường xuyên, hay"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-160",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "全然",
      "readings": [
        "ぜんぜん"
      ],
      "meanings": {
        "vi": "hoàn toàn không"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-161",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "この",
      "readings": [
        "この"
      ],
      "meanings": {
        "vi": "cái này (+ danh từ)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-162",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "あの",
      "readings": [
        "あの"
      ],
      "meanings": {
        "vi": "cái kia (+ danh từ)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-163",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "どの",
      "readings": [
        "どの"
      ],
      "meanings": {
        "vi": "cái nào (+ danh từ)"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-164",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "だから",
      "readings": [
        "だから"
      ],
      "meanings": {
        "vi": "vì vậy"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-165",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "けれども",
      "readings": [
        "けれども"
      ],
      "meanings": {
        "vi": "nhưng mà"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-166",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "やはり",
      "readings": [
        "やはり"
      ],
      "meanings": {
        "vi": "quả nhiên"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-167",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "必ず",
      "readings": [
        "かならず"
      ],
      "meanings": {
        "vi": "nhất định"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-168",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "特に",
      "readings": [
        "とくに"
      ],
      "meanings": {
        "vi": "đặc biệt"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-169",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "絶対に",
      "readings": [
        "ぜったいに"
      ],
      "meanings": {
        "vi": "tuyệt đối"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-170",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "なかなか",
      "readings": [
        "なかなか"
      ],
      "meanings": {
        "vi": "khá, tương đối"
      }
    },
    {
      "cardId": "n5:vocabulary:vocab-n5-v1:others-171",
      "schemaVersion": 1,
      "sourceVersion": "vocab-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "vocab-n5-others",
      "contentType": "vocabulary",
      "term": "ぜひ",
      "readings": [
        "ぜひ"
      ],
      "meanings": {
        "vi": "nhất định, bằng mọi giá"
      }
    }
  ]
})
