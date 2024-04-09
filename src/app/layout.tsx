import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'COPY',
  description: 'juk.kg',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
