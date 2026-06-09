import axios from 'axios'

interface ApiErrorResponse {
  success: boolean
  code: string
  message: string
}

export function getErrorMessage (error: unknown): string {
  if (axios.isAxiosError<ApiErrorResponse>(error)) {
    console.log(error.response?.data)
    return error.response?.data?.message || error.message || 'خطای ناشناخته'
  }

  if (error instanceof Error) {
    return error.message
  }

  return 'خطای ناشناخته'
}
