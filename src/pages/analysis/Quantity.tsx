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
import { quantities } from '../../data/mock'

const tooltipStyle = {
  background: '#0a1024',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 10,
  fontSize: 12,
  color: '#e3e8f2',
}

export default function Quantity() {
  const chartData = quantities.map((q) => ({
    name: q.item.split(' ')[0],
    Model: q.modelQty,
    BOQ: q.boqQty,
  }))
  const highRisk = quantities.filter((q) => q.risk === 'High').length

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Card>
          <div className="text-xs text-silver-400">Line Items Extracted</div>
          <div className="mt-1 text-2xl font-bold text-silver-100">{quantities.length}</div>
        </Card>
        <Card>
          <div className="text-xs text-silver-400">Within ±5%</div>
          <div className="mt-1 text-2xl font-bold text-emerald-300">
            {quantities.filter((q) => q.variance <= 5).length}
          </div>
        </Card>
        <Card>
          <div className="text-xs text-silver-400">High-Risk Variance</div>
          <div className="mt-1 text-2xl font-bold text-red-300">{highRisk}</div>
        </Card>
        <Card>
          <div className="text-xs text-silver-400">Take-off Confidence</div>
          <div className="mt-1 text-2xl font-bold text-silver-100">96%</div>
        </Card>
      </div>

      <Card>
        <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold text-silver-100">
          <IconQuantity className="h-4 w-4 text-electric-300" /> Model Quantity vs BOQ Quantity
        </h3>
        <p className="mb-3 text-xs text-silver-400">Normalised comparison across major take-off items</p>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={chartData} margin={{ left: -10, right: 6 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis dataKey="name" stroke="#6b7798" fontSize={11} tickLine={false} axisLine={false} />
            <YAxis stroke="#6b7798" fontSize={11} tickLine={false} axisLine={false} />
            <Tooltip contentStyle={tooltipStyle} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Bar dataKey="Model" fill="#2f6bff" radius={[5, 5, 0, 0]} />
            <Bar dataKey="BOQ" fill="#6b7798" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Card className="p-0">
        <div className="border-b border-white/5 p-5">
          <h3 className="text-sm font-semibold text-silver-100">Quantity Take-off &amp; Variance</h3>
          <p className="text-xs text-silver-400">Extracted from model geometry, reconciled against the BOQ</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-silver-500">
              <tr className="border-b border-white/5">
                <th className="px-5 py-3 font-semibold">Item</th>
                <th className="px-5 py-3 font-semibold">Unit</th>
                <th className="px-5 py-3 text-right font-semibold">Model Qty</th>
                <th className="px-5 py-3 text-right font-semibold">BOQ Qty</th>
                <th className="px-5 py-3 text-right font-semibold">Variance</th>
                <th className="px-5 py-3 font-semibold">Risk</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {quantities.map((q) => (
                <tr key={q.id} className="transition hover:bg-white/[0.02]">
                  <td className="px-5 py-3.5 font-medium text-silver-100">{q.item}</td>
                  <td className="px-5 py-3.5 text-silver-400">{q.unit}</td>
                  <td className="px-5 py-3.5 text-right font-mono text-silver-200">{q.modelQty.toLocaleString()}</td>
                  <td className="px-5 py-3.5 text-right font-mono text-silver-400">{q.boqQty.toLocaleString()}</td>
                  <td
                    className={`px-5 py-3.5 text-right font-semibold ${
                      q.variance > 10 ? 'text-red-300' : q.variance > 5 ? 'text-amber-300' : 'text-emerald-300'
                    }`}
                  >
                    +{q.variance}%
                  </td>
                  <td className="px-5 py-3.5">
                    <Badge tone={toneFor(q.risk)}>{q.risk}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
