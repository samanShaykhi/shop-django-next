import { getErrorMessage } from '@/features/utils/ErrorHandler/Helper'
import { axiosConfig } from '@/utils/axios/axios'
import { Dispatch, SetStateAction } from 'react'
import { ListProductResponse } from '../types'
type props = {
  query: string
  setProducts: Dispatch<SetStateAction<ListProductResponse | null>>
  setLoading: Dispatch<SetStateAction<boolean>>
  setShowFilters: Dispatch<SetStateAction<boolean>>
}
export async function shopService ({
  query,
  setProducts,
  setLoading,
  setShowFilters
}: props): Promise<void> {
  try {
    const response = await axiosConfig(`/products/?${query}`)

    setProducts(response.data)
    setShowFilters(false)
  } catch (error) {
    getErrorMessage(error)
  } finally {
    setLoading(false)
  }
}
