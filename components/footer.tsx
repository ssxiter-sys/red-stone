'use client'

import Image from 'next/image'
import { AtSign, Hash, Music2 } from 'lucide-react'
import { useLanguage } from './language-provider'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <a href="#top" className="flex items-center gap-3">
            <span className="relative size-12 overflow-hidden rounded-xl ring-1 ring-white/20">
              <Image
                src="/images/logo.png"
                alt="REDSTONE logo"
                fill
                className="object-cover"
                sizes="3rem"
              />
            </span>
            <span className="font-display text-2xl tracking-wider text-white">
              REDSTONE
            </span>
          </a>
          <p className="max-w-sm text-sm text-white/50">{t.footer.tagline}</p>
          <div className="flex items-center gap-4">
            {[
              { icon: AtSign, label: 'Instagram' },
              { icon: Hash, label: 'Facebook' },
              { icon: Music2, label: 'TikTok' },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid size-11 place-items-center rounded-full border border-white/15 text-white/60 transition-all hover:border-blood hover:bg-blood hover:text-white"
              >
                <Icon className="size-4" aria-hidden />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.2em] text-white/40 sm:flex-row">
          <p>{t.footer.rights}</p>
          <p>{t.footer.motto}</p>
        </div>
      </div>
    </footer>
  )
}
