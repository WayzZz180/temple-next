import React from 'react'
import Image from 'next/image'
import styles from './forumhomepage.module.sass'
import nav from '@/assets/nav.svg'
import Rightgod from '@/assets/rightgod.svg'
import Leftgod from '@/assets/leftgod.svg'
import ForumLogo from '@/components/common/forumlogo'
import Title from '@/components/common/title'
import Forumcard from '@/components/common/cards/forumcard'

export default function Forum() {
  return (
    <>
      <div className={`${styles.background}`}>
        <div className={`${styles.place}`}>
          <div className={`${styles.floor}`}>
            <Image src={nav} width={1990} alt="nav" />
          </div>
          <div className={`${styles.flex_row}`}>
            <Image src={Leftgod} alt="leftgod" height={850} />
            <ForumLogo />
            <Image src={Rightgod} alt="rightgod" height={850} />
          </div>
        </div>
      </div>
      <Title text="主題看板" text2="TOPIC BOARD" />
      <div>{/* <Forumcard text /> */}</div>
    </>
  )
}
