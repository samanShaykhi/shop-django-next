'use client'
import Breadcrumbs from '@/Folders/utils/Breadcrumbs/Breadcrumbs'
import GalleryProduct from './Sliders/GalleryProduct'
import { FaAngleLeft } from 'react-icons/fa6'
import { CiBookmark } from 'react-icons/ci'
import { PiStarFill } from 'react-icons/pi'
import ProductAccordion from './ProductAccordion/ProductAccordion'
import { ProductType } from '@/types/user'
import SlidersProducts from '@/Folders/PageCenter/Sliders/SlidersProducts'
import { AddToCart } from '@/Folders/utils/cart'
import { useAppDispatch } from '@/Folders/store/hooks'
import { messageCustom } from '@/utils/message/message'
import { changeProductsWhishList } from '@/Folders/store/features/ModalWishListSlice'
type Props = {
  product: ProductType
}
export default function SingleProduct ({ product }: Props) {
  const dispatch = useAppDispatch()
  const handleLocalStorageSave = () => {
    const products = JSON.parse(localStorage.getItem('wishlist') || '[]')
    if (products.length > 0) {
      const coppyProduct = [...products]
      const exist = coppyProduct.find(prod => prod.id === product.id)
      if (exist) {
        messageCustom(
          'این محصول در لیست علاقه مندی ها وجود دارد.',
          'warning',
          4000
        )
      } else {
        coppyProduct.push(product)
        localStorage.setItem('wishlist', JSON.stringify(coppyProduct))
        dispatch(changeProductsWhishList(coppyProduct))
      }
    } else {
      localStorage.setItem('wishlist', JSON.stringify([product]))
      messageCustom(
        'محصول به لیست علاقه مندی ها  اضافه شد.',
        'success',
        4000
      )
      return dispatch(changeProductsWhishList([product]))
    }
  }
  return (
    <div className='container my-6'>
      <Breadcrumbs
        homeLabel='خانه'
        items={[
 
          { label: product.title,  }
        ]}
        separator={<FaAngleLeft />}
      />
      <div className='mt-6 flex flex-col lg:flex-row justify-between gap-8'>
        {/* Gallery */}
        <div className='w-full lg:w-[50.7%]'>
          <GalleryProduct images={product.images} />
        </div>

        {/* Product Info */}
        <div className='w-full lg:w-[40%]'>
          <div>
            <h1 className='text-xl md:text-2xl leading-9'>{product.title}</h1>
          </div>

          <div className='mt-6 flex flex-wrap items-center gap-y-2'>
            <div className='flex items-center ml-4 text-[12.5px] text-[#797979]'>
              <PiStarFill className='text-[#fbb30e] ml-1' size={16} />

              <span className='ml-1 font-bold'>
                {product.average_star ? product.average_star : '4.3'}
              </span>

              {product.comments.length > 0 ? (
                <span>از ({product.comments.length}) نظر</span>
              ) : (
                <span>از (9) نظر</span>
              )}
            </div>

            <span className='border-r-2 border-[#bebebe] text-[12.5px] pr-2 text-[#797979]'>
              18 تجربه
            </span>
          </div>

          <div className='flex flex-col sm:flex-row justify-between gap-4 my-8'>
            <div>
              <span className='text-[13px]'>موجودی : {product.stock} عدد</span>
            </div>

            <div className='font-bold text-lg'>
              <span>{product.price.toLocaleString()}</span>
              <span className='text-[10px] mr-1'>تومان</span>
            </div>
          </div>

          <div className='flex gap-3 items-center'>
            <div
              onClick={handleLocalStorageSave}
              className='shrink-0 cursor-pointer'
            >
              <span className='border border-[#dedede] flex items-center justify-center p-3 rounded'>
                <CiBookmark size={34} />
              </span>
            </div>

            <div
              onClick={() => AddToCart(product, dispatch)}
              className='flex-1'
            >
              <button className='bg-black block w-full text-sm md:text-base p-4 md:p-5 rounded cursor-pointer text-white'>
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='my-8'>
        <ProductAccordion
          items={[
            {
              nameItem: 'discription',
              lable: 'توضیحات',
              content: {
                dis: product.discription
              }
            },
            {
              nameItem: 'comments',
              lable: 'تجربه خرید',
              content: product.comments
            }
          ]}
        />
      </div>

      <div>
        <h5>محصولات مشابه</h5>
        <SlidersProducts related_products={product.related_products} />
      </div>
    </div>
  )
}
