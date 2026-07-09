import { Pagenation, ProductType } from '@/types/user'
import { Dispatch, SetStateAction } from 'react'

export interface MenuItem {
  id: string
  label: string
  icon?: string
  children?: MenuItem[]
}
export interface ListProductResponse extends Pagenation {
  results: ProductType[]
}
export interface FilterMobaileProps {
  setShowFilters: Dispatch<SetStateAction<boolean>>
  showFilters: boolean
}
