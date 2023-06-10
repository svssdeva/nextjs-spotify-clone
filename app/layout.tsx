import './globals.css'
import Sidebar from "@/components/Sidebar";
import { Figtree } from 'next/font/google'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify Deva',
  description: 'Listen to music !!!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
      <Sidebar>
        {children}
      </Sidebar>
      </body>
    </html>
  )
}
