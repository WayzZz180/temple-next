import React from 'react'
import styles from './forumgossip.module.sass'
import Title from '@/components/common/title/'

export default function Forumgossip() {
  return (
    <>
      <div className={`${styles.flex}`}>
        <Title text="熱門文章" text2="5678" />
        <hr></hr>
      </div>
    </>
  )
}
