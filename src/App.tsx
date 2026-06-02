import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import { Splash } from './components/Loader'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Executive from './pages/Executive'
import Investor from './pages/Investor'
import Projects from './pages/Projects'
import Upload from './pages/Upload'
import Analysis from './pages/Analysis'
import Viewer from './pages/Viewer'
import Settings from './pages/Settings'

export default function App() {
  const [booting, setBooting] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const fadeAt = reduce ? 200 : 1200
    const doneAt = reduce ? 400 : 1700
    const t1 = setTimeout(() => setFading(true), fadeAt)
    const t2 = setTimeout(() => setBooting(false), doneAt)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <>
      {booting && (
        <div className={`transition-opacity duration-500 ${fading ? 'opacity-0' : 'opacity-100'}`}>
          <Splash />
        </div>
      )}
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/app" element={<Layout />}>
        <Route index element={<Navigate to="/app/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="executive" element={<Executive />} />
        <Route path="investor" element={<Investor />} />
        <Route path="projects" element={<Projects />} />
        <Route path="upload" element={<Upload />} />
        <Route path="analysis" element={<Analysis />} />
        <Route path="viewer" element={<Viewer />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
