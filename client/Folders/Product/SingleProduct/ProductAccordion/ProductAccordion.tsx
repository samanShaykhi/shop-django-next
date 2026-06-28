'use client'

import { CommentType } from '@/types/user'
import Image from 'next/image'
import { useState } from 'react'
import { FaRegUser } from 'react-icons/fa6'
import { TiStarFullOutline } from 'react-icons/ti'

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
  content: CommentType[]
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
                ${curentItem === index + 1 && `text-(--secondary_Coler)`}
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
                          {comment.user.profile_image ? (
                            <Image
                              className='object-cover rounded-[100%] ml-3'
                              width={45}
                              height={45}
                              alt='profile_image'
                              unoptimized
                              src={comment.user.profile_image}
                            />
                          ) : (
                            <div className='bg-gray-200 text-[#9e9e9e] p-2 rounded-[100%] ml-3  '>
                              <FaRegUser size={35} />
                            </div>
                          )}
                          <div className='flex flex-col'>
                            <div>
                              <span> {comment.user.fullname} </span>
                            </div>
                            <div className='flex text-[14px] text-[#8a8a8a] '>
                              <TiStarFullOutline />
                              <TiStarFullOutline />
                              <TiStarFullOutline />
                              <TiStarFullOutline />
                            </div>
                          </div>
                        </div>
                        <div className='mt-4'>{comment.content}</div>
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
