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
  const [rows, setRows] = useState()

  useEffect(() => {
    // console.log(`${process.env.API_SERVER}${currentPath}`)
    fetch(`${process.env.API_SERVER}${currentPath}`)
      .then((r) => r.json())
      .then((data) => {
        setData(data.data[0])
        setRows(data.rows)
        console.log(data.rows)
      })
  }, [currentPath])

  const startIndex = data?.product_details.indexOf('\r\n')
  const product_details =
    startIndex >= 0
      ? data?.product_details.substring(startIndex + 2)
      : data?.product_details

  return (
    <>
      <Container>
        {/* 路由 */}
        <DetailsRoute
          category={data?.category_name}
          product_name={data?.product_name}
        />
        <Row className="nowrap">
          <Col className={`border ${styles.container}`}>
            {/* 商品名稱 */}
            <div className="fwBold fs30px">{data?.product_name}</div>
            {/* 商品價格 */}
            <div>${data?.product_price}</div>
            {/* 商品描述 */}
            <div dangerouslySetInnerHTML={{ __html: product_details }}></div>
          </Col>
          <Col className={`${styles.container}`}>
            {/* 產品圖 */}
            <Image
              src={`/${data?.image}`}
              alt="details"
              width={550}
              height={550}
              className={`shadow`}
            />
          </Col>
          <Col className={`border ${styles.container}`}>
            {/* 加入購物車 & 收藏 */}
            <span>加入購物車</span>
            <span> 愛心</span>
            {/* 其他描述 */}
            <div>瀏覽量：{data?.browse_num}</div>
            <div>購買人數：{data?.purchase_num}</div>
            <div>庫存：{data?.stock_num}</div>
          </Col>
        </Row>
        {/* 跑馬燈 */}
        <Row>
          <Marquee data={rows ? rows : []} />
        </Row>
        <Title text="商品評價" text2="products rewiews" />
      </Container>
    </>
  )
}
