import { Plus, Trash } from 'lucide-react'
import Image from 'next/image'
import style from './Cart.module.css'
function Cart () {
  return (
    <section>
      <div className='container'>
        <div className='flex justify-between  overflow-visible '>
          <div className={style.productCart}>
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
                  <Plus size={18} />
                  <span>1</span>
                  <Trash size={18} />
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
                  <Plus size={18} />
                  <span>1</span>
                  <Trash size={18} />
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
                  <Plus size={18} />
                  <span>1</span>
                  <Trash size={18} />
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
                  <Plus size={18} />
                  <span>1</span>
                  <Trash size={18} />
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
                  <Plus size={18} />
                  <span>1</span>
                  <Trash size={18} />
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
                  <Plus size={18} />
                  <span>1</span>
                  <Trash size={18} />
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
                  <Plus size={18} />
                  <span>1</span>
                  <Trash size={18} />
                </div>
                <span className={style.priceItem}> 12,451,000 تومان</span>
              </div>
            </div>
          </div>
          <div className={style.boxCart}>
            <div className='flex flex-col'>
              <div className='flex justify-between'>
                <span>تعداد کالا</span>
                <span>4</span>
              </div>
              <div className='flex justify-between my-3'>
                <span> جمع سبد خرید</span>
                <span>21,300,000 تومان</span>
              </div>
            </div>
            <button>تایید و تکمیل سفارش</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart
