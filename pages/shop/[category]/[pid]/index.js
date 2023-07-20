import Image from 'next/image'
//hooks
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from './pid.module.sass'
//components
import Marquee from '@/components/common/marquee'
import Title from '@/components/common/title'
import DetailsRoute from '@/components/common/shopTop/detailsRoute'
// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Pid() {
  const router = useRouter()
  const currentPath = router.asPath
  const [data, setData] = useState()

  useEffect(() => {
    fetch(`${process.env.API_SERVER}${currentPath}`)
      .then((r) => r.json())
      .then((data) => {
        setData(data[0])
      })
  }, [currentPath])

  return (
    <>
      <Container>
        <DetailsRoute
          category={data?.category_name}
          product_name={data?.product_name}
        />
        <Row className="nowrap">
          <Col className={`border ${styles.container}`}>
            <div>{data?.product_name}</div>
            <div>{data?.product_details}</div>
          </Col>
          <Col className={`border  ${styles.container}`}>
            <Image
              src={`/${data?.image}`}
              alt="details"
              width={550}
              height={550}
              className={`shadow`}
            />
          </Col>
          <Col className={`border ${styles.container}`}>
            <div>${data?.product_price}</div>
            <span>加入購物車</span>
            <span> 愛心</span>
            <div>瀏覽量：{data?.browse_num}</div>
            <div>購買人數：{data?.purchase_num}</div>
            <div>庫存：{data?.stock_num}</div>
          </Col>
        </Row>
        <Row>
          <Marquee />
        </Row>
        <Title text="商品評價" text2="products rewiews" />
      </Container>
    </>
  )
}
