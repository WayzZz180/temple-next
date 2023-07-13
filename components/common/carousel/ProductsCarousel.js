import { useState, Fragment } from 'react'
import styles from './ProductsCarousel.module.sass'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'next/image'
import ShopCategory from '@/components/common/title/ShopCategory'
import ShopProductsCard from '@/components/common/cards/ShopProductsCard'
import arrowR_outline from '@/assets/arrowR_outline.svg'
import arrowR_fill from '@/assets/arrowR_fill.svg'
import arrowL_outline from '@/assets/arrowL_outline.svg'
import arrowL_fill from '@/assets/arrowL_fill.svg'
import { useHoverIndex } from '@/hooks/useHoverIndex.js'
import usePath from '@/hooks/usePath.js'

export default function ProductsCarousel({ text, color, i }) {
  const { imgSrc } = usePath('cookies', 'pancake', 10)
  const {
    hoveredIndex: hoveredIndexLeft,
    handleMouseEnter: handleMouseEnterLeft,
    handleMouseLeave: handleMouseLeaveLeft,
  } = useHoverIndex(-1)
  const {
    hoveredIndex: hoveredIndexRight,
    handleMouseEnter: handleMouseEnterRight,
    handleMouseLeave: handleMouseLeaveRight,
  } = useHoverIndex(-1)

  // for carousel
  const [position, setPosition] = useState(0)

  return (
    // 一個類別
    <Fragment key={i}>
      {/* 類別標題 */}
      <ShopCategory text={text} color={color} />
      {/* 第一層row */}
      <Row className={`${styles.row} `}>
        {/* 左箭頭 */}
        <Image
          src={hoveredIndexLeft === i ? arrowL_fill : arrowL_outline}
          width={30}
          height={40}
          alt="arrow_left"
          onMouseEnter={() => handleMouseEnterLeft(i)}
          onMouseLeave={handleMouseLeaveLeft}
          className={`${styles.arrow} ${position <= 0 ? styles.display : ''}`}
          onClick={() => {
            position <= 0 ? setPosition(0) : setPosition(position - 1)
          }}
        />
        {/*一大個商品類別 */}
        <div className={`${styles.carousel}`}>
          <div
            className={`${styles.move} `}
            style={{ right: `${240 * position}px` }}
          >
            {/*個別商品類別 */}
            {imgSrc.map((src, i) => (
              <Col key={i} className={`${styles.flex_start}`}>
                <ShopProductsCard src={src} />
              </Col>
            ))}
          </div>
        </div>
        {/* 右箭頭 */}

        <Image
          src={hoveredIndexRight === i ? arrowR_fill : arrowR_outline}
          width={30}
          height={40}
          alt="arrow_right"
          onMouseEnter={() => handleMouseEnterRight(i)}
          onMouseLeave={handleMouseLeaveRight}
          className={`${styles.arrow} ${position > 4 ? styles.display : ''}`}
          onClick={() => {
            position > 4 ? setPosition(5) : setPosition(position + 1)
          }}
        />
      </Row>
    </Fragment>
  )
}
