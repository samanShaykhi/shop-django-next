import { useAppSelector } from '@/features/store/hooks'
import { useRouter } from 'next/navigation'
import { Dispatch, SetStateAction } from 'react'
import { CiLocationOn, CiShoppingCart } from 'react-icons/ci'
import { FaAngleLeft, FaArrowRightLong } from 'react-icons/fa6'
import { IoWalletOutline } from 'react-icons/io5'

export default function DetailsShaping ({
  setActiveChangeAddress
}: {
  setActiveChangeAddress: Dispatch<SetStateAction<boolean>>
}) {
  const router = useRouter()
  const auth = useAppSelector(state => state.auth)
  const address = useAppSelector(state => state.auth.user?.addresses?.[0])
  return (
    <div className='border border-[#cbcbcb] rounded-lg   mt-4'>
      <div className='flex flex-col p-6 '>
        <div
          onClick={() => router.push('/cart')}
          className='flex items-center mb-3 cursor-pointer'
        >
          <FaArrowRightLong className='ml-2' />
          <span className='font-bold text-[18px]'>برگشت به سبد</span>
        </div>

        <div className='flex items-center '>
          <div className='ml-3 relative text-[#ff5c35]'>
            <CiShoppingCart size={25} />
            <span className='text-[11px] absolute right-1'>سبد</span>
          </div>
          <div className='h-[3px] bg-[#ffa088] w-full'></div>
          <div className='mx-3 relative text-[#ff5c35]'>
            <CiLocationOn size={25} />
            <span className='text-[11px]  -right-full absolute  whitespace-nowrap'>
              انتخاب آدرس و ارسال
            </span>
          </div>
          <div className='h-[3px] bg-gray-300 w-full'></div>
          <div className='mr-3'>
            <IoWalletOutline size={25} />
            <span className='text-[11px] absolute'>پرداخت</span>
          </div>
        </div>
      </div>
      <div className='flex flex-col border-t border-[#cbcbcb] mt-8 p-6'>
        <div>
          <span className='text-[#acacac]'>ارسال به </span>
          <span className='font-bold'>
            {' '}
            {address?.receiver_name} ({address?.receiver_phone})
          </span>
        </div>
        <div className='flex my-4 text-black font-bold'>
          <CiLocationOn className='ml-1' />
          <span>
            {' '}
            {auth.user?.addresses?.[0]?.province_city} -{' '}
            {auth.user?.addresses?.[0]?.address} -{' '}
            {auth.user?.addresses?.[0]?.address_details}{' '}
          </span>
        </div>
        <div className=''>
          <button
            onClick={() => setActiveChangeAddress(true)}
            className='flex mr-auto items-center bg-black border-2 border-black  text-white p-2 rounded transition cursor-pointer hover:bg-transparent hover:text-black  '
          >
            <span className='ml-1'>تغییر آدرس</span>
            <FaAngleLeft size={12} />
          </button>
        </div>
      </div>
    </div>
  )
}
