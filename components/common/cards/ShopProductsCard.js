import { useState } from 'react'
import Image from 'next/image'
import styles from './ShopProductsCard.module.sass'

// assests
import chips from '@/assets/chips (4).png'
import goldenStar_fill from '@/assets/goldenStar_fill.svg'
import goldenStar_outline from '@/assets/goldenStar_outline.svg'
import FavoriteIcon_fill from '@mui/icons-material/Favorite'
import FavoriteIcon_outline from '@mui/icons-material/FavoriteBorderSharp'
import cart_fill from '@/assets/cart_fill.svg'
import cart_outline from '@/assets/cart_outline.svg'

export default function ShopProductsCard() {
  const [stars, setStars] = useState(0)
  return (
    <div className={`${styles.container} m30px`}>
      {/* 產品圖 */}
      <Image src={chips} alt="" width="150" className="shadow mb20px"></Image>
      {/* 分隔線 */}
      <div className={`${styles.line} w180px h3px`}></div>
      {/* 標題 */}
      <div className={`${styles.flexStart} mt15px fwBold fs18px`}>
        <div className={'w180px'}>洋芋片洋芋片洋芋片</div>
      </div>
      {/* 星星 */}
      <div className={`${styles.flexStart} mt15px `}>
        <Image src={goldenStar_fill} alt="" width={20} />
        <Image src={goldenStar_outline} alt="" width={20} />
        <Image src={goldenStar_outline} alt="" width={20} />
        <Image src={goldenStar_outline} alt="" width={20} />
        <Image src={goldenStar_outline} alt="" width={20} />
      </div>
      {/* 價格+icons */}
      <div className={`${styles.flexBetween} mt30px `}>
        {/* 價格 */}
        <span className={`${styles.inlineBlock} fs20px fwBold`}>$80</span>
        {/* 愛心 */}
        <span className={`${styles.inlineBlock} ${styles.icons}`}>
          <span className={`${styles.inlineBlock} me5px `}>
            <FavoriteIcon_outline />
          </span>
          {/* 購物車 */}
          <span className={`${styles.inlineBlock}`}>
            <Image src={cart_outline} alt="" width={25} />
          </span>
        </span>
      </div>
    </div>
  )
}
