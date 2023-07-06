import React from 'react'
import styles from './head.module.sass'
import Image from 'next/image'
import foo_dog_left from '@/assets/foo_dog_left.svg'
import foo_dog_right from '@/assets/foo_dog_right.svg'
import temple from '@/assets/temple.svg'
import logoChi from '@/assets/logoChi.svg'
import logoEng from '@/assets/logoEng.svg'
import cloud from '@/assets/cloud.svg'
import dog from '@/assets/dog_in.gif'
import nav from '@/assets/nav.svg'
import Link from 'next/link'

export default function Head() {
  return (
    <>
      <header>
        <div className={`${styles.head}`}>
          {/* navbar left */}
          <div className={`${styles.flex_row2} ${styles.h15px}`}>
            <ul className={`${styles.drop_down_menu} `}>
              <li>
                <span className={`${styles.title}`}>01</span>
                <span className={`${styles.title2}`}>會員中心</span>
                <ul>
                  <li>
                    <a href="#">變更資料</a>
                  </li>
                  <li>
                    <a href="#">拜拜紀錄</a>
                  </li>
                  <li>
                    <a href="#">訂單記錄</a>
                  </li>
                  <li>
                    <a href="#">喜好商品</a>
                  </li>
                  <li>
                    <a href="#">我的優惠券</a>
                  </li>
                  <li>
                    <a href="#">護身符</a>
                  </li>
                  <li>
                    <a href="#">每日簽到</a>
                  </li>
                </ul>
              </li>
              <li>
                <span className={`${styles.title}`}>02</span>
                <span className={`${styles.title2}`}>線上拜拜</span>
                <ul>
                  <li>
                    <a href="#">服務據點</a>
                  </li>
                  <li>
                    <a href="#">服務客戶</a>
                  </li>
                  <li>
                    <a href="#">服務地區</a>
                  </li>
                  <li>
                    <a href="#">徵才資訊</a>
                  </li>
                </ul>
              </li>
              <li>
                <span className={`${styles.title}`}>03</span>
                <span className={`${styles.title2}`}>供品商城</span>
                <ul>
                  <li>
                    <a href="#">服務據點</a>
                  </li>
                  <li>
                    <a href="#">服務客戶</a>
                  </li>
                  <li>
                    <a href="#">服務地區</a>
                  </li>
                  <li>
                    <a href="#">徵才資訊</a>
                  </li>
                </ul>
              </li>
            </ul>

            {/* logo */}
            <div className={`${styles.flex_col2}`}>
              <Link href="#">
                <Image src={logoChi} width={85} alt="logo" />
              </Link>
              <Link href="#">
                <Image src={logoEng} width={100} alt="logo" />
              </Link>
            </div>

            {/* navbar right*/}
            <ul className={`${styles.drop_down_menu} `}>
              <li>
                <span className={`${styles.title}`}>04</span>
                <span className={`${styles.title2}`}>線上遶境</span>
                <ul>
                  <li>
                    <a href="#">服務據點</a>
                  </li>
                  <li>
                    <a href="#">服務客戶</a>
                  </li>
                  <li>
                    <a href="#">服務地區</a>
                  </li>
                  <li>
                    <a href="#">徵才資訊</a>
                  </li>
                </ul>
              </li>
              <li>
                <span className={`${styles.title}`}>05</span>
                <span className={`${styles.title2}`}>求神問卜</span>
                <ul>
                  <li>
                    <a href="#">服務據點</a>
                  </li>
                  <li>
                    <a href="#">服務客戶</a>
                  </li>
                  <li>
                    <a href="#">服務地區</a>
                  </li>
                  <li>
                    <a href="#">徵才資訊</a>
                  </li>
                </ul>
              </li>
              <li>
                <span className={`${styles.title}`}>06</span>
                <span className={`${styles.title2}`}>民俗論壇</span>
                <ul>
                  <li>
                    <a href="#">服務據點</a>
                  </li>
                  <li>
                    <a href="#">服務客戶</a>
                  </li>
                  <li>
                    <a href="#">服務地區</a>
                  </li>
                  <li>
                    <a href="#">徵才資訊</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* background cloud */}
          <div className={`${styles.cloud}`}>
            <Image src={cloud} width={1250} alt="cloud" />

            {/* temple */}
            <div className={`${styles.flex_row}`}>
              <Image src={foo_dog_left} width={150} alt="foo_dog_left" />
              <Image src={temple} width={750} alt="temple" />
              <Image src={foo_dog_right} width={150} alt="foo_dog_right" />
              <div className={`${styles.nav}`}>
            <Image src={nav} width={1300} alt="nav" />
          </div>
            </div>
          </div>
          {/* dog */}
          {/* <div className={`${styles.dog}`}>
            <Image src={dog} width={250} alt="dog" />
          </div> */}
        </div>
      </header>
    </>
  )
}
