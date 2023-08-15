import React from 'react'
import styles from './folktaboos.module.sass'
import Title from '@/components/common/title'
import Image from 'next/image'
import taboos from '@/assets/Taboos.svg'

export default function Folktaboos() {
  return (
    <>
      <div className={`${styles.parent_container}`}>
        <Title text="禁忌百科" text2="FOLK TABOOS" lineColor="hot_pink" />
          <div className={`${styles.taboos} mt80px`}>
            <Image
              src={taboos}
              width="1500"
            />
        </div>
      </div>
    </>
  )
}
