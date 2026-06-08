import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { translate, type Lang } from './dictionary'

interface I18nContextValue {
  lang: Lang
  dir: 'ltr' | 'rtl'
  t: (key: string) => string
  setLang: (l: Lang) => void
  toggle: () => void
}

const I18nContext = createContext<I18nContextValue | null>(null)

const STORAGE_KEY = 'strux.lang'

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
    return saved === 'ar' ? 'ar' : 'en'
  })

  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  // Reflect language + direction on the document root so RTL + fonts apply globally.
  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = dir
    document.documentElement.classList.toggle('font-arabic', lang === 'ar')
    localStorage.setItem(STORAGE_KEY, lang)
  }, [lang, dir])

  const setLang = (l: Lang) => setLangState(l)
  const toggle = () => setLangState((l) => (l === 'ar' ? 'en' : 'ar'))
  const t = (key: string) => translate(key, lang)

  return <I18nContext.Provider value={{ lang, dir, t, setLang, toggle }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
