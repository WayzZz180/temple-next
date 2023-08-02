import styles from './complete.module.sass'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// components
import ShopStepBar from "@/components/common/bar/ShopStepBar"
import OrderSummaryCard from '@/components/common/cards/orderSummaryCard'
import BuyContent from '@/components/common/orderDetails/buyContent'

// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function OrderComplete() {
  const router = useRouter()
  const [data, setData]= useState([])
  const [buyContent, setBuyContent]= useState([])
  useEffect(() => {
    fetch(`${process.env.API_SERVER}/shop/order`)
      .then((r) => r.json())
      .then((data) => {
        setData(data)
      })
    fetch(`${process.env.API_SERVER}/shop/orderDetails`)
      .then((r) => r.json())
      .then((data) => {
        setBuyContent(data)
      })
  }, [router.query])

  return (
    <>
    <Container>
      {/* Step */}
      <Row>
        <Col>
          <ShopStepBar path='/shop/order/complete'/>
        </Col>
      </Row>
      <Row className="mt134px">
        <OrderSummaryCard data={data}/>
      </Row>
      <div className={`${styles.contentContainer}`}>
      {/* <BuyContent data={data} total={data?.total}/> */}
      </div>
    </Container>
    </>
  )
}
