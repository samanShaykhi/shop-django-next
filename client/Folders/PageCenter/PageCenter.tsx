import ArticlesPageCenter from '../Article/ArticlesPageCenter/ArticlesPageCenter'
import Banner from './Banners/Banner'
import Guarantee from './Guarantee/Guarantee'
import SlidersProducts from './Sliders/SlidersProducts'
import Title from './Titles/Title'
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
      <Title link='/shop' textLink='فروشگاه' title='مد و پوشاک مردونه' />
      <SlidersProducts category='mensCat' />
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
      <Title link='/shop' textLink='فروشگاه' title='مد و پوشاک زنونه' />
      <SlidersProducts category='womansCat' />
      <ArticlesPageCenter />
    </div>
  )
}

export default PageCenter
