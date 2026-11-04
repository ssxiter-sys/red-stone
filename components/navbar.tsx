'use client'

import Image from 'next/image'
import { Languages } from 'lucide-react'
import { useLanguage } from './language-provider'

export function Navbar() {
  const { t, lang, toggle } = useLanguage()

  const links = [
    { label: t.nav.collection, href: '#collection' },
    { label: t.nav.lookbook, href: '#lookbook' },
    { label: t.nav.about, href: '#about' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="relative size-9 overflow-hidden rounded-lg ring-1 ring-white/20">
            <Image
              src="/images/logo.png"
              alt="REDSTONE logo"
              fill
              className="object-cover"
              sizes="2.25rem"
            />
          </span>
          <span className="font-display text-xl tracking-wider text-white">
            REDSTONE
          </span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-medium uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-blood-bright"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label={lang === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}
            className="flex items-center gap-1.5 rounded-full border border-white/20 px-4 py-2 text-xs font-bold text-white/80 transition-colors hover:border-blood hover:text-white"
          >
            <Languages className="size-3.5" aria-hidden />
            {lang === 'en' ? 'عربي' : 'EN'}
          </button>
          <a
            href="#collection"
            className="hidden rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.15em] text-black transition-colors hover:bg-blood hover:text-white sm:block"
          >
            {t.nav.shopNow}
          </a>
        </div>
      </nav>
    </header>
  )
}
