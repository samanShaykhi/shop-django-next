import { changeProductsWhishList } from "@/features/store/features/ModalWishListSlice"
import { useAppDispatch, useAppSelector } from "@/features/store/hooks"
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll"
import { ProductType } from "@/types/user"
import { useEffect } from "react"

export function useModalWhishlist () {
  const products = useAppSelector(state => state.modalWishList.products)
  const modalWishListStatus = useAppSelector(
    state => state.modalWishList.status
  )
  useLockBodyScroll(modalWishListStatus)
  const dispatch = useAppDispatch()
  useEffect(() => {
    const data = () => {
      const products = JSON.parse(localStorage.getItem('wishlist') || '[]')
      return dispatch(changeProductsWhishList(products))
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
    products,
    handleDeleteProduct,
    modalWishListStatus,
    dispatch
  }
}
