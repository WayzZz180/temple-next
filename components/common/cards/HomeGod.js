import React from 'react'
import Image from 'next/image'
import mazuGod from '@/assets/mazuGod.svg'
import studyGod from '@/assets/studyGod.svg'
import loveGod from '@/assets/loveGod.svg'
import Arched from '@/assets/arched.svg'
import Button from '@/components/common/button'
import styles from './HomeGod.module.sass'

export default function HomeGod({
  text1 = 'text1',
  text2 = 'text2',
  pic = 'loveGod',
}) {
  const temp = '../../' + pic + '.svg'
  return (
    <>
      <div className={`${styles.flex_col}`}>
        <div className={`${styles.container}`}>
          <Image
            src={`${temp}`}
            // src="../../loveGod.svg"
            alt=""
            width="400"
            height="550"
            className={`${styles.img}`}
          ></Image>
          <Image src={Arched} alt="" width="430"></Image>
        </div>
        <div className={`${styles.title}`}>{text1}</div>
        <div className="mt20px">
          <Button text={text2} btnColor="green" />
        </div>
      </div>
    </>
  )
}
