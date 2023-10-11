import Navpar from '@/components/navpar/Navpar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemeContextProvider } from '../../context/ThemContext'
import ThemeProvider from '../../providers/ThemeProvider'
import Head from 'next/head'
import Screen from '@/components/screen/Screen'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
  icon:'/coding.png'
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
