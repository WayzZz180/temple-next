import React from 'react'
import styles from './navbar.module.sass'
import Link from 'next/link'
import SearchIcon from '@mui/icons-material/Search'
import AddIcon from '@mui/icons-material/Add'

export default function Navbar() {
  return (
    <>
      <div>
        <div className={`${styles.flex_row1}`}>
          <li></li>
          <li></li>
        </div>
        <div className={`${styles.flex_row1}`}>
          <li>
            <Link>
              <AddIcon />
            </Link>
          </li>
          <li>
            <Link>
              <SearchIcon />
            </Link>
          </li>
        </div>
      </div>
    </>
  )
}
