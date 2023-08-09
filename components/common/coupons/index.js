import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'

import variables from '@/styles/_variables.module.sass'

//components
import styles from '@/components/common/coupons/index.module.sass'

export default function Coupon({
  couponName = '',
  couponValue = '',
  expDate = '',
  usageStatus = '',
}) {
  let couponColor
  let coupon

  // 使用 switch 敘述根據 usageStatus 設定適當的 CSS 類名
  switch (usageStatus) {
    case '未使用':
      couponColor = { color: variables['hot_pink'] }
      coupon = require('@/assets/coupon_red.svg')
      break
    case '已使用':
      couponColor = { color: variables['green'] }
      coupon = require('@/assets/coupon_green.svg')

      // couponColor = {$hot_pink};
      break
    case '已過期':
      couponColor = { color: variables['orderGray'] }
      coupon = require('@/assets/coupon_gray.svg')

      // couponColor = {$hot_pink};
      break
    default:
      couponColor = '' // 預設的 CSS 類名
      coupon = ''
  }

  const couponRow = (
    <Row className={styles.flex}>
      <Col>
        <Image src={coupon} alt="coupon" height={89} width={143} />
      </Col>
      <Col className="ls3px w250px">
        <div>{`有效期限至${expDate}`}</div>
        <div>
          <b>{couponName}</b>
        </div>
      </Col>
      <Col style={couponColor}>
        <div className={`${styles.valid} ${styles.w70px}`}>{couponValue}</div>
      </Col>
      <Col style={couponColor}>
        {/* 使用 className 變數來設定 CSS 類名 */}
        <div className={`${styles.validSquare} ls3px fwBold`}>
          {usageStatus}
        </div>
      </Col>
    </Row>
  )

  const lineRow = (
    <Row>
      <Col>
        <div className={styles.line}></div>
      </Col>
    </Row>
  )

  // const combinedRows = []
  // const numberOfRows = 3 // 資料的比數

  // for (let i = 0; i < numberOfRows; i++) {
  //   combinedRows.push(i % 2 === 0 ? couponRow : lineRow)
  // }
  return (
    <>
      {couponRow}
      {lineRow}
    </>
  )
}
