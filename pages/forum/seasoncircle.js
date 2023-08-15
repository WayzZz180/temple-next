import React, { useState } from 'react'
import styles from './seasoncircle.module.sass'
import Title from '@/components/common/title'
import Image from 'next/image'
import Circlie from '@/components/common/temple/timeCirle'

export default function Seasoncircle() {
  const [number, setNumber] = useState(1)

  return (
    <>
      <div className={`${styles.parent_container}`}>
        <Title text="節期拜法" text2="FESTIVE WORSHIP" lineColor="hot_pink" />
        <div className={`${styles.flex_row}`}>
          <div className={`${styles.circle}`}>
            <Circlie setNumber={setNumber} />
          </div>
          <div className={`${styles.number}`}>
            <Image
              src={`/season/time_${number}.svg`}
              width="800"
              height="1800"
            />
          </div>
        </div>
      </div>
    </>
  )
}
