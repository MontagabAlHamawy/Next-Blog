import Navpar from '@/components/navpar/Navpar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/footer'
import { ThemeContextProvider } from '../../context/ThemContext'
import ThemeProvider from '../../providers/ThemeProvider'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
            <body className={inter.className}>
              <ThemeContextProvider>
                <ThemeProvider>
                  <div className='container'>
                    <Navpar />
                    <div className='wrapper'>
                      {children}
                    </div>
                    <Footer />
                  </div>
                </ThemeProvider>
              </ThemeContextProvider>
            </body>
          </html>
          )
}
