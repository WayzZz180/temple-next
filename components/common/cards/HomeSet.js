import React from 'react'
import Image from 'next/image'
import mazu from '@/assets/mazuSet.svg'
import study from '@/assets/studySet.svg'
import love from '@/assets/loveSet.svg'
import styles from './HomeSet.module.sass'
import Button from '@/components/common/button'
import ArrowRight from '@/components/common/arrow/arrowRight'
import ArrowLeft from '@/components/common/arrow/arrowLeft'

export default function HomeSet() {
  return (
    <>
      {/* <div>
        <Title
          text="供品套組精選"
          text2="OFFERING SELECTION SET"
          lineColor="line_p"
        />
      </div> */}
      <div className={`${styles.flex_row}`}>
      <ArrowLeft />
        <div className={`${styles.flex_col}`}>
          <div className={`${styles.top1}`}>TOP1</div>
          <div className={`${styles.title}`}>月老基本款</div>
          <div className={`${styles.line}`}></div>
          <div className={`${styles.content}`}>
            除了擺放三牲四果外，也會準備發糕、菜碗、果乾等供品，由於早期道教祭拜沒有特別強調使用素食供品祭祀，因此大家不要過於糾結供品的葷素種類，祭拜的重點在心誠則靈。
          </div>
          <div className="mt120px">
            <Button text="選購去" btnColor="btn_p" />
          </div>
        </div>
        <div>
          <Image src={love} alt="" width="800"></Image>
        </div>
        <ArrowRight />
      </div>
    </>
  )
}
