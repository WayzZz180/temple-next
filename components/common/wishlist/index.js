import Image from 'next/image'
import Link from 'next/link'

import { Container, Row, Col } from 'react-bootstrap'

import React, { useState, useEffect, useContext } from 'react'

//components
import styles from '@/components/common/wishlist/wishlist.module.sass'
import coupon_red from '@/assets/coupon_red.svg'
import Button from '@/components/common/button/index.js'
import NoButton from '@/components/common/button/noButton.js'

export default function Wishlist({
  WLimage = '',
  WLname = '',
  WLprice = '',
  WLpid = '',
  WLcid = '',
}) {
  const cat = ['cookies', 'candy', 'salty', 'drinks', 'gifts']

  const wishlistRow = (
    <Row className={styles.flex}>
      <Col>
        <Link href={`/shop/${cat[WLcid]}/${WLpid}`}>
          {/* 記得改成shop */}
          <Image
            src={`/${WLimage}`}
            alt="product"
            height={150}
            width={150}
            className={styles.img}
          />
        </Link>
      </Col>
      <Col>
        <div className={`${styles.textContainer} fs18px w200px`}>
          <b>{WLname}</b>
        </div>
      </Col>
      <Col className={styles.valid}>
        <div>${WLprice}</div>
      </Col>
      <Col className={styles.btnflex}>
        <div>
          <Button text="加入購物車" btnColor="brown" fontSize="20px" />
        </div>
        <div>
          <NoButton text="刪除" btnColor="brown" fontSize="20px" />
        </div>
      </Col>
    </Row>
  )

  const lineRow = (
    <Row>
      <Col className={styles.line}></Col>
    </Row>
  )

  // const combinedRows = []
  // const numberOfRows = 5 // 資料的比數
  // for (let i = 0; i < numberOfRows; i++) {
  //   combinedRows.push(
  //     i % 2 === 0 ? (
  //       <Fragment key={i}>{wishlistRow}</Fragment>
  //     ) : (
  //       <Fragment key={i}>{lineRow}</Fragment>
  //     )
  //   )
  // }
  return (
    <>
      {wishlistRow} {lineRow}
    </>
  )
}
