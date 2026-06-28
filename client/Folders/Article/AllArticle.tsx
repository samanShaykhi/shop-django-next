'use client'
import { Pagenation, ArticleType } from '@/types/user'
import Article from './ItemArticle/Article'
import Pagination from '../utils/Pagination/Pagination'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { axiosConfig } from '@/utils/axios/axios'
import { getErrorMessage } from '../utils/ErrorHandler/Helper'
import AllArticleSkeleton from './AllArticleSkeleton'
interface AllArtAndPagenation extends Pagenation {
  results: ArticleType[]
}
type props = {
  articles: AllArtAndPagenation
}
export default function AllArticle ({ articles }: props) {
  const searchParams = useSearchParams()
  const [Articles, setArticles] = useState(articles)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const query = searchParams.toString()
    if (!query) return
    const fechDataFromDRF = async () => {
      setLoading(true)
      try {
        const fexh = await axiosConfig(`/article/articles/?${query}`)
        setArticles(fexh.data)
      } catch (error) {
        getErrorMessage(error)
      } finally {
        setLoading(false)
      }
    }
    fechDataFromDRF()
  }, [searchParams])
  if (loading) {
    return
  }
  return (
    <div className='container'>
      <div>
        <h1 className='text-[25px] font-bold my-5'> وبلاگ فروشگاه </h1>
      </div>
      {loading ? (
        <AllArticleSkeleton />
      ) : (
        <div  className='my-4' >
          <div className='grid grid-cols-4 gap-4 mb-8 '>
            {Articles.results.map(art => {
              return <Article key={art.id} article={art} />
            })}
          </div>
          <Pagination ListProduct={Articles} />
        </div>
      )}
    </div>
  )
}
