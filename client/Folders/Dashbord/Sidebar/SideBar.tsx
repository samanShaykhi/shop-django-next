import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { TfiDashboard } from 'react-icons/tfi'
import { TbUserEdit } from 'react-icons/tb'
export default function SideBar () {
  const pathname = usePathname()

  return (
    <div>
      <div className='bg-[#b0b0b0] flex justify-center py-2 '>
        <Link href='/'>
          <Image src='/images/logo.svg' width='145' height='45' alt='لوگو' />
        </Link>
      </div>
      <div className='p-3'>
        <ul className='text-white'>
          <li
            className={`${
              pathname === '/dashbord' && 'bg-[#2d3341] text-white'
            } hover:bg-[#2d3341] p-2 hover:text-white text-[#a3a3a3] transition my-3`}
          >
            <Link className='flex items-center' href='/dashbord'>
              <TfiDashboard className='ml-2 ' size={18} />
              <span className='text-white'>داشبورد</span>
            </Link>
          </li>
          <li
            className={`${
              pathname === '/dashbord/edit-profile' && 'bg-[#2d3341] text-white'
            } hover:bg-[#2d3341] p-2 hover:text-white text-[#a3a3a3] transition my-3`}
          >
            <Link className='flex items-center' href='/dashbord/edit-profile'>
              <TbUserEdit className='ml-2 ' size={18} />
              <span className='text-white'>ویرایش حساب کاربری</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
