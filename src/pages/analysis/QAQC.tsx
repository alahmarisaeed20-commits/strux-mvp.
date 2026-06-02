import { Card, Badge, toneFor } from '../../components/ui/primitives'
import { IconCheck, IconWarning, IconX } from '../../components/ui/Icons'
import { qaqcChecks } from '../../data/mock'

const statusIcon = {
  Passed: <IconCheck className="h-4 w-4 text-emerald-300" />,
  Warning: <IconWarning className="h-4 w-4 text-yellow-300" />,
  Failed: <IconX className="h-4 w-4 text-red-300" />,
}

export default function QAQC() {
  const passed = qaqcChecks.filter((c) => c.status === 'Passed').length
  const warnings = qaqcChecks.filter((c) => c.status === 'Warning').length
  const failed = qaqcChecks.filter((c) => c.status === 'Failed').length

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-3 gap-4">
        <Card className="text-center">
          <div className="text-2xl font-bold text-emerald-300">{passed}</div>
          <div className="text-xs text-silver-400">Checks Passed</div>
        </Card>
        <Card className="text-center">
          <div className="text-2xl font-bold text-yellow-300">{warnings}</div>
          <div className="text-xs text-silver-400">Warnings</div>
        </Card>
        <Card className="text-center">
          <div className="text-2xl font-bold text-red-300">{failed}</div>
          <div className="text-xs text-silver-400">Failed</div>
        </Card>
      </div>

      <Card className="p-0">
        <div className="border-b border-white/5 p-5">
          <h3 className="text-sm font-semibold text-silver-100">QA/QC Validation Checklist</h3>
          <p className="text-xs text-silver-400">Automated model-hygiene checks against the project BIM Execution Plan</p>
        </div>
        <div className="divide-y divide-white/5">
          {qaqcChecks.map((c) => (
            <div key={c.id} className="grid grid-cols-1 gap-3 p-5 transition hover:bg-white/[0.02] lg:grid-cols-12">
              <div className="lg:col-span-3">
                <div className="flex items-center gap-2">
                  {statusIcon[c.status]}
                  <span className="text-sm font-semibold text-silver-100">{c.name}</span>
                </div>
                <div className="mt-1.5 flex items-center gap-2">
                  <Badge tone={toneFor(c.status)}>{c.status}</Badge>
                  <Badge tone={toneFor(c.severity)}>{c.severity}</Badge>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="text-xs font-semibold uppercase tracking-wide text-silver-500">Description</div>
                <p className="mt-0.5 text-sm text-silver-300">{c.description}</p>
                {c.affected > 0 && (
                  <p className="mt-1 text-xs text-silver-500">{c.affected.toLocaleString()} elements affected</p>
                )}
              </div>
              <div className="lg:col-span-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-silver-500">Recommended Action</div>
                <p className="mt-0.5 text-sm text-silver-300">{c.recommendation}</p>
                <p className="mt-1 text-xs text-electric-300">Assigned: {c.discipline}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
