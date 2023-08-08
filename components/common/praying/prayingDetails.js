import styles from './prayingDetails.module.sass'
import Image from 'next/image'

// bootstrap
import { Container, Row, Col } from 'react-bootstrap'

// hooks
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
//components
import Button from '@/components/common/button/index.js'
import DetailsText from '@/components/common/detailsText/index.js'
import mazuGod from '@/assets/mazuGod.svg'
import coupon from '@/assets/coupon.svg'
import Title from '@/components/common/title/orderTitle'

export default function PrayingDetails({ wid = 1 }) {
  const router = useRouter()
  const [data, setData] = useState([])

  useEffect(() => {
    const reqWid = { wid: wid }
    fetch(`${process.env.API_SERVER}/worship/getDetails`, {
      method: 'POST',
      body: JSON.stringify({ requestData: reqWid }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((data) => {
        setData(data)
      })
  }, [router.query])

  const info = [
    {
      title: '參拜對象',
      content: data?.god,
    },
    {
      title: '參拜日期',
      content: data?.day,
    },
    {
      title: '預約時辰',
      content: data?.time,
    },
    {
      title: '配送方式',
      content: `${data?.delivery}｜`,
    },
    {
      title: '付款方式',
      content: data?.payment,
    },
    // {
    //   title: '收件資訊',
    //   content: data?.address,
    // },
  ]
  return (
    <>
      <Row className={styles.flex}>
        <Col>
          <Image src={mazuGod} alt="mazuGod" width={390} height={550}></Image>
        </Col>
        <Col>
          <div className={styles.flex2}>
            <Title info={info} />
            <div className={styles.shortLine}></div>
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
