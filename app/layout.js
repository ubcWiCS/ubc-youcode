import { Inter } from 'next/font/google'
import './globals.css'
//import 'tailwindcss/tailwind.css';
import Navbar from '@/components/Navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'youCode',
  description: 'youCode',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {children}
        </body>
    </html>
  )
}

