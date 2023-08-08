import React from 'react'
import styles from '@/pages/member/praying.module.sass'
import Image from 'next/image'

// components
import MemberTitle from '@/components/common/title/memberTitle'

import Button from '@/components/common/button/index.js'
import MemberNavbar from '@/components/common/memberNavbar'
import Wishlist from '@/components/common/wishlist'
import PrayingDetails from '@/components/common/prayingDetails/index.js'
import mazuGod from '@/assets/mazuGod.svg'
// import coupon from '@/assets/coupon.svg'
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
            <MemberTitle text="拜拜紀錄" text2="PRAYING" lineColor="green" />
          </Col>
        </Row>

        <MemberNavbar />

        <PrayingDetails />
      </Container>
    </div>
  )
}
