import type { KanaContentCard } from '../../domain/content/types'
import { createCardId } from '../../domain/learning/cardId'
import { parseContentBundle } from '../schema'

const SOURCE_VERSION = 'kana-basic-main-v1'

type KanaSeed = readonly [key: string, character: string, romanizations: readonly string[]]

const HIRAGANA_MAIN: readonly KanaSeed[] = [
  ['a', 'あ', ['a']], ['i', 'い', ['i']], ['u', 'う', ['u']], ['e', 'え', ['e']], ['o', 'お', ['o']],
  ['ka', 'か', ['ka']], ['ki', 'き', ['ki']], ['ku', 'く', ['ku']], ['ke', 'け', ['ke']], ['ko', 'こ', ['ko']],
  ['sa', 'さ', ['sa']], ['shi', 'し', ['shi', 'si']], ['su', 'す', ['su']], ['se', 'せ', ['se']], ['so', 'そ', ['so']],
  ['ta', 'た', ['ta']], ['chi', 'ち', ['chi', 'ti']], ['tsu', 'つ', ['tsu', 'tu']], ['te', 'て', ['te']], ['to', 'と', ['to']],
  ['na', 'な', ['na']], ['ni', 'に', ['ni']], ['nu', 'ぬ', ['nu']], ['ne', 'ね', ['ne']], ['no', 'の', ['no']],
  ['ha', 'は', ['ha']], ['hi', 'ひ', ['hi']], ['fu', 'ふ', ['fu', 'hu']], ['he', 'へ', ['he']], ['ho', 'ほ', ['ho']],
  ['ma', 'ま', ['ma']], ['mi', 'み', ['mi']], ['mu', 'む', ['mu']], ['me', 'め', ['me']], ['mo', 'も', ['mo']],
  ['ya', 'や', ['ya']], ['yu', 'ゆ', ['yu']], ['yo', 'よ', ['yo']],
  ['ra', 'ら', ['ra']], ['ri', 'り', ['ri']], ['ru', 'る', ['ru']], ['re', 'れ', ['re']], ['ro', 'ろ', ['ro']],
  ['wa', 'わ', ['wa']], ['wo', 'を', ['wo']], ['n', 'ん', ['n', 'nn']],
]

const KATAKANA_MAIN: readonly KanaSeed[] = [
  ['a', 'ア', ['a']], ['i', 'イ', ['i']], ['u', 'ウ', ['u']], ['e', 'エ', ['e']], ['o', 'オ', ['o']],
  ['ka', 'カ', ['ka']], ['ki', 'キ', ['ki']], ['ku', 'ク', ['ku']], ['ke', 'ケ', ['ke']], ['ko', 'コ', ['ko']],
  ['sa', 'サ', ['sa']], ['shi', 'シ', ['shi', 'si']], ['su', 'ス', ['su']], ['se', 'セ', ['se']], ['so', 'ソ', ['so']],
  ['ta', 'タ', ['ta']], ['chi', 'チ', ['chi', 'ti']], ['tsu', 'ツ', ['tsu', 'tu']], ['te', 'テ', ['te']], ['to', 'ト', ['to']],
  ['na', 'ナ', ['na']], ['ni', 'ニ', ['ni']], ['nu', 'ヌ', ['nu']], ['ne', 'ネ', ['ne']], ['no', 'ノ', ['no']],
  ['ha', 'ハ', ['ha']], ['hi', 'ヒ', ['hi']], ['fu', 'フ', ['fu', 'hu']], ['he', 'ヘ', ['he']], ['ho', 'ホ', ['ho']],
  ['ma', 'マ', ['ma']], ['mi', 'ミ', ['mi']], ['mu', 'ム', ['mu']], ['me', 'メ', ['me']], ['mo', 'モ', ['mo']],
  ['ya', 'ヤ', ['ya']], ['yu', 'ユ', ['yu']], ['yo', 'ヨ', ['yo']],
  ['ra', 'ラ', ['ra']], ['ri', 'リ', ['ri']], ['ru', 'ル', ['ru']], ['re', 'レ', ['re']], ['ro', 'ロ', ['ro']],
  ['wa', 'ワ', ['wa']], ['wo', 'ヲ', ['wo']], ['n', 'ン', ['n', 'nn']],
]

function buildCards(script: 'hiragana' | 'katakana', seeds: readonly KanaSeed[]): KanaContentCard[] {
  const prefix = script === 'hiragana' ? 'hira' : 'kata'
  return seeds.map(([key, character, romanizations]) => ({
    cardId: createCardId({ level: 'foundation', contentType: 'kana', sourceKey: 'kana-basic-v1', itemKey: `${prefix}-${key}` }),
    schemaVersion: 1,
    sourceVersion: SOURCE_VERSION,
    level: 'foundation',
    topicId: `kana-${script}-main`,
    contentType: 'kana',
    script,
    group: 'main',
    character,
    romanizations: [...romanizations],
  }))
}

export const KANA_BASIC_BUNDLE = parseContentBundle({
  bundleId: 'foundation-kana-main-v1',
  schemaVersion: 1,
  sourceVersion: SOURCE_VERSION,
  cards: [...buildCards('hiragana', HIRAGANA_MAIN), ...buildCards('katakana', KATAKANA_MAIN)],
})
