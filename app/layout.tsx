import './globals.css'
import Sidebar from "@/components/Sidebar";
import ModalProvider from "@/providers/ModalProvider";
import SupabaseProvider from "@/providers/SupabaseProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import UserProvider from "@/providers/UserProvider";
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
      <ToasterProvider/>
      <SupabaseProvider>
          <UserProvider>
              <ModalProvider/>
              <Sidebar>
                  {children}
              </Sidebar>
          </UserProvider>
      </SupabaseProvider>

      </body>
    </html>
  )
}
