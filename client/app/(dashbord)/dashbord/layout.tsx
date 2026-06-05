import DashbordLayout from '@/Folders/Dashbord/DashbordLayout'
import { Metadata } from 'next'

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
    <div>
      <DashbordLayout>{children}</DashbordLayout>
    </div>
  )
}
