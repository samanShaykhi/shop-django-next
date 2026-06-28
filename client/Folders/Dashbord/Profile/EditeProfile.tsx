'use client'
import Breadcrumbs from '@/Folders/utils/Breadcrumbs/Breadcrumbs'
import { FaAngleLeft } from 'react-icons/fa6'
import { LuUserRound } from 'react-icons/lu'
import { FiEdit } from 'react-icons/fi'
import {  useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  profileSchema,
  ProfileFormType
} from '@/utils/validations/profile.schema'
import { axiosConfig } from '@/utils/axios/axios'
import { useAppDispatch, useAppSelector } from '@/Folders/store/hooks'
import { getErrorMessage } from '@/Folders/utils/ErrorHandler/Helper'
import { setUser } from '@/Folders/store/features/auth'
import { ApiUrl } from '@/utils/axios/apiUrl'
import Image from 'next/image'
import { CgSpinner } from 'react-icons/cg'
export default function EditeProfile () {
  const { token, user } = useAppSelector(state => state.auth)
  const [preview, setPreview] = useState<string | null>(null)
  const dispatch = useAppDispatch()
  const [fechLoading, setfechLoading] = useState(false)
  const [email, setemail] = useState('')
  const [username, setusername] = useState('')
  const [image_profile, setimage_profile] = useState('')
  const [fullname, setfullname] = useState('')

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm<ProfileFormType>({
    resolver: zodResolver(profileSchema),
    mode: 'onBlur',
    defaultValues: {
      full_name: '',
      userName: '',
      email: ''
    }
  })

  useEffect(() => {
    if (!user) return

    reset({
      full_name: user?.fullname || '',
      userName: user?.username || '',
      email: user?.email || ''
    })
  }, [user, reset])

  const onSubmit = async (data: ProfileFormType) => {
    const profile_image = data.profile_image?.[0]
    const formData = new FormData()
    if (data.full_name) formData.append('fullname', data.full_name)
    if (data.email) formData.append('email', data.email)
    if (data.profile_image.length)
      formData.append('profile_image', profile_image)
    if (data.userName) formData.append('username', data.userName)
    try {
      setfechLoading(true)
      const sending_for_edit = axiosConfig('/account/edit-profile', {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`
        },
        data: formData
      })
      const user = (await sending_for_edit).data
      dispatch(setUser({ user }))
      setfechLoading(false)

      setemail('')
      setimage_profile('')
      setusername('')
      setfullname('')
      setPreview(null)
    } catch (error) {
      setfechLoading(false)
      getErrorMessage(error)
    }
  }

  const selectFile = useRef<HTMLInputElement>(null)
  const handleSelectFile = () => {
    selectFile.current?.click()
  }

  const profile_image = watch('profile_image')

  useEffect(() => {
    if (!profile_image?.[0]) {
      setPreview(null)
      setimage_profile('')
      return
    }

    const url = URL.createObjectURL(profile_image[0])
    setimage_profile(profile_image[0])
    setPreview(url)
    return () => {
      URL.revokeObjectURL(url)
    }
  }, [profile_image])

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
            <div className='flex flex-col'>
              {user?.profile_image ? (
                <div
                  onClick={handleSelectFile}
                  className=' mb-3 overflow-hidden relative bg-[#a4a4a4] rounded-[100%] transition hover:bg-[#6e6e6e] cursor-pointer w-[120px] h-[120px]'
                >
                  <Image
                    className=' w-full'
                    width={90}
                    height={90}
                    alt='profile_image'
                    unoptimized
                    src={`${ApiUrl}${user.profile_image}`}
                  />
                </div>
              ) : (
                <div className='w-fit mb-3 p-4 relative bg-[#a4a4a4] rounded-[100%] transition hover:bg-[#6e6e6e] cursor-pointer '>
                  <LuUserRound size={80} className='text-[#3f3f3f]' />
                  <FiEdit
                    size={22}
                    color='white'
                    className='absolute top-[46px] right-12 '
                  />
                </div>
              )}
              {errors.profile_image && (
                <span className='text-red-500 text-xs mt-2'>
                  {String(errors.profile_image?.message ?? '')}
                </span>
              )}
              {preview && (
                <Image
                  width={100}
                  height={100}
                  src={preview}
                  alt='preview'
                  className='w-32 h-32 rounded-full object-cover my-3'
                />
              )}
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='my-4'>
              <input
                type='file'
                className='hidden'
                accept='.png,.jpg,.jpeg,.webp'
                {...register('profile_image')}
                ref={e => {
                  register('profile_image').ref(e)
                  selectFile.current = e
                }}
              />
              <div className='my-8 flex flex-col'>
                <label className='mb-3 font-normal'>نام و نام خانوادگی</label>

                <input
                  {...register('full_name', {
                    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                      setfullname(e.target.value)
                  })}
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
                  {...register('userName', {
                    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                      setusername(e.target.value)
                  })}
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
                  {...register('email', {
                    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                      setemail(e.target.value)
                  })}
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
              {fullname || image_profile || username || email ? (
                <>
                  {!fechLoading ? (
                    <button className='bg-black block w-full text-[16px] p-5 rounded cursor-pointer text-white'>
                      ارسال تغییرات
                    </button>
                  ) : (
                    <button
                      type='button'
                      className='bg-[#5f5f5f]  w-full text-[16px] p-5 rounded text-white cursor-no-drop flex justify-center items-center opacity-[0.3]'
                    >
                      ارسال تغییرات
                      <CgSpinner
                        color='white'
                        size={30}
                        className='mr-3  animate-spin ...'
                      />
                    </button>
                  )}
                </>
              ) : (
                <button
                  type='button'
                  className='bg-[#5f5f5f] opacity-[0.3] cursor-no-drop block w-full text-[16px] p-5 rounded text-white'
                >
                  ارسال تغییرات
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
