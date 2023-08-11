import React from 'react'
import Image from 'next/image'
import flower from '@/assets/greenFlower.svg'
import Kuai from '@/assets/Kuai_Kuai.svg'
import styles from './HomePocket.module.sass'
import Button from '@/components/common/button'

export default function HomePocket() {
  return (
    <>
      <div className={`${styles.flex_row}`}>
        <div className={`${styles.container}`} >
          <Image
            src={flower}
            alt=""
            width="690"
            className={`${styles.flower}`}
          ></Image>
          <Image
            src={Kuai}
            alt=""
            width="540"
            className={`${styles.kuai}`}
          ></Image>
        </div>
        <div className={`${styles.flex_col}`}>
          <div className={`${styles.top1}`}>你知道嗎？</div>
          <div className={`${styles.title}`}>臺灣都市傳說百科</div>
          <div className={`${styles.line}`}></div>
          <div className={`${styles.content}`}>
            機器上放包「綠乖乖」就能保佑運轉？為何放「黃乖乖」就母湯。在機器上擺放乖乖，機器才會乖，而且乖乖必須是綠色的，要是擺錯，機器就會出事…！在現代，零食「乖乖」已成為機房中不可或缺的重要物品，有時還是被准許進入機房重地的唯一食物，這是因為，人們相信，「乖乖大神」可以保佑機器乖乖運行。
          </div>
          <div className="mt70px">
            <Button text="了解更多" btnColor="green" />
          </div>
        </div>
      </div>
    </>
  )
}
