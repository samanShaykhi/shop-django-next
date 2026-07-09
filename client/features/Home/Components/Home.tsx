import Preview from '@/utils/components/Preview'
import { useAppSelector } from '@/features/store/hooks'
import ModalWishList from '@/features/Wishlist/components/ModalWishList'
import FullscreenSlider from './FullscreenSlider'
import Guarantee from './Guarantee'
import TitleBox from './Common/TitleBox'
import ListProductSlider from '@/features/Product/Components/ListProductSlider'
import Banner from '@/components/Banner'
import ArticlesPageCenter from '@/features/Article/ArticlesPageCenter/ArticlesPageCenter'
import Compare from '@/utils/components/Compare'

function Home () {
  const { productCats } = useAppSelector(state => state.auth)
  return (
    <div className='mb-6'>
      <ModalWishList />
      <Preview />
      <Compare />
      <div className='overflow-hidden'>
        <FullscreenSlider />
      </div>
      <Guarantee />
      <TitleBox link='/shop' textLink='فروشگاه' title='مد و پوشاک مردونه' />
      <ListProductSlider products={productCats?.mensCat} />
      <div className='container mb-8'>
        <div className='flex flex-col md:flex-row justify-between gap-4'>
          <div className='w-full md:w-[49%] h-[220px] sm:h-[250px] md:h-[280px] bg-linear-to-b from-gray-400 to-black'>
            <Banner
              headText='فروش ویژه همراه تخفیف'
              disc='فروش ویژه تخفیف‌دار فرصتی استثنایی برای خرید محصولات مورد علاقه با قیمت‌های باور نکردنی است'
              link='/shop?category=Shoes&page=1'
              title='تخفیف فوق العاده لباس و کفش های ما'
              urlImage='/images/banner/banner.png'
            />
          </div>
          <div className='w-full md:w-[49%] h-[220px] sm:h-[250px] md:h-[280px]'>
            <Banner
              headText='فروش ویژه همراه تخفیف'
              disc='فروش ویژه تخفیف‌دار فرصتی استثنایی برای خرید محصولات مورد علاقه با قیمت‌های باور نکردنی است'
              link='/shop?category=bag&page=1'
              title='تخفیف فوق العاده لباس و کفش های ما'
              urlImage='/images/banner/banner2.png'
            />
          </div>
        </div>
      </div>
      <TitleBox link='/shop' textLink='فروشگاه' title='مد و پوشاک زنونه' />
      <ListProductSlider products={productCats?.womansCat} />
      <ArticlesPageCenter />
    </div>
  )
}

export default Home
