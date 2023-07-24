import React, { useState } from 'react'
import styles from './navbar.module.sass'
import Link from 'next/link'
import SearchIcon from '@mui/icons-material/Search'
import AddIcon from '@mui/icons-material/Add'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import LaunchForum from '@/components/common/launchdemo/launchforum'

export default function Navbar() {
  const [showModal, setShowModal] = useState(false)

  const handleCloseModal = () => setShowModal(false)
  const handleShowModal = () => setShowModal(true)
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
              <Button
                className={`btn-link ${styles.no_underline} ${styles.custom_button}`}
                onClick={handleShowModal}
                style={{
                  background: 'none', // 去除 hover 時的底色效果
                }}
              >
                <AddIcon />
                發佈文章
              </Button>
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
      {/* Modal 的部分 */}
      <LaunchForum showModal={showModal} handleCloseModal={handleCloseModal} />
    </>
  )
}
