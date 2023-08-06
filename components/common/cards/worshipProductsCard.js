import styles from './worshipProductsCard.module.sass'
import Image from 'next/image'
export default function WorshipProductsCard() {
  return (
    <div className={`${styles.container} m15px p10px`}>
      {/* 圖片 */}
      <div className={`${styles.image} mb10px`}>
        <Image
          src={'/worship/mazu (1).png'}
          alt="image"
          width={150}
          height={150}
          className="shadow"
        />
      </div>
      <div className={`${styles.detailContainer}`}>
        <div className={`${styles.text} fs18px p5px`}>
          樂事樂連連雞汁味洋芋片(166g)
        </div>
        <div className={`${styles.price} fwBold fs16px p5px`}>$70</div>
      </div>
    </div>
  )
}
