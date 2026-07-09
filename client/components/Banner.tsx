import Image from 'next/image'
import style from './modules/banner.module.css'
import Link from 'next/link'
interface BannerInput {
  urlImage: string
  link: string
  headText: string
  title: string
  disc: string
}
export default function Banner ({
  urlImage,
  link,
  headText,
  title,
  disc
}: BannerInput) {
  return (
    <div className={style.Banner}>
      <Image src={urlImage} fill alt={title} />
      <div className={style.DBRTY}>
        <span className={style.shortTitle}> {headText} </span>
        <h4 className={style.Title}> {title} </h4>
        <p className={style.disB}> {disc} </p>
        <Link className={style.Mor} href={link}>
          <button> دیدن بیشتر </button>
        </Link>
      </div>
    </div>
  )
}
