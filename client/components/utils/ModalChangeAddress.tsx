import ChangeAddress from '@/features/Dashbord/ChangeAddress/ChangeAddress'
import { Dispatch, SetStateAction, useRef } from 'react'
import { IoCloseSharp } from 'react-icons/io5'

export default function ModalChangeAddress ({
  activeChangeAddress,
  setActiveChangeAddress
}: {
  activeChangeAddress: boolean
  setActiveChangeAddress: Dispatch<SetStateAction<boolean>>
}) {
  const modalRef = useRef<HTMLDivElement | null>(null)
  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.scrollTop = 0
    }
    setActiveChangeAddress(false)
  }
  return (
    <div
      className={`
    fixed inset-0 z-40 flex items-center justify-center
    transition-all duration-300

    ${
      activeChangeAddress
        ? 'opacity-100 pointer-events-auto'
        : 'opacity-0 pointer-events-none'
    }
  `}
    >
      {/* بک‌دراپ */}
      <div
        onClick={() => closeModal()}
        className='absolute inset-0 bg-[#000000b1] backdrop-blur-sm'
      />

      {/* مودال */}
      <div
        ref={modalRef}
        onClick={e => e.stopPropagation()}
        className={`
      relative z-50
  
      sm:w-[90%]
      md:w-[80%]
      lg:w-[45%]
      h-[500px]
      overflow-y-auto
      custom-scroll
      bg-white
      shadow-2xl
      rounded
      transition-all duration-300 ease-out
      
      ${
        activeChangeAddress
          ? 'opacity-100 scale-100 translate-y-0'
          : 'opacity-0 scale-95 translate-y-4'
      }
    `}
      >
        <IoCloseSharp
          onClick={() => closeModal()}
          className='absolute  left-4 top-2 cursor-pointer'
          size={30}
        />
        <ChangeAddress for_Modal={true} closeModal={closeModal} />
      </div>
    </div>
  )
}
