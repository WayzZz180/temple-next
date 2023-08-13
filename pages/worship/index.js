import styles from './worship.module.sass'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import Head from 'next/head'

// hooks
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useInView } from 'react-intersection-observer' // Import react-intersection-observer

// svg
import nav from '@/assets/nav.svg'
import Rightgod from '@/assets/worshipRGod.svg'
import Leftgod from '@/assets/worshipLGod.svg'
import Cloud from '@/assets/worshipCloud.svg'
import WorshipLogo from '@/assets/worshipLogo.svg'

// import SelectedTime from '@/components/common/cards/timeCard'
import Arrow from '@/assets/arrow_calendar.svg'

// components
import Title from '@/components/common/title/WorshipTitle'
import God from '@/components/common/cards/WorshipGod'
import Button from '@/components/common/button'
import ArrowRight from '@/components/common/arrow/arrowRight'
import ArrowLeft from '@/components/common/arrow/arrowLeft'
import WorshipStepBar from '@/components/common/bar/WorshipStepBar'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules'

// data
import timeInfo from '@/components/mydata/timeInfo'
import godInfo from '@/components/mydata/godInfo'

export default function Worship() {
  const router = useRouter()
  // 選擇的神明
  const [god, setGod] = useState('媽祖')

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

  const [day, setDay] = useState(
    `${myYear}/${myMonth + 1 < 10 ? '0' : ''}${myMonth + 1}/${
      myDay < 10 ? '0' : ''
    }${myDay}`
  )

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

    // 為起始日之前創造空白節點
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
    refreshDate() // 刷新日曆
  }, [router.query, myMonth, myYear])

  const handleDayClick = (date) => {
    setDay(date)
  }
  const [id, setId] = useState('chooseGod')

  const [stop, setStop] = useState(false)

  const [chooseGodRef, chooseGodInView] = useInView()
  const [chooseDateRef, chooseDateInView] = useInView()
  const [chooseTimeRef, chooseTimeInView] = useInView()
  const [nextStepRef, nextStepInView] = useInView()

  useEffect(() => {
    if (stop) return
    chooseGodInView && setId('chooseGod')
    chooseDateInView && setId('chooseDate')
    chooseTimeInView && setId('chooseTime')
    nextStepInView && setId('nextStep')
  }, [chooseGodInView, chooseDateInView, chooseTimeInView, nextStepInView])

  const [zodiac, setZodiac] = useState(1)

  const handleHover = (zodiacNumber) => {
    setZodiac(zodiacNumber)
  }

  const [timeClick, setTimeClick] = useState('')

  const [time, setTime] = useState('')
  const [godIndex, setGodIndex] = useState(-1)

  const getNow = () => {
    const hours = myDate.getHours()

    // 現在的時間轉成12小時制
    let end = ''
    let time = ''
    if (hours === 0) {
      end = 'am'
      time = 12 + end
    } else if (hours === 12) {
      end = 'pm'
      time = 12 + end
    } else if (hours - 12 > 0) {
      end = 'pm'
      time = hours - 12 + end
    } else {
      end = 'am'
      time = hours + end
    }

    // 中間的時間
    const mid = timeInfo.map((v, i) => {
      const [startHour, endHour] = v.time
        .split('-')
        .map((time) => parseInt(time))
      const tmp = Number(endHour - 1) === 0 ? 12 : Number(endHour - 1)
      const mid = tmp + v.time.slice(-2)
      return mid
    })

    // 看看有沒有和中間的時間相等
    let index = mid.findIndex((v, i) => v === time)
    let result = index != -1 ? timeInfo[index] : ''

    // 沒有的話和頭相比
    if (!result) {
      const start = timeInfo.map((v, i) => {
        return v.time.split('-')[0]
      })
      index = start.findIndex((v, i) => v === time)
      result = index != -1 ? timeInfo[index] : ''
    }
    const now = `${timeInfo[index].id}/${timeInfo[index].time}`
    setZodiac(index + 1)
    return now
  }

  useEffect(() => {
    const now = getNow()
    setTime(now)

    if (localStorage.getItem('reservation')) {
      const str = JSON.parse(localStorage.getItem('reservation'))

      setGod(str.god)
      setDay(str.day)
      setTime(str.time)
      const index = godInfo.findIndex((v) => v.text === str.god)
      setGodIndex(index ? index : 0)

      const zodiac_index = timeInfo.findIndex(
        (v) => v.id === str.time.split('/')[0]
      )
      setTimeClick(zodiac_index + 1)
    } else {
      setGodIndex(0)
    }
  }, [router.query])

  const getTime = (time) => {
    setTime(`${timeInfo[time - 1].id}/${timeInfo[time - 1].time}`)
  }

  // 判斷選擇的時間有無超過
  const passedTime = (hours, choseTimeIndex) => {
    // 現在的時間轉成12小時制
    let end = ''
    let time = ''

    if (hours - 12 > 0) {
      end = 'pm'
      time = hours - 12 + end
    } else {
      end = 'am'
      time = hours + end
    }

    // 中間的時間
    const mid = timeInfo.map((v, i) => {
      const [startHour, endHour] = v.time
        .split('-')
        .map((time) => parseInt(time))
      const tmp = Number(endHour - 1) === 0 ? 12 : Number(endHour - 1)
      const mid = tmp + v.time.slice(-2)
      return mid
    })

    // 看看有沒有和中間的時間相等
    let index = mid.findIndex((v, i) => v === time)
    let result = index != -1 ? timeInfo[index] : ''
    // 沒有的話和頭相比
    if (!result) {
      const start = timeInfo.map((v, i) => {
        return v.time.split('-')[0]
      })
      index = start.findIndex((v, i) => v === time)
      result = index != -1 ? timeInfo[index] : ''
    }

    if (choseTimeIndex == -1) {
      return true
    }
    if (choseTimeIndex != 0 && choseTimeIndex < index) {
      setTimeClick('')
      setZodiac(index + 1)
      setTime(`${timeInfo[index].id}/${timeInfo[index].time}`)

      return false
    } else {
      return true
    }
  }

  const scrollTo = (id) => {
    // 取得目標元素的位置
    const content = document.getElementById(id)
    const contentPosition = content.getBoundingClientRect().top

    // 計算捲動的距離，這裡設定為捲動至目標元素頂部距離畫面頂部的距離
    const offset = window.pageYOffset
    const scrollDistance = contentPosition + offset - 10
    // 執行捲動動作
    window.scrollTo({
      top: scrollDistance,
      behavior: 'smooth',
    })
  }

  const setItem = () => {
    const now = getNow()
    const data = {
      god: god,
      day: day,
      time: time,
      today:
        `${myYear}/${myMonth + 1 < 10 ? '0' : ''}${myMonth + 1}/${
          myDay < 10 ? '0' : ''
        }${myDay}` === day
          ? true
          : false,
      now: now,
    }
    localStorage.setItem('reservation', JSON.stringify(data))
  }

  if (godIndex === -1) return

  return (
    <Container>
      <Head>
        <title>預約時辰</title>
      </Head>
      <WorshipStepBar id={id} setStop={setStop} />
      {/* section1 */}
      <Row className={`${styles.worship}`}>
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
      <Row id="chooseGod" ref={chooseGodRef}>
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
              initialSlide={godIndex}
              className="mySwiper"
            >
              {godInfo.map((v, i) => {
                const foundGod = v.text === god
                let godState = false
                if (i === godIndex) {
                  godState = true
                }

                return (
                  <SwiperSlide key={i}>
                    <God
                      text={v.text}
                      pic={v.pic}
                      wordLeft={v.wordLeft}
                      wordRight={v.wordRight}
                      setGod={setGod}
                      foundGod={foundGod}
                      godState={godState}
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
          <div className={`${styles.choseGod} fs28px fwBold`}>
            已選擇： <span className={`${styles.pink}`}>{god}</span>
          </div>
        </Col>
        <Col></Col>
      </Row>
      {/* section3: 挑選日期 */}
      <Row id="chooseDate" ref={chooseDateRef}>
        <Col>
          <Title text="2." text2="挑選日期" />
        </Col>
        <Col className="mt100px mb150px">
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
                    width={45}
                    className={`${styles.arrow} ${styles.prev}`}
                    style={{
                      cursor:
                        myMonth === myDate.getMonth() ? 'default' : 'pointer',
                    }}
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
                  <div className={`${styles.pink} p30px fs72px`} id="month">
                    {month}
                  </div>
                  {/* 下個月 */}
                  <Image
                    src={Arrow}
                    alt="NextMonth"
                    width={45}
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
                    width={45}
                    className={`${styles.arrow} ${styles.prev}`}
                    style={{
                      cursor:
                        myYear === myDate.getFullYear() ? 'default' : 'pointer',
                    }}
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
                  <div className={`${styles.pink} p30px fs56px`} id="year">
                    {year}
                  </div>
                  {/* 下一年 */}
                  <Image
                    src={Arrow}
                    alt="NextYear"
                    width={45}
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
                <div
                  className={`${styles.week} ${styles.lightgrey} fwBold fs20px`}
                >
                  <ul>
                    <li>日</li>
                    <li>一</li>
                    <li>二</li>
                    <li>三</li>
                    <li>四</li>
                    <li>五</li>
                    <li>六</li>
                  </ul>
                </div>
                <div className={`${styles.body_list}`}>
                  <ul>
                    {days.map((v, i) => {
                      let state = false
                      let pastDay = false

                      // 以前的
                      if (
                        v < myDay &&
                        myYear == myDate.getFullYear() &&
                        myMonth == myDate.getMonth()
                      ) {
                        pastDay = true
                      }
                      const key = `${myYear}/${myMonth + 1 < 10 ? '0' : ''}${
                        myMonth + 1
                      }/${v < 10 ? '0' : ''}${v}`
                      if (day === key) {
                        state = true
                      }
                      return v ? (
                        <li
                          role="presentation"
                          key={`${myYear}/${myMonth + 1}/${v}`}
                          className={`${
                            v
                              ? pastDay
                                ? styles.pastDay
                                : state
                                ? styles.chooseDay
                                : styles.day
                              : ''
                          } fs20px`}
                          onClick={() => {
                            handleDayClick(key)
                          }}
                        >
                          {v}
                        </li>
                      ) : (
                        <li key={`empty-${i}`}></li>
                      )
                    })}
                  </ul>
                </div>
              </div>
              <div className={`${styles.choseDay} fs28px fwBold`}>
                已選擇： <span className={`${styles.pink}`}>{day}</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      {/* section4: 預約時辰 */}
      <Row id="chooseTime" className={`${styles.flex_col}`} ref={chooseTimeRef}>
        <Col>
          <Title text="3." text2="預約時辰" marginTop={'0'} />
        </Col>
        <Col>
          <div className={`${styles.zodiacContainer} mt50px`}>
            <div className={`${styles.circle}`}>
              {/* HOVER */}
              <Image
                alt="zodiac"
                src={`/zodiac/zodiac_${timeClick ? timeClick : zodiac}.svg`}
                width="900"
                height="900"
                className={`${styles.zodiac}`}
              />
              {/* 圓盤 */}
              <Image
                alt="circle"
                src={`/zodiac/circle.svg`}
                width="900"
                height="900"
                className={`${styles.zodiaccircle}`}
              />
              {/* 生肖+字 */}
              <Image
                alt="text"
                src={`/zodiac/text.svg`}
                width="900"
                height="900"
                className={`${styles.zodiactext}`}
              />
              {Array(12)
                .fill(1)
                .map((v, i) => {
                  const sliceNumber = i + 1
                  const sliceClassName = `${styles.slice} ${
                    styles['slice' + sliceNumber]
                  }`
                  return (
                    <div
                      role="presentation"
                      key={sliceNumber}
                      className={sliceClassName}
                      onMouseEnter={() => handleHover(sliceNumber)}
                      onMouseLeave={() => handleHover(0)}
                      onClick={() => {
                        setTimeClick(sliceNumber)
                        getTime(sliceNumber)
                      }}
                    ></div>
                  )
                })}
            </div>
            <div className={`${styles.choseTime}  fs28px fwBold`}>
              <div>
                已選擇： <span className={`${styles.pink}`}>{time}</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      {/* section5: 下一步 */}
      <Row id="nextStep" ref={nextStepRef}>
        <Col>
          <div className={`${styles.button}`}>
            <Button
              text="下一步：選擇供品"
              width="100%"
              btnColor="hot_pink"
              padding="15px 60px"
              fontSize="24px"
              link={() => {
                if (!god) {
                  scrollTo('chooseGod')
                } else if (!day) {
                  scrollTo('chooseDay')
                } else if (!time) {
                  scrollTo('chooseTime')
                } else if (
                  // 判斷當天時間超過了沒
                  `${myYear}/${myMonth < 10 ? '0' : ''}${myMonth + 1}/${
                    myDay < 10 ? '0' : ''
                  }${myDay}` === day
                ) {
                  const hours = myDate.getHours()
                  const state = passedTime(hours, timeClick - 1)
                  if (state) {
                    setItem()
                    router.push('/worship/offerings')
                  }
                } else {
                  setItem()
                  router.push('/worship/offerings')
                }
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  )
}
