import React from 'react'
import styles from './header.module.sass'
import Image from 'next/image'
import logoChi from '@/assets/logoChi.svg'
import logoEng from '@/assets/logoEng.svg'
import Link from 'next/link'

export default function Header() {
  return (
    <>
      <header>
        {/* navbar left */}
        <div className={`${styles.flex_row2} ${styles.h15px} ${styles.head}`}>
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
      </header>
    </>
  )
}
// import React from 'react'
// import styles from './header.module.css'
// import Image from 'next/image'
// import Link from 'next/link'
// import logoChiHeader from '@/assets/logoChiHeader.svg'
// import logoEngHeader from '@/assets/logoEngHeader.svg'

// export default function Header() {
//   const info = [
//     '01會員中心',
//     '02線上拜拜',
//     '03供品商城',
//     '04遶境',
//     '05求神問卜',
//     '06民俗論壇',
//   ]
//   const ainfo = info.slice(0, 3)
//   const binfo = info.slice(3)

//   return (
//     <>
//       <header>
//         <div className={`${styles.header}`}>
//           <div className={`${styles.flex_colleft} ${styles.h16px}`}>
//             {ainfo.map((v, i) => {
//               for (i = 0; i < 3; i++) {
//                 return (
//                   <>
//                     <Link href="#" className={styles.ahref}>
//                       {v}
//                     </Link>
//                   </>
//                 )
//               }
//             })}
//           </div>
//           {/* logo */}
//           <div className={`${styles.flex_col}`}>
//             <Link href="#">
//               <Image
//                 src={logoChiHeader}
//                 width={91.11}
//                 height={19.07}
//                 alt="logo"
//               />
//             </Link>
//             <Link href="#">
//               <Image
//                 src={logoEngHeader}
//                 width={103.01}
//                 height={7.74}
//                 alt="logo"
//               />
//             </Link>
//           </div>
//           <div className={`${styles.flex_colright} ${styles.h16px}`}>
//             {binfo.map((v, i) => {
//               for (i = 0; i < 3; i++) {
//                 return (
//                   <>
//                     <Link href="#" className={styles.ahref}>
//                       {v}
//                     </Link>
//                   </>
//                 )
//               }
//             })}
//           </div>
//         </div>
//       </header>
//     </>
//   )
// }
