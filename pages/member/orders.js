import Head from 'next/head'
import React from 'react'
import styles from '@/pages/member/orders.module.sass'
import variables from '@/styles/_variables.module.sass'

// hooks
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Modal from 'react-modal'

// components
import MemberTitle from '@/components/common/title/memberTitle'
import MemberNavbar from '@/components/common/memberNavbar'
import OrderSummary from '@/components/common/cards/orderSummaryCard'
import Loading from '@/components/common/loading'
import ProfilePhoto from '@/components/common/profilePhoto'
import ShopOrderContentCard from '@/components/common/cards/ShopOrderContentCard'
import Title from '@/components/common/title'
import CheckOrder from '@/components/common/orderDetails/checkOrder'
import Button from '@/components/common/button'

import data from '@/components/mydata/memberNavbarData.js'
// bootstrap
import { Container, Row, Col } from 'react-bootstrap'

export default function Orders() {
  const router = useRouter()
  const [modal, setModal] = useState(false)
  const [details, setDetails] = useState([])
  const [coupon, setCoupon] = useState([])
  const [data, setData] = useState([])
  const [index, setIndex] = useState()

  useEffect(() => {
    // 訂單大綱資料
    const auth = localStorage.getItem('auth')
    if (auth) {
      const obj = JSON.parse(auth)
      const Authorization = 'Bearer ' + obj.token
      fetch(`${process.env.API_SERVER}/shop/order`, {
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

  const getDetails = (oid) => {
    const reqData = { oid: oid }
    const auth = localStorage.getItem('auth')
    if (auth) {
      const obj = JSON.parse(auth)
      const Authorization = 'Bearer ' + obj.token
      fetch(`${process.env.API_SERVER}/shop/orderDetails`, {
        method: 'POST',
        body: JSON.stringify({ requestData: reqData }),
        headers: {
          Authorization,
          'Content-Type': 'application/json',
        },
      })
        .then((r) => r.json())
        .then((data) => {
          setDetails(data[0])
          setCoupon(data[1])
        })
    }
  }
  // console.log(coupon[0].coupon_value)
  const total = details?.reduce((result, v) => {
    return result + v.product_price * v.quantity
  }, 0)

  return (
    <div className={styles.flex}>
      <Head>
        <title>{data[2]?.text}</title>
      </Head>
      <Container>
        <ProfilePhoto />
        <Row>
          <Col>
            <MemberTitle text="訂單紀錄" text2="orders" lineColor="green" />
          </Col>
        </Row>

        <MemberNavbar />

        <Row>
          {data.map((v, i) => {
            return (
              <Col key={i} className={`${styles.detailsContainer} mt30px`}>
                <OrderSummary
                  data={v}
                  text1="訂單詳情"
                  text2="留下評論"
                  link1={(e) => {
                    e.stopPropagation()
                    getDetails(v.oid)
                    setModal(true)
                    setIndex(i)
                  }}
                />
              </Col>
            )
          })}
        </Row>
      </Container>
      <Modal
        isOpen={modal}
        contentLabel="praying details"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // 背景顏色透明度
          },
          content: {
            maxWidth: '1500px', // 調整最大寬度
            maxHeight: '800px', // 調整最大高度
            margin: 'auto', // 水平居中
            background: variables['bgColor'],
          },
        }}
      >
        <div
          role="presentation"
          className={`${styles.close} me25px fs28px p10px`}
          onClick={() => {
            setModal(false)
          }}
        >
          X
        </div>
        {details?.map((v, i) => (
          <ShopOrderContentCard
            key={i}
            src={`/${v.image}`}
            name={`${v.product_name}`}
            price={`${v.product_price}`}
            quantity={`${v.quantity}`}
          />
        ))}
        {/* 明細 */}
        <Row className="nowrap fwBold">
          <Col className={`${styles.col} mt50px fs18px`}>
            <div className={`${styles.billContainer}`}>
              <div className={`${styles.detailsCategory}`}>
                <span className={`${styles.details}`}>小計：</span>
                <span className={`${styles.details}`}>NT${total}</span>
              </div>
              <div className={`${styles.detailsCategory}`}>
                <span className={`${styles.details}`}>使用優惠券：</span>
                <span className={`${styles.details}`}>
                  {coupon[0]?.coupon_value
                    ? `-NT$${coupon[0]?.coupon_value}`
                    : '無'}
                </span>
              </div>
              <div className={`${styles.detailsCategory} mt30px`}>
                <span className={`${styles.details}`}>合計：</span>
                <span className={`${styles.details}`}>
                  NT$
                  {total -
                    (coupon[0]?.coupon_value ? coupon[0]?.coupon_value : 0)}
                </span>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          {/* 訂單表單資料 */}
          <Container
            id="orderDetails"
            className={`${styles.container} pb100px mt50px`}
          >
            <div className="pt75px">
              <Title
                text="收件詳情"
                text2="order details"
                marginTop="0"
                lineRowor="hot_pink"
              />
            </div>
            <Row className={`${styles.flex_col}`}>
              <div className={`${styles.checkOrder}`}>
                <CheckOrder
                  text="收件人姓名"
                  content={data[index]?.customer_name}
                />
                <CheckOrder
                  text="收件人電話"
                  content={data[index]?.customer_phone}
                />
                <CheckOrder
                  text="收件人電子郵件"
                  content={data[index]?.customer_email}
                />
                <CheckOrder
                  text="收件人地址"
                  content={data[index]?.customer_address}
                />
                <CheckOrder text="物流方式" content={data[index]?.delivery} />
                <CheckOrder text="付款方式" content={data[index]?.payment} />
              </div>
            </Row>
          </Container>
        </Row>
      </Modal>
    </div>
  )
}
