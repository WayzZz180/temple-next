import Image from 'next/image'
import { Fragment } from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import variables from '@/styles/_variables.module.sass'

//components
import styles from '@/components/common/wishlist/wishlist.module.sass'
import coupon from '@/assets/coupon.svg'
import Button from '@/components/common/button/index.js'

export default function Wishlist() {
  const wishlistRow = (
    <Row className={styles.flex}>
      <Col>
        <Image src={coupon} alt="product" height={121} width={121} />
      </Col>
      <Col>
        <div>
          <b>杏仁巧克力棒</b>
        </div>
      </Col>
      <Col className={styles.valid}>
        <div>$150</div>
      </Col>
      <Col className={styles.btnflex}>
        <div>
          <Button text="加入購物車" btnColor="brown" width={147} />
        </div>
        <div>
          <Button text="刪除" btnColor="brown" width={107} />
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
  const numberOfRows = 5 // 資料的比數
  for (let i = 0; i < numberOfRows; i++) {
    combinedRows.push(
      i % 2 === 0 ? (
        <Fragment key={i}>{wishlistRow}</Fragment>
      ) : (
        <Fragment key={i}>{lineRow}</Fragment>
      )
    )
  }
  return <> {combinedRows}</>
}
