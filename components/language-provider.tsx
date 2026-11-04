'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { dictionary, type Lang } from '@/lib/i18n'

const LanguageContext = createContext<{
  lang: Lang
  toggle: () => void
  t: (typeof dictionary)['en']
}>({ lang: 'en', toggle: () => {}, t: dictionary.en })

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  return (
    <LanguageContext.Provider
      value={{
        lang,
        toggle: () => setLang((l) => (l === 'en' ? 'ar' : 'en')),
        t: dictionary[lang],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
