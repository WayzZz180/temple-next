import styles from './worship.module.sass'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import Head from 'next/head'

// hooks
import React, { useEffect, useRef, useState } from 'react'

// svg
import nav from '@/assets/nav.svg'
import Rightgod from '@/assets/worshipRGod.svg'
import Leftgod from '@/assets/worshipLGod.svg'
import Cloud from '@/assets/worshipCloud.svg'
import WorshipLogo from '@/assets/worshipLogo.svg'
import Time from '@/assets/worshipTime.svg'
import selectedTime from '@/assets/selectedTime.svg'

// components
import Title from '@/components/common/title/WorshipTitle'
import God from '@/components/common/cards/WorshipGod'
import Button from '@/components/common/button'
import Arrow from '@/components/common/arrow/arrow'
import ArrowRight from '@/components/common/arrow/arrowRight'
import ArrowLeft from '@/components/common/arrow/arrowLeft'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules'

export default function Worship() {
  const stylesTime = {
    selectedTime_1: { transform: 'rotate(-45deg)', left: '100px' },
    selectedTime_2: { transform: 'rotate(0deg)', left: '100px' },
    selectedTime_3: { transform: 'rotate(35deg)', left: '100px' },
  }

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

  const month_olympic = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const month_normal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const month_name = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ]
  const [holder, setHolder] = useState('')
  const [cmonth, setCMonth] = useState('')
  const [cyear, setCYear] = useState('')

  const my_date = new Date()
  let my_year = my_date.getFullYear()
  let my_month = my_date.getMonth()
  let my_day = my_date.getDate()

  //获取某年某月第一天是星期几
  const dayStart = (month, year) => {
    const tmpDate = new Date(year, month, 1)
    return tmpDate.getDay()
  }

  //計算是否為閏年
  const daysMonth = (month, year) => {
    const tmp = year % 4
    if (tmp == 0) {
      return month_olympic[month]
    } else {
      return month_normal[month]
    }
  }

  const refreshDate = () => {
    let str = ''
    const totalDay = daysMonth(my_month, my_year) //获取该月总天数
    const firstDay = dayStart(my_month, my_year) //获取该月第一天是星期几
    let myclass
    for (let i = 1; i < firstDay; i++) {
      str += '<li></li>' //为起始日之前的日期创建空白节点
    }
    for (let i = 1; i <= totalDay; i++) {
      if (
        (i < my_day &&
          my_year == my_date.getFullYear() &&
          my_month == my_date.getMonth()) ||
        my_year < my_date.getFullYear() ||
        (my_year == my_date.getFullYear() && my_month < my_date.getMonth())
      ) {
        myclass = " class='lightgrey'" //当该日期在今天之前时，以浅灰色字体显示
      } else if (
        i == my_day &&
        my_year == my_date.getFullYear() &&
        my_month == my_date.getMonth()
      ) {
        myclass = " class='green greenbox'" //当天日期以绿色背景突出显示
      } else {
        myclass = " class='darkgrey'" //当该日期在今天之后时，以深灰字体显示
      }
      str += '<li' + myclass + '>' + i + '</li>' //创建日期节点
    }

    setHolder(str)
    setCMonth(month_name[my_month])
    setCYear(my_year)
  }
  useEffect(() => {
    refreshDate() //执行该函数
  }, [])

  // prev.onclick = function (e) {
  //   e.preventDefault()
  //   my_month--
  //   if (my_month < 0) {
  //     my_year--
  //     my_month = 11
  //   }
  //   refreshDate()
  // }
  // next.onclick = function (e) {
  //   e.preventDefault()
  //   my_month++
  //   if (my_month > 11) {
  //     my_year++
  //     my_month = 0
  //   }
  //   refreshDate()
  // }

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
      <Row>
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
        <Col>
          {/* 月曆 */}
          <div className={`${styles.calendarContainer}`}>
            <div className={`${styles.calendar}`}>
              {/* 月份 */}
              <div className={`${styles.month}`}>
              {/*  */}
              <Image
                  src={Arrow}
                  id="prev"
                  onClick={() => {
                    my_month--
                    if (my_month < 0) {
                      my_year--
                      my_month = 11
                    }
                    refreshDate()
                  }}
                >
                </Image>
                <h1 className={`${styles.pink}`} id="calendar-title">
                  {cmonth}
                </h1>
                <Image
                  id="next"
                  onClick={() => {
                    my_month++
                    if (my_month > 11) {
                      my_year++
                      my_month = 0
                    }
                    refreshDate()
                  }}
                >
                </Image>
               
                <h2
                  className={`${styles.pink} ${styles.small}`}
                  id="calendar-year"
                >
                  {cyear}
                </h2>
              </div>
              <div className={`${styles.body}`}>
                <div className={`${styles.pink} ${styles.body_list}`}>
                  {/* 星期 */}
                  <ul className={`${styles.ul}`}>
                    <li>MON</li>
                    <li>TUE</li>
                    <li>WED</li>
                    <li>THU</li>
                    <li>FRI</li>
                    <li>SAT</li>
                    <li>SUN</li>
                  </ul>
                </div>
                <div className={`${styles.darkgrey} ${styles.body_list}`}>
                  <ul className={`${styles.ul}`} id="days">
                    <li className={`${styles.li}`}
                      dangerouslySetInnerHTML={{
                        __html: holder,
                      }}
                    ></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      {/* section4 */}
      <Row className={`${styles.flex_col}`}>
        <Col>
          <Title text="3." text2="預約時辰" />
        </Col>
        <Col className={`${styles.timeContainer}`}>
          <div className={`${styles.selectedTime}`}>
            {Array(12)
              .fill(1)
              .map((v, i) => {
                return (
                  <Image
                    key={i}
                    src={selectedTime}
                    alt="choose time"
                    style={stylesTime[`selectedTime_${i + 1}`]}
                  />
                )
              })}
          </div>
          <div>
            <Image src={Time} alt="choose time" />
          </div>
        </Col>
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
