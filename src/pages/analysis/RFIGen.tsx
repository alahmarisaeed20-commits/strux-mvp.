import { useState } from 'react'
import { Card, Badge, toneFor } from '../../components/ui/primitives'
import { IconRfi, IconBolt, IconSparkle, IconDoc } from '../../components/ui/Icons'
import { rfis as seedRfis } from '../../data/mock'

export default function RFIGen() {
  const [rfis, setRfis] = useState(seedRfis)
  const [generating, setGenerating] = useState(false)
  const [selected, setSelected] = useState(seedRfis[0].id)

  function generate() {
    setGenerating(true)
    setTimeout(() => {
      const next = {
        id: `RFI-0${35 + rfis.length - seedRfis.length}`,
        subject: 'Cable tray and sprinkler branch clearance at Level 05 corridor',
        question:
          'The sprinkler branch line and cable tray CT-12 conflict in the Level 05 corridor. Please confirm whether the cable tray can be dropped 150 mm to maintain sprinkler coverage clearance.',
        discipline: 'Electrical / Fire Protection',
        priority: 'High' as const,
        status: 'Draft' as const,
        attachment: 'Clash CL-1067 Screenshot',
        source: 'Clash CL-1067',
        raisedBy: 'STRUX AI',
        date: '2026-06-02',
      }
      setRfis((r) => [next, ...r])
      setSelected(next.id)
      setGenerating(false)
    }, 1400)
  }

  const active = rfis.find((r) => r.id === selected) ?? rfis[0]

  return (
    <div className="space-y-5">
      <Card className="flex flex-col items-start justify-between gap-3 bg-gradient-to-r from-electric-500/10 to-transparent sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric-500/20 text-electric-300">
            <IconRfi className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-silver-100">AI RFI Generator</h3>
            <p className="text-xs text-silver-400">
              Auto-drafts construction RFIs from clashes, compliance gaps and quantity variances.
            </p>
          </div>
        </div>
        <button onClick={generate} disabled={generating} className="strux-btn-primary shrink-0">
          {generating ? (
            <>
              <IconSparkle className="h-4 w-4 animate-spin" /> Drafting…
            </>
          ) : (
            <>
              <IconBolt className="h-4 w-4" /> Generate RFI from Issues
            </>
          )}
        </button>
      </Card>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* RFI list */}
        <div className="space-y-2 lg:col-span-1">
          {rfis.map((r) => (
            <button
              key={r.id}
              onClick={() => setSelected(r.id)}
              className={`w-full rounded-lg border p-3 text-left transition ${
                selected === r.id
                  ? 'border-electric-500/50 bg-electric-500/10'
                  : 'border-white/5 bg-navy-950/40 hover:border-white/15'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-electric-300">{r.id}</span>
                <Badge tone={toneFor(r.status)}>{r.status}</Badge>
              </div>
              <p className="mt-1.5 line-clamp-2 text-sm font-medium text-silver-100">{r.subject}</p>
              <div className="mt-1.5 flex items-center gap-2">
                <Badge tone={toneFor(r.priority)}>{r.priority}</Badge>
                <span className="text-[11px] text-silver-500">{r.discipline}</span>
              </div>
            </button>
          ))}
        </div>

        {/* RFI detail — formatted like a real RFI document */}
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <div className="flex items-center gap-2">
              <IconDoc className="h-5 w-5 text-electric-300" />
              <span className="font-mono text-sm font-semibold text-silver-100">{active.id}</span>
              <Badge tone={toneFor(active.status)}>{active.status}</Badge>
            </div>
            <span className="text-xs text-silver-500">{active.date}</span>
          </div>

          <dl className="mt-4 space-y-3.5">
            <Field label="Subject">{active.subject}</Field>
            <Field label="Question">{active.question}</Field>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Discipline">{active.discipline}</Field>
              <Field label="Priority">
                <Badge tone={toneFor(active.priority)}>{active.priority}</Badge>
              </Field>
              <Field label="Suggested Attachment">{active.attachment}</Field>
              <Field label="Source">{active.source}</Field>
            </div>
            <Field label="Raised By">{active.raisedBy} · auto-generated</Field>
          </dl>

          <div className="mt-5 flex flex-wrap gap-2 border-t border-white/5 pt-4">
            <button className="strux-btn-primary px-3.5 py-2 text-xs">Issue RFI</button>
            <button className="strux-btn-ghost px-3.5 py-2 text-xs">Edit Draft</button>
            <button className="strux-btn-ghost px-3.5 py-2 text-xs">Export PDF</button>
          </div>
        </Card>
      </div>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wide text-silver-500">{label}</dt>
      <dd className="mt-0.5 text-sm leading-relaxed text-silver-200">{children}</dd>
    </div>
  )
}
