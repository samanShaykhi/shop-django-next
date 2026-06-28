'use client'
import Image from 'next/image'
import ContinuousTextSlider from './BannerSlider/ContinuousTextSlider'
import styles from './index.module.css'
import NavMenu from './NaveMenu/NavMenu'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import Cart from './Cart/Cart'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import SearchBox from '@/Folders/utils/SearchBox/SearchBox'
import { BsCart } from 'react-icons/bs'
import { CiHeart, CiSearch, CiUser } from 'react-icons/ci'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { ChangeShoppingCart } from '../store/features/cart'
import { changeProductsWhishList } from '../store/features/ModalWishListSlice'
import { FiMenu } from 'react-icons/fi'
import { Variants } from 'framer-motion'
const drawerVariants: Variants = {
  hidden: {
    x: '100%'
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      damping: 24,
      stiffness: 220
    }
  },
  exit: {
    x: '100%',
    transition: {
      duration: 0.25
    }
  }
}

const overlayVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
}

const itemVariants = {
  hidden: {
    opacity: 0,
    x: 30
  },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.08
    }
  })
}
export default function Header () {
  const dispatch = useAppDispatch()
  const [activeBag, setactiveBag] = useState<boolean>(false)
  const [activeSearch, setactiveSearch] = useState<boolean>(false)
  const pathname = usePathname()
  const { user, loading } = useAppSelector(state => state.auth)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const wishlist = useAppSelector(state => state.modalWishList.products).length
  const cartLen = useAppSelector(
    state => state.ShoppingCart.shoppingCart
  ).length

  useEffect(() => {
    const data = () => {
      const products = JSON.parse(localStorage.getItem('cart') || '[]')
      const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]')
      dispatch(ChangeShoppingCart(products))
      dispatch(changeProductsWhishList(wishlist))
    }
    data()
  }, [dispatch])
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header className={styles.Header}>
        <ContinuousTextSlider />
        <div className={`${styles.headerBox} container`}>
          <div
            className={styles.mobileMenu}
            onClick={() => setMobileMenuOpen(true)}
          >
            <FiMenu size={26} />
          </div>
          <div className={styles.menuBox}>
            <NavMenu />
          </div>
          <div className={styles.logoBox}>
            <Link href='/'>
              <Image
                src='/images/logo.svg'
                width='145'
                height='45'
                alt='لوگو'
              />
            </Link>
          </div>
          <div className={styles.IconeBox}>
            <div
              onMouseLeave={() => setactiveBag(false)}
              onMouseEnter={() => {
                if (cartLen) setactiveBag(true)
              }}
              className={styles.bag}
            >
              <Link href='/cart'>
                {cartLen ? <span>{cartLen}</span> : null}
                <BsCart size={30} />
              </Link>
            </div>
            {!['/cart', '/cart/shipping'].includes(pathname) && (
              <Cart activeBag={activeBag} setactiveBag={setactiveBag} />
            )}
            <div className={styles.Heart}>
              <Link href='/wishlist'>
                {wishlist ? <span>{wishlist}</span> : null}
                <CiHeart size={30} />
              </Link>
            </div>
            <div className='ml-4'>
              {loading ? (
                <>
                  <CiUser size={30} />
                </>
              ) : (
                <>
                  {user ? (
                    <Link href='/dashbord'>
                      <CiUser size={30} />
                    </Link>
                  ) : (
                    <Link href='/login'>
                      <CiUser size={30} />
                    </Link>
                  )}
                </>
              )}
            </div>
            <div onClick={() => setactiveSearch(true)}>
              <CiSearch size={30} />
            </div>
          </div>
        </div>
        <SearchBox
          activeSearch={activeSearch}
          setactiveSearch={setactiveSearch}
        />
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                variants={overlayVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
                className={styles.mobileOverlay}
                onClick={() => setMobileMenuOpen(false)}
              />

              <motion.div
                variants={drawerVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
                className={styles.mobileDrawer}
              >
                <div className={styles.mobileDrawerHeader}>
                  <span>منو</span>

                  <button onClick={() => setMobileMenuOpen(false)}>✕</button>
                </div>

                <ul className={styles.mobileNav}>
                  {[
                    { title: 'خانه', href: '/' },
                    { title: 'فروشگاه', href: '/shop' },
                    { title: 'خبر نامه', href: '/articles' },
                    { title: 'درباره ما', href: '/' },
                    { title: 'تماس با ما', href: '/contact-us' }
                  ].map((item, index) => (
                    <motion.li
                      key={item.title}
                      custom={index}
                      variants={itemVariants}
                      initial='hidden'
                      animate='visible'
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
