// app/(dashboard)/layout.tsx
import Footer from '@/Folders/Footer/Footer'
import Header from '@/Folders/Header/Header'
import { ReactNode } from 'react'

type MainLayoutLayoutProps = {
  children: ReactNode
}

export default function MainLayout ({ children }: MainLayoutLayoutProps) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
