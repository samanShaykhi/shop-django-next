import Link from 'next/link'

export default function EmpetyCart () {
  return (
    <div className='flex my-8 min-h-[60vh] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center'>
      <div className='mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-12 w-12 text-gray-400'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M2.25 3h1.386c.51 0 .955.343 1.087.837L5.61 7.5m0 0h13.278c.75 0 1.41-.52 1.59-1.248l1.02-4.08H5.61Zm0 0L7.5 16.5h10.5m-10.5 0a1.5 1.5 0 1 0 3 0m7.5 0a1.5 1.5 0 1 0 3 0'
          />
        </svg>
      </div>

      <h2 className='text-2xl font-bold text-gray-800'>
        سبد خرید شما خالی است
      </h2>

      <p className='mt-3 max-w-md text-gray-500'>
        برای خرید از فروشگاه ما از دکمه زیر وارد فروشگاه شوید
      </p>
      <Link
        className='mt-8 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600'
        href='/shop'
      >
        <button className='cursor-pointer'>رفتن به فروشگاه</button>
      </Link>
    </div>
  )
}
