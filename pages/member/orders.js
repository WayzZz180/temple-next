import React from 'react'
import styles from '@/pages/member/orders.module.sass'
// hooks
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// components
import Title from '@/components/common/title/index.js'
import MemberNavbar from '@/components/common/memberNavbar'
import OrderSummary from '@/components/common/cards/orderSummaryCard'
import Loading from '@/components/common/loading'

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
  if (!data) return <Loading />

  return (
    <div className={styles.flex}>
      <Container>
        <Row>
          <Col>
            <Title text="訂單外包H" text2="ORDERS" lineColor="green" />
          </Col>
        </Row>
        <MemberNavbar />

        <Row>
          {data?.map((v, i) => {
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
