import { categorysService } from '@/components/services/categorys.service'
import { CategoryProductsType } from '@/types/user'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export function useFilter () {
  const [Categorys, setcategorys] = useState<CategoryProductsType[]>([])
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  const minPrice = searchParams.get('min_price')
  const maxPrice = searchParams.get('max_price')

  const router = useRouter()
  const handleCategory = (value: string) => {
    const params = new URLSearchParams(searchParams)

    params.set('category', value)

    params.set('page', '1')

    router.push(`${pathname}?${params.toString()}`)
  }
  const removeFilter = (key: string) => {
    const params = new URLSearchParams(searchParams)
    params.delete(key)
    router.push(`${pathname}?${params.toString()}`)
  }
  useEffect(() => {
    categorysService(setcategorys)
  }, [])

  const MIN = 0
  const MAX = 48000000

  const [minPriceinp, setMinPriceinp] = useState(Number(minPrice) || 0)

  const [maxPriceinp, setMaxPriceinp] = useState(Number(maxPrice) || 48000000)
  const updatePrice = (newValues: number[]) => {
    const params = new URLSearchParams(searchParams)

    params.set('min_price', String(newValues[0]))

    params.set('max_price', String(newValues[1]))

    params.set('page', '1')

    const query = params.toString()

    router.replace(`${pathname}?${query}`)
  }
  const handleDeleteFilterPrice = () => {
    const params = new URLSearchParams(searchParams)
    params.delete('max_price')
    params.delete('min_price')
    router.push(`${pathname}?${params.toString()}`)
    setMinPriceinp(0)
    setMaxPriceinp(48000000)
  }
  return {
    Categorys,
    category,
    minPrice,
    maxPrice,
    handleCategory,
    removeFilter,
    MIN,
    MAX,
    minPriceinp,
    setMinPriceinp,
    maxPriceinp,
    setMaxPriceinp,
    updatePrice,
    handleDeleteFilterPrice
  }
}
