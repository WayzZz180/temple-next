import styles from './offerings.module.sass'
import Image from 'next/image'
import Link from 'next/link'

// bootstrap
import { Container, Row, Col } from 'react-bootstrap'

// hooks
import { useHoverIndex } from '@/hooks/useHoverIndex.js'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// components
import ShopTitle from '@/components/common/title/ShopTitle'
import HomeCarousels from '@/components/common/carousel/HomeCarousels'
import ProductsCarousel from '@/components/common/carousel/ProductsCarousel'

// svg
import goldenStar_fill from '@/assets/goldenStar_fill.svg'
import goldenStar_outline from '@/assets/goldenStar_outline.svg'
import data from '@/components/mydata/productsTitleData'

export default function Offerings() {
  const gods = [
    { text: '媽祖', id: 'Mazu' },
    { text: '月老', id: 'LoveGod' },
    { text: '文昌', id: 'StudyGod' },
  ]
  // 類別hover
  const {
    hoveredIndex: hoveredIndexStar,
    handleMouseEnter: handleMouseEnterStar,
    handleMouseLeave: handleMouseLeaveStar,
  } = useHoverIndex(-1)

  // 換分類時清空keyword
  const clearLocal = () => {
    if (localStorage.getItem('keyword')) {
      localStorage.removeItem('keyword')
    }
  }
  return (
    <>
      <Container className="mt100px">
        <HomeCarousels />
      </Container>
      <Container className={'shopContainer'}>
        {/* <Top /> */}
        <Row className="nowrap mt100px mb50px fs24px">
          {/* 標題 */}
          <Col>
            <div className={`${styles.title}`}>神明</div>
          </Col>
        </Row>
        <Row className={`nowrap fs20px `}>
          {/* 類別詳細 */}
          {gods.map((v, i) => {
            return (
              <Col
                key={i}
                onMouseEnter={() => handleMouseEnterStar(i)}
                onMouseLeave={handleMouseLeaveStar}
                onClick={() => {
                  clearLocal()
                }}
              >
                <Link
                  href={`#${v.id}`}
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
                  <span className={`${styles.link} fwBold pb15px fs24px`}>
                    {v.text}
                  </span>
                </Link>
              </Col>
            )
          })}
        </Row>
        {/* 媽祖*/}
        <Row id="Mazu" className="nowrap mb50px">
          <Col>
            <ShopTitle text="媽祖" lineColor="green" />
          </Col>
        </Row>
        {/* 月老*/}
        <Row id="LoveGod" className="nowrap mb50px">
          <Col>
            <ShopTitle text="月老" lineColor="hot_pink" />
          </Col>
        </Row>
        {/* 文昌*/}
        <Row id="StudyGod" className="nowrap mb50px">
          <Col>
            <ShopTitle text="文昌" lineColor="green" />
          </Col>
        </Row>

        {/* Products */}
        {/* {data.map((v, i) => {
          return (
            i != 0 && (
              <ProductsCarousel
                key={i}
                text={v.text}
                color={v.color}
                i={i}
                id={v.id}
              />
            )
          )
        })} */}
      </Container>
    </>
  )
}
