import { ChangeShoppingCart } from "@/features/store/features/cart"
import { changeProductsWhishList } from "@/features/store/features/ModalWishListSlice"
import { useAppDispatch } from "@/features/store/hooks"
import { useEffect } from "react"

export function useLocalCart () {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('cart') || '[]')
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]')

    dispatch(ChangeShoppingCart(products))
    dispatch(changeProductsWhishList(wishlist))
  }, [dispatch])
}
