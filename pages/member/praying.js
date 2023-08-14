import Head from 'next/head'
import React from 'react'
import styles from '@/pages/member/praying.module.sass'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// components
import MemberTitle from '@/components/common/title/memberTitle'
import MemberNavbar from '@/components/common/memberNavbar'
import PrayingSummary from '@/components/common/praying/prayingSummary'
import ProfilePhoto from '@/components/common/profilePhoto'
import Loading from '@/components/common/loading'
import data from '@/components/mydata/memberNavbarData.js'
//bootstrap
import { Container, Row, Col } from 'react-bootstrap'

export default function Praying() {
  const router = useRouter()
  const [data, setData] = useState([])

  // 參拜資料(worship_summary, worship_details)
  useEffect(() => {
    const auth = localStorage.getItem('auth')
    if (auth) {
      const obj = JSON.parse(auth)
      const Authorization = 'Bearer ' + obj.token
      fetch(`${process.env.API_SERVER}/worship/summary`, {
        headers: {
          Authorization,
        },
      })
        .then((r) => r.json())
        .then((data) => {
          setData(data)
        })
    }
  }, [router.query])

  if (!data) return <Loading />

  return (
    <div className={styles.flex}>
      <Head>
        <title>{data[1]?.text}</title>
      </Head>
      <Container>
        <ProfilePhoto />
        <Row>
          <Col>
            <MemberTitle text="拜拜紀錄" text2="PRAYING" lineColor="green" />
          </Col>
        </Row>
        <MemberNavbar />
        {data?.map((v, i) => {
          return (
            <div key={v.wid}>
              <PrayingSummary data={v} />
            </div>
          )
        })}
      </Container>
    </div>
  )
}
