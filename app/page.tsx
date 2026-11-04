import { LanguageProvider } from '@/components/language-provider'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { Collection } from '@/components/collection'
import { Lookbook } from '@/components/lookbook'
import { About } from '@/components/about'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <LanguageProvider>
      <main className="bg-black font-sans text-white">
        <Navbar />
        <Hero />
        <Marquee />
        <Collection />
        <Lookbook />
        <About />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
