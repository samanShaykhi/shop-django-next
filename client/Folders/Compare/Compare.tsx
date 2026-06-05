'use client'
import { RiCloseLargeFill } from 'react-icons/ri'
import style from './Compare.module.css'
import { IoCloseCircleSharp } from 'react-icons/io5'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { changeStatusCompare } from '../store/features/compare'
export default function Compare () {
  const statusModal = useAppSelector(state => state.modalCompare.status)
  const dispatch = useAppDispatch()
  return (
    <div className='container'>
      <div
        className={
          statusModal ? ` ${style.Compare} ${style.CompareAc} ` : style.Compare
        }
      >
        <div className={style.ModalBody}>
          <div className={style.HBX}>
            <RiCloseLargeFill onClick={() => dispatch(changeStatusCompare())} />
          </div>
          <div className={style.rowItems}>
            <div className={style.QWESD}>
              <h5>تصویر</h5>
              <div className={style.UYI}>
                <div className={style.IMGB}>
                  <div className={style.IMGITEM}>
                    <Image
                      src='/images/product/pro2.png'
                      width={290}
                      height={290}
                      alt='pro1'
                    />
                    <h4>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                    </h4>
                    <span> 590 تومان </span>
                  </div>
                  <div className={style.closeBTN}>
                    <IoCloseCircleSharp />
                  </div>
                </div>
                <div className={style.IMGB}>
                  <div className={style.IMGITEM}>
                    <Image
                      src='/images/product/pro2.png'
                      width={290}
                      height={290}
                      alt='pro1'
                    />
                    <h4>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                    </h4>
                    <span> 590 تومان </span>
                  </div>
                  <div className={style.closeBTN}>
                    <IoCloseCircleSharp />
                  </div>
                </div>
                <div className={style.IMGB}>
                  <div className={style.IMGITEM}>
                    <Image
                      src='/images/product/pro2.png'
                      width={290}
                      height={290}
                      alt='pro1'
                    />
                    <h4>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                    </h4>
                    <span> 590 تومان </span>
                  </div>
                  <div className={style.closeBTN}>
                    <IoCloseCircleSharp />
                  </div>
                </div>
                <div className={style.IMGB}>
                  <div className={style.IMGITEM}>
                    <Image
                      src='/images/product/pro2.png'
                      width={290}
                      height={290}
                      alt='pro1'
                    />
                    <h4>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                    </h4>
                    <span> 590 تومان </span>
                  </div>
                  <div className={style.closeBTN}>
                    <IoCloseCircleSharp />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.rowItems}>
            <div className={style.QWESD}>
              <h5>جنس</h5>
              <div className={style.UYI}>
                <div className={style.Protitle}>
                  <span>نخی</span>
                </div>
                <div className={style.Protitle}>
                  <span>کتان</span>
                </div>
                <div className={style.Protitle}>
                  <span>ابریشم</span>
                </div>
                <div className={style.Protitle}>
                  <span>کنف</span>
                </div>
              </div>
            </div>
          </div>
          <div className={style.rowItems}>
            <div className={style.QWESD}>
              <h5>جنس</h5>
              <div className={style.UYI}>
                <div className={style.Protitle}>
                  <span>نخی</span>
                </div>
                <div className={style.Protitle}>
                  <span>کتان</span>
                </div>
                <div className={style.Protitle}>
                  <span>ابریشم</span>
                </div>
                <div className={style.Protitle}>
                  <span>کنف</span>
                </div>
              </div>
            </div>
          </div>
          <div className={style.rowItems}>
            <div className={style.QWESD}>
              <h5>جنس</h5>
              <div className={style.UYI}>
                <div className={style.Protitle}>
                  <span>نخی</span>
                </div>
                <div className={style.Protitle}>
                  <span>کتان</span>
                </div>
                <div className={style.Protitle}>
                  <span>ابریشم</span>
                </div>
                <div className={style.Protitle}>
                  <span>کنف</span>
                </div>
              </div>
            </div>
          </div>
          <div className={style.rowItems}>
            <div className={style.QWESD}>
              <h5>جنس</h5>
              <div className={style.UYI}>
                <div className={style.Protitle}>
                  <span>نخی</span>
                </div>
                <div className={style.Protitle}>
                  <span>کتان</span>
                </div>
                <div className={style.Protitle}>
                  <span>ابریشم</span>
                </div>
                <div className={style.Protitle}>
                  <span>کنف</span>
                </div>
              </div>
            </div>
          </div>
          <div className={style.rowItems}>
            <div className={style.QWESD}>
              <h5>جنس</h5>
              <div className={style.UYI}>
                <div className={style.Protitle}>
                  <span>نخی</span>
                </div>
                <div className={style.Protitle}>
                  <span>کتان</span>
                </div>
                <div className={style.Protitle}>
                  <span>ابریشم</span>
                </div>
                <div className={style.Protitle}>
                  <span>کنف</span>
                </div>
              </div>
            </div>
          </div>
          <div className={style.rowItems}>
            <div className={style.QWESD}>
              <h5>جنس</h5>
              <div className={style.UYI}>
                <div className={style.Protitle}>
                  <span>نخی</span>
                </div>
                <div className={style.Protitle}>
                  <span>کتان</span>
                </div>
                <div className={style.Protitle}>
                  <span>ابریشم</span>
                </div>
                <div className={style.Protitle}>
                  <span>کنف</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.Modalfooter}>
          <div className={style.removeAll}>
            <div className={style.RBTN}>
              <button>
                {' '}
                <span>پاک کردن همه</span>{' '}
                <div>
                  {' '}
                  <RiCloseLargeFill />{' '}
                </div>{' '}
              </button>
            </div>
            <div className={style.RIMG}>
              <Image
                src='/images/product/pro2.png'
                width={50}
                height={50}
                alt='pro1'
              />
              <Image
                src='/images/product/pro2.png'
                width={50}
                height={50}
                alt='pro1'
              />
              <Image
                src='/images/product/pro2.png'
                width={50}
                height={50}
                alt='pro1'
              />
            </div>
          </div>
          <div className={style.BTNFO}>
            <div>+</div>
            <div>+</div>
            <div>+</div>
          </div>
        </div>
      </div>
    </div>
  )
}
