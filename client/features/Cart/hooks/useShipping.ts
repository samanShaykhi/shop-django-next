import { ChangeShoppingCart } from '@/features/store/features/cart'
import { useAppDispatch, useAppSelector } from '@/features/store/hooks'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { useEffect, useState } from 'react'
import { ShapingService } from '../services/shiping.service'
import { useRouter } from 'next/navigation'

export function useShipping () {
  const router = useRouter()
  const [orderCompleted, setorderCompleted] = useState(false)
  const dispatch = useAppDispatch()
  const auth = useAppSelector(state => state.auth)
  const address = useAppSelector(state => state.auth.user?.addresses?.[0])
  const cart = useAppSelector(state => state.ShoppingCart.shoppingCart)
  let totalPrice
  if (cart) {
    totalPrice =
      cart.reduce(
        (sum, product) => sum + product.price * (product.quantity ?? 0),
        0
      ) + 180000
  }
  useEffect(() => {
    if (cart) {
      if (cart.length === 0 && !orderCompleted) router.replace('/cart')
      if (auth.loading) return
      if (!auth.user) router.replace('/login')
    }
  }, [cart, router, auth, orderCompleted])
  const [activeChangeAddress, setActiveChangeAddress] = useState(false)
  useLockBodyScroll(activeChangeAddress)
  const handleSendOrder = async () => {
    if (!address) return setActiveChangeAddress(true)
    ShapingService(cart)
    setorderCompleted(true)
    dispatch(ChangeShoppingCart([]))
    router.replace('/dashbord/orders')
  }
  return {
    totalPrice,
    cart,
    auth,
    handleSendOrder,
    activeChangeAddress,
    setActiveChangeAddress,
    router
  }
}
