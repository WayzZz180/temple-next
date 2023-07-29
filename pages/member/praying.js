import React from 'react'
import styles from '@/pages/member/praying.module.sass'
import Image from 'next/image'

// components
import Title from '@/components/common/title/index.js'
import Button from '@/components/common/button/index.js'
import MemberNavbar from '@/components/common/memberNavbar'
import Wishlist from '@/components/common/wishlist'
import PrayingDetails from '@/components/common/prayingDetails/index.js'
import mazuGod from '@/assets/mazuGod.svg'
import coupon from '@/assets/coupon.svg'

//bootstrap
import { Container, Row, Col } from 'react-bootstrap'

export default function Praying() {
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

        <PrayingDetails />
      </Container>
    </div>
  )
}
