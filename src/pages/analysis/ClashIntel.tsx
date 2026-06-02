import { Card, Badge, SAR, toneFor } from '../../components/ui/primitives'
import { IconClash } from '../../components/ui/Icons'
import { clashes } from '../../data/mock'

export default function ClashIntel() {
  const totalCost = clashes.reduce((s, c) => s + c.costImpact, 0)
  const totalDelay = clashes.reduce((s, c) => s + c.delayDays, 0)
  const critical = clashes.filter((c) => c.priority === 'Critical').length

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Card>
          <div className="text-xs text-silver-400">Active Clashes</div>
          <div className="mt-1 text-2xl font-bold text-silver-100">{clashes.length}</div>
        </Card>
        <Card>
          <div className="text-xs text-silver-400">Critical Priority</div>
          <div className="mt-1 text-2xl font-bold text-red-300">{critical}</div>
        </Card>
        <Card>
          <div className="text-xs text-silver-400">Est. Cost Impact</div>
          <div className="mt-1 text-2xl font-bold text-amber-300">
            <SAR value={totalCost} />
          </div>
        </Card>
        <Card>
          <div className="text-xs text-silver-400">Potential Delay</div>
          <div className="mt-1 text-2xl font-bold text-silver-100">{totalDelay} days</div>
        </Card>
      </div>

      <Card className="p-0">
        <div className="flex items-center justify-between border-b border-white/5 p-5">
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold text-silver-100">
              <IconClash className="h-4 w-4 text-electric-300" /> Clash Intelligence Register
            </h3>
            <p className="text-xs text-silver-400">AI-prioritised by cost, schedule and constructability impact</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-silver-500">
              <tr className="border-b border-white/5">
                <th className="px-5 py-3 font-semibold">Clash ID</th>
                <th className="px-5 py-3 font-semibold">Conflict</th>
                <th className="px-5 py-3 font-semibold">Disciplines</th>
                <th className="px-5 py-3 font-semibold">Severity</th>
                <th className="px-5 py-3 font-semibold">Cost Impact</th>
                <th className="px-5 py-3 font-semibold">Delay</th>
                <th className="px-5 py-3 font-semibold">Priority</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {clashes.map((c) => (
                <tr key={c.id} className="align-top transition hover:bg-white/[0.02]">
                  <td className="px-5 py-4 font-mono text-xs font-semibold text-electric-300">{c.id}</td>
                  <td className="px-5 py-4">
                    <div className="font-medium text-silver-100">
                      {c.element1} <span className="text-silver-500">×</span> {c.element2}
                    </div>
                    <div className="text-xs text-silver-500">{c.location}</div>
                    <div className="mt-1 text-xs text-silver-400">↪ {c.recommendation}</div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex flex-col gap-1">
                      <Badge tone="blue">{c.discipline1}</Badge>
                      <Badge tone="gray">{c.discipline2}</Badge>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <Badge tone={toneFor(c.severity)}>{c.severity}</Badge>
                  </td>
                  <td className="px-5 py-4 font-semibold text-amber-300">
                    <SAR value={c.costImpact} />
                  </td>
                  <td className="px-5 py-4 text-silver-200">{c.delayDays} days</td>
                  <td className="px-5 py-4">
                    <Badge tone={toneFor(c.priority)}>{c.priority}</Badge>
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
