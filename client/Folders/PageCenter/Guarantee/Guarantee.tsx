import { FaTruckFast } from 'react-icons/fa6'
import { GiTakeMyMoney } from 'react-icons/gi'
import { IoCard } from 'react-icons/io5'
import { MdSupportAgent } from 'react-icons/md'

export default function Guarantee () {
  return (
    <div className='w-[95%] lg:w-[70%] mx-auto my-8 bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-sm'>
      <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6'>
        <div className='flex items-center lg:border-l-2 lg:border-[#cdcdcd] lg:pl-4'>
          <div className='flex flex-col ml-3'>
            <span className='font-bold text-[16px]'>ارسال به موقع</span>
            <span className='text-[#7e7e7e] text-[13px]'>
              ارسال به همه نقاط
            </span>
          </div>
          <FaTruckFast className='text-[#4b4b4b]' size={40} />
        </div>

        <div className='flex items-center lg:border-l-2 lg:border-[#cdcdcd] lg:pl-4'>
          <div className='flex flex-col ml-3'>
            <span className='font-bold text-[16px]'>بازگشت وجه</span>
            <span className='text-[#7e7e7e] text-[13px]'>
              ضمانت 7 روزه بازگشت وجه
            </span>
          </div>
          <GiTakeMyMoney className='text-[#4b4b4b]' size={45} />
        </div>

        <div className='flex items-center lg:border-l-2 lg:border-[#cdcdcd] lg:pl-4'>
          <div className='flex flex-col ml-3'>
            <span className='font-bold text-[16px]'>پرداخت</span>
            <span className='text-[#7e7e7e] text-[13px]'>
              پرداخت الکترونیکی ایمن
            </span>
          </div>
          <IoCard className='text-[#4b4b4b]' size={40} />
        </div>

        <div className='flex items-center'>
          <div className='flex flex-col ml-3'>
            <span className='font-bold text-[16px]'>پشتیبانی</span>
            <span className='text-[#7e7e7e] text-[13px]'>
              پشتیبانی 24 ساعته حتی پس از خرید
            </span>
          </div>
          <MdSupportAgent className='text-[#4b4b4b]' size={40} />
        </div>
      </div>
    </div>
  )
}
