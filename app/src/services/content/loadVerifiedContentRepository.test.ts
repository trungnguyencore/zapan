import { describe, expect, it } from 'vitest'
import { loadVerifiedContentRepository } from './loadVerifiedContentRepository'

describe('loadVerifiedContentRepository', () => {
  it('loads the audited N5 foundation plus pinned N4/N3 open study sets without id collisions', async () => {
    const repo = await loadVerifiedContentRepository()
    expect(repo.listCards()).toHaveLength(3867)
    expect(repo.listByType('kana')).toHaveLength(92)
    expect(repo.listByType('vocabulary')).toHaveLength(3160)
    expect(repo.listByType('kanji')).toHaveLength(615)

    expect(repo.listCards().filter((card) => card.level === 'n4')).toHaveLength(709)
    expect(repo.listCards().filter((card) => card.level === 'n3')).toHaveLength(2034)
  })
})
