import { useState } from 'react'
import { Badge } from '../components/ui/primitives'
import { useI18n } from '../i18n'
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
  IconCube,
} from '../components/ui/Icons'
import Viewer from './Viewer'
import Overview from './analysis/Overview'
import QAQC from './analysis/QAQC'
import ClashIntel from './analysis/ClashIntel'
import Compliance from './analysis/Compliance'
import Quantity from './analysis/Quantity'
import RFIGen from './analysis/RFIGen'
import AIChat from './analysis/AIChat'
import ExecReport from './analysis/ExecReport'

const Viewer3D = () => <Viewer embedded />

const tabs = [
  { key: 'overview', labelKey: 'tab.overview', icon: IconAnalysis, El: Overview },
  { key: '3d', labelKey: 'tab.3d', icon: IconCube, El: Viewer3D },
  { key: 'qaqc', labelKey: 'tab.qaqc', icon: IconCheck, El: QAQC },
  { key: 'clash', labelKey: 'tab.clash', icon: IconClash, El: ClashIntel },
  { key: 'compliance', labelKey: 'tab.compliance', icon: IconShield, El: Compliance },
  { key: 'quantity', labelKey: 'tab.quantity', icon: IconQuantity, El: Quantity },
  { key: 'rfi', labelKey: 'tab.rfi', icon: IconRfi, El: RFIGen },
  { key: 'chat', labelKey: 'tab.chat', icon: IconChat, El: AIChat },
  { key: 'report', labelKey: 'tab.report', icon: IconReport, El: ExecReport },
]

export default function Analysis() {
  const { t } = useI18n()
  const [active, setActive] = useState('overview')
  const Active = tabs.find((tb) => tb.key === active)?.El ?? Overview

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
            <p className="text-xs text-silver-400">Capital Development Co. · {t('an.analyzed')}</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="green">{t('dash.bimHealth')} 94%</Badge>
          <Badge tone="blue">48,210 {t('an.elements')}</Badge>
          <Badge tone="amber">11 {t('an.highRisk')}</Badge>
          <Badge tone="green">{t('dash.compliance')} 91%</Badge>
        </div>
      </div>

      {/* Tab bar */}
      <div className="strux-card overflow-x-auto p-1.5">
        <div className="flex min-w-max gap-1">
          {tabs.map((tb) => {
            const isActive = active === tb.key
            return (
              <button
                key={tb.key}
                onClick={() => setActive(tb.key)}
                className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-3.5 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-electric-500 text-white shadow-glow'
                    : 'text-silver-400 hover:bg-white/5 hover:text-silver-100'
                }`}
              >
                <tb.icon className="h-4 w-4" />
                {t(tb.labelKey)}
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
