import Image from 'next/image'
import style from './Cart.module.css'

import React from 'react'
import { FaPlus } from 'react-icons/fa6'
import { CiTrash } from 'react-icons/ci'

interface CartProps {
  activeBag: boolean
  setactiveBag: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Cart ({ activeBag, setactiveBag }: CartProps) {
  return (
    <div
      onMouseEnter={() => setactiveBag(true)}
      onMouseLeave={() => setactiveBag(false)}
      className={`${style.boxCart} ${activeBag ? style.boxCartActive : ''}`}
    >
      <div className={style.NumAddToCart}>
        <span>4 کالا</span>
      </div>
      <div className={style.RUIOK}>
        <div>
          <div className={style.bodyCart}>
            <div className={style.Cart}>
              <div className={style.ImgCart}>
                <Image
                  src='/images/product/pro.png'
                  width={95}
                  height={95}
                  alt='art'
                ></Image>
              </div>
              <div className={style.disCart}>
                <h5> تی شرت تابستونه نخی خنک مدل اصل zara </h5>
              </div>
            </div>
            <div className={style.OderCart}>
              <div>
                <FaPlus size={18} />
                <span>1</span>
                <CiTrash size={18} />
              </div>
              <span className={style.priceItem}> 12,451,000 تومان</span>
            </div>
          </div>
          <div className={style.bodyCart}>
            <div className={style.Cart}>
              <div className={style.ImgCart}>
                <Image
                  src='/images/product/pro.png'
                  width={95}
                  height={95}
                  alt='art'
                ></Image>
              </div>
              <div className={style.disCart}>
                <h5> تی شرت تابستونه نخی خنک مدل اصل zara </h5>
              </div>
            </div>
            <div className={style.OderCart}>
              <div>
                <FaPlus size={18} />
                <span>1</span>
                <CiTrash size={18} />
              </div>
              <span className={style.priceItem}> 12,451,000 تومان</span>
            </div>
          </div>
        </div>
      </div>
      <div className={style.FooterCart}>
        <span className={style.labF}>مبلغ قابل پرداخت:</span>
        <div className={style.bfc}>
          <div className={style.totalPrice}>22,371,000 تومان</div>
          <div className={style.BTNAddToCart}>
            <button> ثبت سفارش </button>
          </div>
        </div>
      </div>
    </div>
  )
}
