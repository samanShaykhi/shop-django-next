import Link from 'next/link'
import Article from '../ItemArticle/Article'
import { useAppSelector } from '@/Folders/store/hooks'

export default function ArticlesPageCenter () {
  const { productCats } = useAppSelector(state => state.auth)

  return (
    <div className='container'>
      <div className='flex justify-between border-b border-[#bbbbbb] pb-3 mb-5 items-center'>
        <div>
          <h5 className='font-extrabold'>وبلاگ فروشگاه</h5>
        </div>

        <div>
          <Link href='/articles'>دیدن همه</Link>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {productCats?.articles.map(art => (
          <Article key={art.id} article={art} />
        ))}
      </div>
    </div>
  )
}
