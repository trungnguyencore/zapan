import { useState } from 'react'
import { strokeOrderAssetUrl } from '../../domain/writing/writing'

type StrokeState = 'loading' | 'ready' | 'error'

export function StrokeOrderPanel({ character, visible }: { character: string; visible: boolean }) {
  const [loadState, setLoadState] = useState<{ character: string; state: StrokeState }>(() => ({ character, state: 'loading' }))
  const state: StrokeState = loadState.character === character ? loadState.state : 'loading'
  const assetUrl = strokeOrderAssetUrl(character)

  if (!visible) {
    return <aside className="stroke-panel is-hidden-reference"><p className="card-kicker">STROKE ORDER</p><p>Ẩn trong Recall. Viết trước rồi mới hiện tham chiếu.</p></aside>
  }

  if (!assetUrl) {
    return <aside className="stroke-panel"><p className="card-kicker">STROKE ORDER</p><p>Không có ký tự hợp lệ để tải thứ tự nét.</p></aside>
  }

  return (
    <aside className="stroke-panel" aria-live="polite">
      <div className="stroke-panel-heading">
        <div><p className="card-kicker">STROKE ORDER</p><h3 lang="ja">{character}</h3></div>
        <span className="status-pill">KanjiVG</span>
      </div>
      <div className="stroke-asset-frame">
        {state === 'loading' && <p className="loading-copy" role="status">Đang tải thứ tự nét…</p>}
        {state === 'error' && <div className="stroke-fallback"><strong>Không tải được thứ tự nét</strong><p>Canvas luyện viết vẫn hoạt động. Có thể thử lại khi có mạng.</p></div>}
        <img
          key={character}
          src={assetUrl}
          alt={'Thứ tự nét cho ' + character}
          className={state === 'ready' ? 'stroke-image is-ready' : 'stroke-image'}
          onLoad={() => setLoadState({ character, state: 'ready' })}
          onError={() => setLoadState({ character, state: 'error' })}
        />
      </div>
      <p className="stroke-source-note">Stroke-order là tài nguyên mạng phụ trợ; ZaPan không chặn Writing khi asset không khả dụng.</p>
    </aside>
  )
}
