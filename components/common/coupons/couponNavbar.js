import styles from '@/components/common/coupons/couponNavbar.module.sass'
import React from 'react'
import { Row, Col } from 'react-bootstrap'

const title_cart = [
  { width: '16%', text: '優惠券' },
  { width: '16.8%', text: '名稱/有效期限' },
  { width: '11.3%', text: '價值' },
  { width: '25.1%', text: '使用狀態' },
  //   { width: '17%', text: '小計' },
]

export default function CouponNavbar() {
  return (
    <Row className="pb50px">
      <Col className={`${styles.container} `}>
        {title_cart.map((v, i) => {
          return (
            <span
              key={i}
              className={`${styles.title} ${
                i === 0 ? 'ps65px' : ''
              } fs20px p15px`}
              style={{ width: v.width }}
            >
              {v.text}
            </span>
          )
        })}
      </Col>
    </Row>
  )
}
