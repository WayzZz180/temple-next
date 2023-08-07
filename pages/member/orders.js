import React from 'react'
import styles from '@/pages/member/orders.module.sass'
// hooks
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// components
import Title from '@/components/common/title/index.js'
import Button from '@/components/common/button/index.js'
import MemberNavbar from '@/components/common/memberNavbar'
import Wishlist from '@/components/common/wishlist'
import OrderDetails from '@/components/common/orderDetails'
import OrderSummary from '@/components/common/cards/orderSummaryCard'

// bootstrap
import { Container, Row, Col } from 'react-bootstrap'

export default function Orders() {
  const router = useRouter()
  const [data, setData] = useState([])

  useEffect(() => {
    // 訂單大綱資料
    fetch(`${process.env.API_SERVER}/shop/order`)
      .then((r) => r.json())
      .then((data) => {
        setData(data)
      })
  }, [router.query])

  return (
    <div className={styles.flex}>
      <Container>
        <Row>
          <Col>
            <Title
              text="訂單外包H"
              text2="ORDERS"
              lineColor="green"
              width={860}
            />
          </Col>
        </Row>
        <MemberNavbar />

        <Row>
          {data.map((v, i) => {
            return (
              <Col key={i} className={`${styles.detailsContainer} mt30px`}>
                <OrderSummary data={v} text1="訂單詳情" text2="留下評論" />
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}
