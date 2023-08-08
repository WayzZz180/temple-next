import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './prayingDetails.module.sass'

//components
import Button from '@/components/common/button/index.js'
import DetailsText from '@/components/common/detailsText/index.js'
import mazuGod from '@/assets/mazuGod.svg'
import coupon from '@/assets/coupon.svg'

export default function PrayingDetails({ text = '' }) {
  return (
    <>
      <Row className={styles.flex}>
        <Col>
          <Image src={mazuGod} alt="mazuGod" width={390} height={550}></Image>
        </Col>
        <Col>
          <div className={styles.flex2}>
            <DetailsText /> <div className={styles.shortLine}></div>
          </div>
          <div>
            <Image src={coupon} alt="mazuGod" width={160} height={160}></Image>
            <Image src={coupon} alt="mazuGod" width={160} height={160}></Image>
            <Image src={coupon} alt="mazuGod" width={160} height={160}></Image>
          </div>
          <div className={styles.flex}>
            <div>
              訂單金額
              <span className={`${styles.text_pink} fs30px ms5px`}>$132</span>
            </div>
            <Button
              text="訂單詳細"
              btnColor="brown"
              width="229px"
              height="50px"
              fontSize="20px"
            />
          </div>
        </Col>

        <Col className={styles.btnflex}>
          <div className="m5px"></div>
        </Col>
      </Row>

      <Row>
        <Col className={styles.longLine}></Col>
      </Row>
    </>
  )
}
