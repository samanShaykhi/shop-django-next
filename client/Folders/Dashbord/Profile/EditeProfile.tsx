'use client'
import Breadcrumbs from '@/Folders/utils/Breadcrumbs/Breadcrumbs'
import { FaAngleLeft } from 'react-icons/fa6'
import { LuUserRound } from 'react-icons/lu'
import { FiEdit } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  profileSchema,
  ProfileFormType
} from '@/utils/validations/profile.schema'
import { axiosConfig } from '@/utils/axios/axios'
import { useAppSelector } from '@/Folders/store/hooks'

export default function EditeProfile () {
  const { token, user, loading, error } = useAppSelector(state => state.auth)
  useEffect(() => {}, [token])
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ProfileFormType>({
    resolver: zodResolver(profileSchema),
    mode: 'onBlur'
  })

  const onSubmit = async (data: ProfileFormType) => {
    console.log(data)
  try {
      const sending_for_edit = axiosConfig('', {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  } catch (error) {
    
  }
    // API Call
  }
  return (
    <div>
      <div className='bg-white p-4 border-t border-b'>
        <Breadcrumbs
          homeLabel='خانه'
          items={[
            { label: 'داشبورد', href: '/dashbord' },
            { label: 'ویرایش حساب کاربری' }
          ]}
          separator={<FaAngleLeft />}
        />
      </div>

      <div className='py-4 bg-white my-5 shadow roundedv'>
        <div className=' w-[40%] mx-auto  bg-white '>
          <div>
            <div className='w-fit p-4 relative bg-[#a4a4a4] rounded-[100%] transition hover:bg-[#6e6e6e] cursor-pointer '>
              <LuUserRound size={80} className='text-[#3f3f3f]' />
              <FiEdit
                size={22}
                color='white'
                className='absolute top-[46px] right-12 '
              />
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='my-4'>
              <div className='my-8 flex flex-col'>
                <label className='mb-3 font-normal'>نام و نام خانوادگی</label>

                <input
                  {...register('full_name')}
                  className='border-2 rounded p-3'
                  type='text'
                  placeholder='نام و نام خانوادگی'
                />

                {errors.full_name && (
                  <span className='text-red-500 text-xs mt-2'>
                    {errors.full_name.message}
                  </span>
                )}
              </div>
              <div className='my-8 flex flex-col'>
                <label className='mb-3 font-normal'> شماره همراه </label>
                <span className='font-bold'> 09168922125 </span>
              </div>
              <div className='my-8 flex flex-col'>
                <label className='mb-3 font-normal'>نام کاربری</label>

                <input
                  {...register('userName')}
                  className='border-2 rounded p-3'
                  type='text'
                  placeholder='نام کاربری'
                />

                {errors.userName && (
                  <span className='text-red-500 text-xs mt-2'>
                    {errors.userName.message}
                  </span>
                )}

                <span className='text-[11px] mt-2 text-[#717171]'>
                  نام کاربری خود را انگلیسی وارد کنید.
                </span>
              </div>
              <div className='my-8 flex flex-col'>
                <label className='mb-3 font-normal'>ایمیل</label>

                <input
                  {...register('email')}
                  className='border-2 rounded p-3'
                  type='email'
                  placeholder='example@example.com'
                />

                {errors.email && (
                  <span className='text-red-500 text-xs mt-2'>
                    {errors.email.message}
                  </span>
                )}
              </div>
              <button className='bg-black block w-full text-[16px] p-5 rounded cursor-pointer text-white'>
                ارسال تغییرات
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
