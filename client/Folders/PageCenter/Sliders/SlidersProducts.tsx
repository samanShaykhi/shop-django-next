'use client'
import React, { useEffect, useState, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Product from '../Product/Product'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import style from './sliders.module.css'
import { useAppSelector } from '@/Folders/store/hooks'
import { ProductType } from '@/types/user'

interface Props {
  category?: string
  related_products?: ProductType[]
}

const SlidersProducts: React.FC<Props> = ({
  category,
  related_products
}: Props) => {
  const { productCats } = useAppSelector(state => state.auth)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start'
  })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

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
          {category === 'mensCat' && (
            <>
              {productCats?.mensCat.map(product => {
                return (
                  <div
                    key={product.id}
                    className='flex-shrink-0 w-[70%] sm:w-[45%] lg:w-[24.3%] '
                  >
                    <Product productItem={product} />
                  </div>
                )
              })}
            </>
          )}
          {category === 'womansCat' && (
            <>
              {productCats?.womansCat.map(product => {
                return (
                  <div
                    key={product.id}
                    className='flex-shrink-0 w-[70%] sm:w-[45%] lg:w-[24.3%] '
                  >
                    <Product productItem={product} />
                  </div>
                )
              })}
            </>
          )}
          {related_products?.length && (
            <>
              {related_products.map(product => {
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

export default SlidersProducts
