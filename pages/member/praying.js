import React from 'react'
import styles from '@/pages/member/praying.module.sass'
import Image from 'next/image'

// components
import MemberTitle from '@/components/common/title/memberTitle'

import Button from '@/components/common/button/index.js'
import MemberNavbar from '@/components/common/memberNavbar'
import Wishlist from '@/components/common/wishlist'
import PrayingDetails from '@/components/common/praying/prayingDetails'
import PrayingSummary from '@/components/common/praying/prayingSummary'
import mazuGod from '@/assets/mazuGod.svg'
import coupon from '@/assets/coupon.svg'
import ProfilePhoto from '@/components/common/profilePhoto'

//bootstrap
import { Container, Row, Col } from 'react-bootstrap'

export default function Praying() {
  return (
    <div className={styles.flex}>
      <Container>
        <ProfilePhoto />
        <Row>
          <Col>
            <MemberTitle
              text="我的優惠券"
              text2="COUPONS"
              lineColor="green"
              width={860}
            />
          </Col>
        </Row>

        <MemberNavbar />
        <PrayingSummary />
      </Container>
    </div>
  )
}
