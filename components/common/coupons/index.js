import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'

import variables from '@/styles/_variables.module.sass'

//components
import styles from '@/components/common/coupons/coupons.module.sass'
import coupon from '@/assets/coupon.svg'

export default function Coupons() {
  return (
    <>
      <Row className={styles.flex}>
        <Col>
          <Image src={coupon} alt="coupon" height={89} width={143}></Image>
        </Col>
        <Col>
          <div>有效期限至2023/08/16</div>
          <div>
            <b>會員專屬優惠券</b>
          </div>
        </Col>
        <Col className={styles.valid}>
          <div>$150</div>
        </Col>
        <Col>
          <div className={styles.square}>未使用</div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className={styles.line}></div>
        </Col>
      </Row>
    </>
  )
}
