import { Component, type ErrorInfo, type ReactNode } from 'react'

interface AppErrorBoundaryState {
  error: Error | null
}

export class AppErrorBoundary extends Component<{ children: ReactNode }, AppErrorBoundaryState> {
  state: AppErrorBoundaryState = { error: null }

  static getDerivedStateFromError(error: Error): AppErrorBoundaryState {
    return { error }
  }

  componentDidCatch(_error: Error, _info: ErrorInfo) {
    // Keep the fallback deterministic. Error reporting can be added only when a reviewed telemetry path exists.
  }

  render() {
    if (!this.state.error) return this.props.children

    return (
      <main className="app-fatal-fallback">
        <section className="page-stack">
          <article className="surface-card error-card" role="alert">
            <p className="card-kicker">RECOVERY</p>
            <h1>ZaPan gặp lỗi khi hiển thị</h1>
            <p>Tiến độ đã lưu không bị reset tự động. Hãy tải lại ứng dụng để khởi tạo lại giao diện.</p>
            <p><code>{this.state.error.message}</code></p>
            <button className="button primary" type="button" onClick={() => window.location.reload()}>Tải lại ZaPan</button>
          </article>
        </section>
      </main>
    )
  }
}
