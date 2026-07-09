import Link from 'next/link'
import styles from '../modules/nave.module.css'
import Image from 'next/image'
import { FaChevronDown } from 'react-icons/fa6'
function NavMenu () {
  return (
    <ul className={styles.ListaMenu}>
      <li className={styles.itemMenu}>
        <Link href='/'> خانه </Link>
      </li>
      <li className={`${styles.itemMenu} ${styles.megamenuLi} `}>
        <Link className={styles.linkmenu} href='/shop'>
          <span> فروشگاه </span>
          <FaChevronDown className='mr-1' size={12} />
        </Link>
        <div className={styles.megamenu}>
          <div className={styles.ItemMegamenu}>
            <label> مد و پوشاک مردونه </label>
            <ul className={styles.menuMegamenuItem}>
              <li>
                <Link href='/shop?category=Mens-clothing&page=1'>
                  {' '}
                  لباس مردونه{' '}
                </Link>{' '}
              </li>
            </ul>
          </div>
          <div className={styles.ItemMegamenu}>
            <label> مد و پوشاک زنونه </label>
            <ul className={styles.menuMegamenuItem}>
              <li>
                <Link href='/shop?category=Womens-clothing&page=1'>
                  {' '}
                  لباس زنانه{' '}
                </Link>{' '}
                <span className={styles.BadgeNew}> جدید </span>
              </li>
            </ul>
          </div>
          <div className={styles.ItemMegamenu}>
            <label> کیف و کفش </label>
            <ul className={styles.menuMegamenuItem}>
              <li>
                <Link href='/shop?category=bag&page=1'> کیف </Link>{' '}
              </li>
              <li>
                <Link href='/shop?category=Shoes&page=1'> کفش </Link>{' '}
              </li>
            </ul>
          </div>
          <div className={styles.ItemMegamenu}>
            <div className='flex'>
              <Image
                className='ml-4'
                src='/images/mega1.png'
                alt='shop'
                width={262}
                height={206}
              />
              <Image
                src='/images/mega2.png'
                alt='shop'
                width={262}
                height={206}
              />
            </div>
          </div>
        </div>
      </li>
      <li className={styles.itemMenu}>
        <Link href='/articles'> خبر نامه </Link>
      </li>
      <li className={styles.itemMenu}>
        <Link href='/'> درباره ما </Link>
      </li>
      <li className={styles.itemMenu}>
        <Link href='/contact-us'> تماس با ما </Link>
      </li>
    </ul>
  )
}

export default NavMenu
