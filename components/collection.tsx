'use client'

import Image from 'next/image'
import { ArrowUpLeft, ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'
import { useLanguage } from './language-provider'

const productImages = [
  {
    image: '/images/red-hoodie.png',
    alt: 'Red SACRE hoodie with white puff print and flame sleeves',
  },
  {
    image: '/images/black-grand-tee.png',
    alt: 'Black oversized Grand tee with washed print and contrast collar',
  },
  {
    image: '/images/grand-tees-duo.png',
    alt: 'White and black Grand tees on hangers',
  },
  {
    image: '/images/baggy-jeans.png',
    alt: 'Light-wash baggy fit denim jeans',
  },
  {
    image: '/images/striped-tees.png',
    alt: 'Striped essential tees in white, black and brown',
  },
  {
    image: '/images/sweatpants.png',
    alt: 'Sweatpants in brown, beige, black and grey',
  },
]

export function Collection() {
  const { t, lang } = useLanguage()
  const Arrow = lang === 'ar' ? ArrowUpLeft : ArrowUpRight

  return (
    <section id="collection" className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-blood-bright">
                {t.collection.label}
              </p>
              <h2 className="font-display text-4xl uppercase text-white sm:text-6xl">
                {t.collection.heading}
              </h2>
            </div>
            <a
              href="#"
              className="group flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
            >
              {t.collection.viewAll}
              <Arrow className="size-4 transition-transform group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.products.map((product, i) => (
            <Reveal key={product.name} delay={(i % 3) * 100}>
              <article className="group relative overflow-hidden rounded-2xl bg-zinc-950 ring-1 ring-white/10 transition-all duration-500 hover:ring-blood/60">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={productImages[i].image}
                    alt={productImages[i].alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  {product.tag ? (
                    <span className="absolute top-4 start-4 rounded-full bg-blood px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                      {product.tag}
                    </span>
                  ) : null}
                  <span className="absolute end-4 bottom-4 grid size-11 translate-y-3 place-items-center rounded-full bg-white text-black opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <Arrow className="size-5" aria-hidden />
                  </span>
                </div>
                <div className="flex items-center justify-between p-5">
                  <div>
                    <h3 className="font-display text-lg uppercase tracking-wide text-white">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.15em] text-white/50">
                      {product.category}
                    </p>
                  </div>
                  <p className="text-sm font-bold text-blood-bright">
                    {product.price}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
