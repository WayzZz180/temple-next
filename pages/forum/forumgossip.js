import { useEffect, useState } from 'react'
import styles from './forumgossip.module.sass'
import Title from '@/components/common/title/'
// import variables from '@/styles/_variables.module.sass'
import Forumline from '@/components/common/forumlogo/forumline'
import Navbar from '@/components/common/forumlogo/navbar'
import Forumper from '@/components/common/forumlogo/forumper'
import AdvancedExample from '@/components/common/forumlogo/pagination'
import Head from 'next/head'
// import LaunchForum from '@/components/common/launchdemo/launchforum'

export default function Forumgossip() {
  return (
    <>
      <Head>
        <title>八卦版</title>
      </Head>
      <div className={`${styles.container}`}>
        <div className={`${styles.flex}`}>
          <Title text="八卦版" text2="GOSSIP" />{' '}
        </div>
        <Navbar />
        <Forumline lineColor="brown" />
        <Forumper />
        <AdvancedExample />
      </div>
    </>
  )
}
