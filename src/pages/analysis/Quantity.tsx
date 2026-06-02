import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import { Card, Badge, toneFor } from '../../components/ui/primitives'
import { IconQuantity } from '../../components/ui/Icons'
import { useI18n } from '../../i18n'
import { quantities } from '../../data/mock'
import { quantityAr, tEnum } from '../../data/ar'

const tooltipStyle = {
  background: '#0a1024',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 10,
  fontSize: 12,
  color: '#e3e8f2',
}

export default function Quantity() {
  const { t, lang } = useI18n()
  const ar = lang === 'ar'
  const modelLabel = ar ? 'النموذج' : 'Model'
  const boqLabel = ar ? 'الجدول' : 'BOQ'
  const chartData = quantities.map((q) => ({
    name: ar ? quantityAr[q.id]?.item.split(' ')[0] ?? q.item.split(' ')[0] : q.item.split(' ')[0],
    [modelLabel]: q.modelQty,
    [boqLabel]: q.boqQty,
  }))
  const highRisk = quantities.filter((q) => q.risk === 'High').length

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Card>
          <div className="text-xs text-silver-400">{t('qt.extracted')}</div>
          <div className="mt-1 text-2xl font-bold text-silver-100">{quantities.length}</div>
        </Card>
        <Card>
          <div className="text-xs text-silver-400">{t('qt.within')}</div>
          <div className="mt-1 text-2xl font-bold text-emerald-300">
            {quantities.filter((q) => q.variance <= 5).length}
          </div>
        </Card>
        <Card>
          <div className="text-xs text-silver-400">{t('qt.highRisk')}</div>
          <div className="mt-1 text-2xl font-bold text-red-300">{highRisk}</div>
        </Card>
        <Card>
          <div className="text-xs text-silver-400">{t('qt.confidence')}</div>
          <div className="mt-1 text-2xl font-bold text-silver-100">96%</div>
        </Card>
      </div>

      <Card>
        <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold text-silver-100">
          <IconQuantity className="h-4 w-4 text-electric-300" /> {t('qt.compare')}
        </h3>
        <p className="mb-3 text-xs text-silver-400">{t('qt.compareSub')}</p>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={chartData} margin={{ left: -10, right: 6 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis dataKey="name" stroke="#6b7798" fontSize={11} tickLine={false} axisLine={false} />
            <YAxis stroke="#6b7798" fontSize={11} tickLine={false} axisLine={false} />
            <Tooltip contentStyle={tooltipStyle} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Bar dataKey={modelLabel} fill="#2f6bff" radius={[5, 5, 0, 0]} />
            <Bar dataKey={boqLabel} fill="#6b7798" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Card className="p-0">
        <div className="border-b border-white/5 p-5">
          <h3 className="text-sm font-semibold text-silver-100">{t('qt.takeoff')}</h3>
          <p className="text-xs text-silver-400">{t('qt.takeoffSub')}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-start text-sm">
            <thead className="text-xs uppercase tracking-wide text-silver-500">
              <tr className="border-b border-white/5">
                <th className="px-5 py-3 font-semibold">{t('qt.colItem')}</th>
                <th className="px-5 py-3 font-semibold">{t('qt.colUnit')}</th>
                <th className="px-5 py-3 text-end font-semibold">{t('qt.colModel')}</th>
                <th className="px-5 py-3 text-end font-semibold">{t('qt.colBoq')}</th>
                <th className="px-5 py-3 text-end font-semibold">{t('qt.colVar')}</th>
                <th className="px-5 py-3 font-semibold">{t('qt.colRisk')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {quantities.map((q) => {
                const a = ar ? quantityAr[q.id] : null
                return (
                  <tr key={q.id} className="transition hover:bg-white/[0.02]">
                    <td className="px-5 py-3.5 font-medium text-silver-100">{a?.item ?? q.item}</td>
                    <td className="px-5 py-3.5 text-silver-400">{a?.unit ?? q.unit}</td>
                    <td className="px-5 py-3.5 text-end font-mono text-silver-200">{q.modelQty.toLocaleString()}</td>
                    <td className="px-5 py-3.5 text-end font-mono text-silver-400">{q.boqQty.toLocaleString()}</td>
                    <td
                      className={`px-5 py-3.5 text-end font-semibold ${
                        q.variance > 10 ? 'text-red-300' : q.variance > 5 ? 'text-amber-300' : 'text-emerald-300'
                      }`}
                    >
                      +{q.variance}%
                    </td>
                    <td className="px-5 py-3.5">
                      <Badge tone={toneFor(q.risk)}>{tEnum(q.risk, ar)}</Badge>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
