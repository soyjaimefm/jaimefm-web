import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jaime FM | Desarrollador de software y programador web',
  description: 'Trabajo en proyectos de desarrollo de software y web',
}

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="es" className=''>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
