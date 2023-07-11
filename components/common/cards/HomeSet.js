import React from 'react'
import Image from 'next/image'
import mazu from '@/assets/mazuSet.svg'
import study from '@/assets/studySet.svg'
import love from '@/assets/loveSet.svg'
import styles from './HomeSet.module.sass'
import Button from '@/components/common/button'

export default function HomeSet({
  pic1 = 'love',
  text1 = 'TOP1',
  text2 = '月老基本款',
  text3 = '除了擺放三牲四果外，也會準備發糕、菜碗、果乾等供品，由於早期道教祭拜沒有特別強調使用素食供品祭祀，因此大家不要過於糾結供品的葷素種類，祭拜的重點在心誠則靈。',
}) {
  const temp = '../../' + pic1 + '.svg'
  return (
    <>
      <div className={`${styles.flex_row}`}>
        <div className={`${styles.flex_col}`}>
          <div className={`${styles.top1}`}>{text1}</div>
          <div className={`${styles.title}`}>{text2}</div>
          <div className={`${styles.line}`}></div>
          <div className={`${styles.content}`}>{text3}</div>
          <div className="mt150px">
            <Button text="選購去" btnColor="hot_pink" />
          </div>
        </div>
        <div>
          <Image src={`${temp}`} alt="" width="800" height="610"></Image>
        </div>
      </div>
    </>
  )
}
