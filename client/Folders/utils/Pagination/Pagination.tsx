'use client'

import { Pagenation } from '@/types/user'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

type Property = {
  ListProduct: Pagenation
}

export default function Pagination({ ListProduct }: Property) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const currentPage = ListProduct.page
  const totalPages = ListProduct.pages

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams)

    params.set('page', String(page))

    router.push(`${pathname}?${params.toString()}`)
  }

  const pages: (number | string)[] = []

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i)
    }
  } else {
    pages.push(1)

    if (currentPage > 3) {
      pages.push('...')
    }

    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(i)
    }

    if (currentPage < totalPages - 2) {
      pages.push('...')
    }

    pages.push(totalPages)
  }

  return (
    <div className='flex justify-center mt-8'>
      <ul className='flex items-center gap-1 md:gap-2 flex-wrap justify-center'>
        {/* Prev */}
        <li>
          <button
            disabled={!ListProduct.has_previous}
            onClick={() => changePage(currentPage - 1)}
            className='flex items-center rounded-lg border px-3 py-2 text-sm
            disabled:opacity-40 disabled:cursor-not-allowed
            hover:bg-black hover:text-white transition'
          >
            <FaChevronRight size={12} className='ml-1' />
            <span className='hidden sm:inline'>قبلی</span>
          </button>
        </li>

        {/* Pages */}
        {pages.map((page, index) =>
          page === '...' ? (
            <li
              key={`dots-${index}`}
              className='px-2 text-gray-500'
            >
              ...
            </li>
          ) : (
            <li key={page}>
              <button
                onClick={() => changePage(Number(page))}
                className={`min-w-[40px] h-10 rounded-lg text-sm transition
                ${
                  currentPage === page
                    ? 'bg-black text-white'
                    : 'bg-white border hover:bg-black hover:text-white'
                }`}
              >
                {page}
              </button>
            </li>
          )
        )}

        {/* Next */}
        <li>
          <button
            disabled={!ListProduct.has_next}
            onClick={() => changePage(currentPage + 1)}
            className='flex items-center rounded-lg border px-3 py-2 text-sm
            disabled:opacity-40 disabled:cursor-not-allowed
            hover:bg-black hover:text-white transition'
          >
            <span className='hidden sm:inline'>بعدی</span>
            <FaChevronLeft size={12} className='mr-1' />
          </button>
        </li>
      </ul>
    </div>
  )
}