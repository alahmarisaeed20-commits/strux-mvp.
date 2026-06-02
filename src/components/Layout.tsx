import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Brand } from './Brand'
import { useI18n } from '../i18n'
import {
  IconDashboard,
  IconProjects,
  IconUpload,
  IconAnalysis,
  IconSettings,
  IconBell,
  IconSearch,
  IconLogout,
  IconSparkle,
  IconCube,
  IconReport,
  IconBolt,
} from './ui/Icons'

const nav = [
  { to: '/app/dashboard', key: 'nav.dashboard', icon: IconDashboard },
  { to: '/app/executive', key: 'nav.executive', icon: IconReport },
  { to: '/app/projects', key: 'nav.projects', icon: IconProjects },
  { to: '/app/upload', key: 'nav.upload', icon: IconUpload },
  { to: '/app/analysis', key: 'nav.analysis', icon: IconAnalysis },
  { to: '/app/viewer', key: 'nav.viewer', icon: IconCube },
  { to: '/app/investor', key: 'nav.investor', icon: IconBolt },
  { to: '/app/settings', key: 'nav.settings', icon: IconSettings },
]

const titleKey: Record<string, string> = {
  dashboard: 'page.dashboard',
  executive: 'page.executive',
  investor: 'page.investor',
  projects: 'page.projects',
  upload: 'page.upload',
  analysis: 'page.analysis',
  viewer: 'page.viewer',
  settings: 'page.settings',
}

export default function Layout() {
  const location = useLocation()
  const navigate = useNavigate()
  const { t, toggle, lang } = useI18n()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [demo, setDemo] = useState(() => localStorage.getItem('strux.demo') === '1')
  const segment = location.pathname.split('/')[2] ?? 'dashboard'
  const title = t(titleKey[segment] ?? 'page.dashboard')

  useEffect(() => {
    localStorage.setItem('strux.demo', demo ? '1' : '0')
  }, [demo])

  function toggleDemo() {
    const next = !demo
    setDemo(next)
    if (next) navigate('/app/investor')
  }

  return (
    <div className="flex min-h-screen bg-navy-950 bg-grid-faint bg-[size:40px_40px]">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 start-0 z-40 w-64 transform border-e border-white/5 bg-navy-900/95 backdrop-blur transition-transform lg:static lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : 'ltr:-translate-x-full rtl:translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center border-b border-white/5 px-5">
          <Brand />
        </div>

        <nav className="flex max-h-[calc(100vh-9.5rem)] flex-col gap-1 overflow-y-auto p-3">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? 'bg-electric-500/15 text-silver-100 ltr:shadow-[inset_2px_0_0_0_#2f6bff] rtl:shadow-[inset_-2px_0_0_0_#2f6bff]'
                    : 'text-silver-400 hover:bg-white/5 hover:text-silver-100'
                }`
              }
            >
              <item.icon className="h-[18px] w-[18px]" />
              {t(item.key)}
            </NavLink>
          ))}
        </nav>

        <div className="absolute inset-x-0 bottom-0 p-3">
          <div className="strux-card flex items-center gap-3 p-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-electric-500/20 text-sm font-bold text-electric-300">
              SA
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-semibold text-silver-100">Saeed Al Ahmari</div>
              <div className="truncate text-xs text-silver-400">{t('top.role')}</div>
            </div>
            <NavLink to="/" title={t('top.signout')} className="text-silver-400 hover:text-silver-100">
              <IconLogout className="h-[18px] w-[18px]" />
            </NavLink>
          </div>
        </div>
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-30 bg-black/50 lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 flex h-16 items-center gap-4 border-b border-white/5 bg-navy-950/80 px-4 backdrop-blur lg:px-6">
          <button
            className="rounded-lg border border-white/10 p-2 text-silver-300 lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div>
            <h1 className="text-base font-semibold tracking-tight text-silver-100">{title}</h1>
            <p className="hidden text-xs text-silver-400 sm:block">{t('brand.fulltagline')}</p>
          </div>

          <div className="ms-auto hidden items-center gap-2 rounded-lg border border-white/10 bg-navy-900/60 px-3 py-2 text-silver-400 md:flex">
            <IconSearch className="h-4 w-4" />
            <input
              placeholder={t('top.search')}
              className="w-56 bg-transparent text-sm text-silver-100 placeholder:text-silver-500 outline-none"
            />
          </div>

          {/* Investor demo mode toggle */}
          <button
            onClick={toggleDemo}
            className={`hidden items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-bold transition sm:flex ${
              demo
                ? 'border-amber-400/40 bg-amber-500/15 text-amber-300'
                : 'border-white/10 bg-navy-900/60 text-silver-300 hover:text-white'
            }`}
            title={t('mode.demo')}
          >
            <IconBolt className="h-4 w-4" /> {t('mode.demo')}
          </button>

          {/* Language toggle */}
          <button
            onClick={toggle}
            className="rounded-lg border border-white/10 bg-navy-900/60 px-3 py-2 text-xs font-bold text-silver-200 hover:text-white"
            title={lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
          >
            {t('lang.toggle')}
          </button>

          <button className="relative hidden rounded-lg border border-white/10 bg-navy-900/60 p-2 text-silver-300 hover:text-silver-100 sm:block">
            <IconBell className="h-[18px] w-[18px]" />
            <span className="absolute end-1.5 top-1.5 h-2 w-2 rounded-full bg-electric-400" />
          </button>

          <div className="hidden items-center gap-1.5 rounded-lg border border-electric-500/30 bg-electric-500/10 px-3 py-2 text-xs font-semibold text-electric-300 lg:flex">
            <IconSparkle className="h-4 w-4" />
            {t('top.aiOnline')}
          </div>
        </header>

        {/* Investor demo banner */}
        {demo && (
          <div className="flex items-center justify-center gap-2 border-b border-amber-400/20 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent px-4 py-2 text-xs font-medium text-amber-200">
            <IconSparkle className="h-3.5 w-3.5" />
            {t('mode.demoBanner')}
            <button onClick={() => setDemo(false)} className="ms-2 rounded px-1.5 py-0.5 font-bold text-amber-300 hover:bg-amber-500/10">
              ✕
            </button>
          </div>
        )}

        <main className="flex-1 p-4 lg:p-6">
          <div key={location.pathname} className="mx-auto max-w-7xl animate-fadeup">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
