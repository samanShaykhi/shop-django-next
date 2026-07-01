import type { Metadata } from 'next'
import './globals.css'
import StoreProvider from '@/Folders/store/StoreProvider'
import AuthInitializer from '@/Folders/AuthInitializer'
import NextTopLoader from 'nextjs-toploader'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
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
      <body>
        <StoreProvider>
          <AuthInitializer />
          <NextTopLoader showSpinner={false} />
          {children}
          <ToastContainer />
        </StoreProvider>
      </body>
    </html>
  )
}
