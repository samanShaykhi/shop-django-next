export default function ShippingSkeleton() {
  return (
    <div className='container animate-pulse'>
      <div className='flex flex-col lg:flex-row gap-6 justify-between'>

        {/* بخش اصلی */}
        <div className='w-full lg:w-[62%]'>

          {/* باکس آدرس */}
          <div className='border border-gray-200 rounded-lg mt-4'>

            {/* هدر */}
            <div className='p-4 sm:p-6'>

              <div className='h-6 w-36 sm:w-44 rounded bg-gray-200 mb-6' />

              <div className='flex items-center'>

                <div className='w-8 h-8 rounded-full bg-gray-200' />

                <div className='flex-1 h-[3px] mx-2 sm:mx-3 rounded bg-gray-200' />

                <div className='w-8 h-8 rounded-full bg-gray-200' />

                <div className='flex-1 h-[3px] mx-2 sm:mx-3 rounded bg-gray-200' />

                <div className='w-8 h-8 rounded-full bg-gray-200' />

              </div>
            </div>

            {/* اطلاعات آدرس */}
            <div className='border-t p-4 sm:p-6'>

              <div className='h-5 w-48 sm:w-72 rounded bg-gray-200 mb-5' />

              <div className='h-5 w-full rounded bg-gray-200 mb-3' />

              <div className='h-5 w-3/4 rounded bg-gray-200 mb-6' />

              <div className='h-10 w-32 sm:w-36 rounded bg-gray-200 mr-auto' />

            </div>
          </div>

          {/* محصولات */}
          {[1, 2, 3].map(item => (
            <div
              key={item}
              className='border my-6 p-4 rounded-lg'
            >
              <div className='h-6 w-40 sm:w-56 rounded bg-gray-200 mb-6' />

              <div className='flex flex-col sm:flex-row gap-4'>

                <div className='w-[95px] h-[95px] rounded bg-gray-200 shrink-0' />

                <div className='flex flex-col gap-4 flex-1'>

                  <div className='h-5 w-full sm:w-64 rounded bg-gray-200' />

                  <div className='h-5 w-3/4 sm:w-48 rounded bg-gray-200' />

                  <div className='h-5 w-1/2 sm:w-32 rounded bg-gray-200' />

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* باکس قیمت */}
        <div className='w-full lg:w-[35%] border border-gray-200 rounded-lg p-5 pb-3 h-fit'>

          <div className='h-7 w-36 rounded bg-gray-200 mx-auto mb-8' />

          <div className='space-y-6'>

            <div className='h-5 w-full rounded bg-gray-200' />

            <div className='h-5 w-full rounded bg-gray-200' />

            <div className='h-8 w-2/3 rounded bg-gray-200' />

            <div className='h-12 w-full rounded bg-gray-200 mt-8' />

          </div>

        </div>

      </div>
    </div>
  )
}