import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { AnimatePresence, Variants } from 'framer-motion'
import { motion } from 'framer-motion'
import styles from '../modules/index.module.css'
import Link from 'next/link'
type MobileMenuProps = {
  mobileMenuOpen: boolean
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export default function MobileMenu ({
  mobileMenuOpen,
  setMobileMenuOpen
}: MobileMenuProps) {
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
  useLockBodyScroll(mobileMenuOpen)
  return (
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
  )
}
