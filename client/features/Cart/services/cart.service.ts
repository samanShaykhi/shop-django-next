import { getErrorMessage } from '@/features/utils/ErrorHandler/Helper'
import { ProductType } from '@/types/user'
import { axiosConfig } from '@/utils/axios/axios'
import { Dispatch, SetStateAction } from 'react'

export async function CartService ({
  cart,
  setproducts,
}: {
  cart: ProductType[]
  setproducts: Dispatch<SetStateAction<ProductType[]>>
}) {
  try {
    const { data } = await axiosConfig('/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        items: cart
      }
    })

    setproducts(data)
  } catch (error) {
    getErrorMessage(error)
  } finally {
  }
}
