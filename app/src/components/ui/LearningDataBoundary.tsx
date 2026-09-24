import type { ReactNode } from 'react'

interface LearningDataBoundaryProps {
  loading: boolean
  error: string | null
  onRetry: () => Promise<void>
  children: ReactNode
}

export function LearningDataBoundary({ loading, error, onRetry, children }: LearningDataBoundaryProps) {
  if (loading) {
    return (
      <article className="surface-card">
        <p className="loading-copy" role="status">Đang đọc dữ liệu học…</p>
      </article>
    )
  }

  if (error) {
    return (
      <article className="surface-card error-card" role="alert">
        <h2>Không thể đọc dữ liệu học</h2>
        <p>{error}</p>
        <p>Dữ liệu local không bị xóa. Bạn có thể thử đọc lại mà không cần reset tiến độ.</p>
        <button className="button secondary" type="button" onClick={() => void onRetry()}>Thử lại</button>
      </article>
    )
  }

  return <>{children}</>
}
