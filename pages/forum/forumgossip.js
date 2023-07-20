import { useEffect, useState } from 'react'
import styles from './forumgossip.module.sass'
import Title from '@/components/common/title/'
// import variables from '@/styles/_variables.module.sass'
import Forumline from '@/components/common/forumlogo/forumline'
import Navbar from '@/components/common/forumlogo/navbar'

export default function Forumgossip() {
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.flex}`}>
          <Title text="熱門文章" text2="5678" />{' '}
        </div>
        <Navbar />
        <Forumline lineColor="brown" />
      </div>
    </>
  )
}
