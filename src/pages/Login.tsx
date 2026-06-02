import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Brand, StruxGlyph } from '../components/Brand'
import { IconArrowRight, IconShield, IconCube, IconBolt } from '../components/ui/Icons'
import { userRoles } from '../data/mock'

export default function Login() {
  const navigate = useNavigate()
  const [role, setRole] = useState('BIM Manager')
  const [email, setEmail] = useState('saeed@strux.sa')

  function submit(e: React.FormEvent) {
    e.preventDefault()
    navigate('/app/dashboard')
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-navy-950">
      {/* Ambient gradient glow */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full bg-electric-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[420px] w-[420px] rounded-full bg-electric-500/10 blur-[120px]" />
      <div className="absolute inset-0 bg-grid-faint bg-[size:44px_44px] opacity-60" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-6xl grid-cols-1 lg:grid-cols-2">
        {/* Left — brand / pitch */}
        <div className="hidden flex-col justify-between p-10 lg:flex xl:p-14">
          <Brand />

          <div className="max-w-md">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-electric-500/30 bg-electric-500/10 px-3 py-1 text-xs font-semibold text-electric-300">
              <IconBolt className="h-3.5 w-3.5" /> AI Engineering Intelligence Platform
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-silver-100 xl:text-5xl">
              The AI Operating Layer for{' '}
              <span className="bg-gradient-to-r from-electric-300 to-electric-500 bg-clip-text text-transparent">
                Engineering &amp; Construction
              </span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-silver-400">
              STRUX adds an intelligence layer on top of your BIM files, IFC/Revit models, BOQs and Saudi
              compliance requirements — without replacing Autodesk, Revit or Navisworks.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { icon: IconCube, label: 'BIM QA/QC' },
                { icon: IconBolt, label: 'Clash Intelligence' },
                { icon: IconShield, label: 'Saudi Compliance' },
              ].map((f) => (
                <div key={f.label} className="strux-card flex flex-col items-start gap-2 p-3">
                  <f.icon className="h-5 w-5 text-electric-300" />
                  <span className="text-xs font-medium text-silver-300">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-silver-500">
            <span>🇸🇦 KSA Data Residency</span>
            <span>ISO 19650 Aligned</span>
            <span>Enterprise SSO Ready</span>
          </div>
        </div>

        {/* Right — login card */}
        <div className="flex items-center justify-center p-6 sm:p-10">
          <form onSubmit={submit} className="strux-card w-full max-w-md p-7 sm:p-8">
            <div className="mb-6 flex items-center gap-3 lg:hidden">
              <StruxGlyph />
              <span className="text-lg font-extrabold tracking-tight">STRUX</span>
            </div>

            <h2 className="text-xl font-bold tracking-tight text-silver-100">Sign in to your workspace</h2>
            <p className="mt-1 text-sm text-silver-400">
              Welcome back. Select your role to continue to the demo.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-silver-400">
                  Sign in as
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {userRoles.map((r) => (
                    <button
                      type="button"
                      key={r}
                      onClick={() => setRole(r)}
                      className={`rounded-lg border px-3 py-2.5 text-sm font-medium transition ${
                        role === r
                          ? 'border-electric-500 bg-electric-500/15 text-silver-100'
                          : 'border-white/10 bg-white/5 text-silver-400 hover:text-silver-100'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-silver-400">
                  Work email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="strux-input"
                  placeholder="you@company.sa"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-silver-400">
                  Password
                </label>
                <input type="password" defaultValue="demo-access" className="strux-input" placeholder="••••••••" />
              </div>

              <button type="submit" className="strux-btn-primary w-full">
                Enter STRUX Platform <IconArrowRight className="h-4 w-4" />
              </button>

              <p className="text-center text-xs text-silver-500">
                Demo prototype · no real authentication. Any credentials continue.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4 text-xs text-silver-400">
              <span>Built for Contractors, Consultants, BIM Managers &amp; Owners</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
