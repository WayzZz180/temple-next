import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'

//components
import styles from '@/components/common/prayingDetails/prayingDetails.module.sass'

import Button from '@/components/common/button/index.js'
import DetailsText from '@/components/common/detailsText/index.js'
import mazuGod from '@/assets/mazuGod.svg'

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
            <Image src={mazuGod} alt="mazuGod" width={160} height={160}></Image>
            <Image src={mazuGod} alt="mazuGod" width={160} height={160}></Image>
            <Image src={mazuGod} alt="mazuGod" width={160} height={160}></Image>
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
