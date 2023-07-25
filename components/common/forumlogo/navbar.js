import React from 'react'
import styles from './navbar.module.sass'
import Link from 'next/link'
import SearchIcon from '@mui/icons-material/Search'
import AddIcon from '@mui/icons-material/Add'

export default function Navbar() {
  return (
    <>
      <div className={`${styles.flex_row}`}>
        <div className={`${styles.flex_row1}`}>
          <li className="fs20px">
            <Link href="#" className={`${styles.no_underline}`}>
              最新文章
            </Link>
          </li>
          <div className={`${styles.flex_row11}`}>
            <li className="fs20px">
              <Link href="#" className={`${styles.no_underline}`}>
                熱門文章
              </Link>
            </li>
          </div>
        </div>
        <div className={`${styles.flex_row2}`}>
          <div className={`${styles.flex_row21}`}>
            <li className={`${styles.setmid}`}>
              <Link href="#" className={`${styles.no_underline}`}>
                <AddIcon />
                發佈文章
              </Link>
            </li>
          </div>
          <li className={`${styles.setmid}`}>
            <Link href="#" className={`${styles.no_underline}`}>
              <SearchIcon />
              搜尋文章
            </Link>
          </li>
        </div>
      </div>
    </>
  )
}
