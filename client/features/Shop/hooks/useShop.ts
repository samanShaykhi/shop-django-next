import { useEffect, useState } from 'react'
import { ListProductResponse } from '../types'
import { useSearchParams } from 'next/navigation'
import { shopService } from '../services/shop.service'

export function useShop () {
  const [showFilters, setShowFilters] = useState(false)
  const searchParams = useSearchParams()

  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState<ListProductResponse | null>(null)

  useEffect(() => {
    const fetchDataFromDRF = async () => {
      setLoading(true)
      const query = searchParams.toString()
      await shopService({ query, setProducts, setLoading ,setShowFilters})
    }
    fetchDataFromDRF()
  }, [searchParams])
  return {
    loading,
    products,
    showFilters,
    setShowFilters
  }
}
