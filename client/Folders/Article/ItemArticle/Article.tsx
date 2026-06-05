import Image from 'next/image'
import style from './article.module.css'
import Link from 'next/link'
interface ArticleInput {
  LinkArt: string
  ImgUrl: string
  date: string
  title: string
  disc: string
}
export default function Article ({
  LinkArt,
  ImgUrl,
  date,
  title,
  disc
}: ArticleInput) {
  return (
    <article className={style.Article}>
      <div className={style.BAX}>
        <div className={style.IMG}>
          <Image src={ImgUrl} alt={title} fill />
        </div>
        <div className={style.DATE}>
          <span> {date} </span>
        </div>
        <div className={style.TextAX}>
          <h4> {title} </h4>
          <p> {disc} </p>
        </div>
        <div className={style.Mor}>
          <Link href={LinkArt}>خواندن بیشتر</Link>
        </div>
      </div>
    </article>
  )
}
