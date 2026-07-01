'use client'
import { setAddresses, setUser } from '@/Folders/store/features/auth'
import { useAppDispatch, useAppSelector } from '@/Folders/store/hooks'
import Breadcrumbs from '@/Folders/utils/Breadcrumbs/Breadcrumbs'
import { getErrorMessage } from '@/Folders/utils/ErrorHandler/Helper'
import LoadingPage from '@/Folders/utils/LoadingPage/LoadingPage'
import { axiosConfig } from '@/utils/axios/axios'
import { messageCustom } from '@/utils/message/message'
import {
  AddressFormType,
  addressSchema
} from '@/utils/validations/address.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { CgSpinner } from 'react-icons/cg'
import { FaAngleLeft } from 'react-icons/fa6'
import { TiStarFullOutline } from 'react-icons/ti'
type propse = {
  closeModal?: () => void
  for_Modal?: boolean
}
export default function ChangeAddress ({ closeModal, for_Modal }: propse) {
  const { token, user } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  const [fechLoading, setfechLoading] = useState(false)
  const [receiver_name, setreceiver_name] = useState('')
  const [province_city, setprovince_city] = useState('')
  const [address, setaddress] = useState('')
  const [address_details, setaddress_details] = useState('')
  const [postal_code, setpostal_code] = useState('')
  const [receiver_phone, setreceiver_phone] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<AddressFormType>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      receiver_name: '',
      province_city: '',
      address: '',
      address_details: '',
      postal_code: '',
      receiver_phone: ''
    }
  })
  useEffect(() => {
    if (!user) return
    let AddressValidReset
    if (user.addresses) {
      if (user.addresses.length > 0) {
        reset({
          receiver_name: user.addresses[0].receiver_name,
          receiver_phone: user.addresses[0].receiver_phone,
          province_city: user.addresses[0].province_city,
          address: user.addresses[0].address,
          address_details: user.addresses[0].address_details,
          postal_code: user.addresses[0].postal_code
        })
        AddressValidReset = true
      }
    }
    if (!AddressValidReset) {
      reset({
        receiver_name: user.fullname || '',
        receiver_phone: user.phone_number || '',
        province_city: '',
        address: '',
        address_details: '',
        postal_code: ''
      })
    }
  }, [user, reset, dispatch])
  const onSubmit = async (data: AddressFormType) => {
    let getId
    let method = 'POST'
    if (user?.addresses) {
      if (user.addresses.length > 0) {
        getId = user?.addresses[0].id
        method = 'PATCH'
      }
    }
    try {
      setfechLoading(true)
      const Sending_Address = axiosConfig('/account/address-changes', {
        method,
        headers: {
          Authorization: `Bearer ${token}`
        },
        data: { ...data, id: getId }
      })

      const fechData = (await Sending_Address).data
      dispatch(setAddresses(fechData))
      setreceiver_name('')
      setprovince_city('')
      setaddress('')
      setaddress_details('')
      setpostal_code('')
      setreceiver_phone('')
      setfechLoading(false)
      closeModal?.()
      messageCustom('آدرس تغییر کرد.', 'success', 4000)
    } catch (error) {
      setfechLoading(false)
      getErrorMessage(error)
    }
  }
  return (
    <>
      {user ? (
        <div>
          {!for_Modal && (
            <div className='bg-white p-4 border-t border-b'>
              <Breadcrumbs
                homeLabel='خانه'
                items={[
                  { label: 'داشبورد', href: '/dashbord' },
                  { label: 'آدرس' }
                ]}
                separator={<FaAngleLeft />}
              />
            </div>
          )}
          <div className='p-4 bg-white my-5 shadow roundedv'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='my-8 flex flex-col'>
                <label className='mb-3 font-normal flex items-center'>
                  <span>نام و نام خانوادگی تحویل گیرنده</span>
                  <TiStarFullOutline className='mr-1' color='red' size={9} />
                </label>

                <input
                  {...register('receiver_name', {
                    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                      setreceiver_name(e.target.value)
                  })}
                  className='border-2 rounded p-3'
                  type='text'
                  placeholder='نام و نام خانوادگی'
                />

                {errors.receiver_name && (
                  <span className='text-red-500 text-xs mt-2'>
                    {errors.receiver_name.message}
                  </span>
                )}
              </div>
              <div className='my-8 flex flex-col'>
                <label className='mb-3 font-normal flex items-center'>
                  <span>استان و شهر</span>
                  <TiStarFullOutline className='mr-1' color='red' size={9} />
                </label>

                <input
                  {...register('province_city', {
                    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                      setprovince_city(e.target.value)
                  })}
                  className='border-2 rounded p-3'
                  type='text'
                  placeholder='استان و شهر'
                />

                {errors.province_city && (
                  <span className='text-red-500 text-xs mt-2'>
                    {errors.province_city.message}
                  </span>
                )}
              </div>
              <div className='my-8 flex flex-col'>
                <label className='mb-3 font-normal flex items-center'>
                  <span>آدرس دقیق</span>
                  <TiStarFullOutline className='mr-1' color='red' size={9} />
                </label>

                <textarea
                  {...register('address', {
                    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                      setaddress(e.target.value)
                  })}
                  className='border-2 rounded p-3 min-h-20 max-h-20'
                  placeholder='آدرس'
                />

                {errors.address && (
                  <span className='text-red-500 text-xs mt-2'>
                    {errors.address.message}
                  </span>
                )}
              </div>
              <div className='my-8 flex flex-col'>
                <label className='mb-3 font-normal flex items-center'>
                  <span>جزئیات آدرس</span>
                  <TiStarFullOutline className='mr-1' color='red' size={9} />
                </label>

                <input
                  {...register('address_details', {
                    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                      setaddress_details(e.target.value)
                  })}
                  className='border-2 rounded p-3'
                  type='text'
                  placeholder='پلاک ، طبقه ، واحد'
                />

                {errors.address_details && (
                  <span className='text-red-500 text-xs mt-2'>
                    {errors.address_details.message}
                  </span>
                )}
              </div>
              <div className='flex justify-between gap-4'>
                <div className='my-8 flex flex-col w-[48%]'>
                  <label className='mb-3 font-normal flex items-center'>
                    <span>کد پستی 10 رقمی</span>
                    <TiStarFullOutline className='mr-1' color='red' size={9} />
                  </label>

                  <input
                    {...register('postal_code', {
                      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                        setpostal_code(e.target.value)
                    })}
                    className='border-2 rounded p-3'
                    type='text'
                    placeholder='کد پستی'
                  />

                  {errors.postal_code && (
                    <span className='text-red-500 text-xs mt-2'>
                      {errors.postal_code.message}
                    </span>
                  )}
                </div>

                <div className='my-8 flex flex-col w-[48%]'>
                  <label className='mb-3 font-normal flex items-center'>
                    <span>شماره موبایل تحویل گیرنده</span>
                    <TiStarFullOutline className='mr-1' color='red' size={9} />
                  </label>

                  <input
                    {...register('receiver_phone', {
                      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                        setreceiver_phone(e.target.value)
                    })}
                    className='border-2 rounded p-3'
                    type='text'
                    placeholder='موبایل'
                  />

                  {errors.receiver_phone && (
                    <span className='text-red-500 text-xs mt-2'>
                      {errors.receiver_phone.message}
                    </span>
                  )}
                </div>
              </div>

              {receiver_name ||
              province_city ||
              address ||
              address_details ||
              postal_code ||
              receiver_phone ? (
                <>
                  {!fechLoading ? (
                    <button className='bg-black block w-full text-[16px] p-5 rounded cursor-pointer text-white'>
                      ارسال آدرس
                    </button>
                  ) : (
                    <button
                      type='button'
                      className='bg-[#5f5f5f]  w-full text-[16px] p-5 rounded text-white cursor-no-drop flex justify-center items-center opacity-[0.3]'
                    >
                      ارسال آدرس
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
                  ارسال آدرس
                </button>
              )}
            </form>
          </div>
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  )
}
