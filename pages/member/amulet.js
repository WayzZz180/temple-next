import React from 'react'
import styles from '@/pages/member/amulet.module.sass'

// components
import Title from '@/components/common/title/index.js'
import Button from '@/components/common/button/index.js'
import MemberNavbar from '@/components/common/memberNavbar'
import Amulet from '@/components/common/amuletDetails/index.js'

//bootstrap
import { Container, Row, Col } from 'react-bootstrap'

export default function MyAccount() {
  return (
    <div className={styles.flex}>
      <Container>
        <Row>
          <Col>
            <Title text="護身符" text2="AMULET" lineColor="green" width={860} />
          </Col>
        </Row>
        <MemberNavbar />

        <Amulet />
      </Container>
    </div>
  )
}
