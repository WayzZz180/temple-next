import React from 'react'
import styles from '@/pages/W/W-MyAccount.module.sass'

// components
import InputBox from '@/components/common/inputBox/index.js'
import Title from '@/components/common/title/memberTitle.js'
import Button from '@/components/common/button/memberButton.js'
import MemberNavbar from '@/components/memberNavbar'
import Coupons from '@/components/common/coupons/index.js'

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
        <Coupons />
        <Coupons />
        <Coupons />
      </Container>
    </div>
  )
}
