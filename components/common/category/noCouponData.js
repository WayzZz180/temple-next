import styles from './style.module.sass'
import Link from 'next/link'

// Bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function NoCouponData() {
  return (
    <Row className="nowrap">
      <Col className={`${styles.noData} mt100px fs24px`}>
        <Link href={'/member/dailySignIn'} className="link fwBold">
          簽到即可獲得優惠券，不然來試試手氣吧?
        </Link>

        <div className={`${styles.line} mt100px`}></div>
      </Col>
    </Row>
  )
}
