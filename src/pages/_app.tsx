import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'], variable: "--font-outfit" })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${outfit.variable}`}>
      <Component {...pageProps} />
    </div>
  )
}
