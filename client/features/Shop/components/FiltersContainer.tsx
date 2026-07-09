import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa6'

interface ContainerType {
  children: React.ReactNode
  label: string
  is_active?: boolean
}
export function FiltersContainer ({
  children,
  label,
  is_active
}: ContainerType) {
  const [isOpen, setisOpen] = useState(is_active ? true : false)
  const ChangeDrop = () => setisOpen(!isOpen)

  return (
    <div className='my-5 '>
      <div
        onClick={ChangeDrop}
        className='flex items-center justify-between rounded-lg cursor-pointer '
      >
        <span className='text-white'>{label}</span>
        <span
          className={`text-gray-500 text-sm transition-transform duration-300 ${
            isOpen ? 'rotate-90' : 'rotate-0'
          }`}
        >
          <FaChevronDown />
        </span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='mt-4 mx-4'>{children}</div>
      </div>
    </div>
  )
}
