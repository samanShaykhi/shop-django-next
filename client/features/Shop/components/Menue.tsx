import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'

export interface MenuItem {
  id: string
  label: string
  icon?: string
  children?: MenuItem[]
}

interface NestedMenuProps {
  items: MenuItem[]
  level?: number
}

const NestedMenu: React.FC<NestedMenuProps> = ({ items, level = 0 }) => {
  return (
    <ul className='w-full space-y-1'>
      {items.map(item => (
        <MenuItemComponent key={item.id} item={item} level={level} />
      ))}
    </ul>
  )
}

const MenuItemComponent: React.FC<{ item: MenuItem; level: number }> = ({
  item,
  level
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const hasChildren = item.children && item.children.length > 0

  const toggleOpen = () => {
    if (hasChildren) setIsOpen(!isOpen)
  }

  return (
    <li>
      {/* آیتم منو */}
      <div
        className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 ${
          level > 0 ? 'ml-4' : ''
        }`}
        onClick={toggleOpen}
      >
        <div className='flex items-center gap-2'>
          {item.icon && <span className='text-gray-500'>{item.icon}</span>}
          <span className='text-gray-800 dark:text-gray-200 font-medium'>
            {item.label}
          </span>
        </div>
        {hasChildren && (
          <span
            className={`text-gray-500 text-sm transition-transform duration-300 ${
              isOpen ? 'rotate-90' : 'rotate-0'
            }`}
          >
            <BsChevronDown />
          </span>
        )}
      </div>

      {/* زیرمنو با انیمیشن */}
      {hasChildren && (
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className='mt-1'>
            <NestedMenu items={item.children!} level={level + 1} />
          </div>
        </div>
      )}
    </li>
  )
}

export default NestedMenu
