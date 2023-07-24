import Image from 'next/image'
import Link from 'next/link'
import styles from './ShopProductsCard.module.sass'
// svg
import heart_fill from '@/assets/heart_fill.svg'
import heart_outline from '@/assets/heart_outline.svg'
import cart_fill from '@/assets/cart_fill.svg'
import cart_outline from '@/assets/cart_outline.svg'
import cart_noStock from '@/assets/cart_noStock.svg'

//hooks
import { useState } from 'react'
import { useHoverIndex } from '@/hooks/useHoverIndex.js'
import { useClick } from '@/hooks/useClick.js'
import { css, keyframes } from '@emotion/css'

//components
import Stars from '@/components/common/stars'

export default function ShopProductsCard({
  src,
  text = '洋芋片',
  category = 'cookies',
  price = 100,
  pid = 1,
  stars = 5,
  stock_num = 10,
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
  
  //購物車彈跳＋1動畫
  const [animationEnd, setAnimationEnd] = useState(false)
  const y = 0
  const y2 = y-25
  const y3 = y-10
  const y4 = y-4
  const x = 0
  const bounce = keyframes({
    'from, 20%, 53%, 80%, to': {
      transform: `translate3d(${x}px,${y}px,0)`,
    },
    '40%, 43%': {
      transform: `translate3d(${x}px, ${y2}px, 0)`,
    },
    '70%': {
      transform: `translate3d(${x}px, ${y3}px, 0)`,
    },
    '90%': {
      transform: `translate3d(${x}px, ${y4}px, 0)`,
    },
  })
  const handleAnimationEnd = () => {
    setAnimationEnd(true)
    setTimeout(() => {
      setAnimationEnd(false);
    }, 1200);
  };

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
     <div className={`${styles.flexStart} mt15px`}>
      <Stars width={20}  stars ={stars}/>
    </div>
      {/* 價格+icons */}
      <div className={`${styles.alert}`}>
        <div className={css({
                    display: animationEnd && cartClickState ? '':'none',
                    width: 180,
                    height: 30,
                    position: 'absolute',
                    marginLeft:160,
                    color: '#363636',
                    animation: `${bounce} 1s ease-out 1`,
                    transformOrigin: 'center bottom',
                    fontSize: 14,
                    letterSpacing: 2 
                  })}
          >+1</div>
      </div>
      <div className={`${styles.flexBetween}`}>
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
            onClick={()=>{
              if(stock_num!=0){
                handleCartClick()
                handleAnimationEnd()
              }else{
                alert(`無庫存`)
              }
              }}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
            className={`${styles.inlineBlock}`}
          >
          
            
          <Image
              src={stock_num === 0 ? cart_noStock : (isCartHovered || cartClickState ? cart_fill : cart_outline)}
              alt="cart"
              width={25}
            />

          
          </span>
        </span>
      </div>
    </div>
  )
}
