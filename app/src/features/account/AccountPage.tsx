import { useState, type FormEvent } from 'react'
import { PageIntro } from '../../components/ui/PageIntro'
import { useAppServices } from '../../app/AppServicesContext'

export function AccountPage() {
  const { identity, accountAuth, sync, guest } = useAppServices()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [register, setRegister] = useState(false)

  async function submit(event: FormEvent) {
    event.preventDefault()
    if (!accountAuth || busy) return
    setBusy(true); setError(null); setMessage(null)
    try {
      if (register) await accountAuth.signUp(email, password)
      else await accountAuth.signIn(email, password)
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Không thể xác thực tài khoản.')
    } finally { setBusy(false) }
  }

  async function requestReset() {
    if (!accountAuth || !email.trim() || busy) return
    setBusy(true); setError(null)
    try { await accountAuth.sendPasswordReset(email) } catch { /* privacy-preserving response */ }
    setMessage('Nếu email hợp lệ, Firebase sẽ gửi hướng dẫn đặt lại mật khẩu.')
    setBusy(false)
  }

  async function syncNow() {
    if (!sync || busy) return
    setBusy(true); setError(null); setMessage('Đang đồng bộ…')
    try {
      const result = await sync.sync()
      setMessage(`Đã sync ${result.downloadedEvents} event cloud · ${result.uploadedProgress} progress snapshot.`)
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Sync thất bại. Dữ liệu local vẫn được giữ nguyên.')
      setMessage(null)
    } finally { setBusy(false) }
  }

  if (identity.kind === 'account') return <section className="page-stack"><PageIntro eyebrow="Account" title="Tài khoản ZaPan" description="Progress của tài khoản dùng một IndexedDB riêng và có thể đồng bộ qua Firebase." /><article className="surface-card account-card"><p className="card-kicker">SIGNED IN</p><h3>{identity.user.email ?? identity.user.uid}</h3><p>Cloud sync dùng immutable StudyEvent journal; local data vẫn là durability boundary đầu tiên.</p><div className="session-actions"><button className="button primary" type="button" onClick={() => void syncNow()} disabled={!sync || busy}>Sync ngay</button><button className="button secondary" type="button" onClick={() => void accountAuth?.signOut()} disabled={busy}>Đăng xuất</button></div>{message && <p className="sync-message" role="status">{message}</p>}{error && <p className="inline-error" role="alert">{error}</p>}</article></section>

  return <section className="page-stack"><PageIntro eyebrow="Account" title="Guest hoặc tài khoản" description="Guest hoạt động hoàn toàn local. Đăng nhập sẽ chuyển sang kho dữ liệu riêng của account; ZaPan không tự trộn progress Guest vào account." /><article className="surface-card account-card"><p className="card-kicker">GUEST MODE</p><h3>{guest.persistent ? 'Progress Guest đang được lưu trên thiết bị' : 'Guest storage tạm thời'}</h3><p>Guest ID: <code>{guest.userId}</code></p></article><form className="surface-card account-form" onSubmit={submit}><h3>{register ? 'Tạo tài khoản' : 'Đăng nhập'}</h3><label>Email<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required autoComplete="email" /></label><label>Mật khẩu<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required minLength={6} autoComplete={register ? 'new-password' : 'current-password'} /></label>{accountAuth ? <><button className="button primary" type="submit" disabled={busy}>{busy ? 'Đang xử lý…' : register ? 'Đăng ký' : 'Đăng nhập'}</button><button className="button secondary" type="button" onClick={() => { setRegister((value) => !value); setError(null); setMessage(null) }}>{register ? 'Đã có tài khoản' : 'Tạo tài khoản mới'}</button><button className="text-button" type="button" onClick={() => void requestReset()} disabled={!email.trim() || busy}>Quên mật khẩu</button></> : <p className="inline-error">Firebase config chưa khả dụng trong môi trường này.</p>}{message && <p className="sync-message" role="status">{message}</p>}{error && <p className="inline-error" role="alert">{error}</p>}</form></section>
}
