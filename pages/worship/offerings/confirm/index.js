import styles from './confirm.module.sass'

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

export default function Check() {
  const router = useRouter()
  const [reservation, setReservation] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    setReservation(JSON.parse(localStorage.getItem('reservation')))
  }, [router.query])

  useEffect(() => {
    // 抓選取的商品資料
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
      })
  }, [reservation])

  const clearLocal = () => {
    if (localStorage.getItem('reservation')) {
      localStorage.removeItem('reservation')
    }
  }

  if (!data) return <p>Loading...</p>

  const total = data?.reduce((result, v) => {
    return (result += Number(v.product_price))
  }, 0)

  // 預約
  const insert = () => {
    const reqData = { ...reservation, total: total, status: false }
    // 加入worship_summary & details
    fetch(`${process.env.API_SERVER}/worship/details`, {
      method: 'POST',
      body: JSON.stringify({ requestData: reqData }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((data) => {
        setData(data)
      })
  }

  return (
    <Container className={`${styles.container}`}>
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
        <Col>
          <div className={`${styles.total} fs24px fwBold`}>總計：{total}元</div>
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
                : `預約成功`
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
                insert()
              }
              router.push(route)
            }}
          />
        </Col>
      </Row>
    </Container>
  )
}
