import Image from 'next/image'
import styles from './ShopProductsCard.module.sass'
import variables from '@/styles/_variables.module.sass'
// assests
import goldenStar_fill from '@/assets/goldenStar_fill.svg'
import goldenStar_outline from '@/assets/goldenStar_outline.svg'
import Heart_fill from '@mui/icons-material/Favorite'
import Heart_outline from '@mui/icons-material/FavoriteBorderSharp'
import cart_fill from '@/assets/cart_fill.svg'
import cart_outline from '@/assets/cart_outline.svg'
//hooks
import { useHoverIndex } from '@/hooks/useHoverIndex.js'
import { useClick } from '@/hooks/useClick.js'

import { createTheme, ThemeProvider } from '@mui/material/styles'

export default function ShopProductsCard({ src }) {
  //判斷hover
  const { hoveredIndex, handleMouseEnter, handleMouseLeave } = useHoverIndex(-1)
  const isHeartHovered = hoveredIndex === 1
  const isCartHovered = hoveredIndex === 2

  //判斷有無點擊收藏和購物車
  const { clickState: heartClickState, handleClick: handleHeartClick } =
    useClick(false)
  const { clickState: cartClickState, handleClick: handleCartClick } =
    useClick(false)

  //mui icons color
  const theme = createTheme({
    components: {
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: variables.hot_pink,
          },
        },
      },
    },
  })

  return (
    <div className={`${styles.container} m30px`}>
      {/* 產品圖 */}
      <Image
        src={src}
        alt="product"
        width={150}
        height={150}
        className="shadow mb20px"
      ></Image>
      {/* 分隔線 */}
      <div className={`${styles.line} w180px h3px`}></div>
      {/* 標題 */}
      <div className={`${styles.flexStart} mt15px fwBold fs18px`}>
        <div className={'w180px'}>洋芋片洋芋片洋芋片</div>
      </div>
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
        <span className={`${styles.inlineBlock} fs20px fwBold`}>$80</span>
        <span className={`${styles.inlineBlock} ${styles.icons}`}>
          {/* 愛心 */}
          <span
            onClick={handleHeartClick}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
            className={`${styles.inlineBlock} me5px`}
          >
            {isHeartHovered || heartClickState ? (
              <ThemeProvider theme={theme}>
                <Heart_fill />
              </ThemeProvider>
            ) : (
              <Heart_outline />
            )}
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
