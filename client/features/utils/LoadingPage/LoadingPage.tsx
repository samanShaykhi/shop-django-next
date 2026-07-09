import { useEffect } from 'react'

export default function LoadingPage () {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])
  return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm overflow-hidden z-10">
      <div className='flex flex-col items-center gap-5'>
        <div className='relative h-14 w-14'>
          <div className='absolute inset-0 animate-spin rounded-full border-4 border-gray-200 border-t-indigo-600' />
          <div className='absolute inset-3 rounded-full bg-white' />
        </div>

        <p className='text-gray-600 font-medium tracking-wide'>
          لطفا شکیبا باشید...
        </p>
      </div>
    </div>
  )
}
