import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import Link from 'next/link'
import { slides } from '../data/FSSlider'
import { useFSSlider } from '../hooks/useFSSlider'

export default function FullscreenSlider () {
  const { index, next, prev, goTo } = useFSSlider(slides.length)
  return (
    <div
      className='relative w-screen overflow-hidden select-none h-[75vh] md:h-[70vh] lg:h-[80vh]'
      style={{ background: slides[index].bg }}
    >
      {/* Prev */}
      <button
        onClick={prev}
        className='absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition p-2'
      >
        <FaChevronLeft className='w-5 h-5 md:w-8 md:h-8' color='black' />
      </button>

      {/* Next */}
      <button
        onClick={next}
        className='absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition p-2'
      >
        <FaChevronRight className='w-5 h-5 md:w-8 md:h-8' color='black' />
      </button>

      <div className='relative w-full h-full'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={slides[index].id}
            className='absolute inset-0 flex flex-col md:flex-row'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            drag='x'
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80) next()
              if (info.offset.x > 80) prev()
            }}
          >
            {/* Image */}

            <div className='relative w-full md:w-[60%] h-full md:h-full order-1 md:order-2'>
              <Image
                src={slides[index].img}
                alt={slides[index].title}
                fill
                priority
                className='object-cover pointer-events-none'
              />
            </div>

            {/* Content */}
            <div className='w-full md:w-[40%] flex flex-col justify-center px-6 md:px-12 lg:px-20 py-8 md:py-0 space-y-4 md:space-y-6 order-2 md:order-1'>
              <Link href={slides[index].link}>
                <h1 className='text-[15px] sm:text-[17px] md:text-[20px] lg:text-[25px] font-bold text-black'>
                  {slides[index].title}
                </h1>
              </Link>

              <p className='text-[10px] md:block   md:text-[14px] lg:text-[17px] text-black/80 leading-8 max-w-xl'>
                {slides[index].text}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className='absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-3'>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === index ? 'w-8 h-2 bg-black' : 'w-2 h-2 bg-black/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
