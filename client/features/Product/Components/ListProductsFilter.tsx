import Compare from '../../../utils/components/Compare'
import Product from './Product'
import Preview from '../../../utils/components/Preview'
import ModalWishList from '../../Wishlist/components/ModalWishList'
import { ProductType } from '@/types/user'
import { FaSortAmountDownAlt } from 'react-icons/fa'
import { useListProductFilter } from '../hooks/useListProductFilter'
type ProductsType = {
  products: ProductType[]
}
export default function ListProductsFilter ({ products }: ProductsType) {
  const { handleOrdering, ordering } = useListProductFilter()
  return (
    <div>
      <div className='mb-6 border-b border-[#d5d5d5] pb-3'>
        <div className='flex flex-col md:flex-row md:items-center gap-3'>
          <div className='flex items-center shrink-0'>
            <FaSortAmountDownAlt className='ml-2' />
            <span>مرتب بر اساس:</span>
          </div>

          <ul className='flex overflow-x-auto whitespace-nowrap scrollbar-hide'>
            <li
              onClick={() => handleOrdering('price')}
              className={`px-3 py-1 cursor-pointer border-b-2 transition ${
                ordering === 'price'
                  ? 'border-red-400 text-red-400'
                  : 'border-transparent'
              }`}
            >
              ارزان‌ترین
            </li>

            <li
              onClick={() => handleOrdering('-price')}
              className={`px-3 py-1 cursor-pointer border-b-2 transition ${
                ordering === '-price'
                  ? 'border-red-400 text-red-400'
                  : 'border-transparent'
              }`}
            >
              گران‌ترین
            </li>

            <li
              onClick={() => handleOrdering('-created_at')}
              className={`px-3 py-1 cursor-pointer border-b-2 transition ${
                ordering === '-created_at'
                  ? 'border-red-400 text-red-400'
                  : 'border-transparent'
              }`}
            >
              جدیدترین‌ها
            </li>
          </ul>
        </div>
      </div>

      {/* Products */}
      <div
        className='grid gap-4
        grid-cols-2
        sm:grid-cols-2
        md:grid-cols-3
        xl:grid-cols-4'
      >
        {products.map(product => (
          <div key={product.id}>
            <Product productItem={product} />
          </div>
        ))}
      </div>

      <ModalWishList />
      <Preview />
      <Compare />
    </div>
  )
}
