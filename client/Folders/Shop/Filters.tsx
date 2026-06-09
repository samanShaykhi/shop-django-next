import Link from 'next/link'
import { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaChevronDown } from 'react-icons/fa6'

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
  return (
    <div className='flex flex-col'>
      <div className=''>
        <Container is_active={true} label='دسته بندی ها'>
          <ul>
            <li className='text-[#c7c6c6] hover:text-white my-4 cursor-pointer '>
              <Link href='/'> کیف </Link>
            </li>
            <li className='text-[#c7c6c6] hover:text-white my-4 cursor-pointer '>
              <Link href='/'> لوازم خانگی </Link>
            </li>
            <li className='text-[#c7c6c6] hover:text-white my-4 cursor-pointer '>
              <Link href='/'> فروشگاه کیف و کفش </Link>
            </li>
            <li className='text-[#c7c6c6] hover:text-white my-4 cursor-pointer '>
              <Link href='/'> لوازم الکترونیکی </Link>
            </li>
            <li className='text-[#c7c6c6] hover:text-white my-4 cursor-pointer '>
              <Link href='/'> لوازم جانبی موبایل </Link>
            </li>
          </ul>
        </Container>
        <Container is_active={true} label='قیمت'>
          <div>
            <div className='flex justify-between text-white items-center mb-4 '>
              <input
                className='w-[85%] border p-2 border-white rounded outline-0'
                type='text'
                placeholder='از'
              />
              <span className=' w-[12%]  '>تومان</span>
            </div>
            <div className='flex justify-between text-white items-center '>
              <input
                className='w-[85%] border p-2 border-white rounded outline-0'
                type='text'
                placeholder='از'
              />
              <span className=' w-[12%]  '>تومان</span>
            </div>
          </div>
          <div className='flex justify-between items-center my-4'>
            <button className='bg-white p-3 w-[70%] rounded '>
              اعمال فیلتر
            </button>
            <button className='bg-[#b3b3b3] p-3 w-[25%] rounded border-white border'>
              حذف
            </button>
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
