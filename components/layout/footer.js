import React from 'react'
import styles from './footer.module.sass'
import Image from 'next/image'
import Link from 'next/link'
import stars from '@/assets/stars.svg'
import logoChi from '@/assets/logoChi.svg'
import logoEng from '@/assets/logoEng.svg'

export default function Footer() {
  const info = ['購物須知', '訂單疑問', '與我們聯繫', '隱私權使用聲明']
  const len = info.length

  return (
    <footer className="mt100px">
      <div className={`${styles.footer} wBold`}>
        {/* logo */}
        <div className={`${styles.flex_col}`}>
          <Link href="#">
            <Image src={logoChi} width={85} alt="logo" />
          </Link>
          <Link href="#">
            <Image src={logoEng} width={100} alt="logo" />
          </Link>
        </div>

        {/* 第二排內容 */}
        <div className={`${styles.flex_row} fs15px fwBolder`}>
          <Image src={stars} width={150} alt="stars" />
          <span>
            {info.map((v, i) => (
              <React.Fragment key={i}>
                <Link href="#" className={styles.ahref}>
                  {v}
                </Link>
                {i !== len - 1 && <span> ｜ </span>}
              </React.Fragment>
            ))}
          </span>
          <Image src={stars} width={150} alt="stars" />
        </div>

        {/* copyright */}
        <div className={`${styles.flex_row} fs12px`}>
          copyright © 2023 Temple Round Jing Co.,Ltd
        </div>
      </div>
    </footer>
  )
}