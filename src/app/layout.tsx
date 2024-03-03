import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import './globals.css'
import Footer from '../components/footer'
import Header from '../components/header/header'
import Whatsapp from '../components/whatsapp'
import "bootstrap-icons/font/bootstrap-icons.css";

const playFair = Playfair_Display({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Restaurante de Comida',
  description: 'Disfruta de los mejores platos criollos. También contamos con desayunos. Ademas disfruta de cervezas y deliciosos tragos autor.',
  icons: 'public/favicon.ico',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={playFair.className}>
        <Header />
        <main id="root" >
          {children}
        </main>
        <Footer />
        <Whatsapp />
      </body>
    </html>
  )
}
