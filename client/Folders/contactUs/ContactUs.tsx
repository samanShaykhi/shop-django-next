import { Timer, Headphones } from 'lucide-react'
export default function ContactUs () {
  return (
    <div className='container'>
      <div className='my-[2rem] relative'>
        <h1 className="text-2xl font-bold before:content-[''] before:absolute before:bottom-[-10px]  before:w-[60px] before:h-[2.5px] before:bg-[#858585]">
          تماس با نیواتو
        </h1>
      </div>
      <div className='mb-[2rem] shadow p-5 rounded-2xl'>
        <div>
          <span className='text-[20px] mt-[2rem] font-bold block mb-4'>
            {' '}
            دفتر مرکزی{' '}
          </span>
          <span>
            استان تهران شهر تهران - بالاتر از میدان ونک - خیابان خدامی - روبه
            روی هتل هما - کوچه شادی۱ - ساختمان ونک پلازا - پلاک ۳۱
          </span>
        </div>

        <div className='my-4 '>
          <div className='my-6 flex justify-center '>
            <div className='flex'>
              <Timer />
              <span>پاسخگویی ۲۴ ساعته و ۷ روز هفته</span>
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='bg-[#efefef] w-[48%] text-center rounded-[4px]  py-4'>
              <div>
                <Headphones className='m-auto' />
                <span className='my-2 block'>تلفن تماس و فکس</span>
              </div>
              <div>
                <span className='block'>۰۲۱ - ۹۱۰۰۰۱۰۰</span>
                <span className='block mt-2'>۰۲۱ - ۶۱۹۳۰۰۰۰</span>
              </div>
            </div>
            <div className='bg-[#efefef] w-[48%] text-center rounded-[4px]  py-4'>
              <div>
                <Headphones className='m-auto' />
                <span className='my-2 block'>ایمیل سازمانی</span>
              </div>
              <div>
                <span className='block'>info@saman.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form action='' className='my-[3rem]'>
        <div className='p-5 border-[1.5] border-[#e4e4e4]  rounded-2xl'>
          <div className=' relative'>
            <span className="text-2xl mb-6 block font-bold before:content-[''] before:absolute before:bottom-[-10px]  before:w-[60px] before:h-[2.5px] before:bg-[#858585]">
              ارسال پیام به ما
            </span>
          </div>
          <div className='flex justify-between'>
            <div className='w-1/2'>
              <div className='pl-5'>
                <label htmlFor=''>
                  موضوع <span className='text-red-500 font-bold'>*</span>
                </label>
                <input
                  className='block w-full focus:border-[#2424fe] outline-0 border-[1.5px] border-[#d0d0d0] rounded-[5px] p-[.6rem] mt-3 '
                  type='text'
                  name=''
                  id=''
                  placeholder='موضوع'
                />
              </div>
            </div>
            <div className='w-1/2'>
              <div className='pr-5'>
                <label htmlFor=''>
                  نام و نام خانوادگی{' '}
                  <span className='text-red-500 font-bold'>*</span>
                </label>
                <input
                  className='block w-full focus:border-[#2424fe] outline-0 border-[1.5px] border-[#d0d0d0] rounded-[5px] p-[.6rem] mt-3 '
                  type='text'
                  name=''
                  id=''
                  placeholder='نام و نام خانوادگی'
                />
              </div>
            </div>
          </div>
          <div className='flex justify-between my-[1.5rem]'>
            <div className='w-1/2'>
              <div className='pl-5'>
                <label htmlFor=''>ایمیل</label>
                <input
                  className='block w-full focus:border-[#2424fe] outline-0 border-[1.5px] border-[#d0d0d0] rounded-[5px] p-[.6rem] mt-3 '
                  type='text'
                  name=''
                  id=''
                  placeholder='ایمیل'
                />
              </div>
            </div>
            <div className='w-1/2'>
              <div className='pr-5'>
                <label htmlFor=''>
                  شماره تماس
                  <span className='text-red-500 font-bold'>*</span>
                </label>
                <input
                  className='block w-full focus:border-[#2424fe] outline-0 border-[1.5px] border-[#d0d0d0] rounded-[5px] p-[.6rem] mt-3 '
                  type='text'
                  name=''
                  id=''
                  placeholder='شماره تماس'
                />
              </div>
            </div>
          </div>
          <div className='w-full'>
            <div>
              <label htmlFor=''>
                شماره سفارش
                <span className='text-red-500 font-bold'>*</span>
              </label>
              <input
                className='block w-full focus:border-[#2424fe] outline-0 border-[1.5px] border-[#d0d0d0] rounded-[5px] p-[.6rem] mt-3 '
                type='number'
                name=''
                id=''
                placeholder='شماره سفارش'
              />
            </div>
          </div>
          <div className='w-full my-[1.5rem]'>
            <div>
              <label htmlFor=''>
                متن پیام
                <span className='text-red-500 font-bold'>*</span>
              </label>
              <textarea
                className='block w-full outline-0 focus:border-[#2424fe]  border-[1.5px] border-[#d0d0d0] rounded-[5px] p-[.6rem] mt-3 '
                rows={10}
                placeholder='متن پیام'
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
