import React from 'react'
import styles from './head.module.sass'
import Image from 'next/image'
import nav from '@/assets/nav.svg'
import foo_dog_left from '@/assets/foo_dog_left.svg'
import foo_dog_right from '@/assets/foo_dog_right.svg'
import Temple from '@/components/common/temple'
import dog from '@/assets/dog_in.gif'
import pink_star from '@/assets/Pink_Star.svg'
import signIn from '@/assets/sing_in.svg'
import HomeSet from '@/components/common/cards/HomeSet'
import Title from '@/components/common/title'
import God from '@/components/common/cards/HomeGod'

export default function Home() {
  return (
    <>
      <div className={`${styles.background}`}>
        <div className={`${styles.place}`}>
          <div className={`${styles.floor}`}>
            <Image src={nav} width={1990} alt="nav" />
          </div>
          <div className={styles.flex_row}>
            <Image
              src={foo_dog_left}
              width={195}
              alt="foo_dog_left"
              className={`${styles.right}`}
            />
            <Temple />
            {/* dog */}
            <div className={`${styles.dog}`}>
              <Image src={dog} width={400} alt="dog" />
            </div>
            {/* signin star */}
            <div className={`${styles.pinkStar}`}>
              <div>
                <Image src={pink_star} width={40} alt="star" />
              </div>
            </div>
            {/* sign in word */}
            <div className={`${styles.signIn}`}>
              <Image src={signIn} width={30} alt="signIn" />
            </div>
            <Image
              src={foo_dog_right}
              width={195}
              alt="foo_dog_right"
              className={`${styles.left}`}
            />
          </div>
        </div>
      </div>
      <Title
        text="供品套組精選"
        text2="OFFERING SELECTION SET"
        lineColor="line_p"
      />
      <HomeSet />
      <Title
        text="求神問卜"
        text2="INQUIRING OF THE DIVINE"
        lineColor="line_g"
      />
      <div className={styles.flex_row2}>
        <God text1="媽祖" text2="求籤" pic="MazuGod"/>
        <God text1="月老" text2="求紅線"/>
        <God text1="文昌" text2="點學業燈" pic="StudyGod"/>
      </div>
    </>
  )
}
