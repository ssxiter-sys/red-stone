'use client'

import Image from 'next/image'
import { Reveal } from './reveal'
import { useLanguage } from './language-provider'

const shots = [
  { image: '/images/baggy-jeans.png', alt: 'Baggy denim styled with white sneakers', offset: true },
  { image: '/images/grand-tees-duo.png', alt: 'Grand tees in white and black', offset: false },
  { image: '/images/red-hoodie-detail.png', alt: 'SACRE hoodie flame sleeve detail', offset: true },
  { image: '/images/sweatpants.png', alt: 'Sweatpants color range on the rack', offset: false },
]

export function Lookbook() {
  const { t } = useLanguage()

  return (
    <section
      id="lookbook"
      className="relative overflow-hidden border-y border-white/10 bg-zinc-950 py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-blood/15 blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.4em] text-blood-bright">
            {t.lookbook.label}
          </p>
          <h2 className="mb-16 text-center font-display text-4xl uppercase text-white sm:text-6xl">
            {t.lookbook.headingA}{' '}
            <span className="text-stroke">{t.lookbook.headingB}</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {shots.map((shot, i) => (
            <Reveal key={shot.image} className={shot.offset ? 'md:mt-12' : undefined} delay={i * 100}>
              <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-white/10">
                <Image
                  src={shot.image}
                  alt={shot.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
