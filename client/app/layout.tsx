import type { Metadata } from 'next'
import './globals.css'
import StoreProvider from '@/Folders/store/StoreProvider'
import AuthInitializer from '@/Folders/AuthInitializer'



export const metadata: Metadata = {
  title: 'فروشگاه آنلاین',
  description: 'انواع اجناس با بهترین قیمت'
}
export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='fa' dir='rtl'>
      <StoreProvider>
        <AuthInitializer />
        <body>{children}</body>
      </StoreProvider>
    </html>
  )
}
