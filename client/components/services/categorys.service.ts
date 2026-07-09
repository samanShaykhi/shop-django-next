import { getErrorMessage } from '@/features/utils/ErrorHandler/Helper'
import { CategoryProductsType } from '@/types/user'
import { axiosConfig } from '@/utils/axios/axios'
import { Dispatch, SetStateAction } from 'react'

export async function categorysService (
  setcategorys: Dispatch<SetStateAction<CategoryProductsType[]>>
) {
  try {
    const data = await axiosConfig('/product/categories')
    setcategorys(data.data)
  } catch (error) {
    getErrorMessage(error)
  }
}
