import { FiFilter } from 'react-icons/fi'
import { FilterMobaileProps } from '../types'
import { AnimatePresence, motion } from 'framer-motion'
import { AiOutlineClose } from 'react-icons/ai'
import Filters from './Filters'

export default function FilterMobaile ({
  setShowFilters,
  showFilters
}: FilterMobaileProps) {
  return (
    <div>
      <div className='lg:hidden mb-4'>
        <button
          onClick={() => setShowFilters(true)}
          className='flex items-center gap-2 rounded-xl border px-4 py-2 font-medium'
        >
          <FiFilter />
          فیلترها
        </button>
      </div>
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
                <Filters  />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
