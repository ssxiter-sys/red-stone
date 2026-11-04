import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Anton, Space_Grotesk, Cairo } from 'next/font/google'
import './globals.css'

const display = Anton({ subsets: ['latin'], weight: '400', variable: '--font-display' })
const sans = Space_Grotesk({ subsets: ['latin'], variable: '--font-sans' })
const arabic = Cairo({ subsets: ['arabic'], variable: '--font-arabic' })

const siteUrl = 'https://red-stone.ssxiter.workers.dev'
const shareImage = `${siteUrl}/images/whatsapp-preview.jpg`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'REDSTONE | Clothing Store',
  description:
    'REDSTONE — Wear Your Identity. اكتشف أحدث قطع الملابس والستريت وير من REDSTONE.',
  icons: {
    icon: [
      { url: '/images/logo.png', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/images/logo.png',
  },
  openGraph: {
    title: 'REDSTONE | Clothing Store',
    description: 'WEAR YOUR IDENTITY. اكتشف مجموعة REDSTONE الجديدة.',
    url: siteUrl,
    siteName: 'REDSTONE',
    images: [
      {
        url: shareImage,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'REDSTONE — Clothing Store Logo',
      },
    ],
    locale: 'ar_EG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'REDSTONE | Clothing Store',
    description: 'WEAR YOUR IDENTITY. اكتشف مجموعة REDSTONE الجديدة.',
    images: [shareImage],
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
