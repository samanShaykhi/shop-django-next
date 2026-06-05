import Link from 'next/link'
import styles from './nave.module.css'
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
          <FaChevronDown />
        </Link>
        <div className={styles.megamenu}>
          <div className={styles.ItemMegamenu}>
            <label> محصولات زیبایی </label>
            <ul className={styles.menuMegamenuItem}>
              <li>
                <Link href='/'> ماسک آب رسان </Link>{' '}
                <span className={styles.BadgeNew}> جدید </span>
              </li>
              <li>
                <Link href='/'> ماسک آب رسان </Link>{' '}
              </li>
              <li>
                <Link href='/'> ماسک آب رسان </Link>{' '}
                <span className={styles.BadgeHot}> داغ </span>
              </li>
              <li>
                <Link href='/'> ماسک آب رسان </Link>{' '}
              </li>
              <li>
                <Link href='/'> ماسک آب رسان </Link>{' '}
                <span className={styles.BadgeNew}> جدید </span>
              </li>
              <li>
                <Link href='/'> ماسک آب رسان </Link>{' '}
              </li>
              <li>
                <Link href='/'> ماسک آب رسان </Link>{' '}
                <span className={styles.BadgeHot}> داغ </span>
              </li>
            </ul>
          </div>
          <div className={styles.ItemMegamenu}>
            <label> محصولات زیبایی </label>
            <ul className={styles.menuMegamenuItem}>
              <li>
                <Link href='/'> ماسک آب رسان </Link>{' '}
                <span className={styles.BadgeNew}> جدید </span>
              </li>
              <li>
                <Link href='/'> ماسک آب رسان </Link>{' '}
              </li>
              <li>
                <Link href='/'> ماسک آب رسان </Link>{' '}
                <span className={styles.BadgeHot}> داغ </span>
              </li>
              <li>
                <Link href='/'> ماسک آب رسان </Link>{' '}
              </li>
              <li>
                <Link href='/'> ماسک آب رسان </Link>{' '}
                <span className={styles.BadgeNew}> جدید </span>
              </li>
              <li>
                <Link href='/'> ماسک آب رسان </Link>{' '}
              </li>
              <li>
                <Link href='/'> ماسک آب رسان </Link>{' '}
                <span className={styles.BadgeHot}> داغ </span>
              </li>
            </ul>
          </div>
          <div className={styles.ItemMegamenu}>
            <label> محصولات زیبایی </label>
            <ul className={styles.menuMegamenuItem}>
              <li>
                <Link href='/'> ماسک آب رسان </Link>{' '}
                <span className={styles.BadgeNew}> جدید </span>
              </li>
              <li>
                <Link href='/'> ماسک آب رسان </Link>{' '}
              </li>
              <li>
                <Link href='/'> ماسک آب رسان </Link>{' '}
                <span className={styles.BadgeHot}> داغ </span>
              </li>
              <li>
                <Link href='/'> ماسک آب رسان </Link>{' '}
              </li>
              <li>
                <Link href='/'> ماسک آب رسان </Link>{' '}
                <span className={styles.BadgeNew}> جدید </span>
              </li>
              <li>
                <Link href='/'> ماسک آب رسان </Link>{' '}
              </li>
              <li>
                <Link href='/'> ماسک آب رسان </Link>{' '}
                <span className={styles.BadgeHot}> داغ </span>
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
        <Link href='/'> محصولات آرایشی </Link>
      </li>
      <li className={styles.itemMenu}>
        <Link href='/'> محصولات بهداشتی </Link>
      </li>
      <li className={styles.itemMenu}>
        <Link href='/contact-us'> تماس با ما </Link>
      </li>
    </ul>
  )
}

export default NavMenu
