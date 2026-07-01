'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { AiOutlineClose } from 'react-icons/ai'
import { ImageProductType } from '@/types/user'

interface ProductGalleryProps {
  images: ImageProductType[]
}

export default function GalleryProduct ({ images }: ProductGalleryProps) {
  const [zoomInSlider, setzoomInSlider] = useState(false)
  const [curentIndex, setCurentIndex] = useState(0)
  const [slideWidth, setSlideWidth] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStartX, setDragStartX] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)

  const sliderWrapperRef = useRef<HTMLDivElement>(null)
  const containerThumbnailRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateWidth = () => {
      if (sliderWrapperRef.current) {
        setSlideWidth(sliderWrapperRef.current.clientWidth)
      }
    }

    updateWidth()

    window.addEventListener('resize', updateWidth)

    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [])

  const BTN_NextHandle = () => {
    if (curentIndex >= images.length - 1) return
    setCurentIndex(prev => prev + 1)
  }

  const BTNPreviouseHandle = () => {
    if (curentIndex === 0) return
    setCurentIndex(prev => prev - 1)
  }

  const HandleDragXEnd = () => {
    if (dragStartX === 0) return

    const threshold = slideWidth * 0.25

    if (dragOffset === 0) {
      setzoomInSlider(true)
    }

    if (dragOffset > threshold) {
      if (curentIndex > 0) {
        setCurentIndex(prev => prev - 1)
      }
    }

    if (dragOffset < -threshold) {
      if (curentIndex < images.length - 1) {
        setCurentIndex(prev => prev + 1)
      }
    }

    setIsDragging(false)
    setDragStartX(0)
    setDragOffset(0)
  }

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStartX(e.clientX)
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return

    setDragOffset((dragStartX - e.clientX) * -1)
  }

  const onMouseUp = () => {
    HandleDragXEnd()
  }

  const onMouseLeave = () => {
    if (isDragging) HandleDragXEnd()
  }

  const onTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setDragStartX(e.touches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return

    setDragOffset((dragStartX - e.touches[0].clientX) * -1)
  }

  const onTouchEnd = () => {
    HandleDragXEnd()
  }

  return (
    <div
      className={`w-full ${
        zoomInSlider
          ? 'fixed inset-0 z-50 bg-white overflow-auto pt-4 md:pt-10'
          : ''
      }`}
    >
      <div
        className={`flex flex-col-reverse md:flex-row items-center md:items-start ${
          zoomInSlider ? 'justify-center' : ''
        }`}
      >
        {/* thumbnails */}
        <div className='w-full md:w-auto overflow-x-auto md:overflow-y-auto md:h-[590px]'>
          <div
            ref={containerThumbnailRef}
            className='flex md:flex-col gap-2 px-2 md:px-0'
          >
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => setCurentIndex(index)}
                className={`relative cursor-pointer h-16 w-16 md:h-20 md:w-20 shrink-0 overflow-hidden rounded-md border-2 transition-all ${
                  index === curentIndex
                    ? 'border-blue-500 ring-2 ring-blue-200'
                    : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <Image
                  src={img.image}
                  alt={img.alt_text}
                  fill
                  className='object-cover select-none [-webkit-user-drag:none]'
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>

        {/* slider */}
        <div
          ref={sliderWrapperRef}
          className='relative w-full max-w-[590px] aspect-square overflow-hidden'
        >
          <div
            className='absolute left-0 top-0 flex h-full'
            style={{
              transform: `translate3d(${
                -(curentIndex * slideWidth) + dragOffset
              }px,0,0)`,
              transition: isDragging ? 'none' : 'transform .3s ease-out'
            }}
          >
            {images.map((img, index) => (
              <div
                key={index}
                className='relative w-full max-w-[590px] aspect-square shrink-0'
                style={{
                  width: slideWidth
                }}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseLeave}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <Image
                  src={img.image}
                  alt={img.alt_text}
                  fill
                  unoptimized
                  className='object-contain select-none [-webkit-user-drag:none] cursor-zoom-in'
                />
              </div>
            ))}
          </div>

          {/* previous */}
          <button
            onClick={BTNPreviouseHandle}
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/70 text-white p-2 md:p-3 ${
              curentIndex === 0 ? 'opacity-40' : ''
            }`}
          >
            <FaChevronLeft />
          </button>

          {/* next */}
          <button
            onClick={BTN_NextHandle}
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/70 text-white p-2 md:p-3 ${
              curentIndex === images.length - 1 ? 'opacity-40' : ''
            }`}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {zoomInSlider && (
        <button
          className='fixed top-4 right-4 z-60'
          onClick={() => setzoomInSlider(false)}
        >
          <AiOutlineClose size={35} className='cursor-pointer' />
        </button>
      )}
    </div>
  )
}
