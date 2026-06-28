import { messageCustom } from '@/utils/message/message'
import axios from 'axios'

interface ApiErrorResponse {
  success: boolean
  code: string
  message: string
}

export function getErrorMessage (error: unknown) {
  console.log(error)
  if (axios.isAxiosError<ApiErrorResponse>(error)) {
    console.log(error.response?.data)
    return messageCustom(
      error.response?.data?.message || error.message || 'خطای ناشناخته',
      'error',
      7000
    )
  }

  if (error instanceof Error) {
    return messageCustom(error.message, 'error', 7000)
  }

  return messageCustom('خطای ناشناخته', 'error', 7000)
}
