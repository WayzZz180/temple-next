import Image from 'next/image'
import Link from 'next/link'
import styles from './ShopProductsCard.module.sass'
// assests
import goldenStar_fill from '@/assets/goldenStar_fill.svg'
import goldenStar_outline from '@/assets/goldenStar_outline.svg'
import heart_fill from '@/assets/heart_fill.svg'
import heart_outline from '@/assets/heart_outline.svg'
// import Heart_fill from '@mui/icons-material/Favorite'
// import Heart_outline from '@mui/icons-material/FavoriteBorderSharp'
import cart_fill from '@/assets/cart_fill.svg'
import cart_outline from '@/assets/cart_outline.svg'
//hooks
import { useHoverIndex } from '@/hooks/useHoverIndex.js'
import { useClick } from '@/hooks/useClick.js'

export default function ShopProductsCard({
  src,
  text = '洋芋片',
  price = 100,
  pid = 1,
  category = 'cookies',
}) {
  //判斷hover
  const { hoveredIndex, handleMouseEnter, handleMouseLeave } = useHoverIndex(-1)
  const isHeartHovered = hoveredIndex === 1
  const isCartHovered = hoveredIndex === 2

  //判斷有無點擊收藏和購物車
  const { clickState: heartClickState, handleClick: handleHeartClick } =
    useClick(false)
  const { clickState: cartClickState, handleClick: handleCartClick } =
    useClick(false)

  return (
    <div className={`${styles.container}  p30px`}>
      {/* 產品圖 */}
      <Link href={`/shop/${category}/${pid}`}>
        <Image
          src={src}
          alt="product"
          width={150}
          height={150}
          className="shadow mb20px"
        ></Image>
      </Link>
      {/* 分隔線 */}
      <div className={`${styles.line} w180px h3px`}></div>
      {/* 標題 */}
      <Link href={`/shop/${category}/${pid}`} className="link">
        <div className={`${styles.flexStart} mt15px fwBold fs18px`}>
          <div className={`${styles.textContainer} w180px h55px`}>{text}</div>
        </div>
      </Link>
      {/* 星星 */}
      <div className={`${styles.flexStart} mt15px `}>
        <Image src={goldenStar_fill} alt="" width={20} />
        <Image src={goldenStar_fill} alt="" width={20} />
        <Image src={goldenStar_fill} alt="" width={20} />
        <Image src={goldenStar_fill} alt="" width={20} />
        <Image src={goldenStar_outline} alt="" width={20} />
      </div>
      {/* 價格+icons */}
      <div className={`${styles.flexBetween} mt30px `}>
        {/* 價格 */}
        <span className={`${styles.inlineBlock} fs20px fwBold`}>${price}</span>
        <span className={`${styles.inlineBlock} ${styles.icons}`}>
          {/* 愛心 */}
          <span
            onClick={handleHeartClick}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
            className={`${styles.inlineBlock} me5px`}
          >
            <Image
              src={
                isHeartHovered || heartClickState ? heart_fill : heart_outline
              }
              alt=""
              width={20}
            />
          </span>
          {/* 購物車 */}
          <span
            onClick={handleCartClick}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
            className={`${styles.inlineBlock}`}
          >
            <Image
              src={isCartHovered || cartClickState ? cart_fill : cart_outline}
              alt=""
              width={25}
            />
          </span>
        </span>
      </div>
    </div>
  )
}
