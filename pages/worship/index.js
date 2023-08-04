import styles from './worship.module.sass'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import Head from 'next/head'

// hooks
import React, { useRef, useState } from 'react'

// svg
import nav from '@/assets/nav.svg'
import Rightgod from '@/assets/worshipRGod.svg'
import Leftgod from '@/assets/worshipLGod.svg'
import Cloud from '@/assets/worshipCloud.svg'
import WorshipLogo from '@/assets/worshipLogo.svg'
import ArrowRight from '@/components/common/arrow/arrowRight'
import ArrowLeft from '@/components/common/arrow/arrowLeft'

// components
import Title from '@/components/common/title/WorshipTitle'
import God from '@/components/common/cards/WorshipGod'
import Button from '@/components/common/button'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules'

export default function Worship() {
  const godInfo = [
    {
      text: '媽祖',
      pic: 'mazuGod',
      wordLeft: '母恩似海共霑恩',
      wordRight: '聖德如天同景仰',
    },
    {
      text: '月老',
      pic: 'loveGod',
      wordLeft: '姻緣天定情長久',
      wordRight: '花好月圓喜滿樓',
    },
    {
      text: '文昌',
      pic: 'studyGod',
      wordLeft: '才華照耀瑞風光',
      wordRight: '學道有成展宏願',
    },
  ]
  const [god, setGod] = useState('')

  return (
    <Container>
      {/* <Head>
        <title>民俗論壇</title>
      </Head> */}
      {/* section1 */}
      <Row>
        <Col>
          <div className={`${styles.background}`}>
            <div className={`${styles.place}`}>
              <div className={`${styles.flex_row}`}>
                <div className={`${styles.gods}`}>
                  <Image src={Leftgod} alt="leftgod" width={750} />
                  <div className={`${styles.flex}`}>
                    <div className={`${styles.logo}`}>
                      <Image src={WorshipLogo} alt="worshipLogo" height={300} />
                    </div>
                    <div className={`${styles.cloud}`}>
                      <Image src={Cloud} alt="cloud" width={1800} />
                    </div>
                  </div>
                  <Image src={Rightgod} alt="rightgod" width={750} />
                </div>
              </div>
              <div className={`${styles.floor}`}>
                <Image src={nav} width={1990} alt="nav" />
              </div>
            </div>
          </div>
        </Col>
      </Row>

      {/* section2 */}
      <Row className={`${styles.flex_col}`}>
        <Col>
          <Title text="1." text2="選擇神明" />
        </Col>
        <Col>
          <div className={`${styles.swiper}`}>
            <Swiper
              loop={true}
              spaceBetween={30}
              effect={'fade'}
              modules={[EffectFade, Navigation, Pagination]}
              className="mySwiper"
            >
              {godInfo.map((v, i) => {
                const foundGod = v.text === god
                return (
                  <SwiperSlide key={i}>
                    <God
                      text={v.text}
                      pic={v.pic}
                      wordLeft={v.wordLeft}
                      wordRight={v.wordRight}
                      setGod={setGod}
                      foundGod={foundGod}
                    />
                  </SwiperSlide>
                )
              })}
              <div className={`${styles.arrowContainer}`}>
                <div className={`${styles.arrowLeft} swiper-button-prev`}>
                  <ArrowLeft />
                </div>
                <div className={`${styles.arrowRight} swiper-button-next`}>
                  <ArrowRight />
                </div>
              </div>
            </Swiper>
          </div>
        </Col>
        <Col>
          <div className={`${styles.chose} fs28px fwBold`}>
            已選擇：<span className={`${styles.god}`}>{god}</span>
          </div>
        </Col>
        <Col></Col>
      </Row>

      {/* section3 */}
      <Row>
        <Col>
          <Title text="2." text2="挑選日期" />
        </Col>
        <Col></Col>
      </Row>

      {/* section4 */}
      <Row>
        <Col>
          <Title text="3." text2="預約時辰" />
        </Col>
        <Col></Col>
      </Row>

      {/* section5 */}
      <Row>
        <Col>
          <div className={`${styles.button}`}>
            <Button
              text="下一步：選擇供品"
              width="100%"
              btnColor="hot_pink"
              padding="15px 60px"
              fontSize="24px"
              link={() => {}}
            />
          </div>
        </Col>
      </Row>
    </Container>
  )
}
