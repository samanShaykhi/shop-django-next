import Cart from './Cart'
import SearchBox from '@/features/utils/SearchBox/SearchBox'
import { BsCart } from 'react-icons/bs'
import { CiHeart, CiSearch, CiUser } from 'react-icons/ci'

import { useHeader } from '../hooks/useHeader'
import styles from '../modules/index.module.css'
import Link from 'next/link'

export default function IconeBox () {
  const {
    activeBag,
    setactiveBag,
    activeSearch,
    setactiveSearch,
    pathname,
    user,
    loading,
    wishlist,
    cartLen
  } = useHeader()
  return (
    <div className={styles.IconeBox}>
      <div
        onMouseLeave={() => setactiveBag(false)}
        onMouseEnter={() => {
          if (cartLen) setactiveBag(true)
        }}
        className={styles.bag}
      >
        <Link href='/cart'>
          {cartLen ? (
            <>{cartLen.length !== 0 && <span>{cartLen.length}</span>}</>
          ) : null}
          <BsCart size={30} />
        </Link>
      </div>
      {cartLen && (
        <>
          {(!['/cart', '/cart/shipping'].includes(pathname) &&
            cartLen.length !== 0) && (
            <Cart activeBag={activeBag} setactiveBag={setactiveBag} />
          )}
        </>
      )}
      <div className={styles.Heart}>
        <Link href='/wishlist'>
          {wishlist ? <span>{wishlist}</span> : null}
          <CiHeart size={30} />
        </Link>
      </div>
      <div>
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
      <SearchBox
        activeSearch={activeSearch}
        setactiveSearch={setactiveSearch}
      />
    </div>
  )
}
