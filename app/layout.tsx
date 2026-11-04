import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Anton, Space_Grotesk, Cairo } from 'next/font/google'
import './globals.css'

const display = Anton({ subsets: ['latin'], weight: '400', variable: '--font-display' })
const sans = Space_Grotesk({ subsets: ['latin'], variable: '--font-sans' })
const arabic = Cairo({ subsets: ['arabic'], variable: '--font-arabic' })

export const metadata: Metadata = {
  title: 'REDSTONE — Streetwear Brand',
  description:
    'REDSTONE is a streetwear label built on heavy fabrics, bold graphics and zero compromise. Hoodies, tees, denim and essentials.',
  generator: 'v0.app',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: 'REDSTONE — Streetwear Brand',
    description:
      'Heavy fabrics. Loud graphics. Zero compromise. REDSTONE is streetwear cut for the ones who move different.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'REDSTONE — luxury streetwear brand',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'REDSTONE — Streetwear Brand',
    description:
      'Heavy fabrics. Loud graphics. Zero compromise. REDSTONE is streetwear cut for the ones who move different.',
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${display.variable} ${sans.variable} ${arabic.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
