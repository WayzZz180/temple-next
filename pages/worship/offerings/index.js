import styles from './offerings.module.sass'
import Head from 'next/head'

// bootstrap
import { Container, Row, Col } from 'react-bootstrap'

// hooks
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// components
import ShopTitle from '@/components/common/title/ShopTitle'
import WorshipProductsCard from '@/components/common/cards/WorshipProductsCard'
import Button from '@/components/common/button'
import HomeSet from '@/components/common/cards/HomeSet'

export default function Offerings() {
  const router = useRouter()

  const gods = [
    { text: '媽祖', id: 'Mazu' },
    { text: '月老', id: 'LoveGod' },
    { text: '文昌', id: 'StudyGod' },
  ]

  // 根據神明確定切換哪張圖
  const slide = [
    {
      text1: '吉祥如意',
      text2: '媽祖基本款',
      text3:
        '在香燭的映照下，仿佛是一場紅龜粿般的信仰盛宴，象徵著對媽祖的虔誠。這些美味的祭品猶如是一種祈願的延伸，希望媽祖的神靈能像糕點一樣，為人們帶來幸運與吉祥。在早期的儀式中，飲食的素葷之別並不是主要焦點，更重要的是心誠則靈，唯有真摯的虔敬，才能引得媽祖的保佑與庇佑。',
      pic1: 'MazuSet',
      id: 'Mazu',
    },
    {
      text1: '花好月圓',
      text2: '月老基本款',
      text3:
        '月老的祭祀，猶如一場甜蜜的文化糖漿，在香燭花卉的映襯下，甜點的芬芳四溢。除了擺放鮮花香燭，供品也包括湯圓、水果等美味。這些美味的祭品彷彿是心靈的滋養，象徵著愛情的美好滋味，更重要的是誠摯的祈願，只有充滿甜蜜的誠意，才能引來月老的青睞與祝福。',
      pic1: 'loveSet',
      id: 'LoveGod',
    },
    {
      text1: '金榜題名',
      text2: '文昌基本款',
      text3:
        '拜文昌猶如一道滋補的文化佳餚，香燭的火焰映照出蔥的青翠，象徵著好彩頭的美好前景。這些美味的祭品宛如心靈的滋養，象徵著知識的滋長，就像蔥的層層生長。唯有心意的凝聚，方能引得文昌神的加持。',
      pic1: 'studySet',
      id: 'StudyGod',
    },
  ]

  const [data, setData] = useState([])
  const [reservation, setReservation] = useState([])

  useEffect(() => {
    setReservation(JSON.parse(localStorage.getItem('reservation')))
  }, [router.query])

  // 根據神明篩選套組產品
  useEffect(() => {
    const god = { god: reservation?.god }
    if (god.god) {
      fetch(`${process.env.API_SERVER}/worship`, {
        method: 'POST',
        body: JSON.stringify({ requestData: god }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((r) => r.json())
        .then((data) => {
          setData(data)
        })
    }
  }, [reservation])

  const index = gods.findIndex((v) => v.text === reservation?.god)
  const slide_slice = slide[index]
  const [pidArr, setPidArr] = useState([])

  // 把選擇的商品加進localStorage
  useEffect(() => {
    const value = JSON.parse(localStorage.getItem('reservation'))
    const insert = { ...value, pidArr: pidArr }

    localStorage.setItem('reservation', JSON.stringify(insert))

    setReservation(JSON.parse(localStorage.getItem('reservation')))
  }, [pidArr])
  // 訂單資訊
  const [user, setUser] = useState({
    delivery: '無',
    payment: '無',
    receivedInfo: '無',
    status: '無',
  })
  // 預約資訊
  const insert = () => {
    const reqData = { ...reservation, total: 0, complete: false, ...user }
    // 加入worship_summary & details
    const auth = localStorage.getItem('auth')
    if (auth) {
      const obj = JSON.parse(auth)
      const Authorization = 'Bearer ' + obj.token
      fetch(`${process.env.API_SERVER}/worship/details`, {
        method: 'POST',
        body: JSON.stringify({ requestData: reqData }),
        headers: {
          Authorization,
          'Content-Type': 'application/json',
        },
      })
        .then((r) => r.json())
        .then((data) => {})
    }
  }
  const clearLocal = () => {
    if (localStorage.getItem('reservation')) {
      localStorage.removeItem('reservation')
    }
  }
  return (
    <>
      <Head>
        <title>選擇供品</title>
      </Head>
      <Container className="mt100px">
        <HomeSet
          text1={slide_slice?.text1}
          text2={slide_slice?.text2}
          text3={slide_slice?.text3}
          pic1={slide_slice?.pic1}
          id={slide_slice?.id}
        />
      </Container>
      <Container className={'shopContainer'}>
        {/* <Top /> */}
        <Row className=" mt150px mb50px">
          <Col>
            <ShopTitle text="預約" lineColor="green" />
          </Col>
        </Row>
        <Row className={`${styles.choseContainer} fs24px fwBold`}>
          <div className={`${styles.chose}`}>
            選擇的神明：
            <span className={`${styles.pink}`}>{reservation?.god}</span>
          </div>
          <div className="">/</div>
          <div className={`${styles.chose}`}>
            挑選的日期：
            <span className={`${styles.pink}`}>{reservation?.day}</span>
          </div>
          <div className="">/</div>
          <div className={`${styles.chose}`}>
            預約的時辰：
            <span className={`${styles.pink}`}>{reservation?.time}</span>
          </div>
        </Row>
        <Row className="nowrap mt100px">
          <Button
            text="更改預約資訊"
            btnColor="brown"
            link={() => {
              router.push('/worship')
            }}
          />
        </Row>

        <Row className="nowrap mb50px">
          <Col>
            <div className={`${styles.flex} mt120px`}>
              <div className={`${styles.title} fs24px mb10px`}>
                請選擇供品
                <br />（{reservation?.god}基本款）
              </div>
              <div className={`${styles.line}`}></div>
            </div>
          </Col>
        </Row>
        <Row className={` ${styles.productsContainer}`}>
          {data?.map((v, i) => {
            return (
              <Col key={v.pid}>
                <WorshipProductsCard
                  pid={v.pid}
                  src={v.image}
                  text={v.product_name}
                  price={v.product_price}
                  setPidArr={setPidArr}
                  pidArr={pidArr}
                />
              </Col>
            )
          })}
        </Row>
        <Row>
          <div className={`${styles.title} mt100px fs18px mb30px`}>
            最多選擇三樣，如不需供品即可開始祭拜
          </div>
        </Row>
        <Row className="nowrap">
          <Button
            text={
              reservation.pidArr?.length === 0 && reservation.today
                ? `開始祭拜`
                : reservation.pidArr?.length === 0
                ? `預約成功`
                : `確認供品`
            }
            btnColor="hot_pink"
            link={() => {
              reservation.pidArr?.length === 0 ? insert() : ''
              router.push(
                reservation.pidArr?.length === 0 && reservation.today
                  ? `/worship/process`
                  : reservation.pidArr?.length === 0
                  ? '/member/praying'
                  : '/worship/offerings/confirm'
              )
              if (reservation.pidArr?.length === 0 && !reservation.today) {
                clearLocal()
              }
            }}
          />
        </Row>
      </Container>
    </>
  )
}
