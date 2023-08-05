import styles from './worship.module.sass'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import Head from 'next/head'

// hooks
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
// svg
import nav from '@/assets/nav.svg'
import Rightgod from '@/assets/worshipRGod.svg'
import Leftgod from '@/assets/worshipLGod.svg'
import Cloud from '@/assets/worshipCloud.svg'
import WorshipLogo from '@/assets/worshipLogo.svg'
import Time from '@/assets/worshipTime.svg'
import selectedTime from '@/assets/selectedTime.svg'
import Arrow from '@/assets/arrow_calendar.svg'
// components
import Title from '@/components/common/title/WorshipTitle'
import God from '@/components/common/cards/WorshipGod'
import Button from '@/components/common/button'
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
  const router = useRouter()
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

  // 月曆
  const month_normal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] // 一般
  const month_olympic = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] // 閏年
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
  ] //全部月份

  const [calendar, setCalendar] = useState([])
  const [days, setDays] = useState([])
  const [month, setMonth] = useState()
  const [year, setYear] = useState()

  const myDate = new Date() // 今天 (Sat Aug 05 2023 13:47:47 GMT+0800 (台北標準時間))
  const [myDay, setMyDay] = useState(myDate.getDate())
  const [myMonth, setMyMonth] = useState(myDate.getMonth())
  const [myYear, setMyYear] = useState(myDate.getFullYear())

  // 某年某月某一天是星期幾
  const dayStart = (month, year) => {
    const tmpDate = new Date(year, month, 2)
    return tmpDate.getDay()
  }

  // 判斷是否為閏年並獲得總天數
  const getDay = (month, year) => {
    const tmp = year % 4
    if (tmp == 0) {
      return month_olympic[month]
    } else {
      return month_normal[month]
    }
  }

  // 刷新日曆
  const refreshDate = () => {
    setCalendar([])
    setDays([])
    const totalDay = getDay(myMonth, myYear) // 獲取該月總天數
    const firstDay = dayStart(myMonth, myYear) // 獲取該月第一天是星期幾

    let myclass

    // for (let i = 1; i < firstDay; i++) {
    //   // str += '<li></li>' // 為起始日之前創造空白節點
    //   calendar.push('')
    //   console.log('cal:', calendar)
    // }
    // for (let i = 1; i <= totalDay; i++) {
    // if (
    //   (i < myDay &&
    //     myYear == myDate.getFullYear() &&
    //     myMonth == myDate.getMonth()) ||
    //   myYear < myDate.getFullYear() ||
    //   (myYear == myDate.getFullYear() && myMonth < myDate.getMonth())
    // ) {
    //   myclass = " class='lightgrey'" // 以前的日期以灰色顯示
    // } else if (
    //   i == myDay &&
    //   myYear == myDate.getFullYear() &&
    //   myMonth == myDate.getMonth()
    // ) {
    //   myclass = " class='pink pinkbox'" // 當天日期以選取顏色顯示
    // } else {
    //   myclass = " class='day'" // 未來日期以正常顯示
    // }
    // str += '<li' + myclass + '>' + i + '</li>' //创建日期节点
    // str += '<li>' + i + '</li>' //创建日期节点
    // calendar.push(i)
    // }
    for (let i = 1; i < firstDay; i++) {
      calendar.push('')
    }
    for (let i = 1; i <= totalDay; i++) {
      calendar.push(i)
    }
    // 日曆顯示
    setDays(calendar)
    // 月份顯示
    setMonth(month_name[myMonth])
    // 年份顯示
    setYear(myYear)
  }

  useEffect(() => {
    console.log(calendar)

    refreshDate() //执行该函数
  }, [router.query, myMonth, myYear])

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

      {/* section2: 選擇神明 */}
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
            已選擇： <span className={`${styles.god}`}>{god}</span>
          </div>
        </Col>
        <Col></Col>
      </Row>

      {/* section3: 挑選日期 */}
      <Row>
        <Col>
          <Title text="2." text2="挑選日期" />
        </Col>
        <Col>
          {/* 月曆 */}
          <div className={`${styles.calendarContainer}`}>
            <div className={`${styles.calendar}`}>
              <div className={`${styles.titleContainer} fwBold`}>
                {/* 月份 */}
                <div className={`${styles.title}`}>
                  {/* 上個月 */}
                  <Image
                    src={Arrow}
                    alt="prevMonth"
                    width={30}
                    className={`${styles.arrow} ${styles.prev}`}
                    onClick={(e) => {
                      e.preventDefault()
                      // 從這個月開始不能往前選 (今年這個月以後)||(未來)
                      if (
                        (myYear === myDate.getFullYear() &&
                          myMonth - 1 >= myDate.getMonth()) ||
                        myYear > myDate.getFullYear()
                      ) {
                        setMyMonth(myMonth - 1)
                        if (myMonth < 1) {
                          setMyYear(myYear - 1)
                          setMyMonth(11)
                        }
                      }
                    }}
                  />
                  <div className={`${styles.pink}`} id="month">
                    {month}
                  </div>
                  {/* 下個月 */}
                  <Image
                    src={Arrow}
                    alt="NextMonth"
                    width={30}
                    className={`${styles.arrow}`}
                    onClick={(e) => {
                      e.preventDefault()
                      setMyMonth(myMonth + 1)
                      if (myMonth > 10) {
                        setMyYear(myYear + 1)
                        setMyMonth(0)
                      }
                    }}
                  />
                </div>
                {/* 年份 */}
                <div className={`${styles.title}`}>
                  {/* 上一年 */}
                  <Image
                    src={Arrow}
                    alt="prevYear"
                    width={30}
                    className={`${styles.arrow} ${styles.prev}`}
                    onClick={(e) => {
                      e.preventDefault()
                      // 只能選到今年
                      if (myYear - 1 >= myDate.getFullYear()) {
                        if (
                          myYear - 1 === myDate.getFullYear() &&
                          myMonth < myDate.getMonth()
                        ) {
                          setMyMonth(myDate.getMonth())
                        }
                        setMyYear(myYear - 1)
                      }
                    }}
                  />
                  <div className={`${styles.pink} `} id="year">
                    {year}
                  </div>
                  {/* 下一年 */}
                  <Image
                    src={Arrow}
                    alt="NextYear"
                    width={30}
                    className={`${styles.arrow}`}
                    id="nextYear"
                    onClick={(e) => {
                      e.preventDefault()
                      setMyYear(myYear + 1)
                    }}
                  />
                </div>
              </div>
              <div className={`${styles.body}`}>
                <div className={`${styles.week} ${styles.lightgrey}`}>
                  <ul>
                    <li>SUN</li>
                    <li>MON</li>
                    <li>TUE</li>
                    <li>WED</li>
                    <li>THU</li>
                    <li>FRI</li>
                    <li>SAT</li>
                  </ul>
                </div>
                <div className={`${styles.day} ${styles.body_list}`}>
                  <ul>
                    {days.map((v, i) => {
                      return v ? (
                        <li
                          key={`${v}-${myYear}-${myMonth}`}
                          className={`${v ? styles.day : ''}`}
                        >
                          {v}
                        </li>
                      ) : (
                        <li key={`empty-${i}`}></li>
                      )
                    })}

                    {/* {days} */}
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
