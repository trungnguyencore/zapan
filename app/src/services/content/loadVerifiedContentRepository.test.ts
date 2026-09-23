import { describe, expect, it } from 'vitest'
import { loadVerifiedContentRepository } from './loadVerifiedContentRepository'

describe('loadVerifiedContentRepository', () => {
  it('loads all currently verified content packs without cross-bundle id collisions', async () => {
    const repo = await loadVerifiedContentRepository()
    expect(repo.listCards()).toHaveLength(1124)
    expect(repo.listByType('kana')).toHaveLength(92)
    expect(repo.listByType('vocabulary')).toHaveLength(923)
    expect(repo.listByType('kanji')).toHaveLength(109)
  })
})
