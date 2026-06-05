'use client'
import Image from 'next/image'
import ContinuousTextSlider from './BannerSlider/ContinuousTextSlider'
import styles from './index.module.css'
import NavMenu from './NaveMenu/NavMenu'

import Link from 'next/link'
import Cart from './Cart/Cart'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import SearchBox from '@/Folders/utils/SearchBox/SearchBox'
import { GiHandBag } from 'react-icons/gi'
import { CiHeart, CiSearch, CiUser } from 'react-icons/ci'
export default function Header () {
  const [activeBag, setactiveBag] = useState<boolean>(false)
  const [activeSearch, setactiveSearch] = useState<boolean>(false)
  const pathname = usePathname()
  return (
    <>
      <header className={styles.Header}>
        <ContinuousTextSlider />
        <div className={`${styles.headerBox} container`}>
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
              onMouseEnter={() => setactiveBag(true)}
              className={styles.bag}
            >
              <Link href='/cart'>
                <span>4</span>
                <GiHandBag size={30} />
              </Link>
            </div>
            {pathname !== '/cart' && (
              <Cart activeBag={activeBag} setactiveBag={setactiveBag} />
            )}
            <div className={styles.Heart}>
              <Link href='/wishlist'>
                <span>3</span>
                <CiHeart size={30} />
              </Link>
            </div>
            <div className='ml-[1rem]'>
              <Link href='/login'>
                <CiUser size={30} />
              </Link>
            </div>
            <div onClick={()=>setactiveSearch(true)} >
              <CiSearch size={30} />
            </div>
          </div>
        </div>
        <SearchBox
          activeSearch={activeSearch}
          setactiveSearch={setactiveSearch}
        />
      </header>
    </>
  )
}
