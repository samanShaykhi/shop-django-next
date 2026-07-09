import { ChangeProductsCompare } from '@/features/store/features/compare'
import { useAppDispatch, useAppSelector } from '@/features/store/hooks'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { ProductType } from '@/types/user'
import { useEffect } from 'react'

export function useCompare () {
  const dispatch = useAppDispatch()
  const statusModal = useAppSelector(state => state.modalCompare.status)
  const products = useAppSelector(state => state.modalCompare.products)
  useEffect(() => {
    if (statusModal) {
      document.body.style.overflow = 'hidden'
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth
      document.body.style.paddingRight = `${scrollbarWidth}px`
    } else {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [statusModal])

  const handleDeleteProduct = (item: ProductType) => {
    const products = JSON.parse(localStorage.getItem('compareProducts') || '[]')
    const CP = [...products]
    const filterProducts = CP.filter(prod => prod.id !== item.id)
    localStorage.setItem('compareProducts', JSON.stringify(filterProducts))
    dispatch(ChangeProductsCompare(filterProducts))
  }
  const handleDeleteAllProduct = () => {
    localStorage.removeItem('compareProducts')
    dispatch(ChangeProductsCompare([]))
  }
  return {
    dispatch,
    products,
    handleDeleteProduct,
    handleDeleteAllProduct,
    statusModal
  }
}
