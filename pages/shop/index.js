import React from 'react'
import Link from 'next/link'
import styles from './style.module.sass'
// components
import ShopCategory from '@/components/common/title/ShopCategory'
import ShopProductsCard from '@/components/common/cards/ShopProductsCard'
import ShopSearchBar from '@/components/common/bar/ShopSearchBar'
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
  return (
    <Container className={'shopContainer'}>
      {/* 類別 */}
      <Row className="nowrap mt100px mb100px fwBold fs28px">
        <Col>咱有的物件</Col>
      </Row>
      <Row className={`nowrap fwBold fs24px mb100px`}>
        {data.map((v, i) => {
          return (
            <Col key={i} className={`${styles.relative} m50px`}>
              <Link href="#" className={`${styles.category} p30px`}>
                {v.text}
              </Link>
            </Col>
          )
        })}
      </Row>
      {/* 搜尋商品 */}
      <Row className="nowrap">
        <Col>
          <ShopSearchBar />
        </Col>
      </Row>
      {/* Products */}
      {data.map((v, i) => {
        return (
          <React.Fragment key={i}>
            <ShopCategory text={v.text} color={v.color} />
            <Row className="nowrap">
              <Col>
                <ShopProductsCard />
              </Col>
              <Col>
                <ShopProductsCard />
              </Col>
              <Col>
                <ShopProductsCard />
              </Col>
              <Col>
                <ShopProductsCard />
              </Col>
              <Col>
                <ShopProductsCard />
              </Col>
            </Row>
          </React.Fragment>
        )
      })}
    </Container>
  )
}
