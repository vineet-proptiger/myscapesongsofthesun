import './globals.css'
import { Open_Sans, Montserrat, Cormorant_Garamond } from 'next/font/google'
import { CITY_DISPLAY } from '../lib/config'
import localFont from 'next/font/local'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const nephilm = localFont({
  src: '../public/fonts/Nephilm.otf',
  variable: '--font-nephilm',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://myscapesongsofthesun.in'),
  title: 'Songs of the Sun | Premium 2 & 3 BHK Homes in Financial District, Hyderabad',
  description: "Songs of the Sun — South Hyderabad's premier luxury high-rise in Financial District. Premium 2 & 3 BHK residences starting from ₹80 Lacs. Designed for those who demand the extraordinary. MAHARERA: TBD.",
  openGraph: {
    title: 'Songs of the Sun | Premium 2 & 3 BHK Homes in Financial District, Hyderabad',
    description: "South Hyderabad's premier luxury high-rise in Financial District. Premium 2 & 3 BHK residences starting from ₹80 Lacs.",
    url: 'https://myscapesongsofthesun.in',
    siteName: 'Myscape Songs of the Sun',
    images: [
      {
        url: '/images/hero/banner1.webp',
        width: 1200,
        height: 630,
        alt: 'Songs of the Sun Hyderabad - Premium Apartments',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Songs of the Sun | Premium 2 & 3 BHK Homes in Financial District, Hyderabad',
    description: "South Hyderabad's premier luxury high-rise in Financial District. Premium 2 & 3 BHK residences starting from ₹80 Lacs.",
    images: ['/images/hero/banner1.webp'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <head>
        <Script
          id="json-ld-article"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://myscapesongsofthesun.in/"
              },
              "headline": "Songs of the Sun | Premium 2 & 3 BHK Homes in Financial District, Hyderabad",
              "description": "Songs of the Sun, South Hyderabad's premier luxury high-rise in Financial District. Premium 2 & 3 BHK residences starting from ₹80 Lacs. MAHARERA: TBD.",
              "image": "https://myscapesongsofthesun.in/_next/image?url=%2Fimages%2Fhero%2Fbanner1.webp&w=1200&q=75",
              "author": {
                "@type": "Organization",
                "name": "Proptiger Marketing Services Pvt Ltd",
                "url": "https://www.proptiger.com/hyderabad/financial-district/myscape-songs-of-the-sun-3478881"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Proptiger",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.proptiger.com/"
                }
              },
              "datePublished": "2026-06-10"
            })
          }}
        />
      </head>
      <body className={`${openSans.variable} ${montserrat.variable} ${cormorant.variable} ${nephilm.variable} font-sans text-dark antialiased`}>
        <Script id="gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
        </Script>
        {children}
      </body>
    </html>
  )
}
