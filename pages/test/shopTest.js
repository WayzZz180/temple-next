import React from 'react'
import ShopCategory from '@/components/common/title/ShopCategory'
import ShopProductsCard from '@/components/common/cards/ShopProductsCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './shopTest.module.sass'

export default function ShopTest() {
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
