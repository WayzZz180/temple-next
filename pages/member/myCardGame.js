import Head from 'next/head'
import styles from '@/pages/member/myCardGame.module.sass'
import { AuthContextProvider } from '@/contexts/AuthContext'
import AuthContext from '@/contexts/AuthContext'
import React, { useState, useEffect, useContext, useCallback } from 'react'
import { useRouter } from 'next/router'
import Modal from 'react-modal'

// components
import InputBox from '@/components/common/inputBox/index.js'
import MemberTitle from '@/components/common/title/memberTitle'

import Button from '@/components/common/button/index.js'
import MemberNavbar from '@/components/common/memberNavbar'
import Coupon from '@/components/common/coupons/index.js'
import SpinWheel from '@/components/common/spinWheel/ULspinWheel.js'
import data from '@/components/mydata/memberNavbarData.js'
import CardGame from '@/components/common/cardGame/cardGame'

//bootstrap
import { Container, Row, Col } from 'react-bootstrap'
import ProfilePhoto from '@/components/common/profilePhoto'

export default function dailySignIn() {
  return (
    // <div className={styles.flex_centre}>
    <Container className="flex">
      <Head>
        <title>{data[8]?.text}</title>
      </Head>
      <ProfilePhoto />
      <Row>
        <Col>
          <MemberTitle text="遊戲區" text2="Card Matching" lineColor="green" />
        </Col>
      </Row>
      <Row>
        <Col className={`${styles.navbar}`}>
          <MemberNavbar />
        </Col>
      </Row>

      <CardGame />
    </Container>
    // </div>
  )
}
