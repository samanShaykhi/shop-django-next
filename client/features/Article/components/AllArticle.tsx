'use client'
import Article from '../ItemArticle/Article'
import Pagination from '../../utils/Pagination/Pagination'
import AllArticleSkeleton from './Skeleton/AllArticleSkeleton'
import { ArtAnPageType } from '../types'
import { useAllArticle } from '../hooks/useAllArticle'

export default function AllArticle ({ articles }: ArtAnPageType) {
  const { Articles, loading } = useAllArticle({ articles })
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
        <div className='my-4'>
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
