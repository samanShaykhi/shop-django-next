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
      } absolute right-0 top-0 w-full invisible opacity-0 h-[100vh] transition-[opacity,visibility] duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-6`}
    >
      <div
        onClick={() => setactiveSearch(false)}
        className='cursor-pointer bg-[#000000ac] fixed top-0 right-0 w-full h-[100vh] z-4'
      ></div>
      <div className='absolute w-[60%] right-[20%] left-[20%] top-[15%]  z-5 bg-white p-4 rounded-3xl'>
        <form action='' className='flex relative'>
          <input
            type='text'
            placeholder='متن جستجو'
            className='w-[100%] p-3 border-2 rounded-[10px] border-[#bbbbbb]'
          />
          <button className='absolute left-2 top-[12px] cursor-pointer'>
            <CiSearch />
          </button>
        </form>
      </div>
    </div>
  )
}
