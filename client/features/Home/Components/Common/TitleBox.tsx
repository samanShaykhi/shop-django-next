import style from '../../modules/Title.module.css'
import ContinuousTextSlider from './ContinuousTextSlider'
import Link from 'next/link'

interface InputTitle {
  title: string
  link: string
  textLink: string
}

export default function TitleBox ({ title, link, textLink }: InputTitle) {
  return (
    <div className='container'>
      <div className={style.TitleBox}>
        <div className={style.Title}>
          <h3> {title} </h3>
        </div>
        <div className={style.BtnBox}>
          <ContinuousTextSlider />
          <div className={style.BtnItem}>
            <button>
              <Link href={`${link}`}>{textLink}</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
