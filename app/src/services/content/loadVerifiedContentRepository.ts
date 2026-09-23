import { KANA_BASIC_BUNDLE } from '../../data/n5/kanaBasic'
import { StaticContentRepository } from './StaticContentRepository'

export async function loadVerifiedContentRepository(): Promise<StaticContentRepository> {
  const [{ VOCAB_N5_BUNDLE }, { KANJI_N5_BUNDLE }] = await Promise.all([
    import('../../data/n5/vocabN5'),
    import('../../data/n5/kanjiN5'),
  ])
  return new StaticContentRepository([KANA_BASIC_BUNDLE, VOCAB_N5_BUNDLE, KANJI_N5_BUNDLE])
}
