import { useEffect, useState } from 'react'
import styles from './forumgossip.module.sass'
import Title from '@/components/common/title/'
// import variables from '@/styles/_variables.module.sass'
import Forumline from '@/components/common/forumlogo/forumline'
import Navbar from '@/components/common/forumlogo/navbar'
import Forumper from '@/components/common/forumlogo/forumper'
import AdvancedExample from '@/components/common/forumlogo/pagination'

export default function Forumgossip() {
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.flex}`}>
          <Title text="八卦版" text2="5678" />{' '}
        </div>
        <Navbar />
        <Forumline lineColor="brown" />
        <Forumper />
        <Forumper />
        <Forumper />
        <Forumper />
        <Forumper />
        <Forumper />
        <AdvancedExample />
      </div>
    </>
  )
}
