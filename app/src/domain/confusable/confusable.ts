import type { ContentCard } from '../content/types'
import type { ConfusableKanaGroup } from '../../data/practice/confusableKana'

export type ConfusableScriptFilter = 'all' | 'hiragana' | 'katakana'

export interface ConfusableQuestion {
  card: Extract<ContentCard, { contentType: 'kana' }>
  romanization: string
  options: string[]
  script: 'hiragana' | 'katakana'
}

function kanaCards(cards: readonly ContentCard[]): Array<Extract<ContentCard, { contentType: 'kana' }>> {
  return cards.filter((card): card is Extract<ContentCard, { contentType: 'kana' }> => card.contentType === 'kana')
}

export function buildConfusableQuestions(
  cards: readonly ContentCard[],
  groups: readonly ConfusableKanaGroup[],
  script: ConfusableScriptFilter = 'all',
  limit = 10,
): ConfusableQuestion[] {
  if (!Number.isFinite(limit) || limit <= 0) return []
  const canonical = kanaCards(cards)
  const questions: ConfusableQuestion[] = []

  for (const group of groups) {
    if (script !== 'all' && group.script !== script) continue
    const options = group.entries.map((entry) => entry.character)
    for (const entry of group.entries) {
      const card = canonical.find((candidate) => candidate.character === entry.character && candidate.script === group.script)
      if (!card) throw new Error(`Confusable source character missing from canonical Kana: ${entry.character}`)
      if (!card.romanizations.includes(entry.romanization)) {
        throw new Error(`Confusable romanization mismatch for ${entry.character}: ${entry.romanization}`)
      }
      questions.push({ card, romanization: entry.romanization, options: [...options], script: group.script })
    }
  }

  return questions.slice(0, Math.floor(limit))
}
