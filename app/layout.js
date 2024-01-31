import { Inter } from 'next/font/google'
import './globals.css'
import SideBar from '@/components/SideBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tasky',
  description: 'A task management dashboard for TeachMateAI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='max-w-10xl mx-auto p-8 h-full bg-[#071527]'>
            {children}
        </main>
      </body>
    </html>
  )
}
