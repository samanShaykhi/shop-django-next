import { useAppSelector } from '@/features/store/hooks'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export function useHeader () {
  const [activeBag, setactiveBag] = useState<boolean>(false)
  const [activeSearch, setactiveSearch] = useState<boolean>(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const pathname = usePathname()
  const { user, loading } = useAppSelector(state => state.auth)
  const wishlist = useAppSelector(state => state.modalWishList.products).length
  const cartLen = useAppSelector(
    state => state.ShoppingCart.shoppingCart
  )
  return {
    activeBag,
    setactiveBag,
    activeSearch,
    setactiveSearch,
    mobileMenuOpen,
    setMobileMenuOpen,
    pathname,
    user,
    loading,
    wishlist,
    cartLen
  }
}
