import Image from 'next/image'
import styles from './pid.module.sass'
//hooks
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

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
    fetch(`${process.env.API_SERVER}${currentPath}`)
      .then((r) => r.json())
      .then((data) => {
        setData(data.data[0])
        console.log(data.data[0])
        setRows(data.rows)
        console.log(data.rows)
      })
  }, [currentPath])

  if (!data || !data.product_details) {
    return <div>productDetails Not found</div>
  }

  const replaceWhiteSpace = (productDetails) => {
    const sanitizedData = productDetails.replace(`\\r\\n`, '<br /><br />')
    console.log('sanitizedData:', sanitizedData)
    return sanitizedData
  }
  return (
    <>
      <Container>
        {/* 路由 */}
        <DetailsRoute
          category={data?.category_name}
          product_name={data?.product_name}
        />
        <Row className="nowrap">
          <Col className={` ${styles.container}`}>
            {/* 商品名稱 */}
            <div className="fwBold fs30px mb30px">{data?.product_name}</div>
            {/* 商品價格 */}
            <div className="fwBold fs30px mb30px">${data?.product_price}</div>
            {/* 商品描述 */}
            <div className={`mb30px ${styles.line}`}></div>
            <div className="fs24px mb30px">
              <div
                dangerouslySetInnerHTML={{
                  __html: replaceWhiteSpace(data.product_details),
                }}
              />
            </div>
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
          <Col className={` ${styles.container}`}>
            {/* 加入購物車 & 收藏 */}
            <span className={`fs20px`}>加入購物車</span>
            <span className={`fs20px`}> 愛心</span>
            {/* 其他描述 */}
            <div className={`fs20px`}>瀏覽量：{data?.browse_num}</div>
            <div className={`fs20px`}>購買人數：{data?.purchase_num}</div>
            <div className={`fs20px`}>庫存：{data?.stock_num}</div>
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
