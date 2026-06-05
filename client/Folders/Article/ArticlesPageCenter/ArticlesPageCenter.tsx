import Link from 'next/link'
import Article from '../ItemArticle/Article'

export default function ArticlesPageCenter () {
  return (
    <div className='container'>
      <div  className='flex justify-between border-b border-[#bbbbbb] pb-3 mb-5 items-center' >
        <div>
          <h5 className=' font-[800]  ' > وبلاگ فروشاه </h5>
        </div>
        <div>
          <Link href='/'> دیدن همه </Link>
        </div>
      </div>
      <div className='flex justify-between'>
        <div className='w-[24%]'>
          <Article
            ImgUrl='/images/article/art.png'
            LinkArt='/'
            date=' 28 خرداد 1404'
            disc=' امروزه تنوع محصولات بقدری بالا رفته که شناخت کفش تقلبی با کفش اصلی واقعا سخت شده '
            title='شناخت کفش اصلی از کفش فیک با آزمایش'
          />
        </div>
        <div className='w-[24%]'>
          <Article
            ImgUrl='/images/article/art.png'
            LinkArt='/'
            date=' 28 خرداد 1404'
            disc=' امروزه تنوع محصولات بقدری بالا رفته که شناخت کفش تقلبی با کفش اصلی واقعا سخت شده '
            title='شناخت کفش اصلی از کفش فیک با آزمایش'
          />
        </div>
        <div className='w-[24%]'>
          <Article
            ImgUrl='/images/article/art.png'
            LinkArt='/'
            date=' 28 خرداد 1404'
            disc=' امروزه تنوع محصولات بقدری بالا رفته که شناخت کفش تقلبی با کفش اصلی واقعا سخت شده '
            title='شناخت کفش اصلی از کفش فیک با آزمایش'
          />
        </div>
        <div className='w-[24%]'>
          <Article
            ImgUrl='/images/article/art.png'
            LinkArt='/'
            date=' 28 خرداد 1404'
            disc=' امروزه تنوع محصولات بقدری بالا رفته که شناخت کفش تقلبی با کفش اصلی واقعا سخت شده '
            title='شناخت کفش اصلی از کفش فیک با آزمایش'
          />
        </div>
      </div>
    </div>
  )
}
