import { useEffect, useRef, useState } from 'react'
import { useI18n } from '../i18n'
import { chatSuggestions } from '../data/mock'
import { chatAr } from '../data/ar'
import { StruxMark } from './Logo'
import { IconSparkle, IconSend, IconX } from './ui/Icons'

interface Msg {
  role: 'user' | 'ai'
  text: string
  typing?: boolean
}

function answerFor(q: string, list: { q: string; a: string }[], fallback: string): string {
  const lc = q.toLowerCase()
  const hit =
    list.find((s) => s.q.toLowerCase() === lc) ||
    list.find((s) => {
      const keys = s.q.split(/\s+/).filter((w) => w.length > 4)
      return keys.some((k) => q.includes(k))
    })
  return hit?.a ?? fallback
}

// Floating STRUX Copilot — available across the authenticated app.
export default function Copilot() {
  const { t, lang } = useI18n()
  const sugg = lang === 'ar' ? chatAr : chatSuggestions
  const fallback =
    lang === 'ar'
      ? 'على مستوى المحفظة: مؤشر جودة النماذج 92%، والامتثال السعودي 88%، مع تعرض مالي قدره 1.36 مليون ريال يتركّز في 14 مخاطرة حرجة. والإجراء الأعلى أثرًا هو معالجة التعارض CL-1090 في برج الرياض متعدد الاستخدامات. اسألني عن المخاطر أو التعارضات أو الامتثال أو الكميات، أو اطلب تقريرًا تنفيذيًا.'
      : 'Across the portfolio: BIM health is 92%, Saudi compliance 88%, with SAR 1.36M of financial exposure concentrated in 14 critical risks. The single highest-impact action is resolving clash CL-1090 on Riyadh Mixed-Use Tower. Ask me about risks, clashes, compliance, quantities or request an executive report.'
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Msg[]>([{ role: 'ai', text: t('cp.greeting') }])
  const endRef = useRef<HTMLDivElement>(null)

  // Refresh greeting language when the very first message is still the greeting.
  useEffect(() => {
    setMessages((m) => (m.length === 1 && m[0].role === 'ai' ? [{ role: 'ai', text: t('cp.greeting') }] : m))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t])

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  function send(text: string) {
    const q = text.trim()
    if (!q) return
    setInput('')
    setMessages((m) => [...m, { role: 'user', text: q }, { role: 'ai', text: '', typing: true }])
    setTimeout(() => {
      setMessages((m) => {
        const copy = [...m]
        copy[copy.length - 1] = { role: 'ai', text: answerFor(q, sugg, fallback) }
        return copy
      })
    }, 850)
  }

  return (
    <>
      {/* Launcher */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="group fixed bottom-5 end-5 z-50 flex items-center gap-2 rounded-full border border-electric-500/40 bg-navy-900/90 py-2 pe-4 ps-2 shadow-glow backdrop-blur transition hover:bg-navy-800"
          title={t('cp.open')}
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-electric-500/15">
            <span className="absolute inset-0 animate-pulse-ring rounded-full bg-electric-500/30" />
            <StruxMark size={22} />
          </span>
          <span className="text-sm font-semibold text-silver-100">{t('cp.name')}</span>
        </button>
      )}

      {/* Panel */}
      {open && (
        <div className="fixed bottom-5 end-5 z-50 flex h-[540px] w-[min(92vw,380px)] animate-fadeup flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy-900/95 shadow-card backdrop-blur">
          <div className="flex items-center gap-3 border-b border-white/5 bg-navy-850/80 p-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-electric-500/15">
              <StruxMark size={22} />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-silver-100">
                {t('cp.name')}
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </div>
              <div className="truncate text-[11px] text-silver-400">{t('cp.subtitle')}</div>
            </div>
            <button onClick={() => setOpen(false)} className="rounded-lg p-1.5 text-silver-400 hover:bg-white/5 hover:text-silver-100">
              <IconX className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex gap-2 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                    m.role === 'user' ? 'bg-electric-500 text-white' : 'bg-electric-500/15 text-electric-300'
                  }`}
                >
                  {m.role === 'user' ? '·' : <IconSparkle className="h-3.5 w-3.5" />}
                </div>
                <div
                  className={`max-w-[82%] rounded-2xl px-3 py-2 text-[13px] leading-relaxed ${
                    m.role === 'user'
                      ? 'rounded-tr-sm bg-electric-500 text-white'
                      : 'rounded-tl-sm border border-white/5 bg-navy-950/50 text-silver-200'
                  }`}
                >
                  {m.typing ? (
                    <span className="flex gap-1 py-1">
                      {[0, 1, 2].map((d) => (
                        <span
                          key={d}
                          className="h-1.5 w-1.5 rounded-full bg-silver-400"
                          style={{ animation: 'pulseline 1s infinite', animationDelay: `${d * 0.15}s` }}
                        />
                      ))}
                    </span>
                  ) : (
                    <span className="whitespace-pre-line">{m.text}</span>
                  )}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* Suggestions */}
          <div className="flex flex-wrap gap-1.5 border-t border-white/5 p-2.5">
            {sugg.slice(0, 3).map((s) => (
              <button
                key={s.q}
                onClick={() => send(s.q)}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-silver-300 transition hover:border-electric-500/30 hover:text-silver-100"
              >
                {s.q}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              send(input)
            }}
            className="flex items-center gap-2 border-t border-white/5 p-2.5"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t('cp.placeholder')}
              className="strux-input py-2 text-sm"
            />
            <button type="submit" className="strux-btn-primary px-3 py-2">
              <IconSend className="h-4 w-4 rtl:-scale-x-100" />
            </button>
          </form>
        </div>
      )}
    </>
  )
}
