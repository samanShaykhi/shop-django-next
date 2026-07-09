'use client'
import { IoNotificationsOutline } from 'react-icons/io5'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import SideBar from './Sidebar/SideBar'
import style from './style.module.css'
import { FaRegUser } from 'react-icons/fa6'
import { CiLogout } from 'react-icons/ci'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import LoadingPage from '../utils/LoadingPage/LoadingPage'
import Image from 'next/image'
import { ApiUrl } from '@/utils/axios/apiUrl'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { messageCustom } from '@/utils/message/message'
import { axiosConfig } from '@/utils/axios/axios'
import { cleartToken } from '../store/features/auth'
export default function DashbordLayout ({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const dispatch = useAppDispatch()
  const { token, user, loading } = useAppSelector(state => state.auth)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [spinner, setspinner] = useState(false)
  const router = useRouter()
  useEffect(() => {
    if (loading) return
    if (!token || !user) {
      router.replace('/login')
    }
  }, [loading])
  const handleLogout = async () => {
    try {
      setspinner(true)
      const fech = await axiosConfig('/account/logout')
      if (fech.status === 200) {
        dispatch(cleartToken())
        router.replace('/')
        setspinner(false)
      }
    } catch (error) {
      messageCustom(error)
      setspinner(false)
    }
  }
  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          {token && user ? (
            <div className={style.dashbordLayout}>
              {/* Desktop */}
              <div className={style.sidebarDesktop}>
                <SideBar />
              </div>

              {/* Mobile */}
              <div
                className={`${style.sidebarMobile} ${
                  sidebarOpen ? style.open : ''
                }`}
              >
                <SideBar close={() => setSidebarOpen(false)} />
              </div>

              {/* Backdrop */}
              <div
                className={`${style.backdrop} ${
                  sidebarOpen ? style.showBackdrop : ''
                }`}
                onClick={() => setSidebarOpen(false)}
              />
              <div className={style.contentDashbord}>
                <div className='flex items-center justify-between bg-white p-4 flex-wrap gap-3'>
                  <div className='flex items-center gap-3'>
                    <div className='flex items-center border-l pl-4  ml-2'>
                      {user.profile_image ? (
                        <div className=' overflow-hidden rounded-[100%] ml-3  '>
                          <Image
                            className='object-cover'
                            width={45}
                            height={45}
                            alt='profile_image'
                            unoptimized
                            src={`${ApiUrl}${user.profile_image}`}
                          />
                        </div>
                      ) : (
                        <div className='bg-gray-200 text-[#9e9e9e] p-2 rounded-[100%] ml-3  '>
                          <FaRegUser size={35} />
                        </div>
                      )}
                      <span> {user.fullname} </span>
                    </div>

                    <div className='flex'>
                      <AiOutlineMenuUnfold
                        size={25}
                        className='cursor-pointer md:hidden'
                        onClick={() => setSidebarOpen(true)}
                      />
                      <IoNotificationsOutline
                        size={25}
                        className='cursor-pointer mr-2 '
                      />
                    </div>
                  </div>
                  <div>
                    {spinner ? (
                      <div className='flex items-center bg-[#d60000] cursor-pointer text-white p-2  rounded'>
                        <svg
                          aria-hidden='true'
                          className='w-8 h-8 text-neutral-tertiary animate-spin fill-brand'
                          viewBox='0 0 100 101'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                            fill='currentColor'
                          />
                          <path
                            d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                            fill='currentFill'
                          />
                        </svg>
                      </div>
                    ) : (
                      <div
                        onClick={handleLogout}
                        className='flex items-center bg-[#d60000] cursor-pointer text-white p-2  rounded'
                      >
                        <span className='ml-2'>خروج</span>
                        <CiLogout size={25} />
                      </div>
                    )}
                  </div>
                </div>
                {children}
              </div>
            </div>
          ) : (
            <LoadingPage />
          )}
        </>
      )}
    </>
  )
}
