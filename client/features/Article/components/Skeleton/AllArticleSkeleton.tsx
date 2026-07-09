export default function AllArticleSkeleton () {
  return (
    <div className='container animate-pulse'>
      {/* title */}


      {/* articles */}
      <div
        className='grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-4
        mb-8'
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className='border border-[#bcbcbc] rounded-lg overflow-hidden'>
            {/* image */}
            <div className='w-full h-52 sm:h-56 bg-gray-200' />

            {/* content */}
            <div className='p-4 space-y-3'>
              {/* date */}
              <div className='w-24 h-4 bg-gray-200 rounded' />

              {/* title */}
              <div className='w-4/5 h-6 bg-gray-200 rounded' />

              {/* description */}
              <div className='space-y-2'>
                <div className='w-full h-4 bg-gray-200 rounded' />

                <div className='w-full h-4 bg-gray-200 rounded' />

                <div className='w-3/4 h-4 bg-gray-200 rounded' />
              </div>
            </div>

            {/* button */}
            <div className='border-t border-[#bcbcbc] p-4 flex justify-center'>
              <div className='w-28 h-5 bg-gray-200 rounded' />
            </div>
          </div>
        ))}
      </div>

      {/* pagination */}
      <div className='flex flex-wrap justify-center gap-2 sm:gap-3 mb-8'>
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className='w-9 h-9 sm:w-10 sm:h-10 bg-gray-200 rounded'
          />
        ))}
      </div>
    </div>
  )
}
