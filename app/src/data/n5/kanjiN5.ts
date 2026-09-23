import { parseContentBundle } from '../schema'

export const KANJI_N5_SOURCE_VERSION = 'kanji-n5-legacy-audit-v1' as const

export const KANJI_N5_TOPICS = [
  {
    "topicId": "kanji-n5-numbers",
    "legacyGroupId": "k5_numbers",
    "label": "Số đếm",
    "count": 14
  },
  {
    "topicId": "kanji-n5-time",
    "legacyGroupId": "k5_time",
    "label": "Thời gian",
    "count": 13
  },
  {
    "topicId": "kanji-n5-people",
    "legacyGroupId": "k5_people",
    "label": "Con người",
    "count": 11
  },
  {
    "topicId": "kanji-n5-nature",
    "legacyGroupId": "k5_nature",
    "label": "Tự nhiên",
    "count": 14
  },
  {
    "topicId": "kanji-n5-body",
    "legacyGroupId": "k5_body",
    "label": "Cơ thể",
    "count": 5
  },
  {
    "topicId": "kanji-n5-actions",
    "legacyGroupId": "k5_actions",
    "label": "Hành động",
    "count": 16
  },
  {
    "topicId": "kanji-n5-study",
    "legacyGroupId": "k5_study",
    "label": "Học tập",
    "count": 6
  },
  {
    "topicId": "kanji-n5-directions",
    "legacyGroupId": "k5_directions",
    "label": "Vị trí & Hướng",
    "count": 10
  },
  {
    "topicId": "kanji-n5-size",
    "legacyGroupId": "k5_size",
    "label": "Kích thước",
    "count": 10
  },
  {
    "topicId": "kanji-n5-misc",
    "legacyGroupId": "k5_misc",
    "label": "Khác",
    "count": 10
  }
] as const

export const KANJI_N5_BUNDLE = parseContentBundle({
  "bundleId": "n5-kanji-v1",
  "schemaVersion": 1,
  "sourceVersion": "kanji-n5-legacy-audit-v1",
  "cards": [
    {
      "cardId": "n5:kanji:kanji-n5-v1:numbers-001",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-numbers",
      "contentType": "kanji",
      "character": "一",
      "readings": [
        "いち",
        "ひと"
      ],
      "onYomi": "イチ",
      "kunYomi": "ひと(つ)",
      "meanings": {
        "vi": "Một",
        "en": "One"
      },
      "hanViet": "Nhất",
      "strokeCount": 1,
      "mnemonic": "Một nét ngang = số 1"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:numbers-002",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-numbers",
      "contentType": "kanji",
      "character": "二",
      "readings": [
        "に",
        "ふた"
      ],
      "onYomi": "ニ",
      "kunYomi": "ふた(つ)",
      "meanings": {
        "vi": "Hai",
        "en": "Two"
      },
      "hanViet": "Nhị",
      "strokeCount": 2,
      "mnemonic": "Hai nét ngang = số 2"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:numbers-003",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-numbers",
      "contentType": "kanji",
      "character": "三",
      "readings": [
        "さん",
        "み"
      ],
      "onYomi": "サン",
      "kunYomi": "み(つ)",
      "meanings": {
        "vi": "Ba",
        "en": "Three"
      },
      "hanViet": "Tam",
      "strokeCount": 3,
      "mnemonic": "Ba nét ngang = số 3"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:numbers-004",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-numbers",
      "contentType": "kanji",
      "character": "四",
      "readings": [
        "し",
        "よん"
      ],
      "onYomi": "シ",
      "kunYomi": "よ(つ)",
      "meanings": {
        "vi": "Bốn",
        "en": "Four"
      },
      "hanViet": "Tứ",
      "strokeCount": 5,
      "mnemonic": "Ô vuông bên trong có chia đôi giống 4 phần"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:numbers-005",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-numbers",
      "contentType": "kanji",
      "character": "五",
      "readings": [
        "ご",
        "いつ"
      ],
      "onYomi": "ゴ",
      "kunYomi": "いつ(つ)",
      "meanings": {
        "vi": "Năm",
        "en": "Five"
      },
      "hanViet": "Ngũ",
      "strokeCount": 4,
      "mnemonic": "4 nét ngang-dọc xen kẽ giống bàn tay 5 ngón"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:numbers-006",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-numbers",
      "contentType": "kanji",
      "character": "六",
      "readings": [
        "ろく",
        "む"
      ],
      "onYomi": "ロク",
      "kunYomi": "む(つ)",
      "meanings": {
        "vi": "Sáu",
        "en": "Six"
      },
      "hanViet": "Lục",
      "strokeCount": 4,
      "mnemonic": "Mái nhà có 2 chân = 6 mặt hình hộp"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:numbers-007",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-numbers",
      "contentType": "kanji",
      "character": "七",
      "readings": [
        "しち",
        "なな"
      ],
      "onYomi": "シチ",
      "kunYomi": "なな(つ)",
      "meanings": {
        "vi": "Bảy",
        "en": "Seven"
      },
      "hanViet": "Thất",
      "strokeCount": 2,
      "mnemonic": "Nét cắt ngang giống số 7 lộn ngược"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:numbers-008",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-numbers",
      "contentType": "kanji",
      "character": "八",
      "readings": [
        "はち",
        "や"
      ],
      "onYomi": "ハチ",
      "kunYomi": "や(つ)",
      "meanings": {
        "vi": "Tám",
        "en": "Eight"
      },
      "hanViet": "Bát",
      "strokeCount": 2,
      "mnemonic": "Hai nét tách ra 2 bên giống số 8 bổ đôi"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:numbers-009",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-numbers",
      "contentType": "kanji",
      "character": "九",
      "readings": [
        "きゅう",
        "く"
      ],
      "onYomi": "キュウ",
      "kunYomi": "ここの(つ)",
      "meanings": {
        "vi": "Chín",
        "en": "Nine"
      },
      "hanViet": "Cửu",
      "strokeCount": 2,
      "mnemonic": "Giống chữ 力 thiếu 1 nét = chín muồi"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:numbers-010",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-numbers",
      "contentType": "kanji",
      "character": "十",
      "readings": [
        "じゅう",
        "とお"
      ],
      "onYomi": "ジュウ",
      "kunYomi": "とお",
      "meanings": {
        "vi": "Mười",
        "en": "Ten"
      },
      "hanViet": "Thập",
      "strokeCount": 2,
      "mnemonic": "Dấu cộng (+) = 10 = tròn đủ"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:numbers-011",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-numbers",
      "contentType": "kanji",
      "character": "百",
      "readings": [
        "ひゃく"
      ],
      "onYomi": "ヒャク",
      "kunYomi": "",
      "meanings": {
        "vi": "Trăm",
        "en": "Hundred"
      },
      "hanViet": "Bách",
      "strokeCount": 6,
      "mnemonic": "Một (一) trên trắng (白) = 100 phần trắng tinh"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:numbers-012",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-numbers",
      "contentType": "kanji",
      "character": "千",
      "readings": [
        "せん"
      ],
      "onYomi": "セン",
      "kunYomi": "ち",
      "meanings": {
        "vi": "Nghìn",
        "en": "Thousand"
      },
      "hanViet": "Thiên",
      "strokeCount": 3,
      "mnemonic": "Nét phẩy trên chữ Mười (十) = gấp trăm lần"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:numbers-013",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-numbers",
      "contentType": "kanji",
      "character": "万",
      "readings": [
        "まん",
        "ばん"
      ],
      "onYomi": "マン",
      "kunYomi": "",
      "meanings": {
        "vi": "Vạn",
        "en": "Ten thousand"
      },
      "hanViet": "Vạn",
      "strokeCount": 3,
      "mnemonic": "Chữ giống cái lưỡi liềm cắt = 10.000"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:numbers-014",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-numbers",
      "contentType": "kanji",
      "character": "円",
      "readings": [
        "えん"
      ],
      "onYomi": "エン",
      "kunYomi": "まる(い)",
      "meanings": {
        "vi": "Yên (tiền)",
        "en": "Yen / Circle"
      },
      "hanViet": "Viên",
      "strokeCount": 4,
      "mnemonic": "Hình tròn đồng xu Nhật"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:time-001",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-time",
      "contentType": "kanji",
      "character": "日",
      "readings": [
        "にち",
        "ひ",
        "じつ"
      ],
      "onYomi": "ニチ・ジツ",
      "kunYomi": "ひ・か",
      "meanings": {
        "vi": "Ngày / Mặt trời",
        "en": "Day / Sun"
      },
      "hanViet": "Nhật",
      "strokeCount": 4,
      "mnemonic": "Mặt trời hình chữ nhật"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:time-002",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-time",
      "contentType": "kanji",
      "character": "月",
      "readings": [
        "げつ",
        "がつ",
        "つき"
      ],
      "onYomi": "ゲツ・ガツ",
      "kunYomi": "つき",
      "meanings": {
        "vi": "Tháng / Mặt trăng",
        "en": "Month / Moon"
      },
      "hanViet": "Nguyệt",
      "strokeCount": 4,
      "mnemonic": "Mặt trăng lưỡi liềm"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:time-003",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-time",
      "contentType": "kanji",
      "character": "年",
      "readings": [
        "ねん",
        "とし"
      ],
      "onYomi": "ネン",
      "kunYomi": "とし",
      "meanings": {
        "vi": "Năm",
        "en": "Year"
      },
      "hanViet": "Niên",
      "strokeCount": 6,
      "mnemonic": "Nông dân gánh lúa qua mùa, hết 1 năm"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:time-004",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-time",
      "contentType": "kanji",
      "character": "週",
      "readings": [
        "しゅう"
      ],
      "onYomi": "シュウ",
      "kunYomi": "",
      "meanings": {
        "vi": "Tuần",
        "en": "Week"
      },
      "hanViet": "Chu",
      "strokeCount": 11,
      "mnemonic": "Đi (辶) vòng quanh (周) = hết 1 tuần"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:time-005",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-time",
      "contentType": "kanji",
      "character": "時",
      "readings": [
        "じ",
        "とき"
      ],
      "onYomi": "ジ",
      "kunYomi": "とき",
      "meanings": {
        "vi": "Giờ / Thời gian",
        "en": "Time / Hour"
      },
      "hanViet": "Thì",
      "strokeCount": 10,
      "mnemonic": "Mặt trời (日) + Chùa (寺) = giờ chuông chùa"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:time-006",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-time",
      "contentType": "kanji",
      "character": "間",
      "readings": [
        "かん",
        "あいだ"
      ],
      "onYomi": "カン・ケン",
      "kunYomi": "あいだ・ま",
      "meanings": {
        "vi": "Khoảng",
        "en": "Between / Interval"
      },
      "hanViet": "Gian",
      "strokeCount": 12,
      "mnemonic": "Mặt trời (日) ở giữa cổng (門) = khoảng giữa"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:time-007",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-time",
      "contentType": "kanji",
      "character": "分",
      "readings": [
        "ふん",
        "ぶん",
        "わ"
      ],
      "onYomi": "フン・ブン",
      "kunYomi": "わ(ける)",
      "meanings": {
        "vi": "Phút / Chia",
        "en": "Minute / Divide"
      },
      "hanViet": "Phân",
      "strokeCount": 4,
      "mnemonic": "Dao (刀) chia đôi (八) = phân chia"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:time-008",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-time",
      "contentType": "kanji",
      "character": "半",
      "readings": [
        "はん"
      ],
      "onYomi": "ハン",
      "kunYomi": "なか(ば)",
      "meanings": {
        "vi": "Nửa",
        "en": "Half"
      },
      "hanViet": "Bán",
      "strokeCount": 5,
      "mnemonic": "Trâu (牛) bị chia đôi = một nửa"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:time-009",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-time",
      "contentType": "kanji",
      "character": "午",
      "readings": [
        "ご"
      ],
      "onYomi": "ゴ",
      "kunYomi": "",
      "meanings": {
        "vi": "Trưa",
        "en": "Noon"
      },
      "hanViet": "Ngọ",
      "strokeCount": 4,
      "mnemonic": "Kim đồng hồ chỉ 12h trưa"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:time-010",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-time",
      "contentType": "kanji",
      "character": "前",
      "readings": [
        "まえ",
        "ぜん"
      ],
      "onYomi": "ゼン",
      "kunYomi": "まえ",
      "meanings": {
        "vi": "Trước",
        "en": "Before / Front"
      },
      "hanViet": "Tiền",
      "strokeCount": 9,
      "mnemonic": "Chân (月) bước tới (刂) trước cửa = phía trước"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:time-011",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-time",
      "contentType": "kanji",
      "character": "後",
      "readings": [
        "あと",
        "ご",
        "のち"
      ],
      "onYomi": "ゴ・コウ",
      "kunYomi": "あと・うし(ろ)",
      "meanings": {
        "vi": "Sau",
        "en": "After / Behind"
      },
      "hanViet": "Hậu",
      "strokeCount": 9,
      "mnemonic": "Bước chân (彳) chậm lại (夂) = phía sau"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:time-012",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-time",
      "contentType": "kanji",
      "character": "今",
      "readings": [
        "いま",
        "こん"
      ],
      "onYomi": "コン・キン",
      "kunYomi": "いま",
      "meanings": {
        "vi": "Bây giờ",
        "en": "Now"
      },
      "hanViet": "Kim",
      "strokeCount": 4,
      "mnemonic": "Mái nhà (人) che cái gì đó (ラ) = ngay lúc này"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:time-013",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-time",
      "contentType": "kanji",
      "character": "毎",
      "readings": [
        "まい"
      ],
      "onYomi": "マイ",
      "kunYomi": "",
      "meanings": {
        "vi": "Mỗi",
        "en": "Every"
      },
      "hanViet": "Mỗi",
      "strokeCount": 6,
      "mnemonic": "Mẹ (母) làm mỗi ngày"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:people-001",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-people",
      "contentType": "kanji",
      "character": "人",
      "readings": [
        "じん",
        "にん",
        "ひと"
      ],
      "onYomi": "ジン・ニン",
      "kunYomi": "ひと",
      "meanings": {
        "vi": "Người",
        "en": "Person"
      },
      "hanViet": "Nhân",
      "strokeCount": 2,
      "mnemonic": "Hai nét tựa nhau như 2 người đỡ nhau"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:people-002",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-people",
      "contentType": "kanji",
      "character": "男",
      "readings": [
        "おとこ",
        "だん"
      ],
      "onYomi": "ダン・ナン",
      "kunYomi": "おとこ",
      "meanings": {
        "vi": "Nam",
        "en": "Man"
      },
      "hanViet": "Nam",
      "strokeCount": 7,
      "mnemonic": "Ruộng (田) + Sức (力) = đàn ông cày ruộng"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:people-003",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-people",
      "contentType": "kanji",
      "character": "女",
      "readings": [
        "おんな",
        "じょ"
      ],
      "onYomi": "ジョ・ニョ",
      "kunYomi": "おんな・め",
      "meanings": {
        "vi": "Nữ",
        "en": "Woman"
      },
      "hanViet": "Nữ",
      "strokeCount": 3,
      "mnemonic": "Hình phụ nữ đang quỳ, hai tay khoanh"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:people-004",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-people",
      "contentType": "kanji",
      "character": "子",
      "readings": [
        "こ",
        "し"
      ],
      "onYomi": "シ・ス",
      "kunYomi": "こ",
      "meanings": {
        "vi": "Con",
        "en": "Child"
      },
      "hanViet": "Tử",
      "strokeCount": 3,
      "mnemonic": "Em bé nằm trong nôi, hai tay vẫy"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:people-005",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-people",
      "contentType": "kanji",
      "character": "父",
      "readings": [
        "ちち",
        "ふ"
      ],
      "onYomi": "フ",
      "kunYomi": "ちち",
      "meanings": {
        "vi": "Cha",
        "en": "Father"
      },
      "hanViet": "Phụ",
      "strokeCount": 4,
      "mnemonic": "Bàn tay cầm roi = cha dạy con"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:people-006",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-people",
      "contentType": "kanji",
      "character": "母",
      "readings": [
        "はは",
        "ぼ"
      ],
      "onYomi": "ボ",
      "kunYomi": "はは・かあ",
      "meanings": {
        "vi": "Mẹ",
        "en": "Mother"
      },
      "hanViet": "Mẫu",
      "strokeCount": 5,
      "mnemonic": "Người mẹ ôm 2 đứa con (2 chấm bên trong)"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:people-007",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-people",
      "contentType": "kanji",
      "character": "友",
      "readings": [
        "とも",
        "ゆう"
      ],
      "onYomi": "ユウ",
      "kunYomi": "とも",
      "meanings": {
        "vi": "Bạn",
        "en": "Friend"
      },
      "hanViet": "Hữu",
      "strokeCount": 4,
      "mnemonic": "Hai tay nắm chặt nhau = bạn bè"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:people-008",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-people",
      "contentType": "kanji",
      "character": "先",
      "readings": [
        "さき",
        "せん"
      ],
      "onYomi": "セン",
      "kunYomi": "さき",
      "meanings": {
        "vi": "Trước / Thầy",
        "en": "Previous / Teacher"
      },
      "hanViet": "Tiên",
      "strokeCount": 6,
      "mnemonic": "Chân đi trước người khác = Tiên phong"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:people-009",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-people",
      "contentType": "kanji",
      "character": "生",
      "readings": [
        "せい",
        "しょう",
        "い"
      ],
      "onYomi": "セイ・ショウ",
      "kunYomi": "い(きる)・う(む)",
      "meanings": {
        "vi": "Sinh / Sống",
        "en": "Life / Birth"
      },
      "hanViet": "Sinh",
      "strokeCount": 5,
      "mnemonic": "Cây non mọc lên từ mặt đất"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:people-010",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-people",
      "contentType": "kanji",
      "character": "学",
      "readings": [
        "がく",
        "まな"
      ],
      "onYomi": "ガク",
      "kunYomi": "まな(ぶ)",
      "meanings": {
        "vi": "Học",
        "en": "Study"
      },
      "hanViet": "Học",
      "strokeCount": 8,
      "mnemonic": "Con (子) ngồi dưới mái nhà đọc sách"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:people-011",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-people",
      "contentType": "kanji",
      "character": "名",
      "readings": [
        "な",
        "めい"
      ],
      "onYomi": "メイ・ミョウ",
      "kunYomi": "な",
      "meanings": {
        "vi": "Tên",
        "en": "Name"
      },
      "hanViet": "Danh",
      "strokeCount": 6,
      "mnemonic": "Tối (夕) + Miệng (口) = gọi tên trong đêm"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:nature-001",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-nature",
      "contentType": "kanji",
      "character": "山",
      "readings": [
        "やま",
        "さん"
      ],
      "onYomi": "サン",
      "kunYomi": "やま",
      "meanings": {
        "vi": "Núi",
        "en": "Mountain"
      },
      "hanViet": "Sơn",
      "strokeCount": 3,
      "mnemonic": "Ba đỉnh núi nhô lên, đỉnh giữa cao nhất"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:nature-002",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-nature",
      "contentType": "kanji",
      "character": "川",
      "readings": [
        "かわ",
        "がわ"
      ],
      "onYomi": "セン",
      "kunYomi": "かわ",
      "meanings": {
        "vi": "Sông",
        "en": "River"
      },
      "hanViet": "Xuyên",
      "strokeCount": 3,
      "mnemonic": "Ba dòng nước chảy song song"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:nature-003",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-nature",
      "contentType": "kanji",
      "character": "天",
      "readings": [
        "てん",
        "あま"
      ],
      "onYomi": "テン",
      "kunYomi": "あめ・あま",
      "meanings": {
        "vi": "Trời",
        "en": "Sky / Heaven"
      },
      "hanViet": "Thiên",
      "strokeCount": 4,
      "mnemonic": "Trên đầu người (大) có 1 nét = bầu trời"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:nature-004",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-nature",
      "contentType": "kanji",
      "character": "気",
      "readings": [
        "き",
        "け"
      ],
      "onYomi": "キ・ケ",
      "kunYomi": "",
      "meanings": {
        "vi": "Khí",
        "en": "Spirit / Air"
      },
      "hanViet": "Khí",
      "strokeCount": 6,
      "mnemonic": "Hơi thở (气) bốc lên từ gạo (米)"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:nature-005",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-nature",
      "contentType": "kanji",
      "character": "雨",
      "readings": [
        "あめ",
        "う"
      ],
      "onYomi": "ウ",
      "kunYomi": "あめ・あま",
      "meanings": {
        "vi": "Mưa",
        "en": "Rain"
      },
      "hanViet": "Vũ",
      "strokeCount": 8,
      "mnemonic": "Mái nhà bên trong có giọt mưa rơi"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:nature-006",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-nature",
      "contentType": "kanji",
      "character": "花",
      "readings": [
        "はな",
        "か"
      ],
      "onYomi": "カ",
      "kunYomi": "はな",
      "meanings": {
        "vi": "Hoa",
        "en": "Flower"
      },
      "hanViet": "Hoa",
      "strokeCount": 7,
      "mnemonic": "Cỏ (艹) trên, hóa (化) dưới = cỏ hóa thành hoa"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:nature-007",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-nature",
      "contentType": "kanji",
      "character": "空",
      "readings": [
        "そら",
        "くう"
      ],
      "onYomi": "クウ",
      "kunYomi": "そら・あ(ける)",
      "meanings": {
        "vi": "Bầu trời / Trống",
        "en": "Sky / Empty"
      },
      "hanViet": "Không",
      "strokeCount": 8,
      "mnemonic": "Hang (穴) trống rỗng = bầu trời rộng lớn"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:nature-008",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-nature",
      "contentType": "kanji",
      "character": "木",
      "readings": [
        "き",
        "もく"
      ],
      "onYomi": "モク・ボク",
      "kunYomi": "き・こ",
      "meanings": {
        "vi": "Cây",
        "en": "Tree"
      },
      "hanViet": "Mộc",
      "strokeCount": 4,
      "mnemonic": "Thân cây dọc có 2 cành tỏa ra"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:nature-009",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-nature",
      "contentType": "kanji",
      "character": "林",
      "readings": [
        "はやし",
        "りん"
      ],
      "onYomi": "リン",
      "kunYomi": "はやし",
      "meanings": {
        "vi": "Rừng nhỏ",
        "en": "Grove"
      },
      "hanViet": "Lâm",
      "strokeCount": 8,
      "mnemonic": "Hai cây (木木) đứng cạnh nhau = khu rừng"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:nature-010",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-nature",
      "contentType": "kanji",
      "character": "森",
      "readings": [
        "もり",
        "しん"
      ],
      "onYomi": "シン",
      "kunYomi": "もり",
      "meanings": {
        "vi": "Rừng rậm",
        "en": "Forest"
      },
      "hanViet": "Sâm",
      "strokeCount": 12,
      "mnemonic": "Ba cây (木木木) = rừng rậm rạp"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:nature-011",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-nature",
      "contentType": "kanji",
      "character": "火",
      "readings": [
        "ひ",
        "か"
      ],
      "onYomi": "カ",
      "kunYomi": "ひ・ほ",
      "meanings": {
        "vi": "Lửa",
        "en": "Fire"
      },
      "hanViet": "Hỏa",
      "strokeCount": 4,
      "mnemonic": "Người giơ tay vì bị lửa đốt"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:nature-012",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-nature",
      "contentType": "kanji",
      "character": "水",
      "readings": [
        "みず",
        "すい"
      ],
      "onYomi": "スイ",
      "kunYomi": "みず",
      "meanings": {
        "vi": "Nước",
        "en": "Water"
      },
      "hanViet": "Thủy",
      "strokeCount": 4,
      "mnemonic": "Dòng nước chảy xuống, tung tóe 2 bên"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:nature-013",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-nature",
      "contentType": "kanji",
      "character": "金",
      "readings": [
        "かね",
        "きん"
      ],
      "onYomi": "キン・コン",
      "kunYomi": "かね・かな",
      "meanings": {
        "vi": "Vàng / Tiền",
        "en": "Gold / Money"
      },
      "hanViet": "Kim",
      "strokeCount": 8,
      "mnemonic": "Mái nhà che kho vàng, dưới có cục vàng"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:nature-014",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-nature",
      "contentType": "kanji",
      "character": "土",
      "readings": [
        "つち",
        "ど"
      ],
      "onYomi": "ド・ト",
      "kunYomi": "つち",
      "meanings": {
        "vi": "Đất",
        "en": "Earth / Soil"
      },
      "hanViet": "Thổ",
      "strokeCount": 3,
      "mnemonic": "Dấu cộng cắm xuống mặt đất"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:body-001",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-body",
      "contentType": "kanji",
      "character": "目",
      "readings": [
        "め",
        "もく"
      ],
      "onYomi": "モク・ボク",
      "kunYomi": "め・ま",
      "meanings": {
        "vi": "Mắt",
        "en": "Eye"
      },
      "hanViet": "Mục",
      "strokeCount": 5,
      "mnemonic": "Hình con mắt đặt dọc"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:body-002",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-body",
      "contentType": "kanji",
      "character": "耳",
      "readings": [
        "みみ",
        "じ"
      ],
      "onYomi": "ジ",
      "kunYomi": "みみ",
      "meanings": {
        "vi": "Tai",
        "en": "Ear"
      },
      "hanViet": "Nhĩ",
      "strokeCount": 6,
      "mnemonic": "Hình lỗ tai với 2 nét bên trong"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:body-003",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-body",
      "contentType": "kanji",
      "character": "口",
      "readings": [
        "くち",
        "こう"
      ],
      "onYomi": "コウ・ク",
      "kunYomi": "くち",
      "meanings": {
        "vi": "Miệng",
        "en": "Mouth"
      },
      "hanViet": "Khẩu",
      "strokeCount": 3,
      "mnemonic": "Hình cái miệng mở ra"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:body-004",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-body",
      "contentType": "kanji",
      "character": "手",
      "readings": [
        "て",
        "しゅ"
      ],
      "onYomi": "シュ",
      "kunYomi": "て・た",
      "meanings": {
        "vi": "Tay",
        "en": "Hand"
      },
      "hanViet": "Thủ",
      "strokeCount": 4,
      "mnemonic": "Bàn tay xòe ra với các ngón"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:body-005",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-body",
      "contentType": "kanji",
      "character": "足",
      "readings": [
        "あし",
        "そく"
      ],
      "onYomi": "ソク",
      "kunYomi": "あし・た(りる)",
      "meanings": {
        "vi": "Chân",
        "en": "Foot / Leg"
      },
      "hanViet": "Túc",
      "strokeCount": 7,
      "mnemonic": "Miệng (口) + Dừng lại (止) = bước chân"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:actions-001",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-actions",
      "contentType": "kanji",
      "character": "見",
      "readings": [
        "み",
        "けん"
      ],
      "onYomi": "ケン",
      "kunYomi": "み(る)・み(える)",
      "meanings": {
        "vi": "Xem",
        "en": "See"
      },
      "hanViet": "Kiến",
      "strokeCount": 7,
      "mnemonic": "Mắt (目) trên đôi chân (儿) = đi xem"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:actions-002",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-actions",
      "contentType": "kanji",
      "character": "聞",
      "readings": [
        "き",
        "ぶん"
      ],
      "onYomi": "ブン・モン",
      "kunYomi": "き(く)",
      "meanings": {
        "vi": "Nghe",
        "en": "Listen"
      },
      "hanViet": "Văn",
      "strokeCount": 14,
      "mnemonic": "Tai (耳) trong cổng (門) = lắng nghe tin tức"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:actions-003",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-actions",
      "contentType": "kanji",
      "character": "読",
      "readings": [
        "よ",
        "どく"
      ],
      "onYomi": "ドク・トク",
      "kunYomi": "よ(む)",
      "meanings": {
        "vi": "Đọc",
        "en": "Read"
      },
      "hanViet": "Độc",
      "strokeCount": 14,
      "mnemonic": "Nói (言) + Bán (売) = mua lời hay = đọc sách"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:actions-004",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-actions",
      "contentType": "kanji",
      "character": "書",
      "readings": [
        "か",
        "しょ"
      ],
      "onYomi": "ショ",
      "kunYomi": "か(く)",
      "meanings": {
        "vi": "Viết",
        "en": "Write"
      },
      "hanViet": "Thư",
      "strokeCount": 10,
      "mnemonic": "Bút viết lên giấy, xếp thành sách"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:actions-005",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-actions",
      "contentType": "kanji",
      "character": "話",
      "readings": [
        "はな",
        "わ"
      ],
      "onYomi": "ワ",
      "kunYomi": "はな(す)・はなし",
      "meanings": {
        "vi": "Nói",
        "en": "Talk / Story"
      },
      "hanViet": "Thoại",
      "strokeCount": 13,
      "mnemonic": "Lời nói (言) + Lưỡi (舌) = nói chuyện"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:actions-006",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-actions",
      "contentType": "kanji",
      "character": "言",
      "readings": [
        "い",
        "げん"
      ],
      "onYomi": "ゲン・ゴン",
      "kunYomi": "い(う)・こと",
      "meanings": {
        "vi": "Lời nói",
        "en": "Say / Word"
      },
      "hanViet": "Ngôn",
      "strokeCount": 7,
      "mnemonic": "Miệng mở ra phát lời"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:actions-007",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-actions",
      "contentType": "kanji",
      "character": "食",
      "readings": [
        "た",
        "しょく"
      ],
      "onYomi": "ショク",
      "kunYomi": "た(べる)・く(う)",
      "meanings": {
        "vi": "Ăn",
        "en": "Eat"
      },
      "hanViet": "Thực",
      "strokeCount": 9,
      "mnemonic": "Mái nhà che bát cơm tốt"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:actions-008",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-actions",
      "contentType": "kanji",
      "character": "飲",
      "readings": [
        "の",
        "いん"
      ],
      "onYomi": "イン",
      "kunYomi": "の(む)",
      "meanings": {
        "vi": "Uống",
        "en": "Drink"
      },
      "hanViet": "Ẩm",
      "strokeCount": 12,
      "mnemonic": "Ăn (食) + Há miệng (欠) = uống nước"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:actions-009",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-actions",
      "contentType": "kanji",
      "character": "行",
      "readings": [
        "い",
        "こう"
      ],
      "onYomi": "コウ・ギョウ",
      "kunYomi": "い(く)・ゆ(く)・おこな(う)",
      "meanings": {
        "vi": "Đi",
        "en": "Go"
      },
      "hanViet": "Hành",
      "strokeCount": 6,
      "mnemonic": "Bước chân đi trên ngã tư đường"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:actions-010",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-actions",
      "contentType": "kanji",
      "character": "来",
      "readings": [
        "く",
        "らい"
      ],
      "onYomi": "ライ",
      "kunYomi": "く(る)・き(たる)",
      "meanings": {
        "vi": "Đến",
        "en": "Come"
      },
      "hanViet": "Lai",
      "strokeCount": 7,
      "mnemonic": "Cây lúa (来) chín đến mùa thu hoạch"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:actions-011",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-actions",
      "contentType": "kanji",
      "character": "出",
      "readings": [
        "で",
        "しゅつ"
      ],
      "onYomi": "シュツ",
      "kunYomi": "で(る)・だ(す)",
      "meanings": {
        "vi": "Ra",
        "en": "Exit / Go out"
      },
      "hanViet": "Xuất",
      "strokeCount": 5,
      "mnemonic": "Núi (山) chồng lên = bước ra ngoài"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:actions-012",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-actions",
      "contentType": "kanji",
      "character": "入",
      "readings": [
        "い",
        "にゅう"
      ],
      "onYomi": "ニュウ",
      "kunYomi": "い(る)・はい(る)",
      "meanings": {
        "vi": "Vào",
        "en": "Enter"
      },
      "hanViet": "Nhập",
      "strokeCount": 2,
      "mnemonic": "Hai nét hội tụ vào một điểm = đi vào"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:actions-013",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-actions",
      "contentType": "kanji",
      "character": "休",
      "readings": [
        "やす",
        "きゅう"
      ],
      "onYomi": "キュウ",
      "kunYomi": "やす(む)",
      "meanings": {
        "vi": "Nghỉ",
        "en": "Rest"
      },
      "hanViet": "Hưu",
      "strokeCount": 6,
      "mnemonic": "Người (亻) dựa vào cây (木) = nghỉ ngơi"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:actions-014",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-actions",
      "contentType": "kanji",
      "character": "立",
      "readings": [
        "た",
        "りつ"
      ],
      "onYomi": "リツ",
      "kunYomi": "た(つ)",
      "meanings": {
        "vi": "Đứng",
        "en": "Stand"
      },
      "hanViet": "Lập",
      "strokeCount": 5,
      "mnemonic": "Người đứng thẳng trên mặt đất"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:actions-015",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-actions",
      "contentType": "kanji",
      "character": "買",
      "readings": [
        "か",
        "ばい"
      ],
      "onYomi": "バイ",
      "kunYomi": "か(う)",
      "meanings": {
        "vi": "Mua",
        "en": "Buy"
      },
      "hanViet": "Mãi",
      "strokeCount": 12,
      "mnemonic": "Mắt (目) nhìn + Chân (貝) chạy đi = mua sắm"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:actions-016",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-actions",
      "contentType": "kanji",
      "character": "売",
      "readings": [
        "う",
        "ばい"
      ],
      "onYomi": "バイ",
      "kunYomi": "う(る)",
      "meanings": {
        "vi": "Bán",
        "en": "Sell"
      },
      "hanViet": "Mại",
      "strokeCount": 7,
      "mnemonic": "Sĩ (士) đứng trên bán hàng"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:study-001",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-study",
      "contentType": "kanji",
      "character": "語",
      "readings": [
        "ご",
        "かた"
      ],
      "onYomi": "ゴ",
      "kunYomi": "かた(る)",
      "meanings": {
        "vi": "Ngôn ngữ",
        "en": "Language"
      },
      "hanViet": "Ngữ",
      "strokeCount": 14,
      "mnemonic": "Lời (言) + Ngũ (五) + Miệng (口) = 5 miệng nói = ngôn ngữ"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:study-002",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-study",
      "contentType": "kanji",
      "character": "校",
      "readings": [
        "こう"
      ],
      "onYomi": "コウ",
      "kunYomi": "",
      "meanings": {
        "vi": "Trường",
        "en": "School"
      },
      "hanViet": "Hiệu",
      "strokeCount": 10,
      "mnemonic": "Cây (木) + Giao (交) = nơi giao lưu dưới bóng cây"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:study-003",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-study",
      "contentType": "kanji",
      "character": "教",
      "readings": [
        "おし",
        "きょう"
      ],
      "onYomi": "キョウ",
      "kunYomi": "おし(える)",
      "meanings": {
        "vi": "Dạy",
        "en": "Teach"
      },
      "hanViet": "Giáo",
      "strokeCount": 11,
      "mnemonic": "Hiếu (孝) + Roi (攵) = dùng roi dạy dỗ"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:study-004",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-study",
      "contentType": "kanji",
      "character": "思",
      "readings": [
        "おも",
        "し"
      ],
      "onYomi": "シ",
      "kunYomi": "おも(う)",
      "meanings": {
        "vi": "Nghĩ",
        "en": "Think"
      },
      "hanViet": "Tư",
      "strokeCount": 9,
      "mnemonic": "Ruộng (田) + Tâm (心) = nghĩ trong lòng"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:study-005",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-study",
      "contentType": "kanji",
      "character": "知",
      "readings": [
        "し",
        "ち"
      ],
      "onYomi": "チ",
      "kunYomi": "し(る)",
      "meanings": {
        "vi": "Biết",
        "en": "Know"
      },
      "hanViet": "Tri",
      "strokeCount": 8,
      "mnemonic": "Mũi tên (矢) + Miệng (口) = nói trúng = hiểu biết"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:study-006",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-study",
      "contentType": "kanji",
      "character": "答",
      "readings": [
        "こた",
        "とう"
      ],
      "onYomi": "トウ",
      "kunYomi": "こた(える)",
      "meanings": {
        "vi": "Trả lời",
        "en": "Answer"
      },
      "hanViet": "Đáp",
      "strokeCount": 12,
      "mnemonic": "Tre (竹) + Hợp (合) = ghép tre thành câu trả lời"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:directions-001",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-directions",
      "contentType": "kanji",
      "character": "上",
      "readings": [
        "うえ",
        "じょう"
      ],
      "onYomi": "ジョウ・ショウ",
      "kunYomi": "うえ・あ(げる)",
      "meanings": {
        "vi": "Trên",
        "en": "Up / Above"
      },
      "hanViet": "Thượng",
      "strokeCount": 3,
      "mnemonic": "Nét chỉ lên trên mặt đất"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:directions-002",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-directions",
      "contentType": "kanji",
      "character": "下",
      "readings": [
        "した",
        "か",
        "げ"
      ],
      "onYomi": "カ・ゲ",
      "kunYomi": "した・さ(げる)",
      "meanings": {
        "vi": "Dưới",
        "en": "Down / Below"
      },
      "hanViet": "Hạ",
      "strokeCount": 3,
      "mnemonic": "Nét chỉ xuống dưới mặt đất"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:directions-003",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-directions",
      "contentType": "kanji",
      "character": "中",
      "readings": [
        "なか",
        "ちゅう"
      ],
      "onYomi": "チュウ",
      "kunYomi": "なか",
      "meanings": {
        "vi": "Giữa / Trong",
        "en": "Middle / Inside"
      },
      "hanViet": "Trung",
      "strokeCount": 4,
      "mnemonic": "Đường thẳng xuyên qua giữa hình chữ nhật"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:directions-004",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-directions",
      "contentType": "kanji",
      "character": "外",
      "readings": [
        "そと",
        "がい"
      ],
      "onYomi": "ガイ・ゲ",
      "kunYomi": "そと・ほか",
      "meanings": {
        "vi": "Ngoài",
        "en": "Outside"
      },
      "hanViet": "Ngoại",
      "strokeCount": 5,
      "mnemonic": "Chiều tối (夕) + Bói (卜) = ra ngoài bói vào lúc tối"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:directions-005",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-directions",
      "contentType": "kanji",
      "character": "右",
      "readings": [
        "みぎ",
        "う"
      ],
      "onYomi": "ウ・ユウ",
      "kunYomi": "みぎ",
      "meanings": {
        "vi": "Phải",
        "en": "Right"
      },
      "hanViet": "Hữu",
      "strokeCount": 5,
      "mnemonic": "Tay (ナ) + Miệng (口) = tay phải cầm đồ ăn"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:directions-006",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-directions",
      "contentType": "kanji",
      "character": "左",
      "readings": [
        "ひだり",
        "さ"
      ],
      "onYomi": "サ",
      "kunYomi": "ひだり",
      "meanings": {
        "vi": "Trái",
        "en": "Left"
      },
      "hanViet": "Tả",
      "strokeCount": 5,
      "mnemonic": "Tay (ナ) + Công (工) = tay trái cầm dụng cụ"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:directions-007",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-directions",
      "contentType": "kanji",
      "character": "北",
      "readings": [
        "きた",
        "ほく"
      ],
      "onYomi": "ホク",
      "kunYomi": "きた",
      "meanings": {
        "vi": "Bắc",
        "en": "North"
      },
      "hanViet": "Bắc",
      "strokeCount": 5,
      "mnemonic": "Hai người quay lưng vào nhau, hướng bắc lạnh"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:directions-008",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-directions",
      "contentType": "kanji",
      "character": "南",
      "readings": [
        "みなみ",
        "なん"
      ],
      "onYomi": "ナン",
      "kunYomi": "みなみ",
      "meanings": {
        "vi": "Nam",
        "en": "South"
      },
      "hanViet": "Nam",
      "strokeCount": 9,
      "mnemonic": "Nhà có rèm che gió phía nam"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:directions-009",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-directions",
      "contentType": "kanji",
      "character": "東",
      "readings": [
        "ひがし",
        "とう"
      ],
      "onYomi": "トウ",
      "kunYomi": "ひがし",
      "meanings": {
        "vi": "Đông",
        "en": "East"
      },
      "hanViet": "Đông",
      "strokeCount": 8,
      "mnemonic": "Mặt trời (日) mọc sau cây (木) = phía đông"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:directions-010",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-directions",
      "contentType": "kanji",
      "character": "西",
      "readings": [
        "にし",
        "せい"
      ],
      "onYomi": "セイ・サイ",
      "kunYomi": "にし",
      "meanings": {
        "vi": "Tây",
        "en": "West"
      },
      "hanViet": "Tây",
      "strokeCount": 6,
      "mnemonic": "Chim về tổ khi mặt trời lặn phía tây"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:size-001",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-size",
      "contentType": "kanji",
      "character": "大",
      "readings": [
        "おお",
        "だい"
      ],
      "onYomi": "ダイ・タイ",
      "kunYomi": "おお(きい)",
      "meanings": {
        "vi": "To / Lớn",
        "en": "Big"
      },
      "hanViet": "Đại",
      "strokeCount": 3,
      "mnemonic": "Người giang rộng tay chân = to lớn"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:size-002",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-size",
      "contentType": "kanji",
      "character": "小",
      "readings": [
        "ちい",
        "しょう"
      ],
      "onYomi": "ショウ",
      "kunYomi": "ちい(さい)・こ",
      "meanings": {
        "vi": "Nhỏ / Bé",
        "en": "Small"
      },
      "hanViet": "Tiểu",
      "strokeCount": 3,
      "mnemonic": "Nét dọc nhỏ với 2 chấm bé xíu"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:size-003",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-size",
      "contentType": "kanji",
      "character": "高",
      "readings": [
        "たか",
        "こう"
      ],
      "onYomi": "コウ",
      "kunYomi": "たか(い)",
      "meanings": {
        "vi": "Cao",
        "en": "Tall / High"
      },
      "hanViet": "Cao",
      "strokeCount": 10,
      "mnemonic": "Tòa nhà cao tầng có cửa sổ"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:size-004",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-size",
      "contentType": "kanji",
      "character": "安",
      "readings": [
        "やす",
        "あん"
      ],
      "onYomi": "アン",
      "kunYomi": "やす(い)",
      "meanings": {
        "vi": "Rẻ / An",
        "en": "Cheap / Peace"
      },
      "hanViet": "An",
      "strokeCount": 6,
      "mnemonic": "Phụ nữ (女) ở trong nhà (宀) = yên bình"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:size-005",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-size",
      "contentType": "kanji",
      "character": "長",
      "readings": [
        "なが",
        "ちょう"
      ],
      "onYomi": "チョウ",
      "kunYomi": "なが(い)",
      "meanings": {
        "vi": "Dài",
        "en": "Long"
      },
      "hanViet": "Trường",
      "strokeCount": 8,
      "mnemonic": "Tóc dài bay phấp phới"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:size-006",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-size",
      "contentType": "kanji",
      "character": "多",
      "readings": [
        "おお",
        "た"
      ],
      "onYomi": "タ",
      "kunYomi": "おお(い)",
      "meanings": {
        "vi": "Nhiều",
        "en": "Many"
      },
      "hanViet": "Đa",
      "strokeCount": 6,
      "mnemonic": "Hai chiều tối (夕夕) = nhiều đêm = nhiều"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:size-007",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-size",
      "contentType": "kanji",
      "character": "少",
      "readings": [
        "すく",
        "しょう"
      ],
      "onYomi": "ショウ",
      "kunYomi": "すく(ない)・すこ(し)",
      "meanings": {
        "vi": "Ít",
        "en": "Few"
      },
      "hanViet": "Thiểu",
      "strokeCount": 4,
      "mnemonic": "Nhỏ (小) bớt 1 nét = ít hơn"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:size-008",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-size",
      "contentType": "kanji",
      "character": "新",
      "readings": [
        "あたら",
        "しん"
      ],
      "onYomi": "シン",
      "kunYomi": "あたら(しい)・あら(た)",
      "meanings": {
        "vi": "Mới",
        "en": "New"
      },
      "hanViet": "Tân",
      "strokeCount": 13,
      "mnemonic": "Đứng (立) + Cây (木) + Búa (斤) = chặt cây dựng nhà mới"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:size-009",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-size",
      "contentType": "kanji",
      "character": "古",
      "readings": [
        "ふる",
        "こ"
      ],
      "onYomi": "コ",
      "kunYomi": "ふる(い)",
      "meanings": {
        "vi": "Cũ",
        "en": "Old"
      },
      "hanViet": "Cổ",
      "strokeCount": 5,
      "mnemonic": "Mười (十) đời miệng (口) kể = cổ xưa"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:size-010",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-size",
      "contentType": "kanji",
      "character": "白",
      "readings": [
        "しろ",
        "はく"
      ],
      "onYomi": "ハク・ビャク",
      "kunYomi": "しろ(い)",
      "meanings": {
        "vi": "Trắng",
        "en": "White"
      },
      "hanViet": "Bạch",
      "strokeCount": 5,
      "mnemonic": "Mặt trời (日) phát sáng trắng"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:misc-001",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-misc",
      "contentType": "kanji",
      "character": "車",
      "readings": [
        "くるま",
        "しゃ"
      ],
      "onYomi": "シャ",
      "kunYomi": "くるま",
      "meanings": {
        "vi": "Xe",
        "en": "Car / Vehicle"
      },
      "hanViet": "Xa",
      "strokeCount": 7,
      "mnemonic": "Hình chiếc xe nhìn từ trên xuống"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:misc-002",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-misc",
      "contentType": "kanji",
      "character": "電",
      "readings": [
        "でん"
      ],
      "onYomi": "デン",
      "kunYomi": "",
      "meanings": {
        "vi": "Điện",
        "en": "Electricity"
      },
      "hanViet": "Điện",
      "strokeCount": 13,
      "mnemonic": "Mưa (雨) tạo sét = điện"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:misc-003",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-misc",
      "contentType": "kanji",
      "character": "道",
      "readings": [
        "みち",
        "どう"
      ],
      "onYomi": "ドウ",
      "kunYomi": "みち",
      "meanings": {
        "vi": "Đường",
        "en": "Road / Way"
      },
      "hanViet": "Đạo",
      "strokeCount": 12,
      "mnemonic": "Đi (辶) theo đầu (首) dẫn đường"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:misc-004",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-misc",
      "contentType": "kanji",
      "character": "店",
      "readings": [
        "みせ",
        "てん"
      ],
      "onYomi": "テン",
      "kunYomi": "みせ",
      "meanings": {
        "vi": "Cửa hàng",
        "en": "Shop"
      },
      "hanViet": "Điếm",
      "strokeCount": 8,
      "mnemonic": "Mái nhà (广) che chỗ bói (占) = cửa hàng"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:misc-005",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-misc",
      "contentType": "kanji",
      "character": "社",
      "readings": [
        "しゃ"
      ],
      "onYomi": "シャ",
      "kunYomi": "やしろ",
      "meanings": {
        "vi": "Công ty / Xã hội",
        "en": "Company"
      },
      "hanViet": "Xã",
      "strokeCount": 7,
      "mnemonic": "Thần (示) + Đất (土) = nơi thờ thần đất = cộng đồng"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:misc-006",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-misc",
      "contentType": "kanji",
      "character": "会",
      "readings": [
        "あ",
        "かい"
      ],
      "onYomi": "カイ",
      "kunYomi": "あ(う)",
      "meanings": {
        "vi": "Gặp / Hội",
        "en": "Meet / Society"
      },
      "hanViet": "Hội",
      "strokeCount": 6,
      "mnemonic": "Mái nhà (人) che nơi mọi người tụ họp"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:misc-007",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-misc",
      "contentType": "kanji",
      "character": "国",
      "readings": [
        "くに",
        "こく"
      ],
      "onYomi": "コク",
      "kunYomi": "くに",
      "meanings": {
        "vi": "Nước",
        "en": "Country"
      },
      "hanViet": "Quốc",
      "strokeCount": 8,
      "mnemonic": "Ngọc (玉) được bảo vệ trong thành (囗)"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:misc-008",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-misc",
      "contentType": "kanji",
      "character": "本",
      "readings": [
        "ほん",
        "もと"
      ],
      "onYomi": "ホン",
      "kunYomi": "もと",
      "meanings": {
        "vi": "Sách / Gốc",
        "en": "Book / Origin"
      },
      "hanViet": "Bản",
      "strokeCount": 5,
      "mnemonic": "Cây (木) có gốc rễ = sách gốc"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:misc-009",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-misc",
      "contentType": "kanji",
      "character": "何",
      "readings": [
        "なに",
        "なん"
      ],
      "onYomi": "カ",
      "kunYomi": "なに・なん",
      "meanings": {
        "vi": "Gì / Cái gì",
        "en": "What"
      },
      "hanViet": "Hà",
      "strokeCount": 7,
      "mnemonic": "Người (亻) gánh (可) = gánh gì vậy?"
    },
    {
      "cardId": "n5:kanji:kanji-n5-v1:misc-010",
      "schemaVersion": 1,
      "sourceVersion": "kanji-n5-legacy-audit-v1",
      "level": "n5",
      "topicId": "kanji-n5-misc",
      "contentType": "kanji",
      "character": "作",
      "readings": [
        "つく",
        "さく"
      ],
      "onYomi": "サク・サ",
      "kunYomi": "つく(る)",
      "meanings": {
        "vi": "Làm",
        "en": "Make"
      },
      "hanViet": "Tác",
      "strokeCount": 7,
      "mnemonic": "Người (亻) cầm dao làm việc"
    }
  ]
})
