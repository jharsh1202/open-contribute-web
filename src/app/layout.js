import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
import ThemeSwitcher from "../components/globals/ThemeSwitch"
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react';
 
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OpenContribute',
  description: 'Empowering Impactful Giving: for a better Tomorrow',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* The Button Component for Dark Mode toggle */}
      {/* <ThemeSwitcher/> */}

      {/* <!-- Google tag (gtag.js) --> */}
      <Script strategy="lazyOnload" async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}/>
      <Script strategy="lazyOnload" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>
      <Head>
        <link rel="icon" href="https://raw.githubusercontent.com/NotSooShariff/bif-frontend/main/src/assets/favicon.ico" />

        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="OpenContribute" />
        <meta name="description" content="At OpenContribute, we facilitate transaparent contributions and shape futures. Join us in creating a brighter tomorrow through transparent donation platforms committed to making a positive impact!" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://opencontribute.com" />
        <meta property="og:title" content="OpenContribute" />
        <meta property="og:description" content="At OpenContribute, we facilitate transaparent contributions and shape futures. Join us in creating a brighter tomorrow through transparent donation platforms committed to making a positive impact!" />
        <meta property="og:image" content="https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/metaimg.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://opencontribute.com" />
        <meta property="twitter:title" content="OpenContribute" />
        <meta property="twitter:description" content="At OpenContribute, we facilitate transaparent contributions and shape futures. Join us in creating a brighter tomorrow through transparent donation platforms committed to making a positive impact!" />
        <meta property="twitter:image" content="https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/metaimg.jpg" />
      </Head>
      <body className={inter.className}>
        {children}
      <Analytics/>
      </body>

    </html>
  )
}
