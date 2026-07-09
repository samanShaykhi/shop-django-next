'use client'

import Breadcrumbs from '@/features/utils/Breadcrumbs/Breadcrumbs'
import { getErrorMessage } from '@/features/utils/ErrorHandler/Helper'
import { OrderTypes } from '@/types/user'
import { axiosConfig } from '@/utils/axios/axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FaAngleLeft } from 'react-icons/fa6'
import SkeletonOrder from './SkeletonOrder'

export default function Orders () {
  const [loading, setloading] = useState(true)
  const [order, setorder] = useState<OrderTypes[]>([])
  useEffect(() => {
    const fechdata = async () => {
      try {
        const getData = await axiosConfig('/getmyorders')
        setorder(getData.data)
        setloading(false)
      } catch (error) {
        setloading(false)
        getErrorMessage(error)
      }
    }
    fechdata()
  }, [])

  return (
    <div>
      <div className='bg-white p-4 border-[#d2d2d2] border-t border-b'>
        <Breadcrumbs
          homeLabel='خانه'
          items={[{ label: 'سفارشات' }]}
          separator={<FaAngleLeft />}
        />
      </div>
      {!loading ? (
        <>
          {order.map(itemOrder => {
            return (
              <div
                key={itemOrder.id}
                className='bg-white rounded-xl shadow p-4 my-5'
              >
                <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5'>
                  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 flex-1'>
                    <div>
                      <span className='text-[#a6a6a6] block'>تاریخ سفارش</span>
                      <span>{itemOrder.created_at}</span>
                    </div>

                    <div>
                      <span className='text-[#a6a6a6] block'>شماره سفارش</span>
                      <span>{itemOrder.order_number}</span>
                    </div>

                    <div>
                      <span className='text-[#a6a6a6] block'>وضعیت سفارش</span>

                      {itemOrder.status === 1 && (
                        <span className='text-[#e6b103]'>
                          پرداخت شده (در حال آماده سازی)
                        </span>
                      )}
                    </div>
                  </div>
                  <div className='flex flex-wrap gap-2 justify-start lg:justify-end'>
                    {itemOrder.items?.map(product => {
                      const primaryImage = product.product.images.find(
                        image => image.is_primary
                      )

                      return primaryImage ? (
                        <Image
                          key={primaryImage.id}
                          src={primaryImage.image}
                          width={65}
                          height={65}
                          className='rounded-md border'
                          alt={primaryImage.alt_text}
                          unoptimized
                        />
                      ) : null
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </>
      ) : (
        <SkeletonOrder />
      )}
    </div>
  )
}
