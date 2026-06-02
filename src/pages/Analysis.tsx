import { useState } from 'react'
import { Badge } from '../components/ui/primitives'
import {
  IconAnalysis,
  IconCheck,
  IconClash,
  IconShield,
  IconQuantity,
  IconRfi,
  IconChat,
  IconReport,
  IconBuilding,
} from '../components/ui/Icons'
import Overview from './analysis/Overview'
import QAQC from './analysis/QAQC'
import ClashIntel from './analysis/ClashIntel'
import Compliance from './analysis/Compliance'
import Quantity from './analysis/Quantity'
import RFIGen from './analysis/RFIGen'
import AIChat from './analysis/AIChat'
import ExecReport from './analysis/ExecReport'

const tabs = [
  { key: 'overview', label: 'Overview', icon: IconAnalysis, El: Overview },
  { key: 'qaqc', label: 'QA/QC Checks', icon: IconCheck, El: QAQC },
  { key: 'clash', label: 'Clash Intelligence', icon: IconClash, El: ClashIntel },
  { key: 'compliance', label: 'Saudi Compliance', icon: IconShield, El: Compliance },
  { key: 'quantity', label: 'Quantity Extraction', icon: IconQuantity, El: Quantity },
  { key: 'rfi', label: 'RFI Generator', icon: IconRfi, El: RFIGen },
  { key: 'chat', label: 'AI Chat', icon: IconChat, El: AIChat },
  { key: 'report', label: 'Executive Report', icon: IconReport, El: ExecReport },
]

export default function Analysis() {
  const [active, setActive] = useState('overview')
  const Active = tabs.find((t) => t.key === active)?.El ?? Overview

  return (
    <div className="space-y-5">
      {/* Project context header */}
      <div className="strux-card flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500/30 to-electric-600/10 text-electric-300">
            <IconBuilding className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-base font-semibold tracking-tight text-silver-100">Riyadh Mixed-Use Tower</h2>
            <p className="text-xs text-silver-400">Capital Development Co. · Federated model v12 · Analyzed 2 hours ago</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="green">BIM Health 94%</Badge>
          <Badge tone="blue">48,210 elements</Badge>
          <Badge tone="amber">11 high-risk</Badge>
          <Badge tone="green">Compliance 91%</Badge>
        </div>
      </div>

      {/* Tab bar */}
      <div className="strux-card overflow-x-auto p-1.5">
        <div className="flex min-w-max gap-1">
          {tabs.map((t) => {
            const isActive = active === t.key
            return (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-3.5 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-electric-500 text-white shadow-glow'
                    : 'text-silver-400 hover:bg-white/5 hover:text-silver-100'
                }`}
              >
                <t.icon className="h-4 w-4" />
                {t.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Active tab */}
      <div key={active} className="animate-fadeup">
        <Active />
      </div>
    </div>
  )
}
