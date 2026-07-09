import { getErrorMessage } from '@/features/utils/ErrorHandler/Helper'
import { ProductType } from '@/types/user'
import { axiosConfig } from '@/utils/axios/axios'
import { messageCustom } from '@/utils/message/message'

export async function ShapingService (cart: ProductType[]|null) {
  try {
    await axiosConfig('/order', {
      method: 'POST',
      data: { items: cart }
    })

    localStorage.setItem('cart', '[]')
    messageCustom('خرید انجام شد.', 'success', 5000)
  } catch (error) {
    getErrorMessage(error)
  }
}
