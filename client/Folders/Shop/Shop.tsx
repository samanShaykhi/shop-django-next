'use client'

import Filters from './Filters'
import ListProducts from './ListProducts'
import Pagination from '../utils/Pagination/Pagination'
import { axiosConfig } from '@/utils/axios/axios'
import { useEffect, useState } from 'react'
import { getErrorMessage } from '../utils/ErrorHandler/Helper'
import { Pagenation, ProductType } from '@/types/user'
import { useSearchParams } from 'next/navigation'
import ShopSkeleton from './Placeholders/ShopSkeleton'
import { FiFilter } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { AnimatePresence, motion } from 'framer-motion'
interface ListProductResponse extends Pagenation {
  results: ProductType[]
}

export default function Shop () {
  const [showFilters, setShowFilters] = useState(false)
  const searchParams = useSearchParams()

  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState<ListProductResponse | null>(null)

  useEffect(() => {
    const fetchDataFromDRF = async () => {
      setLoading(true)

      try {
        const query = searchParams.toString()

        const response = await axiosConfig(`/products/?${query}`)

        setProducts(response.data)
      } catch (error) {
        getErrorMessage(error)
      } finally {
        setLoading(false)
      }
    }

    fetchDataFromDRF()
  }, [searchParams])

  return (
    <div className='container mx-auto px-4 my-4'>
      {loading ? (
        <ShopSkeleton />
      ) : (
        <div className='flex flex-col lg:flex-row gap-6 mb-6'>
          {/* Sidebar */}
          <aside className='hidden lg:block lg:w-[300px] shrink-0'>
            <div className='bg-black rounded-2xl p-4 lg:sticky lg:top-6'>
              <Filters />
            </div>
          </aside>

          {/* Content */}
          <div className='lg:hidden mb-4'>
            <button
              onClick={() => setShowFilters(true)}
              className='flex items-center gap-2 rounded-xl border px-4 py-2 font-medium'
            >
              <FiFilter />
              فیلترها
            </button>
          </div>
          <main className='flex-1 min-w-0'>
            <div className='p-2 md:p-4'>
              {products && <ListProducts products={products.results} />}
            </div>

            {products && (
              <div className='mt-6'>
                <Pagination ListProduct={products} />
              </div>
            )}
          </main>
          <AnimatePresence>
            {showFilters && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40'
                  onClick={() => setShowFilters(false)}
                />

                {/* Drawer */}
                <motion.div
                  initial={{
                    x: '100%'
                  }}
                  animate={{
                    x: 0
                  }}
                  exit={{
                    x: '100%'
                  }}
                  transition={{
                    type: 'spring',
                    damping: 28,
                    stiffness: 280
                  }}
                  className='fixed top-0 right-0 z-50 h-screen
        w-[88%] max-w-[380px]
        bg-black shadow-2xl'
                >
                  {/* Header */}
                  <div className='sticky top-0 z-10 flex items-center justify-between border-b bg-white px-4 py-4'>
                    <h3 className='text-lg font-bold'>فیلتر محصولات</h3>

                    <button
                      onClick={() => setShowFilters(false)}
                      className='rounded-lg p-2 hover:bg-gray-100'
                    >
                      <AiOutlineClose size={24} />
                    </button>
                  </div>

                  {/* Body */}
                  <div className='h-[calc(100vh-73px)] overflow-y-auto p-4'>
                    <Filters />
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  )
}
