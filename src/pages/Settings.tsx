import { useState } from 'react'
import { Card, Badge, toneFor } from '../components/ui/primitives'
import { IconCheck, IconShield, IconBuilding, IconSettings, IconBolt } from '../components/ui/Icons'
import { teamMembers, roleMatrix, integrations, plans } from '../data/mock'

const sections = ['Company', 'Users & Roles', 'Permissions', 'Integrations', 'Security', 'Subscription']

export default function Settings() {
  const [tab, setTab] = useState('Company')

  return (
    <div className="space-y-5">
      <div className="strux-card flex flex-wrap gap-1 p-1.5">
        {sections.map((s) => (
          <button
            key={s}
            onClick={() => setTab(s)}
            className={`rounded-lg px-3.5 py-2 text-sm font-medium transition ${
              tab === s ? 'bg-electric-500 text-white shadow-glow' : 'text-silver-400 hover:bg-white/5 hover:text-silver-100'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {tab === 'Company' && <CompanyProfile />}
      {tab === 'Users & Roles' && <Users />}
      {tab === 'Permissions' && <Permissions />}
      {tab === 'Integrations' && <Integrations />}
      {tab === 'Security' && <Security />}
      {tab === 'Subscription' && <Subscription />}
    </div>
  )
}

function CompanyProfile() {
  const fields = [
    { label: 'Company Name', value: 'STRUX Engineering Intelligence' },
    { label: 'CR Number', value: '1010-XXXXXX' },
    { label: 'Primary Contact', value: 'Saeed Al Ahmari' },
    { label: 'Email', value: 'saeed@strux.sa' },
    { label: 'Country', value: 'Saudi Arabia' },
    { label: 'City', value: 'Riyadh' },
  ]
  return (
    <Card>
      <h3 className="flex items-center gap-2 text-sm font-semibold text-silver-100">
        <IconBuilding className="h-4 w-4 text-electric-300" /> Company Profile
      </h3>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.label}>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-silver-400">
              {f.label}
            </label>
            <input defaultValue={f.value} className="strux-input" />
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <button className="strux-btn-primary px-4 py-2 text-sm">Save Changes</button>
        <button className="strux-btn-ghost px-4 py-2 text-sm">Cancel</button>
      </div>
    </Card>
  )
}

function Users() {
  return (
    <Card className="p-0">
      <div className="flex items-center justify-between border-b border-white/5 p-5">
        <div>
          <h3 className="text-sm font-semibold text-silver-100">Team Members</h3>
          <p className="text-xs text-silver-400">Manage who can access your STRUX workspace</p>
        </div>
        <button className="strux-btn-primary px-3.5 py-2 text-xs">Invite User</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead className="text-xs uppercase tracking-wide text-silver-500">
            <tr className="border-b border-white/5">
              <th className="px-5 py-3 font-semibold">Name</th>
              <th className="px-5 py-3 font-semibold">Email</th>
              <th className="px-5 py-3 font-semibold">Role</th>
              <th className="px-5 py-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {teamMembers.map((m) => (
              <tr key={m.email} className="transition hover:bg-white/[0.02]">
                <td className="px-5 py-3.5 font-medium text-silver-100">{m.name}</td>
                <td className="px-5 py-3.5 text-silver-400">{m.email}</td>
                <td className="px-5 py-3.5">
                  <Badge tone="blue">{m.role}</Badge>
                </td>
                <td className="px-5 py-3.5">
                  <Badge tone={toneFor(m.status)}>{m.status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

function Permissions() {
  const cols = [
    { key: 'upload', label: 'Upload' },
    { key: 'analyze', label: 'Analyze' },
    { key: 'rfi', label: 'RFIs' },
    { key: 'reports', label: 'Reports' },
    { key: 'admin', label: 'Admin' },
  ] as const
  return (
    <Card className="p-0">
      <div className="border-b border-white/5 p-5">
        <h3 className="text-sm font-semibold text-silver-100">Project Permissions Matrix</h3>
        <p className="text-xs text-silver-400">Role-based access control across STRUX modules</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead className="text-xs uppercase tracking-wide text-silver-500">
            <tr className="border-b border-white/5">
              <th className="px-5 py-3 font-semibold">Role</th>
              {cols.map((c) => (
                <th key={c.key} className="px-5 py-3 text-center font-semibold">
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {roleMatrix.map((row) => (
              <tr key={row.role} className="transition hover:bg-white/[0.02]">
                <td className="px-5 py-3.5 font-medium text-silver-100">{row.role}</td>
                {cols.map((c) => (
                  <td key={c.key} className="px-5 py-3.5 text-center">
                    {row[c.key] ? (
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                        <IconCheck className="h-3 w-3" />
                      </span>
                    ) : (
                      <span className="text-silver-600">—</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

function Integrations() {
  return (
    <div className="space-y-4">
      <Card>
        <h3 className="flex items-center gap-2 text-sm font-semibold text-silver-100">
          <IconSettings className="h-4 w-4 text-electric-300" /> API Integration
        </h3>
        <p className="mt-0.5 text-xs text-silver-400">Connect STRUX to your existing construction tech stack.</p>
        <div className="mt-3 flex flex-col gap-2 rounded-lg border border-white/5 bg-navy-950/40 p-3 sm:flex-row sm:items-center">
          <code className="flex-1 truncate rounded bg-black/30 px-3 py-2 font-mono text-xs text-electric-300">
            sk_live_strux_••••••••••••••••••••3f9a
          </code>
          <button className="strux-btn-ghost px-3.5 py-2 text-xs">Regenerate Key</button>
          <button className="strux-btn-ghost px-3.5 py-2 text-xs">View Docs</button>
        </div>
      </Card>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {integrations.map((i) => (
          <Card key={i.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric-500/10 text-electric-300">
                <IconBolt className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-silver-100">{i.name}</div>
                <div className="text-xs text-silver-400">{i.desc}</div>
              </div>
            </div>
            <button
              className={
                i.connected
                  ? 'rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-300'
                  : 'strux-btn-ghost px-3 py-1.5 text-xs'
              }
            >
              {i.connected ? 'Connected' : 'Connect'}
            </button>
          </Card>
        ))}
      </div>
    </div>
  )
}

function Security() {
  return (
    <div className="space-y-4">
      <Card className="border-electric-500/20 bg-gradient-to-br from-electric-500/10 to-transparent">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric-500/20 text-electric-300">
            <IconShield className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-silver-100">🇸🇦 Saudi Data Residency &amp; Security</h3>
            <p className="mt-1 text-sm leading-relaxed text-silver-300">
              All project models, BOQs and reports are hosted within Saudi Arabia in compliance with the PDPL
              (Personal Data Protection Law) and SDAIA data governance guidelines. Data never leaves the Kingdom.
            </p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {[
          { label: 'Data Residency', value: 'Riyadh Region (KSA)', badge: 'Compliant' },
          { label: 'Encryption', value: 'AES-256 at rest · TLS 1.3 in transit', badge: 'Active' },
          { label: 'Access Control', value: 'Role-based (RBAC) + SSO/SAML ready', badge: 'Active' },
          { label: 'Audit Logging', value: 'Full activity trail · 12-month retention', badge: 'Active' },
          { label: 'Compliance', value: 'PDPL · SDAIA · ISO 27001 (in progress)', badge: 'Compliant' },
          { label: 'Backups', value: 'Encrypted daily · 30-day recovery window', badge: 'Active' },
        ].map((s) => (
          <Card key={s.label} className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-silver-100">{s.label}</div>
              <div className="text-xs text-silver-400">{s.value}</div>
            </div>
            <Badge tone="green">{s.badge}</Badge>
          </Card>
        ))}
      </div>
    </div>
  )
}

function Subscription() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {plans.map((p) => (
        <Card
          key={p.name}
          className={`flex flex-col ${p.current ? 'border-electric-500/50 shadow-glow' : ''}`}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-silver-100">{p.name}</h3>
            {p.current && <Badge tone="blue">Current Plan</Badge>}
          </div>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-2xl font-extrabold text-silver-100">{p.price}</span>
            <span className="text-sm text-silver-400">{p.period}</span>
          </div>
          <ul className="mt-4 flex-1 space-y-2">
            {p.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-silver-300">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                  <IconCheck className="h-2.5 w-2.5" />
                </span>
                {f}
              </li>
            ))}
          </ul>
          <button
            className={`mt-5 w-full ${p.current ? 'strux-btn-ghost' : 'strux-btn-primary'}`}
            disabled={p.current}
          >
            {p.current ? 'Active' : p.name === 'Government' ? 'Contact Sales' : 'Upgrade'}
          </button>
        </Card>
      ))}
    </div>
  )
}
