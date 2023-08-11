import styles from './WorshipProcessGod.module.sass'
import React from 'react'
import Image from 'next/image'
import { css, keyframes } from '@emotion/css'
// hooks
import { useState, useEffect } from 'react'
import { useClick } from '@/hooks/useClick.js'
import { useRouter } from 'next/router'

// svg
import Arched from '@/assets/arched.svg'
import BackLight from '@/assets/worshipBackLight.svg'
import Couplet from '@/assets/worshipCouplet.svg'
import Lantern from '@/assets/worshipLantern.svg'
import mazuGod from '@/assets/mazuGod.svg'
import loveGod from '@/assets/loveGod.svg'
import studyGod from '@/assets/studyGod.svg'

export default function WorshipGod({
  text = '媽祖',
  pic = mazuGod,
  wordLeft = '母恩似海共霑恩',
  wordRight = '聖德如天同景仰',
}) {
  const router = useRouter()
  // const src = '../../' + pic + '.svg'

  const bounce = keyframes({
    'from, 20%, 53%, 80%, to': {
      transform: 'translate3d(0,0,0)',
    },
    '40%, 43%': {
      transform: 'translate3d(0, -45px, 0)',
    },
    '70%': {
      transform: 'translate3d(0, -25px, 0)',
    },
    '90%': {
      transform: 'translate3d(0, -10px, 0)',
    },
  })

  return (
    <div className={`${styles.relative}`}>
      <div className={`${styles.container}`}>
        <div
          className={`${styles.side} ${css({
            animation: `${bounce} 1.2s  ease-in-out 1`,
          })}`}
          style={{ paddingRight: '30%' }}
        >
          <Image src={Lantern} alt="lantern" width={65} />
          <div className={`${styles.couplet} mt15px`}>
            <Image src={Couplet} alt="couplet" width={60} />
            <div className={`${styles.word} fwBold`}>{wordLeft}</div>
          </div>
        </div>
        {/* whole god  */}
        <div className={`${styles.relative}`}>
          {/* 背後轉的光 */}
          <div className={`${styles.BackLight} ms1px`}>
            <Image src={BackLight} alt="light" width={280} />
          </div>
          {/* god */}
          <div className={`${styles.godContainer}`}>
            {/* God */}
            <Image src={pic} alt="" width={250} className={`${styles.img} `} />
          </div>
          <div className={`${styles.title}`}>{text}</div>
          {/* god name */}
        </div>
        <div
          className={`${styles.side} ${css({
            animation: `${bounce} 1.2s ease-in-out 1`,
          })}`}
          style={{ paddingLeft: '30%' }}
        >
          <Image src={Lantern} alt="lantern" width={65} />
          <div className={`${styles.couplet} mt15px`}>
            <Image src={Couplet} alt="couplet" width={60} />
            <div className={`${styles.word} fwBold`}>{wordRight}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
