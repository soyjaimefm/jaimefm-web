import './globals.css'
import { Inter, Exo_2, Bebas_Neue } from 'next/font/google'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] });
const exo2 = Exo_2({subsets: ['latin'], variable: "--font-title"});
const bebasNeue = Bebas_Neue({subsets: ['latin'], variable: "--font-subtitle", weight: "400"});

export const metadata: Metadata = {
  title: 'Jaime FM | Desarrollador de software y programador web',
  description: 'Trabajo en proyectos de desarrollo de software y web',
}

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} ${exo2.variable} ${bebasNeue.variable} bg-blue-bayoux-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
