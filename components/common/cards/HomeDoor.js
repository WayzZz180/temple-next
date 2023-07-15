import React from 'react'
import Image from 'next/image'
import B from '@/assets/door_b.svg'
import O from '@/assets/door_o.svg'
import P from '@/assets/door_p.svg'
import Z from '@/assets/door_z.svg'
import Y from '@/assets/door_y.svg'
import styles from './HomeDoor.module.sass'

export default function HomeDoor() {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.bg}`}></div>
      <div className={`${styles.y}`}>
        <Image src={Y} alt="" width="1900"></Image>
      </div>
      <div className={`${styles.z}`}>
        <Image src={Z} alt="" width="1900"></Image>
      </div>
      <div className={`${styles.p}`}>
        <Image src={P} alt="" width="1900"></Image>
      </div>
      <div className={`${styles.o}`}>
        <Image src={O} alt="" width="1900"></Image>
      </div>
      <div className={`${styles.b}`}>
        <Image src={B} alt="" width="1900"></Image>
      </div>
    </div>
  )
}
