'use client'
import Image from 'next/image'
import style from '../Wishlist.module.css'
import { IoCloseSharp } from 'react-icons/io5'
import { useAppDispatch, useAppSelector } from '@/Folders/store/hooks'
import { changeStatus } from '@/Folders/store/features/ModalWishListSlice'
export default function ModalWishList () {
  const modalWishListStatus = useAppSelector(
    state => state.modalWishList.status
  )
  const dispatch = useAppDispatch()
  return (
    <div className={style.ModalXRT}>
      {modalWishListStatus && (
        <div
          onClick={() => dispatch(changeStatus())}
          className={style.BGM}
        ></div>
      )}
      <div
        className={
          modalWishListStatus
            ? ` ${style.Modal} ${style.ModalActive} `
            : style.Modal
        }
      >
        <div className={style.headModal}>
          <span> لیست علاقه مندی (4) </span>
          <IoCloseSharp onClick={() => dispatch(changeStatus())} />
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
                <h3 className='font-bold'>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم.
                </h3>
                <span className='my-2'> 580 هزار تومان </span>
                <span className='text-[12px]'> 23 , بهمن , 1404 </span>
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
                <h3 className='font-bold'>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم.
                </h3>
                <span className='my-2'> 580 هزار تومان </span>
                <span className='text-[12px]'> 23 , بهمن , 1404 </span>
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
                <h3 className='font-bold'>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم.
                </h3>
                <span className='my-2'> 580 هزار تومان </span>
                <span className='text-[12px]'> 23 , بهمن , 1404 </span>
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
                <h3 className='font-bold'>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم.
                </h3>
                <span className='my-2'> 580 هزار تومان </span>
                <span className='text-[12px]'> 23 , بهمن , 1404 </span>
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
                <h3 className='font-bold'>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم.
                </h3>
                <span className='my-2'> 580 هزار تومان </span>
                <span className='text-[12px]'> 23 , بهمن , 1404 </span>
              </div>
            </div>
          </div>
          <div className={style.btnAddTocart}>
            <button> اضافه کردن به سبد خرید </button>
          </div>
        </div>
      </div>
    </div>
  )
}
