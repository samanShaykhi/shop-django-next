// app/(dashboard)/layout.tsx
import Footer from '@/components/common/Footer'
import Header from '@/features/Header/Components/Header'
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
