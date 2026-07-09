'use client'
import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Product from './Product'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import style from '../modules/ListProductSlider.module.css'
import { ProductType } from '@/types/user'

interface Props {
  products: ProductType[] | undefined
}

const ListProductSlider: React.FC<Props> = ({ products }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start'
  })

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  )
  return (
    <div className={`${style.Slider} container`}>
      <div className={style.BTNBox}>
        <button
          onClick={scrollPrev}
          className='absolute left-0 top-1/2 cursor-pointer transform -translate-y-1/2 z-10 bg-white p-2 rounded shadow hover:bg-[#ead4ca] hover:text-white transition'
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={scrollNext}
          className='absolute cursor-pointer right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded shadow hover:bg-[#ead4ca] hover:text-white transition'
        >
          <FaAngleRight />
        </button>
      </div>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex gap-4'>
          {products?.length && (
            <>
              {products.map(product => {
                return (
                  <div
                    key={product.id}
                    className='shrink-0 w-[70%] sm:w-[45%] lg:w-[24.3%] '
                  >
                    <Product productItem={product} />
                  </div>
                )
              })}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ListProductSlider
