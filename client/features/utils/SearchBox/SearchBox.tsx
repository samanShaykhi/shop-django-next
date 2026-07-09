import { useEffect } from 'react'
import { CiSearch } from 'react-icons/ci'
interface SearchProps {
  activeSearch: boolean
  setactiveSearch: React.Dispatch<React.SetStateAction<boolean>>
}
export default function SearchBox ({
  activeSearch,
  setactiveSearch
}: SearchProps) {
  useEffect(() => {
    if (activeSearch) {
      document.body.style.overflow = 'hidden'
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth
      document.body.style.paddingRight = `${scrollbarWidth}px`
    } else {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [activeSearch])

  return (
    <div
      className={`${
        activeSearch && 'opacity-100 visible'
      } absolute right-0 top-0 w-full invisible opacity-0 min-h-screen transition-opacity  duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-6`}
    >
      <div
        onClick={() => setactiveSearch(false)}
        className='cursor-pointer bg-[#000000ac] fixed top-0 right-0 w-full min-h-screen z-4'
      ></div>
      <div className='absolute top-[10%] right-1/2 translate-x-1/2 w-[92%] sm:w-[80%] md:w-[60%] max-w-2xl bg-white p-4 rounded-3xl z-50'>
        <form action='' className='flex relative'>
          <input
            type='text'
            placeholder='متن جستجو'
            className='w-full p-3 border-2 rounded-[10px] border-[#bbbbbb]'
          />
          <button className='absolute left-2 top-3 cursor-pointer'>
            <CiSearch size={25} />
          </button>
        </form>
      </div>
    </div>
  )
}
