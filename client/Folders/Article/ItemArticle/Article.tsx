import Image from 'next/image'
import style from './article.module.css'
import Link from 'next/link'
import { ArticleType } from '@/types/user'
interface props {
  article: ArticleType
}
export default function Article ({ article }: props) {
  return (
    <article className={style.Article}>
      <div className={style.BAX}>
        <div className={style.IMG}>
          <Image
            src={article.image_article}
            alt={article.title}
            fill
            unoptimized
          />
        </div>
        <div className='px-3'>
          <div className={style.DATE}>
            <span> {article.create_at} </span>
          </div>
          <div className={style.TextAX}>
            <h4> {article.title} </h4>
            <p className='text-justify'>
              {article.short_discription.slice(0, 130)}{article.short_discription.length>132 && "...."}
            </p>
          </div>
        </div>
      </div>
      <div className={style.Mor}>
        <Link href={`/articles/${article.slug}`}>خواندن بیشتر</Link>
      </div>
    </article>
  )
}
