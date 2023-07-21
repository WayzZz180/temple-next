import React from 'react'
import styles from '@/pages/W/W-MyAccount.module.sass'

// components
import Title from '@/components/common/title/index.js'
import Button from '@/components/common/button/index.js'
import MemberNavbar from '@/components/common/memberNavbar'
import Wishlist from '@/components/common/wishlist'

//bootstrap
import { Container, Row, Col } from 'react-bootstrap'

export default function MyAccount() {
  return (
    <div className={styles.flex}>
      <Container>
        <Row>
          <Col>
            <Title
              text="我的優惠券"
              text2="COUPONS"
              lineColor="green"
              width={860}
            />
          </Col>
        </Row>
        <MemberNavbar />

        <Wishlist />
      </Container>
    </div>
  )
}
