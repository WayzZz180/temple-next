import { useEffect, useState } from 'react'
import styles from './readpost.module.sass'
import Forumline from '@/components/common/forumlogo/forumline'
import Avatar from '@mui/material/Avatar'

export default function ReadPost() {
  return (
    <>
      <div className={`${styles.container}`}>
        123
        <div className={`${styles.row}`}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 77, height: 77 }}
            className={`${styles.avatar}`}
          />
          <div className={`${styles.adjust}`}>id</div>
          <div>·</div>
          <div className={`${styles.adjust}`}>category</div>
          <div>·</div>
          <div className={`${styles.adjust}`}>time</div>
        </div>
        <div>123</div>
      </div>
    </>
  )
}
