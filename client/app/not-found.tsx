import Link from 'next/link'
import { LuSearchX } from 'react-icons/lu'

export default function NotFound () {
  return (
    <div className='flex min-h-screen items-center justify-center bg-slate-950 px-4'>
      <div className='max-w-lg text-center'>
        <LuSearchX className='mx-auto mb-6 h-20 w-20 text-blue-500' />

        <h1 className='mb-3 text-6xl font-black text-white'>404</h1>

        <h2 className='mb-4 text-2xl font-semibold text-slate-200'>
          صفحه مورد نظر پیدا نشد
        </h2>

        <p className='mb-8 text-slate-400'>
          آدرسی که وارد کرده‌اید وجود ندارد یا حذف شده است.
        </p>

        <Link
          href='/'
          className='inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700'
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  )
}
