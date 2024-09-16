import './globals.css'
import { Analytics } from "@vercel/analytics/react"
import { Inter, Exo_2, Oswald } from 'next/font/google'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { ThemeProvider } from '@/components/ThemeProvider'

const oswald = Oswald({ subsets: ['latin'], variable: "--font-subtitle" });
const inter = Inter({ subsets: ['latin'] });
const exo2 = Exo_2({ subsets: ['latin'], variable: "--font-title" });

export const metadata: Metadata = {
  title: {
    template: '%s | Jaime FM',
    default: 'Jaime FM | Programación web'
  },
  description: 'Desarrollo de aplicaciones web utilizando las últimas tecnologías. Creo contenido sobre Programación y Desarrollo Web',
  openGraph: {
    title: {
      template: '%s | Jaime FM',
      default: 'Jaime FM | Programación web'
    },
    description: 'Desarrollo de aplicaciones web utilizando las últimas tecnologías. Creo contenido sobre Programación y Desarrollo Web'
  },
  metadataBase: new URL('https://jaimefm.dev'),
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="es" suppressHydrationWarning className='scroll-smooth'>
      <body className={`${inter.className} ${exo2.variable} ${oswald.variable} bg-blue-bayoux-50 dark:bg-slate-800 text-gray-600 dark:text-gray-300`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
