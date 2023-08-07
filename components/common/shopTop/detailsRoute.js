import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './detailsRoute.module.sass'
// hooks
import { useRouter } from 'next/router'
// Bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// svg
import Arrow from '@/assets/arrow_details.svg'
// data
import TitleData from '@/components/mydata/productsTitleData'
export default function DetailsRoute({
  category = '唰嘴ㄟ',
  product_name = '樂事',
}) {
  const router = useRouter()
  const category_id = router.query.category
  const path = router.asPath

  const data = TitleData.filter((v) => {
    return v.id === category
  })
  let category_name = ''
  {
    data.length > 0 ? (category_name = data[0].text) : (category_name = 'test')
  }

  return (
    <Row className={`nowrap mt100px mb100px`}>
      <Col className={`${styles.flex_align}`}>
        <div className={`${styles.block}`}>
          <Link
            href="/shop"
            className={` ${styles.letter} link fs18px fwBolder`}
          >
            商城首頁
          </Link>
        </div>
        <Image src={Arrow} alt="arrow" width={25} />
      </Col>
      <Col className={`${styles.flex_align}`}>
        <div className={`${styles.block}`}>
          <Link
            href={`/shop/${category_id}`}
            className={` ${styles.letter} link fs18px fwBolder`}
          >
            {category_name}
          </Link>
        </div>
        <Image src={Arrow} alt="arrow" width={25} />
      </Col>
      <Col className={`${styles.flex_align}`}>
        <div className={`${styles.block}`}>
          <Link
            href={path}
            className={` ${styles.letter} link fs18px fwBolder`}
          >
            {product_name}
          </Link>
        </div>
      </Col>
    </Row>
  )
}
