'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { axiosConfig } from '../../utils/axios/axios'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { setToken } from '../store/features/auth'
import { FaArrowRight } from 'react-icons/fa6'
import LoadingPage from '../utils/LoadingPage/LoadingPage'
export default function Login () {
  const { token, user, loading } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  const router = useRouter()
  useEffect(() => {
    if (loading) return
    if (token) router.replace('/')
  }, [token, user, router, loading])

  const [phone_number, setPhone_number] = useState('')

  const Send_Phone_number = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    try {
      const data = await axiosConfig('/account/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: { phone_number }
      })
      dispatch(setToken(data.data))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          {!token ? (
            <div className='container'>
              <div className='flex justify-center  max-h-full w-full items-center'>
                <div className=' h-[calc(100vh-160px)]'></div>
                <div className=' w-[500px] mx-auto mt-12 border-2 border-[#d5d5d5] p-6 rounded-lg h-full'>
                  <div className='flex items-center justify-between mb-12'>
                    <FaArrowRight
                      onClick={() => router.back()}
                      className='cursor-pointer'
                      size={25}
                    />
                    <div className='w-[65%]'>
                      <Image
                        src='/images/logo.svg'
                        width='145'
                        height='45'
                        alt='لوگو'
                      />
                    </div>
                  </div>
                  <div>
                    <span className='block font-medium  my-2'>
                      سلام خوش امدید!
                    </span>
                  </div>
                  <div className='my-4'>
                    <span className='font-bold text-[18px]'>
                      ورود | ثبت نام
                    </span>
                  </div>

                  <div>
                    <form action=''>
                      <div>
                        <label
                          className='block text-[12px] text-[#929292]'
                          htmlFor='phone'
                        >
                          شماره تلفن خود را وارد کنید
                        </label>
                        <input
                          className='block border-[1.5px] border-[#6e6e6e] w-full p-[0.6rem] rounded-lg'
                          type='text'
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setPhone_number(e.target.value)
                          }
                          placeholder='09168922125'
                        />
                      </div>
                      <button
                        onClick={Send_Phone_number}
                        className='block mt-6 bg-black text-white p-[0.8rem] w-full rounded-lg cursor-pointer'
                      >
                        ورود
                      </button>
                    </form>
                  </div>
                </div>
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
