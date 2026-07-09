import { useSearchParams } from 'next/navigation'
import { allArticleService } from '../services/allArticle.service'
import { ArtAnPageType } from '../types'
import { useEffect, useState } from 'react'

export function useAllArticle ({ articles }: ArtAnPageType) {
  const searchParams = useSearchParams()
  const [Articles, setArticles] = useState(articles)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const query = searchParams.toString()
    if (!query) return

    allArticleService({ query, setArticles, setLoading })
  }, [searchParams])
  return {
    Articles,
    loading
  }
}
