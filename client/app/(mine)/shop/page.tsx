
import Shop from '@/Folders/Shop/Shop'
import { Suspense } from 'react'

export default function page () {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Shop />
    </Suspense>
  )
}
