import { lazy, Suspense, useState } from 'react'
import { Card, Badge, SAR, toneFor } from '../components/ui/primitives'
import { IconCube, IconLayers, IconClash, IconBuilding, IconBolt } from '../components/ui/Icons'
import { useI18n } from '../i18n'
import { clashes } from '../data/mock'
import type { ClashMarker, Layers } from '../components/three/BIMScene'

// Code-split the heavy Three.js scene so it only loads with the viewer.
const BIMScene = lazy(() => import('../components/three/BIMScene'))

// Map clashes from the register to 3D positions within the model.
const markers: ClashMarker[] = [
  { id: 'CL-1090', pos: [-4.5, 1.2, -2], severity: 'Critical' },
  { id: 'CL-1042', pos: [2, 9.2, 1.4], severity: 'High' },
  { id: 'CL-1138', pos: [3, 3.2, -2], severity: 'High' },
  { id: 'CL-1067', pos: [-3, 13, 0], severity: 'Medium' },
  { id: 'CL-1112', pos: [3.5, 16.2, 2], severity: 'Low' },
  { id: 'CL-1155', pos: [-2, 6.2, 1.4], severity: 'Medium' },
]

const layerMeta: { key: keyof Layers; labelKey: string; icon: (p: { className?: string }) => JSX.Element; color: string }[] = [
  { key: 'structure', labelKey: '3d.structure', icon: IconBuilding, color: '#5a6b90' },
  { key: 'mep', labelKey: '3d.mep', icon: IconBolt, color: '#2f6bff' },
  { key: 'architecture', labelKey: '3d.architecture', icon: IconLayers, color: '#7aa6ff' },
  { key: 'clashes', labelKey: '3d.clashes', icon: IconClash, color: '#ef4444' },
]

export default function Viewer({ embedded = false }: { embedded?: boolean }) {
  const { t } = useI18n()
  const [layers, setLayers] = useState<Layers>({ structure: true, mep: true, architecture: true, clashes: true })
  const [selected, setSelected] = useState<string | null>('CL-1090')
  const [resetKey, setResetKey] = useState(0)

  const selectedClash = clashes.find((c) => c.id === selected) ?? null
  const visibleMarkers = clashes.filter((c) => markers.some((m) => m.id === c.id))

  function toggleLayer(k: keyof Layers) {
    setLayers((l) => ({ ...l, [k]: !l[k] }))
  }

  return (
    <div className="space-y-4">
      {!embedded && (
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric-500/15 text-electric-300">
            <IconCube className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-silver-100">{t('3d.title')}</h2>
            <p className="text-sm text-silver-400">{t('3d.sub')}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        {/* 3D canvas */}
        <Card className="relative overflow-hidden p-0 lg:col-span-3">
          <div className="relative h-[560px] w-full">
            <Suspense
              fallback={
                <div className="flex h-full w-full items-center justify-center bg-navy-950">
                  <div className="flex flex-col items-center gap-3 text-silver-400">
                    <div className="h-10 w-10 animate-spin rounded-full border-2 border-electric-500/30 border-t-electric-500" />
                    <span className="text-sm">{t('3d.loading')}</span>
                  </div>
                </div>
              }
            >
              <BIMScene
                layers={layers}
                markers={markers}
                selected={selected}
                onSelect={setSelected}
                resetKey={resetKey}
              />
            </Suspense>

            {/* Floating overlay: title + reset */}
            <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-4">
              <div className="pointer-events-auto rounded-lg border border-white/10 bg-navy-950/80 px-3 py-2 backdrop-blur">
                <div className="flex items-center gap-2 text-xs font-semibold text-silver-100">
                  <IconCube className="h-4 w-4 text-electric-300" /> Riyadh Mixed-Use Tower · v12
                </div>
                <div className="text-[11px] text-silver-400">48,210 {t('an.elements')} · 6 {t('tab.clash')}</div>
              </div>
              <button
                onClick={() => setResetKey((k) => k + 1)}
                className="pointer-events-auto rounded-lg border border-white/10 bg-navy-950/80 px-3 py-2 text-xs font-semibold text-silver-200 backdrop-blur transition hover:text-white"
              >
                {t('3d.reset')}
              </button>
            </div>

            {/* Legend */}
            <div className="pointer-events-none absolute bottom-4 left-4 flex flex-wrap gap-2">
              {layerMeta.map(
                (l) =>
                  layers[l.key] && (
                    <span
                      key={l.key}
                      className="flex items-center gap-1.5 rounded-full border border-white/10 bg-navy-950/80 px-2.5 py-1 text-[11px] text-silver-300 backdrop-blur"
                    >
                      <span className="h-2.5 w-2.5 rounded-full" style={{ background: l.color }} />
                      {t(l.labelKey)}
                    </span>
                  ),
              )}
            </div>
          </div>
        </Card>

        {/* Controls + clash inspector */}
        <div className="space-y-4 lg:col-span-1">
          <Card>
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-silver-100">
              <IconLayers className="h-4 w-4 text-electric-300" /> {t('3d.layers')}
            </h3>
            <div className="space-y-2">
              {layerMeta.map((l) => {
                const on = layers[l.key]
                return (
                  <button
                    key={l.key}
                    onClick={() => toggleLayer(l.key)}
                    className={`flex w-full items-center gap-3 rounded-lg border p-2.5 text-start transition ${
                      on ? 'border-electric-500/30 bg-electric-500/10' : 'border-white/5 bg-navy-950/40 opacity-60'
                    }`}
                  >
                    <span className="h-3 w-3 rounded-full" style={{ background: l.color }} />
                    <l.icon className="h-4 w-4 text-silver-300" />
                    <span className="flex-1 text-sm font-medium text-silver-100">{t(l.labelKey)}</span>
                    <span
                      className={`relative h-5 w-9 rounded-full transition ${on ? 'bg-electric-500' : 'bg-white/10'}`}
                    >
                      <span
                        className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-all ${
                          on ? 'start-4' : 'start-0.5'
                        }`}
                      />
                    </span>
                  </button>
                )
              })}
            </div>
          </Card>

          <Card>
            <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-silver-100">
              <IconClash className="h-4 w-4 text-red-300" /> {t('3d.selected')}
            </h3>
            {selectedClash ? (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-semibold text-electric-300">{selectedClash.id}</span>
                  <Badge tone={toneFor(selectedClash.severity)}>{selectedClash.severity}</Badge>
                </div>
                <p className="text-sm text-silver-200">
                  {selectedClash.element1} <span className="text-silver-500">×</span> {selectedClash.element2}
                </p>
                <p className="text-xs text-silver-500">{selectedClash.location}</p>
                <div className="grid grid-cols-2 gap-2 border-t border-white/5 pt-2.5">
                  <div>
                    <div className="text-[11px] text-silver-500">{t('3d.cost')}</div>
                    <div className="text-sm font-semibold text-amber-300">
                      <SAR value={selectedClash.costImpact} />
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-silver-500">{t('3d.delay')}</div>
                    <div className="text-sm font-semibold text-silver-100">
                      {selectedClash.delayDays} {t('3d.days')}
                    </div>
                  </div>
                </div>
                <p className="rounded-lg bg-navy-950/50 p-2.5 text-xs text-silver-300">↪ {selectedClash.recommendation}</p>
              </div>
            ) : (
              <p className="text-sm text-silver-400">{t('3d.selectHint')}</p>
            )}
          </Card>
        </div>
      </div>

      {/* Clash list under the viewer */}
      <Card className="p-0">
        <div className="border-b border-white/5 p-4">
          <h3 className="text-sm font-semibold text-silver-100">{t('3d.clashList')}</h3>
        </div>
        <div className="grid grid-cols-1 gap-2 p-3 sm:grid-cols-2 lg:grid-cols-3">
          {visibleMarkers.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelected(c.id)}
              className={`rounded-lg border p-3 text-start transition ${
                selected === c.id
                  ? 'border-electric-500/50 bg-electric-500/10'
                  : 'border-white/5 bg-navy-950/40 hover:border-white/15'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-electric-300">{c.id}</span>
                <Badge tone={toneFor(c.severity)}>{c.severity}</Badge>
              </div>
              <p className="mt-1 line-clamp-1 text-xs text-silver-300">
                {c.element1} × {c.element2}
              </p>
              <p className="mt-0.5 text-[11px] text-silver-500">{c.location}</p>
            </button>
          ))}
        </div>
      </Card>
    </div>
  )
}
