import React from 'react'
import styles from '@/pages/W/W-PrayingRecord.module.sass'

// components
import InputBox from '@/components/common/inputBox/index.js'
import Title from '@/components/common/title/index.js'
import Button from '@/components/common/button/index.js'
import MemberNavbar from '@/components/common/memberNavbar'
import Coupons from '@/components/common/coupons/index.js'

//bootstrap
import { Container, Row, Col } from 'react-bootstrap'

export default function PrayingRecord() {
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
      </Container>
    </div>
  )
}
