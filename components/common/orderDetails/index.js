import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'

import variables from '@/styles/_variables.module.sass'

//components
import styles from '@/components/common/orderDetails/orderDetails.module.sass'
import coupon from '@/assets/coupon.svg'
import Button from '@/components/common/button/index.js'

export default function OrderDetails() {
  return (
    <>
      <Row className={styles.flex}>
        <Col>
          訂單編號 訂單日期 配送方式 付款方式 收件資訊 23061067307593 2023/06/10
          宅配 |已出貨 信用卡一次付清 高雄市大樹區統嶺路1號
        </Col>
        <Col className={styles.btnflex}>
          <div>
            <Button
              text="訂單詳情"
              btnColor="brown"
              width="229px"
              height="50px"
              fontSize="20px"
            />
          </div>
          <div>
            <Button
              text="留下評論"
              btnColor="brown"
              width="229px"
              height="50px"
              fontSize="20px"
            />
          </div>
          <div>
            訂單金額
            <span>$132</span>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className={styles.line}></Col>
      </Row>
    </>
  )
}
