import { IoCloseSharp } from 'react-icons/io5'
import Breadcrumbs from '../utils/Breadcrumbs/Breadcrumbs'
import style from './Wishlist.module.css'
import Image from 'next/image'

export default function Wishlist () {
  const BreadcrumbsArr = [
    { text: 'خانه', link: '/' },
    { text: 'لیست علاقه مندی ها', link: '/', curentPage: true }
  ]
  return (
    <div>
      <div className='bg-[#d3d3d3] py-8'>
        <div className='container'>
          <div className='flex justify-between items-center'>
            <div>
              <h1 className='text-[25px] font-[600]'> لیست علاقه مندی ها </h1>
            </div>
            <Breadcrumbs items={BreadcrumbsArr} />
          </div>
        </div>
      </div>
      <div className='container my-4 '>
        <div className={style.Wishlist}>
          <div className={style.item}>
            <div className={style.disIt}>
              <div className={style.close}>
                <IoCloseSharp />
              </div>
              <div className={style.dis}>
                <Image
                  src='/images/product/pro.png'
                  width={89}
                  height={89}
                  alt='pro1'
                />
                <div className={style.DTX}>
                  <h3 className='font-bold' >
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم.
                  </h3>
                  <span className='my-2' > 580 هزار تومان </span>
                  <span className='text-[12px]' > 23 , بهمن , 1404 </span>
                </div>
              </div>
            </div>
            <div className={style.btnAddTocart}>
              <button> اضافه کردن به سبد خرید </button>
            </div>
          </div>
          <div className={style.item}>
            <div className={style.disIt}>
              <div className={style.close}>
                <IoCloseSharp />
              </div>
              <div className={style.dis}>
                <Image
                  src='/images/product/pro.png'
                  width={89}
                  height={89}
                  alt='pro1'
                />
                <div className={style.DTX}>
                  <h3 className='font-bold' >
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم.
                  </h3>
                  <span className='my-2' > 580 هزار تومان </span>
                  <span className='text-[12px]' > 23 , بهمن , 1404 </span>
                </div>
              </div>
            </div>
            <div className={style.btnAddTocart}>
              <button> اضافه کردن به سبد خرید </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
