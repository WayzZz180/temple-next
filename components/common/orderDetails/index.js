import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'

//components
import styles from '@/components/common/orderDetails/orderDetails.module.sass'

import Button from '@/components/common/button/index.js'
import DetailsText from '@/components/common/detailsText/index.js'

export default function OrderDetails() {
  return (
    <>
      <Row className={styles.flex}>
        <Col>
          <DetailsText />
        </Col>
        <Col className={styles.btnflex}>
          <div className="m5px">
            <Button
              text="訂單詳情"
              btnColor="brown"
              width="229px"
              height="50px"
              fontSize="20px"
            />
          </div>
          <div className="m5px">
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
            <span className={`${styles.text_pink} fs30px ms5px`}>$132</span>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className={styles.line}></Col>
      </Row>
    </>
  )
}
