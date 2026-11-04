'use client'

import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { useLanguage } from './language-provider'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col overflow-hidden bg-black pt-16"
    >
      {/* luxury marble background */}
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
      </div>

      {/* ambient glows */}
      <div
        aria-hidden
        className="animate-pulse-glow absolute -top-40 left-1/2 h-[34rem] w-[54rem] -translate-x-1/2 rounded-full bg-blood/25 blur-[140px]"
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blood/15 blur-[120px]"
      />
      {/* grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px]"
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-5 py-16 sm:px-8">
        {/* giant background word */}
        <span
          aria-hidden
          className="text-stroke pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[22vw] leading-none whitespace-nowrap opacity-40 select-none"
        >
          REDSTONE
        </span>

        {/* floating product */}
        <div className="animate-float relative z-10 w-52 sm:w-64 md:w-72">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_40px_120px_-20px_rgba(225,29,46,0.45)] ring-1 ring-white/20">
            <Image
              src="/images/red-hoodie.png"
              alt="REDSTONE red SACRE hoodie with white puff print"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 16rem, 24rem"
            />
          </div>
          <div className="animate-float-slow absolute -right-6 -bottom-6 z-20 w-28 rotate-6 overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/20 sm:w-36">
            <div className="relative aspect-square">
              <Image
                src="/images/red-hoodie-detail.png"
                alt="Close-up of the REDSTONE hoodie sleeve flame print"
                fill
                className="object-cover"
                sizes="9rem"
              />
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-blood-bright">
            {t.hero.drop}
          </p>
          <h1 className="font-display text-4xl leading-[0.95] text-white uppercase sm:text-6xl md:text-7xl">
            {t.hero.titleTop}
            <br />
            <span className="text-blood-bright">{t.hero.titleBottom}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
            {t.hero.description}
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#collection"
              className="group rounded-full bg-blood px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-blood-bright hover:shadow-[0_0_40px_rgba(225,29,46,0.5)]"
            >
              {t.hero.explore}
            </a>
            <a
              href="#lookbook"
              className="rounded-full border border-white/25 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white/80 transition-colors hover:border-white hover:text-white"
            >
              {t.hero.lookbook}
            </a>
          </div>
        </div>
      </div>

      <a
        href="#collection"
        aria-label={t.hero.scroll}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/40 transition-colors hover:text-white"
      >
        <ArrowDown className="size-5 animate-bounce" />
      </a>
    </section>
  )
}
