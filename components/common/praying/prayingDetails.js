import styles from './prayingDetails.module.sass'
import Image from 'next/image'

// bootstrap
import { Container, Row, Col } from 'react-bootstrap'

// hooks
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
//components
import Title from '@/components/common/title/orderTitle'
import Loading from '../loading'
// svg
import mazuGod from '@/assets/mazuGod.svg'
import loveGod from '@/assets/loveGod.svg'
import studyGod from '@/assets/studyGod.svg'

export default function PrayingDetails({
  wid = 1,
  info_sum = [],
  src = mazuGod,
  total = 100,
}) {
  const router = useRouter()
  const [data, setData] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    const reqWid = { wid: wid }
    const auth = localStorage.getItem('auth')
    if (auth) {
      const obj = JSON.parse(auth)
      const Authorization = 'Bearer ' + obj.token
      fetch(`${process.env.API_SERVER}/worship/getDetails`, {
        method: 'POST',
        body: JSON.stringify({ requestData: reqWid }),
        headers: {
          Authorization,
          'Content-Type': 'application/json',
        },
      })
        .then((r) => r.json())
        .then((data) => {
          setData(data[0])
          setProducts(data[1])
          console.log('data:', data)
          console.log('data1:', data[0])
          console.log('data2:', data[1])
        })
    }
  }, [router.query])

  if (!data || !products) return <Loading />

  const info = [
    ...info_sum,
    {
      title: '配送方式',
      content: `${data?.delivery}｜`,
    },
    {
      title: '付款方式',
      content: data?.payment,
    },
    {
      title: '收件資訊',
      content: data?.receivedInfo,
    },
    {
      title: '訂單金額',
      content: `$${total}`,
    },
  ]
  return (
    <>
      <Row className={styles.flex}>
        <Col className="p50px">
          <Image src={src} alt="God" width={390} height={550}></Image>
        </Col>
        <Col>
          <div className={styles.flex2}>
            <Title info={info} data={data} />
          </div>
          <div className={`${styles.shortLine} mt30px`}></div>
          <div className={`${styles.productsContainer} mt25px`}>
            {products?.map((v, i) => {
              return (
                <div
                  key={v.image}
                  role="presentation"
                  className={`mt10px mb10px me10px`}
                >
                  {/* 圖片 */}
                  <div className={`${styles.image}`}>
                    <Image
                      src={`/${v.image}`}
                      alt="product"
                      width={160}
                      height={160}
                    ></Image>
                  </div>
                  <div className={`${styles.text} fwBold fs20px p5px`}>
                    {v.product_name}
                  </div>
                  <div className={`${styles.price} fwBold fs20px p5px`}>
                    ${v.product_price}
                  </div>
                </div>
              )
            })}
          </div>
        </Col>
      </Row>

      <Row>
        <Col className={styles.longLine}></Col>
      </Row>
    </>
  )
}
