import React from 'react'
import styles from './monsters.module.sass'
import Title from '@/components/common/title'
import Image from 'next/image'
import monsters from '@/assets/monsters.svg'

export default function Monsters() {
  return (
    <>
      <div className={`${styles.parent_container}`}>
        <Title text="山野怪談" text2="TAIWANESE MONSTERS" lineColor="hot_pink" />
        <div className={`${styles.taboos} mt80px`}>
          <Image src={monsters} width="1500" />
        </div>
      </div>
    </>
  )
}
