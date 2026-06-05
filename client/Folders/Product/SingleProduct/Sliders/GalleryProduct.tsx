'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, LucideX } from 'lucide-react'
interface ProductGalleryProps {
  images: { src: string; alt: string }[]
  isRtl?: boolean
}

export default function GalleryProduct ({
  images,
  isRtl = false
}: ProductGalleryProps) {
  const [zoomInSlider, setzoomInSlider] = useState(false)

  const [curentIndex, setCurentIndex] = useState(0)
  const [slideWidth, setSlideWidth] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStartX, setDragStartX] = useState(0)

  const [dragOffset, setDragOffset] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const containerThumbnailRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setSlideWidth(containerRef.current.clientWidth)
      }
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)

    return window.removeEventListener('resize', updateWidth)
  }, [])
  const BTN_NextHandle = () => {
    if (!(curentIndex < images.length - 1)) return
    setCurentIndex(prev => prev + 1)
  }
  const BTNPreviouseHandle = () => {
    if (curentIndex === 0) return
    setCurentIndex(prev => prev - 1)
  }

  const HandleDragXEnd = () => {
    if (dragStartX === 0) return
    if (dragOffset === 0) setzoomInSlider(true)
    setIsDragging(false)
    setDragStartX(0)
    setDragOffset(0)
    //*  End And Start Drag -590 +590

    // next Slide
    // 145
    if (dragOffset > 0) {
      if (!(curentIndex < images.length - 1)) return
      if (dragOffset > 145) setCurentIndex(prev => prev + 1)
    }

    // Previous Slide
    if (dragOffset < 0) {
      if (curentIndex === 0) return
      if (dragOffset < -145) setCurentIndex(prev => prev - 1)
    }
  }

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStartX(e.clientX)
  }
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    if (dragStartX - e.clientX >= 591 || dragStartX - e.clientX <= -591) return
    setDragOffset(() => (dragStartX - e.clientX) * -1)
  }
  const onMouseUp = () => {
    HandleDragXEnd()
  }
  const onMouseLeave = () => {
    HandleDragXEnd()
  }
  const onTouchStart = (e: React.TouchEvent) => {
    console.log(e.touches[0].clientX)
    setIsDragging(true)
    setDragStartX(e.touches[0].clientX)
  }
  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    if (
      dragStartX - e.touches[0].clientX >= 590 ||
      dragStartX - e.touches[0].clientX <= -590
    )
      return
    setDragOffset(() => (dragStartX - e.touches[0].clientX) * -1)
  }
  const onTouchEnd = (e: React.TouchEvent) => HandleDragXEnd()
  return (
    <div
      className={`${
        zoomInSlider &&
        'absolute top-0 bg-white right-0 h-[100vh] flex justify-between pt-[3rem] '
      }  w-full`}
    >
      <div className={`flex ${zoomInSlider && 'justify-center w-[90%]'} `}>
        <div className='h-[590px] overflow-hidden'>
          <div
            ref={containerThumbnailRef}
          >
            {images.map((img, index) => {
              return (
                <div
                  key={index}
                  onClick={() => setCurentIndex(index)}
                  className={`relative cursor-pointer h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border-2 ml-6 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 my-2 ${
                    index === curentIndex
                      ? 'border-blue-500 ring-2 ring-blue-200'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image
                    className='select-none [-webkit-user-drag:none]'
                    src={img.src}
                    alt='slide'
                    width={95}
                    height={95}
                  />
                </div>
              )
            })}
          </div>
        </div>

        <div className='relative w-[590px] h-[590px] overflow-hidden'>
          <div
            ref={containerRef}
            className='absolute flex transition-all '
            style={{
              transform: `translate3d(${
                (curentIndex * slideWidth) / images.length + dragOffset
              }px, 0px, 0px)`,
              transition: 'transform .3s ease-out'
            }}
          >
            {images.map((img, index) => {
              return (
                <div
                  onMouseDown={onMouseDown}
                  onMouseMove={onMouseMove}
                  onMouseUp={onMouseUp}
                  onMouseLeave={onMouseLeave}
                  onTouchStart={onTouchStart}
                  onTouchMove={onTouchMove}
                  onTouchEnd={onTouchEnd}
                  key={index}
                  className='w-[590px] h-[590px]'
                >
                  <Image
                    className='select-none [-webkit-user-drag:none] cursor-zoom-in'
                    src={img.src}
                    alt='slide'
                    width={590}
                    height={590}
                  />
                </div>
              )
            })}
          </div>
          {/* if (!(curentIndex < images.length - 1))
      if (curentIndex === 0) */}
          <button
            className={`${
              curentIndex === 0 && 'opacity-[0.4]'
            }  mx-2 p-2 bg-black text-white shadow rounded absolute right-0 top-[35%] cursor-pointer`}
            onClick={BTNPreviouseHandle}
          >
            <ChevronRight />
          </button>
          <button
            onClick={BTN_NextHandle}
            className={`${
              !(curentIndex < images.length - 1) && 'opacity-[0.4]'
            } mx-2 p-2 bg-black text-white shadow rounded absolute left-0 top-[35%] cursor-pointer`}
          >
            <ChevronLeft />
          </button>
        </div>
      </div>
      {zoomInSlider && (
        <div className='w-[8%]'>
          <LucideX
            size={35}
            className='cursor-pointer'
            onClick={() => setzoomInSlider(false)}
          />
        </div>
      )}
    </div>
  )
}
