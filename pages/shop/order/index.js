import styles from './order.module.sass'

// hooks
import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import CartDataContext from '@/contexts/CartDataContext'

// components
import ShopStepBar from '@/components/common/bar/ShopStepBar'
import InputBox from '@/components/common/inputBox'
import Button from '@/components/common/button'
import Title from '@/components/common/title'
import BuyContent from '@/components/common/orderDetails/buyContent'

// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


export default function Order() {
  const router = useRouter()

  // for 訂單資料
  const { cartData, setCartData, getCartData } = useContext(CartDataContext)
  // 小計
  const total = cartData?.reduce((result, v) => {
    return result + v.product_price * v.quantity
  }, 0)

  const[customerData, setCustomerData]= useState({
   
      customer_name:"沈子威",
    
      customer_phone:"0912345678",
    
      customer_address:"南京復興民生社區",
    
      payment:"現金",
    
      delivery:"超商取貨",
    
      coupon:null,
    
})
  // customer_name, customer_phone, customer_address, payment, delivery, coupon,
  const sendOrder=()=>{
    const orderData = { cartData: cartData, customerData: customerData, total: total, status:'未出貨'}
    fetch(`${process.env.API_SERVER}/shop/order`, {
      method: 'POST',
      body: JSON.stringify({ requestData: orderData }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((data) => {
      })
  }

  return (
    <Container className={`${styles.container}`}>
      {/* step */}
      <ShopStepBar path="/shop/order" />
      <BuyContent data={cartData} total={total}/>
      {/* 表單 */}
      <Container className="mt50px">
        <Title text="訂單資訊" text2="information" />
        <Row className={`${styles.flex_space_between}`}>
          <InputBox
            type="text"
            prompt="收件人姓名"
            placeholder="沈子威"
            value={''}
            onChange={() => {}}
            width={600}
            height={60}
          />
          <InputBox
            type="text"
            prompt="物流方式"
            placeholder="宅配"
            onChange
            width={600}
            height={60}
          />
        </Row>
        <Row className={`${styles.flex_space_between}`}>
          <InputBox
            type="text"
            prompt="收件人電子郵件"
            placeholder="wayz180@gmail.com"
            value={''}
            onChange={() => {}}
            width={600}
            height={60}
          />
          <InputBox
            type="text"
            prompt="付款方式"
            placeholder="現金"
            onChange
            width={600}
            height={60}
          />
        </Row>
        <Row className={`${styles.flex_space_between}`}>
          <InputBox
            type="text"
            prompt="收件人電話"
            placeholder="0912345678"
            value={''}
            onChange={() => {}}
            width={600}
            height={60}
          />
          <InputBox
            type="text"
            prompt="載具"
            placeholder="/CHILD1215"
            onChange
            width={600}
            height={60}
          />
        </Row>
        <Row>
          <InputBox
            type="text"
            prompt="收件人地址"
            placeholder="現居地址"
            value={''}
            onChange={() => {}}
            width={'97%'}
            height={60}
          />
        </Row>
        <Row className={`${styles.flex_space_between} pt80px `}>
          <Button
            text="返回購物車"
            btnColor="brown"
            width=""
            height=""
            padding="15px 60px"
            fontSize="24px"
            link={() => {
              router.push('/shop/cart')
            }}
          />
          <Button
            text="送出訂單"
            btnColor="hot_pink"
            width=""
            height=""
            padding="15px 60px"
            fontSize="24px"
            link={() => {
              sendOrder()
              router.push('/shop/order/complete')
            }}
          />
        </Row>
      </Container>
    </Container>
  )
}
