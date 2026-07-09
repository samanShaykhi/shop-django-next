import { useAppDispatch, useAppSelector } from '@/features/store/hooks'
import { ProductType } from '@/types/user'
import { useEffect, useState } from 'react'
import { CartService } from '../services/cart.service'

export function useCart () {
  const dispatch = useAppDispatch()
  const cart = useAppSelector(state => state.ShoppingCart.shoppingCart)
  const [products, setproducts] = useState<ProductType[]>([])
  let totalPrice
  if (cart) {
    totalPrice =
      cart.reduce(
        (sum, product) => sum + product.price * (product.quantity ?? 0),
        0
      ) + 180000
  }

  useEffect(() => {
    if (!cart) return
    CartService({ cart, setproducts })
  }, [cart])
  return {
    dispatch,
    cart,
    products,
    totalPrice
  }
}
