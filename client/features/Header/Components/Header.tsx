'use client'
import Image from 'next/image'
import TopBanner from './TopBanner'
import styles from '../modules/index.module.css'
import NavMenu from './NavMenu'
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'
import { useLocalCart } from '../hooks/useLocalCart'
import { useHeader } from '../hooks/useHeader'
import MobileMenu from './MobileMenu'
import IconeBox from './IconeBox'
export default function Header () {
  const { mobileMenuOpen, setMobileMenuOpen } = useHeader()
  useLocalCart()
  return (
    <header className={styles.Header}>
      <TopBanner />
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
            <Image src='/images/logo.svg' width='145' height='45' alt='لوگو' />
          </Link>
        </div>
        <IconeBox />
      </div>

      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  )
}
