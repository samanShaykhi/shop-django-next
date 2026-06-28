import { LuInstagram } from 'react-icons/lu'
import style from './footer.module.css'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import Link from 'next/link'
import Image from 'next/image'
export default function Footer () {
  return (
    <footer>
      <div className={style.HeadFoot}>
        <h6> فروشگاه بزرگ کیف و کفش اینترنتی </h6>
        <p>ارائه محصولات باکیفیت همراه با تجربه خرید آسان و مطمئن.</p>
      </div>
      <div className={style.footer}>
        <div className='container'>
          <div className={style.MinFooter}>
            <div className={style.ItemFooter}>
              <div className={style.label}>
                <Image
                  src='/images/logo.png'
                  width={105}
                  height={24}
                  alt='لوگو'
                />
              </div>
              <div>
                <div className={style.TRS}>
                  <p>
                    فروشگاه کیف و کفش اینترنتی جایی است که می‌توانید به‌راحتی و
                    تنها با چند کلیک، جدیدترین مدل‌های کیف و کفش زنانه و مردانه
                    را مشاهده و خریداری کنید. این فروشگاه با ارائه تصاویر
                    باکیفیت، توضیحات کامل محصول و امکان مقایسه قیمت‌ها، تجربه‌ای
                    سریع و مطمئن از خرید آنلاین را برای شما فراهم می‌کند.
                  </p>
                </div>
                <div className={style.TRX}>
                  <Link href='/'>
                    <LuInstagram />
                  </Link>
                  <Link href='/'>
                    <FaLinkedinIn />
                  </Link>
                  <Link href='/'>
                    <FaTwitter />
                  </Link>
                  <Link href='/'>
                    <FaFacebookF />
                  </Link>
                </div>
              </div>
            </div>
            <div className={style.ItemFooter}>
              <div className={style.label}>
                <label>دسترستی سریع بین صفحات</label>
              </div>
              <div className={style.LYOP}>
                <ul>
                  <li>
                    {' '}
                    <Link href='/shop'> فروشگاه </Link>{' '}
                  </li>
                  <li>
                    {' '}
                    <Link href='/shop?category=Mens-clothing&page=1'>
                      {' '}
                      مردانه{' '}
                    </Link>{' '}
                  </li>
                  <li>
                    {' '}
                    <Link href='/shop?category=Womens-clothing&page=1'>
                      {' '}
                      زنانه{' '}
                    </Link>{' '}
                  </li>
                  <li>
                    {' '}
                    <Link href='/shop?category=Shoes&page=1'> کیف </Link>{' '}
                  </li>
                  <li>
                    {' '}
                    <Link href='/shop?category=bag&page=1'> کفش </Link>{' '}
                  </li>
                </ul>
              </div>
            </div>
            <div className={style.ItemFooter}>
              <div className={style.label}>
                <label>دسترستی صفحات فروشگاه</label>
              </div>
              <div className={style.LYOP}>
                <ul>
                  <li>
                    {' '}
                    <Link href='/'> درباه فروشگاه </Link>{' '}
                  </li>
                  <li>
                    {' '}
                    <Link href='/'> قوانین و مقررات </Link>{' '}
                  </li>
                  <li>
                    {' '}
                    <Link href='/'> پشتیبانی </Link>{' '}
                  </li>
                  <li>
                    {' '}
                    <Link href='/contact-us'> تماس با ما </Link>{' '}
                  </li>
                </ul>
              </div>
            </div>
            <div className={style.ItemFooter}>
              <div className={style.label}>
                <label>اعتمادشماسرمایه‌ی ماست</label>
              </div>
              <div className={style.DFZW}>
                <p>
                  تمام تلاشمان را کرده‌ایم تا با ارائه‌ی محصولات اصل، توضیحات
                  شفاف، پرداخت امن و پشتیبانی همیشگی، تجربه‌ای مطمئن و بی‌دغدغه
                  از خرید آنلاین برایتان فراهم کنیم.
                </p>
              </div>
              <div className={style.IENE}>
                <Image
                  src='/images/enamad.png'
                  width={80}
                  height={80}
                  alt='enamad'
                />
                <Image
                  src='/images/saman.png'
                  width={150}
                  height={150}
                  alt='samandehi'
                />
              </div>
            </div>
          </div>
          <div className={style.FRTFX}>
            <span>
              {' '}
              تمامی حقوق این وبسایت متعلق به فروشگاه اینترنتی میباشد.{' '}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
