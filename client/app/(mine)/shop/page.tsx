
import Shop from '@/features/Shop/components/Shop'
import { Suspense } from 'react'

export default function page () {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Shop />
    </Suspense>
  )
}
