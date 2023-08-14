import styles from '@/components/common/coupons/couponNavbar.module.sass'
import React from 'react'
import { Row, Col } from 'react-bootstrap'

const title_cart = [
  { text: '優惠券' },
  { width: '250px', text: '有效期限/名稱' },
  { text: '價值' },
  { text: '使用狀態' },
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
                i === 0 ? 'ps45px' : ''
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
