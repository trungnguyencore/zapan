import { NavLink, Outlet } from 'react-router-dom'
import { InstagramLink } from '../components/ui/InstagramLink'
import { ThemeControl } from '../components/ui/ThemeControl'
import { primaryNavigation } from './navigation'
import { RouteFocusManager } from './RouteFocusManager'

function NavigationLinks({ mobile = false }: { mobile?: boolean }) {
  return (
    <nav className={mobile ? 'mobile-nav' : 'side-nav'} aria-label={mobile ? 'Điều hướng chính trên di động' : 'Điều hướng chính'}>
      {primaryNavigation.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={'end' in item ? item.end : false}
          className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
        >
          <span>{mobile ? item.shortLabel : item.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}

export function AppShell() {
  return (
    <div className="app-shell">
      <RouteFocusManager />
      <a className="skip-link" href="#main-content">Bỏ qua điều hướng</a>
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-mark" aria-hidden="true">あ</div>
          <div><strong>ZaPan</strong><span>Japanese learning</span></div>
        </div>
        <NavigationLinks />
        <div className="sidebar-meta">
          <p>ZaPan v2 · Core learning</p>
          <ThemeControl />
          <NavLink className="account-link" to="/account">Account</NavLink>
          <InstagramLink />
        </div>
      </aside>
      <header className="mobile-topbar">
        <strong>ZaPan</strong>
        <div className="mobile-topbar-actions"><ThemeControl /><NavLink className="account-link" to="/account">Account</NavLink><InstagramLink /></div>
      </header>
      <main id="main-content" className="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <NavigationLinks mobile />
    </div>
  )
}
