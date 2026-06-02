import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Badge } from '../components/ui/primitives'
import {
  IconCube,
  IconLayers,
  IconTable,
  IconDoc,
  IconUpload,
  IconCheck,
  IconBolt,
  IconArrowRight,
} from '../components/ui/Icons'
import { acceptedFiles, pipelineStages } from '../data/mock'

const iconMap: Record<string, (p: { className?: string }) => JSX.Element> = {
  cube: IconCube,
  layers: IconLayers,
  table: IconTable,
  doc: IconDoc,
}

type Phase = 'idle' | 'processing' | 'done'

export default function Upload() {
  const navigate = useNavigate()
  const [staged, setStaged] = useState<string[]>(['IFC', 'Revit', 'BOQ'])
  const [phase, setPhase] = useState<Phase>('idle')
  const [stage, setStage] = useState(0)

  function toggle(type: string) {
    if (phase === 'processing') return
    setStaged((s) => (s.includes(type) ? s.filter((t) => t !== type) : [...s, type]))
  }

  function start() {
    setPhase('processing')
    setStage(0)
  }

  // Drive the pipeline animation.
  useEffect(() => {
    if (phase !== 'processing') return
    if (stage >= pipelineStages.length) {
      const t = setTimeout(() => setPhase('done'), 500)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setStage((s) => s + 1), 1100)
    return () => clearTimeout(t)
  }, [phase, stage])

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
      {/* Upload column */}
      <div className="space-y-4 lg:col-span-2">
        <Card>
          <h2 className="text-lg font-semibold tracking-tight text-silver-100">Upload BIM &amp; Project Files</h2>
          <p className="mt-0.5 text-sm text-silver-400">
            STRUX reads your models on top of Autodesk/Revit — nothing is replaced.
          </p>

          <label className="mt-5 flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-white/10 bg-navy-950/40 px-6 py-10 text-center transition hover:border-electric-500/50 hover:bg-electric-500/5">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-electric-500/10 text-electric-300">
              <IconUpload className="h-6 w-6" />
            </div>
            <span className="mt-3 text-sm font-semibold text-silver-100">Drag &amp; drop files here</span>
            <span className="mt-1 text-xs text-silver-500">or click to browse · IFC, RVT, XLSX, PDF (max 2 GB)</span>
            <input type="file" multiple className="hidden" />
          </label>

          <div className="mt-4 space-y-2">
            {acceptedFiles.map((f) => {
              const Icon = iconMap[f.icon]
              const active = staged.includes(f.type)
              return (
                <button
                  key={f.type}
                  onClick={() => toggle(f.type)}
                  className={`flex w-full items-center gap-3 rounded-lg border p-3 text-left transition ${
                    active
                      ? 'border-electric-500/40 bg-electric-500/10'
                      : 'border-white/10 bg-navy-950/40 hover:border-white/20'
                  }`}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-electric-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold text-silver-100">
                      {f.label} <span className="text-xs font-normal text-silver-500">{f.ext}</span>
                    </div>
                    <div className="truncate text-xs text-silver-400">{f.desc}</div>
                  </div>
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                      active ? 'border-electric-400 bg-electric-500 text-white' : 'border-white/20 text-transparent'
                    }`}
                  >
                    <IconCheck className="h-3 w-3" />
                  </span>
                </button>
              )
            })}
          </div>

          <button
            onClick={start}
            disabled={staged.length === 0 || phase === 'processing'}
            className="strux-btn-primary mt-5 w-full"
          >
            {phase === 'processing' ? (
              'Analyzing…'
            ) : (
              <>
                <IconBolt className="h-4 w-4" /> Run STRUX AI Analysis
              </>
            )}
          </button>
        </Card>
      </div>

      {/* Pipeline column */}
      <div className="lg:col-span-3">
        <Card className="h-full">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold text-silver-100">AI Processing Pipeline</h3>
              <p className="text-xs text-silver-400">Riyadh Mixed-Use Tower · Federated model v12</p>
            </div>
            {phase === 'idle' && <Badge tone="gray">Awaiting input</Badge>}
            {phase === 'processing' && <Badge tone="blue">Processing…</Badge>}
            {phase === 'done' && <Badge tone="green">Complete</Badge>}
          </div>

          <div className="space-y-2">
            {pipelineStages.map((s, i) => {
              const isDone = phase === 'done' || i < stage
              const isActive = phase === 'processing' && i === stage
              return (
                <div
                  key={s.key}
                  className={`flex items-center gap-4 rounded-lg border p-3.5 transition ${
                    isActive
                      ? 'border-electric-500/50 bg-electric-500/10'
                      : isDone
                        ? 'border-emerald-500/20 bg-emerald-500/5'
                        : 'border-white/5 bg-navy-950/30'
                  }`}
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                      isDone
                        ? 'bg-emerald-500/20 text-emerald-300'
                        : isActive
                          ? 'bg-electric-500 text-white'
                          : 'bg-white/5 text-silver-500'
                    }`}
                  >
                    {isDone ? <IconCheck className="h-4 w-4" /> : i + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-sm font-semibold ${
                          isDone || isActive ? 'text-silver-100' : 'text-silver-400'
                        }`}
                      >
                        {s.label}
                      </span>
                      {isActive && (
                        <span className="flex gap-1">
                          {[0, 1, 2].map((d) => (
                            <span
                              key={d}
                              className="h-1.5 w-1.5 rounded-full bg-electric-400"
                              style={{ animation: 'pulseline 1s infinite', animationDelay: `${d * 0.15}s` }}
                            />
                          ))}
                        </span>
                      )}
                    </div>
                    <div className="truncate text-xs text-silver-400">{s.detail}</div>
                  </div>
                  {isDone && <span className="text-xs font-semibold text-emerald-300">Done</span>}
                </div>
              )
            })}
          </div>

          {phase === 'done' && (
            <div className="mt-5 animate-fadeup rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-semibold text-silver-100">Analysis complete</h4>
                  <p className="text-xs text-silver-400">
                    48,210 elements · 72 issues · 6 clashes · 91% compliance. Smart report ready.
                  </p>
                </div>
                <button onClick={() => navigate('/app/analysis')} className="strux-btn-primary shrink-0">
                  View Results <IconArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {phase === 'idle' && (
            <p className="mt-5 text-center text-xs text-silver-500">
              Select your files and run the analysis to watch the STRUX engine work.
            </p>
          )}
        </Card>
      </div>
    </div>
  )
}
