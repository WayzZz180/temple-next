import React from 'react'
import styles from '@/pages/member/wishlist.module.sass'

// components
import MemberTitle from '@/components/common/title/memberTitle'
import Button from '@/components/common/button/index.js'
import MemberNavbar from '@/components/common/memberNavbar'
import Wishlist from '@/components/common/wishlist'
import ProfilePhoto from '@/components/common/profilePhoto'

//bootstrap
import { Container, Row, Col } from 'react-bootstrap'

export default function MyAccount() {
  return (
    <div className={styles.flex}>
      <Container>
        <ProfilePhoto />
        <Row>
          <Col>
            <MemberTitle text="收藏清單" text2="WISHLIST" lineColor="green" />
          </Col>
        </Row>
        <MemberNavbar />

        <Wishlist />
      </Container>
    </div>
  )
}
