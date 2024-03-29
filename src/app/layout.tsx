import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import './globals.css'
import localFont from '@next/font/local'

const gilroy = localFont({
  src: [
    {
      path: '../../public/fonts/Gilroy-Light.otf',
      weight: '400'
    },
    {
      path: '../../public/fonts/Gilroy-SemiBold.woff',
      weight: '600'
    },
    {
      path: '../../public/fonts/Gilroy-ExtraBold.otf',
      weight: '800'
    }
  ],
  variable: '--font-gilroy'
})

export const metadata: Metadata = {
  title: 'heartsync',
  description: 'heartsync video calls for couples',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={gilroy.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
