import React from 'react'
import PrayCarousels from '@/components/common/carousel/PrayCarousels'
import styles from './mazu.module.sass'

export default function CarouselMain() {
  return (
    <>
    <div className={`${styles.parent_container}`}>
      <PrayCarousels className={`${styles.prayCarousels}`}/>
      </div>
    </>
  )
}

CarouselMain.getLayout = (page) => <>{page}</>
