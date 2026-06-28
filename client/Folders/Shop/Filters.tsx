import { axiosConfig } from '@/utils/axios/axios'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaChevronDown } from 'react-icons/fa6'
import { getErrorMessage } from '../utils/ErrorHandler/Helper'
import { CategoryProductsType } from '@/types/user'
import { unknown } from 'zod'

interface ContainerType {
  children: React.ReactNode
  label: string
  is_active?: boolean
}
const Container = ({ children, label, is_active }: ContainerType) => {
  const [isOpen, setisOpen] = useState(is_active ? true : false)
  const ChangeDrop = () => setisOpen(!isOpen)

  return (
    <div className='my-5 '>
      <div
        onClick={ChangeDrop}
        className='flex items-center justify-between rounded-lg cursor-pointer '
      >
        <span className='text-white'>{label}</span>
        <span
          className={`text-gray-500 text-sm transition-transform duration-300 ${
            isOpen ? 'rotate-90' : 'rotate-0'
          }`}
        >
          <FaChevronDown />
        </span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='mt-4 mx-4'>{children}</div>
      </div>
    </div>
  )
}
export default function Filters () {
  const [Categorys, setcategorys] = useState<CategoryProductsType[]>([])
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  const minPrice = searchParams.get('min_price')
  const maxPrice = searchParams.get('max_price')

  const router = useRouter()
  const handleCategory = (value: string) => {
    const params = new URLSearchParams(searchParams)

    params.set('category', value)

    params.set('page', '1')

    router.push(`${pathname}?${params.toString()}`)
  }

  const handlePrice = (min: string, max: string) => {
    const params = new URLSearchParams(searchParams)

    params.set('min_price', min)
    params.set('max_price', max)

    params.set('page', '1')

    router.push(`${pathname}?${params.toString()}`)
  }
  const removeFilter = (key: string) => {
    const params = new URLSearchParams(searchParams)
    params.delete(key)
    router.push(`${pathname}?${params.toString()}`)
  }
  useEffect(() => {
    const GetCategori = async () => {
      try {
        const data = await axiosConfig('/product/categories')
        setcategorys(data.data)
      } catch (error) {
        getErrorMessage(error)
      }
    }
    GetCategori()
  }, [])

  const MIN = 0
  const MAX = 48000000

  const [minPriceinp, setMinPriceinp] = useState(Number(minPrice) || 0)

  const [maxPriceinp, setMaxPriceinp] = useState(Number(maxPrice) || 48000000)
  const updatePrice = (newValues: number[]) => {
    const params = new URLSearchParams(searchParams)

    params.set('min_price', String(newValues[0]))

    params.set('max_price', String(newValues[1]))

    params.set('page', '1')

    const query = params.toString()

    router.replace(`${pathname}?${query}`)
  }
  return (
    <div className='flex flex-col'>
      <div className=''>
        <Container is_active={true} label='دسته بندی ها'>
          <ul>
            {category && (
              <button
                onClick={() => removeFilter('category')}
                className='bg-white p-1 text-[11px] rounded mr-auto cursor-pointer'
              >
                حذف فیلتر
              </button>
            )}
            {Categorys && (
              <>
                {Categorys.map(cat => {
                  return (
                    <li
                      onClick={() => handleCategory(cat.slug)}
                      key={cat.id}
                      className={`${
                        category === cat.slug
                          ? 'text-white border-white '
                          : 'text-[#c7c6c6]'
                      } hover:text-white my-4 cursor-pointer border-b-3 border-transparent pb-2 w-fit`}
                    >
                      {cat.title}
                    </li>
                  )
                })}
              </>
            )}
          </ul>
        </Container>
        <Container is_active={true} label='قیمت'>
          {minPrice && maxPrice && (
            <button
              onClick={() => {
                const params = new URLSearchParams(searchParams)
                params.delete('max_price')
                params.delete('min_price')
                router.push(`${pathname}?${params.toString()}`)
                setMinPriceinp(0)
                setMaxPriceinp(48000000)
              }}
              className='bg-white p-1 text-[11px] mb-2 block rounded  cursor-pointer'
            >
              حذف فیلتر
            </button>
          )}
          <div>
            <div>
              <div className='border p-3 rounded text-white flex items-center justify-between mb-2'>
                <span>از</span>
                {minPriceinp.toLocaleString()}
              </div>
              <input
                type='range'
                min={MIN}
                max={MAX}
                step={1000}
                value={minPriceinp}
                onChange={e =>
                  setMinPriceinp(
                    Math.min(Number(e.target.value), maxPriceinp - 1000)
                  )
                }
                onMouseUp={() => {
                  updatePrice([minPriceinp, maxPriceinp])
                }}
                onTouchEnd={() => {
                  updatePrice([minPriceinp, maxPriceinp])
                }}
                className=' w-full'
              />
            </div>
            <div>
              <div className='border mb-2 p-3 rounded text-white flex items-center justify-between'>
                <span>تا</span>
                {maxPriceinp.toLocaleString()}
              </div>
              <input
                type='range'
                min={MIN}
                max={MAX}
                step={1000}
                value={maxPriceinp}
                onChange={e =>
                  setMaxPriceinp(
                    Math.max(Number(e.target.value), minPriceinp + 1000)
                  )
                }
                onMouseUp={() => {
                  updatePrice([minPriceinp, maxPriceinp])
                }}
                onTouchEnd={() => {
                  updatePrice([minPriceinp, maxPriceinp])
                }}
                className=' w-full'
              />
            </div>
          </div>
        </Container>
        <Container label='جستجو در نتایج'>
          <div className='text-white flex items-center'>
            <input
              className='border p-2  w-full border-white rounded-br rounded-tr border-l-0 outline-0 text-white'
              type='text'
              placeholder='جستجو کن'
            />
            <div className='border border-r-0 rounded-bl rounded-tl border-white p-2 cursor-pointer'>
              <CiSearch className='' />
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
