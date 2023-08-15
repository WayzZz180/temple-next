// Navbar.js

import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styles from './navbar.module.sass'
import Link from 'next/link'
import SearchIcon from '@mui/icons-material/Search'
import AddIcon from '@mui/icons-material/Add'
// import Button from 'react-bootstrap/Button'
// import AddNewPost from '@/components/common/launchdemo/addnewpost'
// import styled from '@emotion/styled'
// import PostInfoModal from '../launchdemo/postinfomodal'
import PostMui from '@/components/common/launchdemo/postmui'
import SearchMui from '@/components/common/launchdemo/searchmui'

export default function Navbar({ keywordSearch = () => {} }) {
  const router = useRouter()
  // const [showModal, setShowModal] = useState(false)
  // const handleCloseModal = () => setShowModal(false)
  // const handleShowModal = () => setShowModal(true)
  const [sortOrder, setSortOrder] = useState('DESC') // Initialize with DESC

  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === 'DESC' ? 'ASC' : 'DESC'
    setSortOrder(newSortOrder)
  }

  const getSortLink = () => {
    const currentSortLink = router.query.page
      ? `?page=${router.query.page}&sort=${sortOrder}`
      : `?sort=${sortOrder}`
    return currentSortLink
  }
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
                個人文章
              </Link>
            </li>
          </div>
          {/* <div className={`${styles.flex_row11}`}>
            <li className="fs20px">
              <Link href="#" className={`${styles.no_underline}`}>
                個人文章
              </Link>
            </li>
          </div> */}
        </div>
        <div className={`${styles.flex_row2}`}>
          <div className={`${styles.flex_row21}`}>
            {/* <Button
              className={`btn-link ${styles.no_underline}`}
              onClick={handleShowModal}
              style={{ background: 'none' }}
            > */}
            <PostMui page={router.query.page} />
            {/* <AddIcon />
            發佈文章 */}
            {/* </Button> */}
          </div>
          <li className={`${styles.setmid}`}>
            {/* <Link href="#" className={`${styles.no_underline}`}>
              <SearchIcon />
              搜尋文章
            </Link> */}
            <SearchMui keywordSearch={keywordSearch} />
          </li>
        </div>
      </div>
      {/* LaunchForum 的部分 */}
      {/* <AddNewPost showModal={showModal} handleCloseModal={handleCloseModal} /> */}
    </>
  )
}
