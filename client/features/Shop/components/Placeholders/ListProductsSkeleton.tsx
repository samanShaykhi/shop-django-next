export default function ListProductsSkeleton () {
  return (
    <div>
      {/* Sorting */}
      <div className='mb-6 border-b border-gray-300 pb-4 animate-pulse'>
        <div className='flex flex-col md:flex-row md:items-center gap-3'>
          <div className='h-5 w-28 rounded bg-gray-300' />

          <div className='flex gap-3 overflow-hidden'>
            <div className='h-8 w-20 rounded bg-gray-300' />
            <div className='h-8 w-20 rounded bg-gray-300' />
            <div className='h-8 w-20 rounded bg-gray-300' />
          </div>
        </div>
      </div>

      {/* Products */}
      <div
        className='grid gap-4
        grid-cols-2
        md:grid-cols-3
        xl:grid-cols-4'
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className='overflow-hidden rounded-xl border animate-pulse'
          >
            {/* Image */}
            <div className='aspect-square bg-gray-200' />

            {/* Content */}
            <div className='p-4'>
              <div className='h-4 rounded bg-gray-200 mb-3' />

              <div className='h-4 w-3/4 rounded bg-gray-200 mb-4' />

              <div className='h-6 w-1/2 rounded bg-gray-200' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
