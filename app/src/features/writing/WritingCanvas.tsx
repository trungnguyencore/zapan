import { useEffect, useRef } from 'react'

interface WritingCanvasProps {
  character: string
  showGuide: boolean
  clearToken: number
  onInk: () => void
}

export function WritingCanvas({ character, showGuide, clearToken, onInk }: WritingCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const drawingRef = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return
    context.clearRect(0, 0, canvas.width, canvas.height)
  }, [clearToken, character])

  function point(event: React.PointerEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current!
    const rect = canvas.getBoundingClientRect()
    return {
      x: (event.clientX - rect.left) * (canvas.width / rect.width),
      y: (event.clientY - rect.top) * (canvas.height / rect.height),
    }
  }

  function start(event: React.PointerEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return
    drawingRef.current = true
    canvas.setPointerCapture(event.pointerId)
    const current = point(event)
    context.beginPath()
    context.moveTo(current.x, current.y)
    context.lineCap = 'round'
    context.lineJoin = 'round'
    context.lineWidth = event.pointerType === 'mouse' ? 12 : Math.max(8, 8 + event.pressure * 16)
    context.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--text').trim() || '#172033'
    onInk()
  }

  function move(event: React.PointerEvent<HTMLCanvasElement>) {
    if (!drawingRef.current) return
    const context = canvasRef.current?.getContext('2d')
    if (!context) return
    const current = point(event)
    context.lineTo(current.x, current.y)
    context.stroke()
  }

  function end(event: React.PointerEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current
    if (!drawingRef.current || !canvas) return
    drawingRef.current = false
    if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId)
  }

  return (
    <div className="writing-canvas-frame">
      <span className="writing-axis horizontal" aria-hidden="true" />
      <span className="writing-axis vertical" aria-hidden="true" />
      {showGuide && <span className="writing-guide" aria-hidden="true" lang="ja">{character}</span>}
      <canvas
        ref={canvasRef}
        className="writing-canvas"
        width={600}
        height={600}
        aria-label="Ô luyện viết"
        onPointerDown={start}
        onPointerMove={move}
        onPointerUp={end}
        onPointerCancel={end}
      />
    </div>
  )
}
