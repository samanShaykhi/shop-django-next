import { changeProductsWhishList } from '@/features/store/features/ModalWishListSlice'
import { useAppDispatch, useAppSelector } from '@/features/store/hooks'
import { ProductType } from '@/types/user'
import { useEffect } from 'react'

export function useWhishlist () {
  const dispatch = useAppDispatch()
  const products = useAppSelector(state => state.modalWishList.products)
  const BreadcrumbsArr = [{ label: 'لیست علاقه مندی ها' }]

  useEffect(() => {
    const data = () => {
      const products = JSON.parse(localStorage.getItem('wishlist') || '[]')
      dispatch(changeProductsWhishList(products))
    }
    data()
  }, [dispatch])
  const handleDeleteProduct = (item: ProductType) => {
    const products = JSON.parse(localStorage.getItem('wishlist') || '[]')
    const CP = [...products]
    const filterProducts = CP.filter(prod => prod.id !== item.id)
    localStorage.setItem('wishlist', JSON.stringify(filterProducts))
    dispatch(changeProductsWhishList(filterProducts))
  }
  return {
    dispatch,
    products,
    BreadcrumbsArr,
    handleDeleteProduct
  }
}
