import { Suspense, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Grid, Html, Float } from '@react-three/drei'
import * as THREE from 'three'

// ---------------------------------------------------------------------------
// Procedural BIM building used by the 3D viewer. Geometry is illustrative
// (a federated multi-storey model) with toggleable disciplines and clash
// markers wired back to the clash register.
// ---------------------------------------------------------------------------

export interface ClashMarker {
  id: string
  pos: [number, number, number]
  severity: 'Critical' | 'High' | 'Medium' | 'Low'
}

export interface Layers {
  structure: boolean
  mep: boolean
  architecture: boolean
  clashes: boolean
}

const FLOORS = 6
const FLOOR_H = 3
const W = 12 // footprint width (x)
const D = 8 // footprint depth (z)

const colX = [-W / 2 + 0.6, -2, 2, W / 2 - 0.6]
const colZ = [-D / 2 + 0.6, 0, D / 2 - 0.6]

function Structure() {
  return (
    <group>
      {/* Floor slabs */}
      {Array.from({ length: FLOORS + 1 }).map((_, i) => (
        <mesh key={`slab-${i}`} position={[0, i * FLOOR_H, 0]} castShadow receiveShadow>
          <boxGeometry args={[W, 0.18, D]} />
          <meshStandardMaterial color="#3a4a6b" metalness={0.3} roughness={0.6} />
        </mesh>
      ))}

      {/* Columns */}
      {colX.map((x) =>
        colZ.map((z) =>
          Array.from({ length: FLOORS }).map((_, i) => (
            <mesh key={`col-${x}-${z}-${i}`} position={[x, i * FLOOR_H + FLOOR_H / 2, z]} castShadow>
              <boxGeometry args={[0.35, FLOOR_H, 0.35]} />
              <meshStandardMaterial color="#5a6b90" metalness={0.4} roughness={0.5} />
            </mesh>
          )),
        ),
      )}

      {/* A few primary beams on selected levels */}
      {[1, 3, 5].map((i) =>
        colZ.map((z) => (
          <mesh key={`beam-${i}-${z}`} position={[0, i * FLOOR_H, z]} castShadow>
            <boxGeometry args={[W, 0.3, 0.25]} />
            <meshStandardMaterial color="#6b7798" metalness={0.4} roughness={0.5} />
          </mesh>
        )),
      )}
    </group>
  )
}

function MEP() {
  return (
    <group>
      {/* Horizontal supply ducts running along X on a couple of levels */}
      {[2, 4].map((i) => (
        <mesh key={`duct-${i}`} position={[0, i * FLOOR_H + 0.9, 1.4]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.32, 0.32, W - 1.5, 16]} />
          <meshStandardMaterial color="#2f6bff" metalness={0.6} roughness={0.3} emissive="#11254d" />
        </mesh>
      ))}
      {/* Branch ducts along Z */}
      {[2, 4].map((i) =>
        [-3, 3].map((x) => (
          <mesh key={`branch-${i}-${x}`} position={[x, i * FLOOR_H + 0.9, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.2, 0.2, D - 1, 14]} />
            <meshStandardMaterial color="#4f86ff" metalness={0.6} roughness={0.3} emissive="#11254d" />
          </mesh>
        )),
      )}
      {/* Vertical riser */}
      <mesh position={[-W / 2 + 1.2, FLOORS * FLOOR_H * 0.5, -D / 2 + 1.2]}>
        <cylinderGeometry args={[0.25, 0.25, FLOORS * FLOOR_H, 16]} />
        <meshStandardMaterial color="#22d3ee" metalness={0.6} roughness={0.3} emissive="#0e3a44" />
      </mesh>
    </group>
  )
}

function Architecture() {
  return (
    <group>
      {/* Translucent curtain-wall facade on the long sides */}
      {[-D / 2, D / 2].map((z) => (
        <mesh key={`facade-${z}`} position={[0, (FLOORS * FLOOR_H) / 2, z]}>
          <boxGeometry args={[W, FLOORS * FLOOR_H, 0.06]} />
          <meshStandardMaterial
            color="#7aa6ff"
            transparent
            opacity={0.16}
            metalness={0.2}
            roughness={0.1}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
      {[-W / 2, W / 2].map((x) => (
        <mesh key={`facade-x-${x}`} position={[x, (FLOORS * FLOOR_H) / 2, 0]}>
          <boxGeometry args={[0.06, FLOORS * FLOOR_H, D]} />
          <meshStandardMaterial color="#7aa6ff" transparent opacity={0.12} metalness={0.2} roughness={0.1} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  )
}

const severityColor: Record<string, string> = {
  Critical: '#ef4444',
  High: '#f59e0b',
  Medium: '#eab308',
  Low: '#22c55e',
}

function Marker({
  marker,
  selected,
  onSelect,
}: {
  marker: ClashMarker
  selected: boolean
  onSelect: (id: string) => void
}) {
  const ref = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const color = severityColor[marker.severity]

  useFrame(({ clock }) => {
    if (!ref.current) return
    const s = selected ? 1.35 : 1
    const pulse = 1 + Math.sin(clock.elapsedTime * 3) * (selected ? 0.18 : 0.08)
    ref.current.scale.setScalar(s * pulse)
  })

  return (
    <Float speed={2} rotationIntensity={0} floatIntensity={0.4}>
      <mesh
        ref={ref}
        position={marker.pos}
        onClick={(e) => {
          e.stopPropagation()
          onSelect(marker.id)
        }}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHovered(true)
          document.body.style.cursor = 'pointer'
        }}
        onPointerOut={() => {
          setHovered(false)
          document.body.style.cursor = 'auto'
        }}
      >
        <sphereGeometry args={[0.32, 24, 24]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={selected ? 1.4 : 0.7} />
        {(hovered || selected) && (
          <Html distanceFactor={18} position={[0, 0.6, 0]} center>
            <div className="pointer-events-none whitespace-nowrap rounded-md border border-white/10 bg-navy-950/90 px-2 py-1 text-[11px] font-semibold text-silver-100 shadow-lg">
              {marker.id} · {marker.severity}
            </div>
          </Html>
        )}
      </mesh>
    </Float>
  )
}

function SceneContent({
  layers,
  markers,
  selected,
  onSelect,
}: {
  layers: Layers
  markers: ClashMarker[]
  selected: string | null
  onSelect: (id: string) => void
}) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <hemisphereLight args={['#9bb4ff', '#0a1024', 0.5]} />
      <directionalLight position={[10, 18, 8]} intensity={1.1} castShadow shadow-mapSize={[1024, 1024]} />
      <directionalLight position={[-8, 6, -6]} intensity={0.4} color="#4f86ff" />

      <group position={[0, -FLOORS * FLOOR_H * 0, 0]}>
        {layers.structure && <Structure />}
        {layers.mep && <MEP />}
        {layers.architecture && <Architecture />}
        {layers.clashes &&
          markers.map((m) => (
            <Marker key={m.id} marker={m} selected={selected === m.id} onSelect={onSelect} />
          ))}
      </group>

      <Grid
        position={[0, -0.05, 0]}
        args={[40, 40]}
        cellSize={1}
        cellThickness={0.6}
        cellColor="#1d2c61"
        sectionSize={5}
        sectionThickness={1}
        sectionColor="#2f6bff"
        fadeDistance={45}
        infiniteGrid
      />
    </>
  )
}

export default function BIMScene({
  layers,
  markers,
  selected,
  onSelect,
  resetKey,
}: {
  layers: Layers
  markers: ClashMarker[]
  selected: string | null
  onSelect: (id: string) => void
  resetKey: number
}) {
  // Camera key forces OrbitControls to remount on "reset view".
  const camPos = useMemo<[number, number, number]>(() => [18, 14, 20], [])
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: camPos, fov: 42 }} className="!absolute inset-0">
      <color attach="background" args={['#070b18']} />
      <fog attach="fog" args={['#070b18', 35, 70]} />
      <Suspense fallback={null}>
        <SceneContent layers={layers} markers={markers} selected={selected} onSelect={onSelect} />
      </Suspense>
      <OrbitControls
        key={resetKey}
        makeDefault
        enableDamping
        dampingFactor={0.08}
        minDistance={8}
        maxDistance={55}
        maxPolarAngle={Math.PI / 2.05}
        target={[0, FLOORS * FLOOR_H * 0.45, 0]}
      />
    </Canvas>
  )
}
