import { describe, expect, it } from 'vitest'
import { createCardId } from '../../domain/learning/cardId'
import { KANA_BASIC_BUNDLE } from '../../data/n5/kanaBasic'
import { StaticContentRepository } from './StaticContentRepository'

describe('StaticContentRepository', () => {
  it('queries the validated kana bundle by id, topic, and type', () => {
    const repo = new StaticContentRepository([KANA_BASIC_BUNDLE])
    const id = createCardId({ level: 'foundation', contentType: 'kana', sourceKey: 'kana-basic-v1', itemKey: 'hira-a' })
    expect(repo.getCard(id)).toMatchObject({ contentType: 'kana', character: 'あ' })
    expect(repo.listByTopic('kana-hiragana-main')).toHaveLength(46)
    expect(repo.listByType('kana')).toHaveLength(92)
  })

  it('returns defensive arrays rather than exposing repository storage', () => {
    const repo = new StaticContentRepository([KANA_BASIC_BUNDLE])
    const first = repo.listCards()
    first.pop()
    expect(repo.listCards()).toHaveLength(92)
  })

  it('rejects duplicate card ids across bundles', () => {
    expect(() => new StaticContentRepository([KANA_BASIC_BUNDLE, KANA_BASIC_BUNDLE])).toThrow('Duplicate cardId')
  })
})
