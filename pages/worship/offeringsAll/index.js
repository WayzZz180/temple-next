import styles from './offerings.module.sass'
import Head from 'next/head'
// bootstrap
import { Container, Row, Col } from 'react-bootstrap'

// hooks
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// components
import WorshipProductsCard from '@/components/common/cards/WorshipProductsCard'
import Button from '@/components/common/button'

import HomeCarousels from '@/components/common/carousel/HomeCarousels'

export default function Offerings() {
  const router = useRouter()

  const [mazuData, setMazuData] = useState([])
  const [loveData, setLoveData] = useState([])
  const [studyData, setStudyData] = useState([])

  useEffect(() => {
    fetch(`${process.env.API_SERVER}/worship`)
      .then((r) => r.json())
      .then((data) => {
        setMazuData(data[0])
        setLoveData(data[1])
        setStudyData(data[2])
      })
  }, [router.query])

  const data = [
    { text: '媽祖', data: mazuData },
    { text: '月老', data: loveData },
    { text: '文昌', data: studyData },
  ]
  return (
    <>
      <Head>
        <title>供品一覽</title>
      </Head>
      <Container className="mt100px">
        <HomeCarousels />
      </Container>
      <Container className={'shopContainer'}>
        {/* <Top /> */}
        {data?.map((v, i) => {
          return (
            <div key={v.wid}>
              <Row className="nowrap mb50px">
                <Col>
                  <div className={`${styles.flex} mt120px`}>
                    <div className={`${styles.title} fs24px mb10px`}>
                      {v.text}基本款
                    </div>
                    <div className={`${styles.line}`}></div>
                  </div>
                </Col>
              </Row>
              <Row className={`nowrap`}>
                {v.data?.map((v, i) => {
                  return (
                    <Col key={v.pid}>
                      <WorshipProductsCard
                        pid={v.pid}
                        src={v.image}
                        text={v.product_name}
                        price={v.product_price}
                      />
                    </Col>
                  )
                })}
              </Row>
            </div>
          )
        })}
        <Row>
          <div className={`${styles.title} mt100px fs18px mb30px`}>
            最多選擇三樣，如不需供品即可開始祭拜
          </div>
        </Row>
        <Row className={`${styles.button} mt70px`}>
          <Button
            text="馬上拜拜去"
            link={() => {
              if (localStorage.getItem('auth')) {
                router.push('/worship')
              } else {
                router.push('/member/login')
              }
            }}
          />
        </Row>
        <Row className="nowrap"></Row>
      </Container>
    </>
  )
}
