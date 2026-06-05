import Breadcrumbs from '@/Folders/utils/Breadcrumbs/Breadcrumbs'
import GalleryProduct from './Sliders/GalleryProduct'
import { FaAngleLeft } from 'react-icons/fa6'
import { CiBookmark } from 'react-icons/ci'
import { PiStarFill } from 'react-icons/pi'
import ProductAccordion from './ProductAccordion/ProductAccordion'
import SlidersProducts from '@/Folders/PageCenter/Sliders/SlidersProducts'

export default function SingleProduct () {
  const comments = [
    {
      id: 1,
      profile: { first_name: 'saman', last_name: 'sheykhi' },
      createdAt: '1405/03/10',
      text_comment: 'کیفیت محصول عالی بود.',
      star: 4
    },
    {
      id: 2,
      profile: { first_name: 'arvin', last_name: 'arzani' },
      createdAt: '1405/03/10',
      text_comment: 'کیفیت محصول عالی بود.',
      star: 5
    },
    {
      id: 3,
      profile: { first_name: 'abdola', last_name: 'mosavi' },
      createdAt: '1405/03/10',
      text_comment: 'کیفیت محصول عالی بود.',
      star: 4.5
    }
  ]
  const handleCommentSubmit = async (comment: {
    name: string
    message: string
  }) => {
    console.log(comment)

    // API Call
    // await createComment(comment);
  }
  return (
    <div className='container my-6'>
      <Breadcrumbs
        homeLabel='خانه'
        items={[
          { label: 'محصولات', href: 'test' },
          { label: 'پوشاک', href: 'test1' },
          { label: 'کیف وکفش', href: 'test2' },
          { label: 'کفش کتونی تابستون', href: 'test3' }
        ]}
        separator={<FaAngleLeft />}
      />
      <div className='mt-[1.5rem] flex justify-between'>
        <div className='w-[50.7%]'>
          <GalleryProduct
            images={[
              { src: '/images/product/pro.png', alt: 'test' },
              { src: '/images/mega1.png', alt: 'test' },
              { src: '/images/product/pro.png', alt: 'test' },
              { src: '/images/mega1.png', alt: 'test' },
              { src: '/images/product/pro.png', alt: 'test' },
              { src: '/images/mega1.png', alt: 'test' },
              { src: '/images/product/pro.png', alt: 'test' },
              { src: '/images/mega1.png', alt: 'test' },
              { src: '/images/product/pro.png', alt: 'test' },
              { src: '/images/mega1.png', alt: 'test' },
              { src: '/images/product/pro.png', alt: 'test' }
            ]}
          />
        </div>
        <div className='w-[40%]'>
          <div>
            <h1 className='text-2xl'>کفش کتونی تابستون مردانه مدل نایک</h1>
          </div>
          <div className='mt-[1.5rem]  flex items-center'>
            <div className='flex items-center ml-4 text-[12.5px] text-[#797979]'>
              <PiStarFill className='text-[#fbb30e] ml-3' size={24} />
              <span className='ml-1 font-bold'>4.8</span>
              <span>(9) تجربه</span>
            </div>
            <span className='border-r-2 border-[#bebebe] text-[12.5px] pr-2 text-[#797979] '>
              {' '}
              18 تجربه
            </span>
          </div>
          <div className='flex justify-between my-[2rem]'>
            <div>
              {' '}
              <span className='text-[12.5px]'>موجدی : 12 عدد</span>{' '}
            </div>
            <div className='font-bold'>
              <span>892٬000 </span>
              <span className='text-[10px]'>تومان</span>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <div className='ml-[1.5rem]'>
              <span className=' border border-[#dedede] block w-fit p-3 rounded'>
                <CiBookmark size={40} />
              </span>
            </div>
            <div className='w-full'>
              <button className='bg-black block w-full text-[16px] p-[20px] rounded cursor-pointer text-white'>
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
                dis: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
              }
            },
            { nameItem: 'comments', lable: 'تجربه خرید', content: comments }
          ]}
        />
      </div>

      <div>
        <h5>محصولات مشابه</h5>
        <SlidersProducts />
      </div>
    </div>
  )
}
