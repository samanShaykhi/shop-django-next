'use client'

import Link from 'next/link'
import { CiHome } from 'react-icons/ci'
import { FiAlertTriangle, FiRefreshCw } from 'react-icons/fi'

export default function Error ({
  error,
  reset
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className='flex min-h-screen items-center justify-center bg-slate-950 px-4'>
      <div className='max-w-lg rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center shadow-xl'>
        <FiAlertTriangle className='mx-auto mb-4 h-16 w-16 text-red-500' />

        <h1 className='mb-2 text-3xl font-bold text-white'>
          مشکلی پیش آمده است
        </h1>

        <p className='mb-6 text-slate-400'>
          هنگام پردازش درخواست شما خطایی رخ داده است.
        </p>

        {process.env.NODE_ENV === 'development' && (
          <div className='mb-6 rounded-lg bg-slate-800 p-3 text-left text-sm text-red-400'>
            {error.message}
          </div>
        )}

        <div className='flex justify-center gap-3'>
          <button
            onClick={() => reset()}
            className='flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700'
          >
            <FiRefreshCw size={18} />
            تلاش مجدد
          </button>

          <Link
            href='/'
            className='flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-slate-300 transition hover:bg-slate-800'
          >
            <CiHome size={18} />
            صفحه اصلی
          </Link>
        </div>
      </div>
    </div>
  )
}
