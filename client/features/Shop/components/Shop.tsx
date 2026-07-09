'use client'
import ShopSkeleton from './Placeholders/ShopSkeleton'
import Filters from './Filters'
import Pagination from '@/features/utils/Pagination/Pagination'
import ListProductsFilter from '../../Product/Components/ListProductsFilter'
import { useShop } from '../hooks/useShop'
import FilterMobaile from './FilterMobaile'

export default function Shop () {
  const { loading, products, showFilters, setShowFilters } = useShop()

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
          <FilterMobaile
            setShowFilters={setShowFilters}
            showFilters={showFilters}
          />
          <main className='flex-1 min-w-0'>
            <div className='p-2 md:p-4'>
              {products && <ListProductsFilter products={products.results} />}
            </div>

            {products && (
              <div className='mt-6'>
                <Pagination ListProduct={products} />
              </div>
            )}
          </main>
        </div>
      )}
    </div>
  )
}
