'use client'

import { Flame } from 'lucide-react'
import { useLanguage } from './language-provider'

function Row({ words, reverse = false }: { words: readonly string[]; reverse?: boolean }) {
  const items = [...words, ...words, ...words]
  return (
    <div className="flex overflow-hidden">
      <div
        className={`flex shrink-0 items-center gap-8 pr-8 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        {[...items, ...items].map((word, i) => (
          <span key={i} className="flex items-center gap-8">
            <span
              className={`font-display text-4xl uppercase sm:text-6xl ${
                reverse ? 'text-stroke-blood' : 'text-white'
              }`}
            >
              {word}
            </span>
            <Flame
              aria-hidden
              className={`size-6 shrink-0 sm:size-8 ${
                reverse ? 'text-blood' : 'text-blood-bright'
              }`}
            />
          </span>
        ))}
      </div>
    </div>
  )
}

export function Marquee() {
  const { t } = useLanguage()
  return (
    <section
      aria-label="Brand marquee"
      className="border-y border-white/10 bg-zinc-950 py-6"
    >
      <div className="-rotate-1 space-y-4">
        <Row words={t.marquee} />
        <Row words={t.marquee} reverse />
      </div>
    </section>
  )
}
