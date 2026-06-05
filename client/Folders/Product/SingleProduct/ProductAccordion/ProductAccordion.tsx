'use client'

import { useState } from 'react'
import { FaRegUser } from 'react-icons/fa6'
import { IoStar } from 'react-icons/io5'
import { TiStarFullOutline } from 'react-icons/ti'

//  bg-[var(--minColer)]
interface Profile {
  image?: string
  first_name: string
  last_name: string
}
interface Comment {
  id: number
  profile: Profile
  createdAt: string
  text_comment: string
  star: number
}
type DescriptionItem = {
  nameItem: 'discription'
  lable: string
  content: {
    dis: string
  }
}

type CommentsItem = {
  nameItem: 'comments'
  lable: string
  content: Comment[]
}

type LableType = DescriptionItem | CommentsItem
export default function ProductAccordion ({ items }: { items: LableType[] }) {
  const [curentItem, setCurentItem] = useState(1)

  return (
    <div className='w-full '>
      <div className='border-b border-b-gray-300 flex '>
        {items.map((head, index) => {
          return (
            <div
              onClick={() => setCurentItem(index + 1)}
              className={`
                ${curentItem === index + 1 && 'text-[var(--secondary_Coler)]'}
                ml-4 text-gray-500 text-[16px] border-b-2 border-b-transparent cursor-pointer hover:text-[var(--secondary_Coler)]  hover:border-b-[var(--secondary_Coler)] transition
                `}
              style={{
                color: `${
                  curentItem === index + 1 ? 'var(--secondary_Coler)' : ''
                }`,
                borderColor: `${
                  curentItem === index + 1 ? 'var(--secondary_Coler)' : ''
                }`
              }}
              key={index}
            >
              <span>{head.lable}</span>
            </div>
          )
        })}
      </div>
      <div className='mt-4'>
        {items.map((item, index) => {
          return (
            <div key={index}>
              {curentItem === index + 1 && item.nameItem === 'discription' && (
                <div>
                  <p>{item.content.dis}</p>
                </div>
              )}
              {curentItem === index + 1 && item.nameItem === 'comments' && (
                <div>
                  {item.content.map((comment, index) => {
                    return (
                      <div key={index} className=' my-6'>
                        <div className='flex items-center'>
                          <div className='bg-gray-200 text-[#9e9e9e] p-2 rounded-[100%] ml-3  '>
                            <FaRegUser size={35} />
                          </div>
                          <div className='flex flex-col' >
                            <div>
                              <span> {comment.profile.first_name} </span>
                              <span> {comment.profile.last_name} </span>
                            </div>
                            <div className='flex text-[14px] text-[#8a8a8a] ' >
                              <TiStarFullOutline />
                              <TiStarFullOutline />
                              <TiStarFullOutline />
                              <TiStarFullOutline />
                            </div>
                          </div>
                        </div>
                        <div className='mt-4'>{comment.text_comment}</div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
