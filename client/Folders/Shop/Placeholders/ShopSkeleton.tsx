import FiltersSkeleton from './FiltersSkeleton'
import ListProductsSkeleton from './ListProductsSkeleton'

export default function ShopSkeleton () {
  return (
    <div className='container mx-auto px-4 my-4'>
      <div className='flex flex-col lg:flex-row gap-6'>
        {/* Desktop Filters */}
        <div className='hidden lg:block lg:w-[300px] shrink-0'>
          <div className='bg-black rounded-2xl p-4 sticky top-6'>
            <FiltersSkeleton />
          </div>
        </div>

        {/* Products */}
        <div className='flex-1 min-w-0'>
          <div className='mb-6'>
            {/* Sort Skeleton */}
            <div className='h-10 w-full rounded-lg animate-pulse bg-gray-200' />
          </div>

          <div className='p-2 md:p-4'>
            <ListProductsSkeleton />
          </div>
        </div>
      </div>
    </div>
  )
}
