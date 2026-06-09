import Link from 'next/link'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
export default function Pagination () {
  return (
    <div className='flex justify-center'>
      <ul className='flex items-center' >
        <li className='' >
          <Link className='bg-white  rounded shadow text-[14px] p-3 hover:bg-black hover:text-white transition duration-300  flex mx-2  items-center' href='/'>
            <FaChevronRight className='ml-1' size={14} /> بعدی
          </Link>
        </li>
        <li><Link className='  rounded shadow text-[14px] p-3  mx-2 bg-black text-white hover:bg-black hover:text-white transition duration-300' href='/'>1</Link></li>
        <li><Link className='bg-white  rounded shadow text-[14px] p-3  mx-2 hover:bg-black hover:text-white transition duration-300' href='/'>2</Link></li>
        <li><Link className='bg-white  rounded shadow text-[14px] p-3  mx-2 hover:bg-black hover:text-white transition duration-300' href='/'>3</Link></li>
        <li>
          <Link className='bg-white  rounded shadow text-[14px] p-3 hover:bg-black hover:text-white transition duration-300 flex mx-2 items-center ' href='/'>
            قبلی <FaChevronLeft className='mr-1' size={14} />
          </Link>
        </li>
      </ul>
    </div>
  )
}
