import React from 'react'
import styles from '@/pages/member/amulet.module.sass'

// components
import MemberTitle from '@/components/common/title/memberTitle'
import Button from '@/components/common/button/index.js'
import MemberNavbar from '@/components/common/memberNavbar'
import Amulet from '@/components/common/amuletDetails/index.js'
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
            <MemberTitle text="護身符" text2="AMULET" lineColor="green" />
          </Col>
        </Row>
        <MemberNavbar />

        <Amulet />
      </Container>
    </div>
  )
}
