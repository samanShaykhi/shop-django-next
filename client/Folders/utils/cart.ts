import { ProductType } from '@/types/user'
import { messageCustom } from '@/utils/message/message'
import { ChangeShoppingCart } from '../store/features/cart'
import { AppDispatch } from '../store/store'

export function AddToCart (product: ProductType, dispatch: AppDispatch) {
  const getProducts: ProductType[] = JSON.parse(
    localStorage.getItem('cart') || '[]'
  )
  if (getProducts.length > 0) {
    const CP = [...getProducts]
    const exist = getProducts.find(item => item.id === product.id)
    if (!exist) {
      const newProduct = { ...product }
      newProduct.quantity = 1
      CP.push(newProduct)
      localStorage.setItem('cart', JSON.stringify(CP))
      dispatch(ChangeShoppingCart(CP))
      messageCustom('محصول به سبدخرید اضافه شد', 'success', 4000)
    } else {
      messageCustom('این محصول در سبد خریدتان است.', 'warning', 4000)
    }
  } else {
    const newProduct = { ...product }
    newProduct.quantity = 1
    localStorage.setItem('cart', JSON.stringify([newProduct]))
    dispatch(ChangeShoppingCart([newProduct]))
    messageCustom('محصول به سبدخرید اضافه شد', 'success', 4000)
  }
}
export function ItemDeleteINCart (product: ProductType, dispatch: AppDispatch) {
  const getProducts: ProductType[] = JSON.parse(
    localStorage.getItem('cart') || '[]'
  )
  const filterCart = getProducts.filter(item => item.id !== product.id)
  localStorage.setItem('cart', JSON.stringify(filterCart))
  dispatch(ChangeShoppingCart(filterCart))
}
export function AddQuantityForProduct (
  product: ProductType,
  dispatch: AppDispatch
) {
  const getProducts: ProductType[] = JSON.parse(
    localStorage.getItem('cart') || '[]'
  )
  const findItem = getProducts.find(item => item.id === product.id)
  if (findItem) {
    if (!((findItem.quantity ?? 1) >= product.stock)) {
      findItem.quantity = (findItem.quantity ?? 1) + 1
      localStorage.setItem('cart', JSON.stringify(getProducts))
      dispatch(ChangeShoppingCart(getProducts))
    } else {
      return messageCustom('محصول موجودی ندارد.', 'warning', 4000)
    }
  }
}
export function MinusQuantityForProduct (
  product: ProductType,
  dispatch: AppDispatch
) {
  const getProducts: ProductType[] = JSON.parse(
    localStorage.getItem('cart') || '[]'
  )
  const findItem = getProducts.find(item => item.id === product.id)
  if (findItem) {
    findItem.quantity = (findItem.quantity ?? 2) - 1
    localStorage.setItem('cart', JSON.stringify(getProducts))
    dispatch(ChangeShoppingCart(getProducts))
  }
}
