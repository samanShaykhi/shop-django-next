'use client'
import { FaCodeCompare, FaRegHeart } from 'react-icons/fa6'
import style from './Product.module.css'
import { CiRead } from 'react-icons/ci'
import Image from 'next/image'
import { useState } from 'react'
import { useAppDispatch } from '@/Folders/store/hooks'
import { changeStatus } from '@/Folders/store/features/ModalWishListSlice'
import { changeStatusMP } from '@/Folders/store/features/preview'
import { changeStatusCompare } from '@/Folders/store/features/compare'
import Link from 'next/link'

export default function Product () {
  const [activeBtnComper, setactiveBtnComper] = useState(false)
  const handleMouseEnter = () => {
    setactiveBtnComper(true)
  }

  const handleMouseLeave = () => {
    setactiveBtnComper(false)
  }
  const dispatch = useAppDispatch()
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={style.Product}
    >
      <div
        className={
          activeBtnComper
            ? `${style.ProComBTNActive} ${style.ProComBTN} `
            : style.ProComBTN
        }
      >
        <FaRegHeart onClick={() => dispatch(changeStatus())} />
        <CiRead onClick={() => dispatch(changeStatusMP())} />
        <FaCodeCompare onClick={() => dispatch(changeStatusCompare())} />
      </div>
      <div className={style.ProIMG}>
        <Link href='/products/sdasdas'>
          <Image
            src='/images/product/pro.png'
            width={400}
            height={400}
            alt='pro1'
          />
        </Link>
      </div>
      <div className={style.proDis}>
        <h4> ژاکت زمستونی مدل zara </h4>
        <span className={style.disIT}>
          {' '}
          ژاکت زارا زمستونی با رنگ بندی متفاوت{' '}
        </span>
        <div className={style.price}>
          <span className='mr-1'>تومان</span> <span>950</span>
        </div>
      </div>
      <div className={style.ProCart}></div>
    </div>
  )
}
