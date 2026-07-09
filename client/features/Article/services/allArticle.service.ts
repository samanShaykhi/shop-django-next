import { getErrorMessage } from '@/features/utils/ErrorHandler/Helper'
import { axiosConfig } from '@/utils/axios/axios'
import { Dispatch, SetStateAction } from 'react'
import { AllArtAndPagenation } from '../types'

export async function allArticleService ({
  query,
  setArticles,
  setLoading
}: {
  query: string
  setArticles: Dispatch<SetStateAction<AllArtAndPagenation>>
  setLoading: Dispatch<SetStateAction<boolean>>
}) {
  try {
    const fexh = await axiosConfig(`/article/articles/?${query}`)
    setArticles(fexh.data)
    setLoading(false)
  } catch (error) {
    setLoading(false)
    getErrorMessage(error)
  }
}
