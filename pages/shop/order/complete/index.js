import styles from './complete.module.sass'

// hooks
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// components
import ShopStepBar from '@/components/common/bar/ShopStepBar'
import OrderSummaryCard from '@/components/common/cards/orderSummaryCard'
import BuyContent from '@/components/common/orderDetails/buyContent'
import Title from '@/components/common/title'
import Button from '@/components/common/button'
import CheckOrder from '@/components/common/orderDetails/checkOrder'
import Cloud1 from '@/components/common/cloud/cloudR'
import Cloud2 from '@/components/common/cloud/cloudL'
// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function OrderComplete() {
  const router = useRouter()
  const [data, setData] = useState([])
  const [buyContent, setBuyContent] = useState([])

  const scrollToBuyContent = () => {
    // 取得目標元素的位置
    const buyContent = document.getElementById('buyContent')
    const buyContentPosition = buyContent.getBoundingClientRect().top

    // 計算捲動的距離，這裡設定為捲動至目標元素頂部距離畫面頂部的距離
    const offset = window.pageYOffset
    const scrollDistance = buyContentPosition + offset

    // 執行捲動動作
    window.scrollTo({
      top: scrollDistance,
      behavior: 'smooth', // 使用平滑滾動效果
    })
  }

  const scrollToOrderDetails = () => {
    // 取得目標元素的位置
    const orderDetails = document.getElementById('orderDetails')
    const orderDetailsPosition = orderDetails.getBoundingClientRect().top

    // 計算捲動的距離，這裡設定為捲動至目標元素頂部距離畫面頂部的距離
    const offset = window.pageYOffset
    const scrollDistance = orderDetailsPosition + offset

    // 執行捲動動作
    window.scrollTo({
      top: scrollDistance,
      behavior: 'smooth', // 使用平滑滾動效果
    })
  }

  useEffect(() => {
    const auth = localStorage.getItem('auth')
    if (auth) {
      const obj = JSON.parse(auth)
      const Authorization = 'Bearer ' + obj.token
      // 訂單大綱資料
      fetch(`${process.env.API_SERVER}/shop/order`, {
        headers: {
          Authorization,
        },
      })
        .then((r) => r.json())
        .then((data) => {
          setData(data[0])
        })
      // 訂單詳細資料
      fetch(`${process.env.API_SERVER}/shop/orderDetails`, {
        headers: {
          Authorization,
        },
      })
        .then((r) => r.json())
        .then((data) => {
          setBuyContent(data)
        })
    }
  }, [router.query])

  return (
    <>
      <Container>
        {/* Step */}
        <Row>
          <Col>
            <ShopStepBar path="/shop/order/complete" />
          </Col>
        </Row>
        {/* 訂單資料卡片 */}
        <Row className={` ${styles.summaryContainer} pt100px`}>
          <OrderSummaryCard
            data={data}
            text1="商品詳情"
            text2="收件詳情"
            link1={scrollToBuyContent}
            link2={scrollToOrderDetails}
            // link1={() => {
            //   scrollTo('buyContent')
            // }}
            // link2={() => {
            //   scrollTo('orderDetails')
            // }}
          />
        </Row>

        {/* 訂單商品詳情 */}
        <Row className="mt50px">
          <div id="buyContent" className={`${styles.contentContainer}`}>
            <div className="pb30px pt50px">
              <Title text="商品詳情" text2="order details" marginTop="0" />
            </div>
            <BuyContent data={buyContent} />
          </div>
        </Row>

        {/* 訂單表單資料 */}
        <Container
          id="orderDetails"
          className={`${styles.container} pb100px mt50px`}
        >
          <div className={`${styles.cloud1}`}>
            <Cloud1 />
          </div>
          <div className={`${styles.cloud2}`}>
            <Cloud2 />
          </div>
          <div className="pt75px">
            <Title
              text="收件詳情"
              text2="order details"
              marginTop="0"
              lineColor="hot_pink"
            />
          </div>
          <Row className={`${styles.flex_col}`}>
            <div className={`${styles.checkOrder}`}>
              <CheckOrder text="收件人姓名" content={data?.customer_name} />
              <CheckOrder text="收件人電話" content={data?.customer_phone} />
              <CheckOrder
                text="收件人電子郵件"
                content={data?.customer_email}
              />
              <CheckOrder text="收件人地址" content={data?.customer_address} />
              <CheckOrder text="物流方式" content={data?.delivery} />
              <CheckOrder text="付款方式" content={data?.payment} />
            </div>
            <div className={`${styles.button} pt100px`}>
              <Button
                text="返回商城首頁"
                btnColor="hot_pink"
                width=""
                height=""
                padding="15px 60px"
                fontSize="24px"
                link={() => {
                  router.push('/shop')
                }}
              />
            </div>
          </Row>
        </Container>
      </Container>
    </>
  )
}
