import styles from './quiz.module.sass'
import Image from 'next/image'
import fairyL from '@/assets/fairyL.svg'
import fairyR from '@/assets/fairyR.svg'
import fairyText from '@/assets/fairyText.svg'
import circle_1 from '@/assets/circle_1.svg'
import sun from '@/assets/sun.svg'
import roof from '@/assets/roof.svg'
import house from '@/assets/house.svg'
import c1 from '@/assets/littleC1.svg'

export default function Quiz() {
  return (
    <> 

    <Image
    src={roof}
    alt=""
    width="1700"
    className={`${styles.roof}`}
  ></Image>
    <div className={`${styles.container}`}>
    <div className={`${styles.c1}`}>
          <Image src={c1} alt="cloud" width={900}></Image>
        </div>
        <div className={`${styles.c1_2}`}>
          <Image src={c1} alt="cloud" width={900} className={`${styles.c1_3}`}></Image>
        </div>
     <Image
            src={sun}
            alt=""
            width="5348"
            className={`${styles.sun}`}
          ></Image>
      <div className={`${styles.flex_row}`}>
        <div className={`${styles.fairyL2}`}>
          <Image
            src={fairyL}
            alt=""
            width="835"
            className={`${styles.fairyL}`}
          ></Image>
        </div>
        <Image
          src={fairyText}
          alt=""
          width="730"
          className={`${styles.fairyText}`}
        ></Image>
        <div className={`${styles.flex_col} mt280px`}>
              <div className={`${styles.line}`}></div>
      <div className={`${styles.title}`}>民俗小測驗</div>
      </div>
        <Image
          src={circle_1}
          alt=""
          width="1050"
          className={`${styles.circle_1}`}
        ></Image>
        <div className={`${styles.fairyR2}`}>
          <Image
            src={fairyR}
            alt=""
            width="835"
            className={`${styles.fairyR}`}
          ></Image>
        </div>
      </div>
      </div>
      <div className={`${styles.flex_col2} mt80px`}>
  <Image
    src={house}
    alt=""
    width="1540"
    className={`${styles.house}`}
  ></Image>
    <Image
    src={house}
    alt=""
    width="1540"
    className={`${styles.house}`}
  ></Image>
     <Image
    src={house}
    alt=""
    width="1540"
    className={`${styles.house}`}
  ></Image>
     <Image
    src={house}
    alt=""
    width="1540"
    className={`${styles.house}`}
  ></Image>
     <Image
    src={house}
    alt=""
    width="1540"
    className={`${styles.house}`}
  ></Image>
     <Image
    src={house}
    alt=""
    width="1540"
    className={`${styles.house}`}
  ></Image>
     <Image
    src={house}
    alt=""
    width="1540"
    className={`${styles.house}`}
  ></Image>
     <Image
    src={house}
    alt=""
    width="1540"
    className={`${styles.house}`}
  ></Image>
  </div>
    </>
  )
}
