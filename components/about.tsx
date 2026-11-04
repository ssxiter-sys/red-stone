'use client'

import { Reveal } from './reveal'
import { useLanguage } from './language-provider'

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-blood-bright">
              {t.about.label}
            </p>
            <h2 className="font-display text-4xl leading-tight uppercase text-white sm:text-6xl">
              {t.about.titleA}
              <br />
              <span className="text-blood-bright">{t.about.titleB}</span>
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/60 sm:text-base">
              {t.about.body}
            </p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/60 sm:text-base">
              {t.about.body2}
            </p>
          </Reveal>
          <div className="grid gap-4">
            {t.about.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 120}>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-950 px-6 py-5 transition-colors hover:border-blood/50">
                  <span className="font-display text-2xl uppercase text-white sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="text-end text-xs uppercase tracking-[0.2em] text-white/50">
                    {stat.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
