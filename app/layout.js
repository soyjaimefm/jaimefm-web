import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jaime FM',
  description: 'Jaime FM web',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <div className='container mx-auto'>
          {children}
        </div>
        </body>
    </html>
  )
}
