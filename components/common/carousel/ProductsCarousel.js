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

const imgSrc = []
//1
for (let i = 1; i <= 10; i++) {
  const imagePath = require(`@/public/img/cookies/pancake/pancake (${i}).png`)
  imgSrc.push(imagePath.default)
}
// //2
// for (let i = 1; i <= 10; i++) {
//   const imagePath = require(`@/public/img/candy/candy/candy (${i}).png`)
//   imgSrc.push(imagePath.default)
// }
// //3
// for (let i = 1; i <= 10; i++) {
//   const imagePath = require(`@/public/img/drinks/juice/juice (${i}).png`)
//   imgSrc.push(imagePath.default)
// }
// //4
// for (let i = 1; i <= 10; i++) {
//   const imagePath = require(`@/public/img/gifts/gong/gong (${i}).png`)
//   imgSrc.push(imagePath.default)
// }
// //5
// for (let i = 1; i <= 10; i++) {
//   const imagePath = require(`@/public/img/salty/can/can (${i}).png`)
//   imgSrc.push(imagePath.default)
// }

function chunkArray(arr, size) {
  const chunks = []
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size))
  }
  return chunks
}
export default function ProductsCarousel() {
  const data = [
    {
      text: '唰嘴ㄟ',
      color: 'green',
    },
    {
      text: '呷甜甜',
      color: 'hot_pink',
    },
    {
      text: '啉涼涼',
      color: 'green',
    },
    {
      text: '呷飽飽',
      color: 'hot_pink',
    },
    {
      text: '本土ㄟ',
      color: 'green',
    },
  ]
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

  const imgChunks = chunkArray(imgSrc, 5)

  return data.map((v, i) => {
    return (
      <Fragment key={i}>
        <ShopCategory text={v.text} color={v.color} />
        <Row className="nowrap">
          <Col>
            <Image
              src={hoveredIndexLeft === i ? arrowL_fill : arrowL_outline}
              width={30}
              height={40}
              alt="arrow_left"
              onMouseEnter={() => handleMouseEnterLeft(i)}
              onMouseLeave={handleMouseLeaveLeft}
              className={`${styles.arrow}`}
            />
          </Col>
          <Row className={`nowrap ${styles.carousel}`}>
            {imgChunks.map((chunk, rowIndex) => (
              <Row key={rowIndex} className={`${styles.row}  nowrap`}>
                {chunk.map((src, colIndex) => (
                  <Col key={colIndex} className={`${styles.flex_start}`}>
                    <ShopProductsCard src={src} />
                  </Col>
                ))}
              </Row>
            ))}
          </Row>
          <Col>
            <Image
              src={hoveredIndexRight === i ? arrowR_fill : arrowR_outline}
              width={30}
              height={40}
              alt="arrow_right"
              onMouseEnter={() => handleMouseEnterRight(i)}
              onMouseLeave={handleMouseLeaveRight}
              className={`${styles.arrow}`}
            />
          </Col>
        </Row>
      </Fragment>
    )
  })
}
