import { ChevronLeft } from 'lucide-react'
import Compare from '../Compare/Compare'
import Product from '../PageCenter/Product/Product'
import Preview from '../Preview/Preview'
import ModalWishList from '../Wishlist/ModalWishList/ModalWishList'

export default function ListProducts () {
  return (
    <div>
      <div className='flex items-center mr-3 border-b pb-4 ml-7 border-[#d5d5d5]'>
        <span>نواتو</span> <ChevronLeft className='mx-2' size={13} /> <span>فروشگاه</span>
      </div>
      <div className='flex  flex-wrap'>
        <div className='w-[22%] mx-[12px] my-4 '>
          <Product />
        </div>
        <div className='w-[22%] mx-[12px] my-4 '>
          <Product />
        </div>
        <div className='w-[22%] mx-[12px] my-4 '>
          <Product />
        </div>
        <div className='w-[22%] mx-[12px] my-4 '>
          <Product />
        </div>
        <div className='w-[22%] mx-[12px] my-4 '>
          <Product />
        </div>
        <div className='w-[22%] mx-[12px] my-4 '>
          <Product />
        </div>
        <div className='w-[22%] mx-[12px] my-4 '>
          <Product />
        </div>
        <div className='w-[22%] mx-[12px] my-4 '>
          <Product />
        </div>
        <div className='w-[22%] mx-[12px] my-4 '>
          <Product />
        </div>
        <div className='w-[22%] mx-[12px] my-4 '>
          <Product />
        </div>
        <div className='w-[22%] mx-[12px] my-4 '>
          <Product />
        </div>
        <div className='w-[22%] mx-[12px] my-4 '>
          <Product />
        </div>
      </div>
      <ModalWishList />
      <Preview />
      <Compare />
    </div>
  )
}
