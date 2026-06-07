'use client'
import { IoNotificationsOutline } from 'react-icons/io5'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import SideBar from './Sidebar/SideBar'
import style from './style.module.css'
import { FaRegUser } from 'react-icons/fa6'
import { CiLogout } from 'react-icons/ci'
export default function DashbordLayout ({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={style.dashbordLayout}>
      <div className={style.sidebarDashbord}>
        <SideBar />
      </div>
      <div className={style.contentDashbord}>
        <div className='flex items-center justify-between bg-white p-4 '>
          <div className='flex items-center'>
            <div className='flex items-center border-l pl-4  ml-2'>
              <div className='bg-gray-200 text-[#9e9e9e] p-2 rounded-[100%] ml-3  '>
                <FaRegUser size={35} />
              </div>
              <span> سامان شیخی </span>
            </div>

            <div className='flex'>
              <AiOutlineMenuUnfold size={25} className='cursor-pointer' />
              <IoNotificationsOutline
                size={25}
                className='cursor-pointer mr-2 '
              />
            </div>
          </div>
          <div>
            <div className='flex items-center bg-[#d60000] cursor-pointer text-white p-2  rounded'>
              <span className='ml-2'>خروج</span>
              <CiLogout size={25} />
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}
