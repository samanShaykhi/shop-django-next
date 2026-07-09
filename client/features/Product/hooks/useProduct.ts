import {
  ChangeProductsCompare,
  changeStatusCompare
} from '@/features/store/features/compare'
import {
  changeProductsWhishList,
  changeStatus
} from '@/features/store/features/ModalWishListSlice'
import {
  changeProductPreview,
  changeStatusMP
} from '@/features/store/features/preview'
import { useAppDispatch } from '@/features/store/hooks'
import { ProductType } from '@/types/user'
import { messageCustom } from '@/utils/message/message'
import { useState } from 'react'

export function useProduct () {
  const dispatch = useAppDispatch()
  const [activeBtnComper, setactiveBtnComper] = useState(false)
  const handleMouseEnter = () => {
    setactiveBtnComper(true)
  }

  const handleMouseLeave = () => {
    setactiveBtnComper(false)
  }

  const handleLocalStorageSave = (title: string, item: ProductType) => {
    const products = JSON.parse(localStorage.getItem(title) || '[]')
    if (products.length > 0) {
      const coppyProduct = [...products]

      const exist = coppyProduct.find(prod => prod.id === item.id)
      if (!exist) {
        if (coppyProduct.length >= 4 && title === 'compareProducts') {
          messageCustom('محصولات شما برای مقایسه تکمیل هستند.', 'warning', 4000)
        } else if (coppyProduct.length >= 8 && title === 'wishlist') {
          messageCustom('علاقه مندی های شما پر شده.', 'warning', 4000)
        } else {
          coppyProduct.push(item)
        }
      }
      localStorage.setItem(title, JSON.stringify(coppyProduct))
      if (title === 'wishlist') {
        return dispatch(changeProductsWhishList(coppyProduct))
      }
      if (title === 'compareProducts') {
        return dispatch(ChangeProductsCompare(coppyProduct))
      }
    } else {
      localStorage.setItem(title, JSON.stringify([item]))
      if (title === 'wishlist') {
        return dispatch(changeProductsWhishList([item]))
      }
      if (title === 'compareProducts') {
        return dispatch(ChangeProductsCompare([item]))
      }
    }
  }
  const handleChangeLocal = (productItem: ProductType, title: string) => {
    if (title === 'wishlist') dispatch(changeStatus())
    if (title === 'compareProducts') dispatch(changeStatusCompare())
    handleLocalStorageSave(title, productItem)
  }
  const previewProduct = (productItem: ProductType) => {
    dispatch(changeStatusMP())
    dispatch(changeProductPreview(productItem))
  }
  return {
    activeBtnComper,
    handleMouseEnter,
    handleMouseLeave,
    handleChangeLocal,
    previewProduct
  }
}
