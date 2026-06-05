import ArticlesPageCenter from '../Article/ArticlesPageCenter/ArticlesPageCenter'
import Banner from './Banners/Banner'
import Guarantee from './Guarantee/Guarantee'
import SlidersProducts from './Sliders/SlidersProducts'
import Title from './Titles/Title'
import style from './style.module.css'
import MainSlider from '../sliders/MineSliders/MainSlider'
import ModalWishList from '../Wishlist/ModalWishList/ModalWishList'
import Preview from '../Preview/Preview'
import Compare from '../Compare/Compare'
function PageCenter () {
  return (
    <div className='mb-6'>
      <ModalWishList />
      <Preview />
      <Compare />
      <div className='overflow-hidden'>
        <MainSlider />
      </div>
      <Guarantee />
      <Title link='/' textLink='فروشگاه' title='کیف و کفش' />
      <SlidersProducts />
      <div className='container mb-[2rem]'>
        <div className='flex justify-between'>
          <div className='w-[49%] h-[280px] bg-gradient-to-b from-gray-400 to-black'>
            <Banner
              headText='فروش ویژه همراه تخفیف'
              disc='فروش ویژه تخفیف‌دار فرصتی استثنایی برای خرید محصولات مورد علاقه با قیمت‌های باور نکردنی است'
              link='/'
              title='تخفیف فوق العاده لباس و کفش های ما'
              urlImage='/images/banner/banner.png'
            />
          </div>
          <div className='w-[49%] h-[280px]'>
            <Banner
              headText='فروش ویژه همراه تخفیف'
              disc='فروش ویژه تخفیف‌دار فرصتی استثنایی برای خرید محصولات مورد علاقه با قیمت‌های باور نکردنی است'
              link='/'
              title='تخفیف فوق العاده لباس و کفش های ما'
              urlImage='/images/banner/banner2.png'
            />
          </div>
        </div>
      </div>
      <ArticlesPageCenter />
    </div>
  )
}

export default PageCenter
