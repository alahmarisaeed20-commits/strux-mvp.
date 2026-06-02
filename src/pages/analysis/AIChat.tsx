import { useEffect, useRef, useState } from 'react'
import { Card, Badge } from '../../components/ui/primitives'
import { IconSend, IconSparkle, IconBolt } from '../../components/ui/Icons'
import { StruxGlyph } from '../../components/Brand'
import { useI18n } from '../../i18n'
import { chatSuggestions } from '../../data/mock'

interface Msg {
  role: 'user' | 'ai'
  text: string
  typing?: boolean
}

// Find the best canned answer for a free-typed question (keyword match),
// falling back to a sensible default.
function answerFor(q: string): string {
  const lc = q.toLowerCase()
  const hit =
    chatSuggestions.find((s) => s.q.toLowerCase() === lc) ||
    chatSuggestions.find((s) => {
      const keys = s.q.toLowerCase().split(/\s+/).filter((w) => w.length > 4)
      return keys.some((k) => lc.includes(k))
    })
  return (
    hit?.a ??
    `Based on the current analysis of Riyadh Mixed-Use Tower: the model is at 94% BIM health with 72 open issues (11 high-risk) and 91% Saudi compliance. The most pressing items are clash CL-1090 and compliance violation CV-01. Ask me about clashes, compliance, quantities, or request an executive report.`
  )
}

export default function AIChat() {
  const { t } = useI18n()
  const [messages, setMessages] = useState<Msg[]>([{ role: 'ai', text: t('chat.greeting') }])
  const [input, setInput] = useState('')
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  function send(text: string) {
    const q = text.trim()
    if (!q) return
    setInput('')
    setMessages((m) => [...m, { role: 'user', text: q }, { role: 'ai', text: '', typing: true }])
    setTimeout(() => {
      setMessages((m) => {
        const copy = [...m]
        copy[copy.length - 1] = { role: 'ai', text: answerFor(q) }
        return copy
      })
    }, 900)
  }

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
      {/* Suggested prompts */}
      <Card className="lg:col-span-1">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-silver-100">
          <IconBolt className="h-4 w-4 text-electric-300" /> {t('chat.suggested')}
        </h3>
        <p className="mt-0.5 text-xs text-silver-400">{t('chat.tap')}</p>
        <div className="mt-3 space-y-2">
          {chatSuggestions.map((s) => (
            <button
              key={s.q}
              onClick={() => send(s.q)}
              className="w-full rounded-lg border border-white/5 bg-navy-950/40 p-2.5 text-left text-xs font-medium text-silver-300 transition hover:border-electric-500/30 hover:text-silver-100"
            >
              {s.q}
            </button>
          ))}
        </div>
      </Card>

      {/* Chat window */}
      <Card className="flex h-[620px] flex-col p-0 lg:col-span-3">
        <div className="flex items-center gap-3 border-b border-white/5 p-4">
          <StruxGlyph size={32} />
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-silver-100">
              {t('chat.title')} <Badge tone="green">{t('chat.online')}</Badge>
            </div>
            <div className="text-xs text-silver-400">{t('chat.context')}</div>
          </div>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto p-4">
          {messages.map((m, i) => (
            <div key={i} className={`flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                  m.role === 'user' ? 'bg-electric-500 text-white' : 'bg-electric-500/15 text-electric-300'
                }`}
              >
                {m.role === 'user' ? 'You' : <IconSparkle className="h-4 w-4" />}
              </div>
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
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
                        className="h-2 w-2 rounded-full bg-silver-400"
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

        <form
          onSubmit={(e) => {
            e.preventDefault()
            send(input)
          }}
          className="flex items-center gap-2 border-t border-white/5 p-3"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t('chat.placeholder')}
            className="strux-input"
          />
          <button type="submit" className="strux-btn-primary px-3.5">
            <IconSend className="h-4 w-4" />
          </button>
        </form>
      </Card>
    </div>
  )
}
