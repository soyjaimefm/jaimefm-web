import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jaime FM',
  description: 'Jaime FM web',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className=''>
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
