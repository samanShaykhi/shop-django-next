'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FaArrowRight } from 'react-icons/fa6'
import LoadingPage from '../../utils/LoadingPage/LoadingPage'
import { useRedirectIfAuthenticated } from '../hooks/useRedirectIfAuthenticated'
import { useLogin } from '../hooks/useLogin'
export default function Login () {
  const router = useRouter()
  const { setPhone, submit, token, loading } = useLogin()
  useRedirectIfAuthenticated(token, loading)
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
                            setPhone(e.target.value)
                          }
                          placeholder='09168922125'
                        />
                      </div>
                      <button
                        onClick={submit}
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
