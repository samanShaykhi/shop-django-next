'use client'
import style from './Preview.module.css'
import { IoCloseSharp } from 'react-icons/io5'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { changeStatusMP } from '../store/features/preview'
import Image from 'next/image'
import { useState } from 'react'
export default function Preview () {
  const statusModal = useAppSelector(state => state.modalPreview.status)
  const dispatch = useAppDispatch()
  const [numberProduct, setNumberProduct] = useState<number>(1)
  return (
    <div className={style.ModalXRT}>
      {statusModal && (
        <div
          onClick={() => dispatch(changeStatusMP())}
          className={style.BGM}
        ></div>
      )}
      <div
        className={
          statusModal ? ` ${style.Modal} ${style.ModalActive} ` : style.Modal
        }
      >
        <div className={style.headModal}>
          <span> پیشنمایش محصول </span>
          <IoCloseSharp onClick={() => dispatch(changeStatusMP())} />
        </div>
        <div className={style.BodyModal}>
          <div className={style.disSec}>
            <div className={style.textDisItem}>
              <h6>ژاکت زارا زمستونی با رنگ بندی متفاوت زمستانه و تابستانه</h6>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>
              <span> 850 هزارتومان </span>
            </div>
            <div className='my-[1rem]'>
              <span className=''> رنگ : مشکی </span>
              <div className={style.colorSec}>
                <div
                  className={`p-[4px] border-2 border-[black] rounded-[30px] ${style.PRTXV}`}
                >
                  <div className={`${style.colorItem} bg-black `}>
                    <span> مشکی </span>
                  </div>
                </div>
                <div
                  className={`p-[4px] border-2 border-[#f5e8d8] rounded-[30px] mx-2 ${style.PRTXV}`}
                >
                  <div className={`${style.colorItem} bg-[#f5e8d8] `}>
                    <span> کرمی </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.CartBox}>
              <button> اضافه کردن به سبد خرید</button>
              <input
                type='number'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNumberProduct(e.target.valueAsNumber)
                }
                value={1}
              />
            </div>
            <div className={style.buyBTN}>
              <button> خرید محصول </button>
            </div>
            <div className={style.OderDis}>
              <div className={style.codePro}>
                <span> کد محصول :145876 </span>
              </div>
              <div className={style.category}>
                <span>دیگر دسته ها : </span>
                <ul>
                  <li>کیف کفش </li>
                  <li> تابستونه</li>
                  <li> زمسنونه </li>
                  <li> پوشاک </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={style.imgSec}>
            <Image
              src='/images/product/pro.png'
              width={400}
              height={400}
              alt='pro1'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
