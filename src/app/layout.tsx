
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { AnimatePresence } from 'framer-motion'
import { Toaster } from 'react-hot-toast'

const poppins = Poppins({ subsets: ['latin'] ,weight:['400','700',]})


export const metadata: Metadata = {
  title: "A Better Home Services || There's a meaning in cleaning",
  description: "Discover superior cleaning services with Better Home Services, providing meticulous attention to detail for a pristine and comfortable living environment.",
  keywords:['Professional Cleaning','Home Care', 'Deep Cleaning','House Maintenance']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Toaster
        toastOptions={{
          style: {
            backgroundColor:"#1F1F1F",
            color:"#FFFFFF"
          },
          duration:2500
        }}
         position='top-center'/>
        {children}
        </body>
    </html>
  )
}
