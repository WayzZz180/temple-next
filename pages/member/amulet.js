import Head from 'next/head'
import styles from '@/pages/member/amulet.module.sass'
import AuthContext from '@/contexts/AuthContext'
import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'

// components
import MemberTitle from '@/components/common/title/memberTitle'
import Button from '@/components/common/button/index.js'
import MemberNavbar from '@/components/common/memberNavbar'
import Amulet from '@/components/common/amuletDetails/index.js'
import ProfilePhoto from '@/components/common/profilePhoto'
import data from '@/components/mydata/memberNavbarData.js'

//bootstrap
import { Container, Row, Col } from 'react-bootstrap'

export default function MyAmulet() {
  const { auth, setAuth, logout } = useContext(AuthContext)
  const router = useRouter()
  const { id } = router.query
  const [amulet, setAmulet] = useState([])

  useEffect(() => {
    console.log(`amulet頁面 有沒有auth.token?1`, auth.token)
    if (auth.token) {
      fetch(process.env.API_SERVER + '/member/amulet', {
        headers: {
          Authorization: 'Bearer ' + auth.token,
        },
      })
        .then((r) => r.json())
        .then((data) => {
          console.log(`amulet頁面 有沒有auth.token?2`, auth.token)
          console.log(`amulet頁面 data:`, data)
          // 進入頁面把資料抓出來
          setAmulet(data)
        })
    } else {
      // Handle the case when auth.token is not available or user is not logged in
      // You can add any additional logic here
      console.log('用戶尚未註冊')
    }
  }, [auth.token])

  return (
    <div className={styles.flex}>
      <Head>
        <title>{data[6]?.text}</title>
      </Head>
      <Container>
        <ProfilePhoto />
        <Row>
          <Col>
            <MemberTitle text="護身符" text2="AMULET" lineColor="green" />
          </Col>
        </Row>
        <MemberNavbar />

        {amulet && amulet.length > 0 ? (
          amulet.map((v, i) => (
            <div key={i}>
              <Amulet amuletName={v.Name} />
            </div>
          ))
        ) : (
          <div>目前沒有可用護身符</div>
        )}
      </Container>
    </div>
  )
}
