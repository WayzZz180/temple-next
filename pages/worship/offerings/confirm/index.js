import styles from './confirm.module.sass'

// bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// hooks
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// components
import Title from '@/components/common/title'
import WorshipProductsCard from '@/components/common/cards/WorshipProductsCard'

// import NoData from '../category/noData'

export default function Check() {
  const router = useRouter()
  const [reservation, setReservation] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    setReservation(JSON.parse(localStorage.getItem('reservation')))
  }, [router.query])

  useEffect(() => {
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

  return (
    <>
      {/* 標題列 */}
      <Row className="nowrap">
        <Title text="確認供品" text2="confirm" lineColor="hot_pink" />
        {/* <Col className={`${styles.container} `}></Col> */}
      </Row>
      <Row className="nowrap">
        {/* {data?.map((v, i) => {
          return (
            <Col key={v.pid}>
              <WorshipProductsCard
                pid={v.pid}
                src={v.image}
                text={v.product_name}
                price={v.product_price}
              />
            </Col>
          )
        })} */}
      </Row>
    </>
  )
}
