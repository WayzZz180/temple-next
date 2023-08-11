import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './calendar.module.sass'
import img from '@/assets/calendar.svg'

export default function calendar() {
  return (
    <>
      <div className={styles.flex_col2}>
        <div className={styles.title5}>七月 (小) 十九 屬虎 戊申月 辛丑日</div>
        <div className={styles.flex_row}>
          <div className={styles.flex_col}>
            <div className={styles.title}>八</div>
            <div className={styles.title}>月</div>
          </div>
          <div className={styles.title2}>AUGUST</div>
          <div className={styles.flex_col}>
            <div className={styles.title}>十</div>
            <div className={styles.title}>六</div>
          </div>
        </div>
        <div className={styles.title3}>16</div>
        <div className={styles.title4}>宜啟航</div>
        <div className={styles.title6}>
          很可惜我們並不能知道其他平行宇宙的自己會是怎樣，但至少可以不讓日子過得不明不白，在日後回顧自己是怎樣一走到現在，回顧那些人生分岔路，感受人生的醍醐味。
        </div>
      </div>
    </>
  )
}
