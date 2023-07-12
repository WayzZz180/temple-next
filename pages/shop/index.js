import { useState, Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './style.module.sass'
//hooks
import { useHoverIndex } from '@/hooks/useHoverIndex.js'
// components
import Title from '@/components/common/title'
import ShopCategory from '@/components/common/title/ShopCategory'

import ShopSearchBar from '@/components/common/bar/ShopSearchBar'
import goldenStar_fill from '@/assets/goldenStar_fill.svg'
import goldenStar_outline from '@/assets/goldenStar_outline.svg'
import ProductsCarousel from '@/components/common/carousel/ProductsCarousel'
// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Shop() {
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

  // 類別hover
  const {
    hoveredIndex: hoveredIndexStar,
    handleMouseEnter: handleMouseEnterStar,
    handleMouseLeave: handleMouseLeaveStar,
  } = useHoverIndex(-1)

  return (
    <Container className={'shopContainer'}>
      {/* 類別 */}
      <Row className="nowrap mt100px mb50px fs24px">
        {/* 標題 */}
        <Col>
          <p className={`${styles.title}`}>咱有的物仔</p>
        </Col>
      </Row>
      <Row className={`nowrap fwBold fs20px mb50px`}>
        {/* 類別詳細 */}
        {data.map((v, i) => {
          return (
            <Col
              key={i}
              onMouseEnter={() => handleMouseEnterStar(i)}
              onMouseLeave={handleMouseLeaveStar}
            >
              <Link
                href="#"
                className={`${styles.category} ${
                  hoveredIndexStar === i ? styles.hovered : ''
                } m15px`}
              >
                {/* 星星 */}
                <span className={`${styles.star} pe15px `}>
                  <Image
                    src={
                      hoveredIndexStar === i
                        ? goldenStar_fill
                        : goldenStar_outline
                    }
                    alt="stars"
                    width={20}
                  ></Image>
                </span>
                {/* 文字 */}
                <span className={`${styles.link} $ pb15px`}>{v.text}</span>
              </Link>
            </Col>
          )
        })}
      </Row>
      {/* 搜尋商品 */}
      <Row className="nowrap mb100px">
        <Col>
          <ShopSearchBar />
        </Col>
      </Row>

      {/* Products */}
      {data.map((v, i) => {
        return <ProductsCarousel key={i} text={v.text} color={v.color} i={i} />
      })}
    </Container>
  )
}
