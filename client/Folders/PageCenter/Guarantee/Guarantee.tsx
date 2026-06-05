import { FaTruckFast } from 'react-icons/fa6'
import { GiTakeMyMoney } from 'react-icons/gi'
import { IoCard } from 'react-icons/io5'
import { MdSupportAgent } from 'react-icons/md'
export default function Guarantee () {
  return (
    <div className='w-[70%] mx-auto my-[2rem] bg-white p-8'>
      <div className='flex justify-between '>
        <div className='flex border-l-2 pl-4 ml-4 border-[#cdcdcd]'>
          <div className='flex flex-col ml-3'>
            <span className='font-bold text-[16px]'> ارسال به موقع</span>
            <span className='text-[#7e7e7e] text-[13px] block'>
              ارسال به همه نقاط
            </span>
          </div>
          <FaTruckFast className='text-[#4b4b4b]' size={40} />
        </div>
        <div className='flex border-l-2 pl-4 ml-4 border-[#cdcdcd]'>
          <div className='flex flex-col ml-3'>
            <span className='font-bold text-[16px]'> بازگشت وجعه</span>
            <span className='text-[#7e7e7e] text-[13px] block'>
              ضمانت 7 روزه بازگشت وجعه
            </span>
          </div>
          <GiTakeMyMoney className='text-[#4b4b4b]' size={45} />
        </div>
        <div className='flex border-l-2 pl-4 ml-4 border-[#cdcdcd]'>
          <div className='flex flex-col ml-3'>
            <span className='font-bold text-[16px]'> پرداخت</span>
            <span className='text-[#7e7e7e] text-[13px] block'>
              {' '}
              پرداخت الکترونیکی ایمن
            </span>
          </div>
          <IoCard className='text-[#4b4b4b]' size={40} />
        </div>
        <div className='flex'>
          <div className='flex flex-col ml-3'>
            <span className='font-bold text-[16px]'> پشتیبانی</span>
            <span className='text-[#7e7e7e] text-[13px] block'>
              پشتیبانی 24 ساعته حتی پس از خرید
            </span>
          </div>
          <MdSupportAgent className='text-[#4b4b4b]' size={40} />
        </div>
      </div>
    </div>
  )
}
