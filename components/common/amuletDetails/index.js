import Image from 'next/image'
import { Fragment } from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import variables from '@/styles/_variables.module.sass'

//components
import styles from '@/components/common/amuletDetails/amulet.module.sass'
import coupon from '@/assets/coupon.svg'
import Button from '@/components/common/button/index.js'

export default function Amulet() {
  const amuletRow = (
    <Row className={styles.flex}>
      <Col>
        <Image src={coupon} alt="product" height={121} width={121} />
      </Col>
      <Col>
        <div>
          <b>紅線</b>
          <div>月下老人給你脫單的紅線</div>
        </div>
      </Col>

      <Col className={styles.btnflex}>
        <div>
          <Button
            text="查看准考證"
            btnColor="brown"
            width="159px"
            height="50px"
          />
        </div>
        <div>
          <Button text="還願" btnColor="brown" width="107px" height="50px" />
        </div>
        <div>
          <Button text="分享" btnColor="brown" width="107px" height="50px" />
        </div>
      </Col>
    </Row>
  )

  const lineRow = (
    <Row>
      <Col className={styles.line}></Col>
    </Row>
  )

  const combinedRows = []
  const numberOfRows = 3 // 資料的比數
  for (let i = 0; i < numberOfRows; i++) {
    combinedRows.push(
      i % 2 === 0 ? (
        <Fragment key={i}>{amuletRow}</Fragment>
      ) : (
        <Fragment key={i}>{lineRow}</Fragment>
      )
    )
  }
  return <> {combinedRows}</>
}
