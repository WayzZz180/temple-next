import React from 'react'
import styles from '@/pages/member/orders.module.sass'

// components
import Title from '@/components/common/title/index.js'
import Button from '@/components/common/button/index.js'
import MemberNavbar from '@/components/common/memberNavbar'
import Wishlist from '@/components/common/wishlist'
import OrderDetails from '@/components/common/orderDetails'

//bootstrap
import { Container, Row, Col } from 'react-bootstrap'

export default function Orders() {
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

        <OrderDetails />
        <OrderDetails />
      </Container>
    </div>
  )
}
