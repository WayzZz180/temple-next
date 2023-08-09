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

//bootstrap
import { Container, Row, Col } from 'react-bootstrap'

export default function Praying() {
  const router = useRouter()
  const [data, setData] = useState([])

  // 參拜資料(worship_summary, worship_details)
  useEffect(() => {
    fetch(`${process.env.API_SERVER}/worship/summary`)
      .then((r) => r.json())
      .then((data) => {
        setData(data)
      })
  }, [router.query])

  if (!data) return <Loading />

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
