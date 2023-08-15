import styles from './confirm.module.sass'
import Head from 'next/head'

// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// hooks
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// components
import Title from '@/components/common/title'
import WorshipConfirmCard from '@/components/common/cards/WorshipConfirmCard'
import Button from '@/components/common/button'
import CloudLeft from '@/components/common/cloud/cloudL'
import CloudRight from '@/components/common/cloud/cloudR'
import Loading from '@/components/common/loading'

export default function Check() {
  const router = useRouter()
  const [reservation, setReservation] = useState([])
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  // 訂單資訊
  const [user, setUser] = useState({
    delivery: '宅配',
    payment: '信用卡',
    receivedInfo: '民生社區',
    status: '未出貨',
  })
  useEffect(() => {
    setReservation(JSON.parse(localStorage.getItem('reservation')))
  }, [router.query])

  useEffect(() => {
    // 抓選取的商品資料
    if (reservation) {
      const reqData = { pidArr: reservation?.pidArr }
      fetch(`${process.env.API_SERVER}/worship/confirm`, {
        method: 'POST',
        body: JSON.stringify({ requestData: reqData }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((r) => r.json())
        .then((data) => {
          setData(data)
          setTimeout(() => {
            setLoading(false)
          }, 2000)
        })
    }
  }, [reservation])

  // 預約完成時清空reservation
  const clearLocal = () => {
    if (localStorage.getItem('reservation')) {
      localStorage.removeItem('reservation')
    }
  }
  if (loading) return <Loading />
  // if (!data)

  // 總計
  const total = data?.reduce((result, v) => {
    return (result += Number(v.product_price))
  }, 0)

  // 預約資訊
  const insert = () => {
    const reqData = { ...reservation, total: total, complete: false, ...user }
    // 加入worship_summary & details
    const auth = localStorage.getItem('auth')
    if (auth) {
      const obj = JSON.parse(auth)
      const Authorization = 'Bearer ' + obj.token
      fetch(`${process.env.API_SERVER}/worship/details`, {
        method: 'POST',
        body: JSON.stringify({ requestData: reqData }),
        headers: {
          Authorization,
          'Content-Type': 'application/json',
        },
      })
        .then((r) => r.json())
        .then((data) => {})
    }
  }
  return (
    <Container className={`${styles.container}`}>
      <Head>
        <title>確認供品</title>
      </Head>
      <div className={`${styles.cloudLeft}`}>
        <CloudLeft />
      </div>
      <div className={`${styles.cloudRight}`}>
        <CloudRight />
      </div>
      {/* 標題列 */}
      <Row className="nowrap">
        <Title text="確認供品" text2="confirm" lineColor="green" />
      </Row>
      <Row className="nowrap mt50px mb50px">
        {data?.map((v, i) => {
          return (
            <Col key={v.pid}>
              <WorshipConfirmCard
                pid={v.pid}
                src={v.image}
                text={v.product_name}
                price={v.product_price}
              />
            </Col>
          )
        })}
      </Row>
      <Row className="nowrap">
        <Col className={`${styles.totalContainer}`}>
          <div className={`${styles.total} fs24px fwBold`}>總計：{total}元</div>
          <div className={`${styles.total} fs20px fwBold pt5px`}>
            （訂單資訊同會員資料）
          </div>
        </Col>
      </Row>
      <Row className={`${styles.button} nowrap mt50px`}>
        <Col className="me15px">
          <Button
            text="重新選擇"
            btnColor="brown"
            link={() => {
              router.push('/worship/offerings')
            }}
          />
        </Col>
        <Col className="ms15px">
          <Button
            text={
              reservation?.today && reservation?.time === reservation?.now
                ? `開始祭拜`
                : `確認預約`
            }
            btnColor="hot_pink"
            link={() => {
              const route =
                reservation?.today && reservation?.time === reservation?.now
                  ? `/worship/process`
                  : `/member/praying`
              if (
                !(reservation?.today && reservation?.time === reservation?.now)
              ) {
                clearLocal()
              }
              insert()
              router.push(route)
            }}
          />
        </Col>
      </Row>
    </Container>
  )
}
