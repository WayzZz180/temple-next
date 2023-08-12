import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from './prayingSummary.module.sass'
import variables from '@/styles/_variables.module.sass'
import Modal from 'react-modal'

// components
import Title from '@/components/common/title/orderTitle'
import Button from '@/components/common/button/index.js'
import PrayingDetails from './prayingDetails'

// svg
import mazuGod from '@/assets/mazuGod.svg'
import loveGod from '@/assets/loveGod.svg'
import studyGod from '@/assets/studyGod.svg'

// data
import timeInfo from '@/components/mydata/timeInfo'

export default function PrayingSummary({ data = [] }) {
  const router = useRouter()
  // for src
  const gods = [
    {
      god: '媽祖',
      src: mazuGod,
    },
    {
      god: '月老',
      src: loveGod,
    },
    {
      god: '文昌',
      src: studyGod,
    },
  ]

  const god = gods.filter((v, i) => v.god === data?.god)

  // title
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
  ]

  // Modal開關
  const [isOpen, setIsOpen] = useState(false)

  // 現在時間
  const getNow = () => {
    const myDate = new Date()
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
    const day = `${myDate.getFullYear()}/${
      myDate.getMonth() + 1 < 10 ? '0' : ''
    }${myDate.getMonth() + 1}/${
      myDate.getDate() < 10 ? '0' : ''
    }${myDate.getDate()}`
    const data = { day: day, time: now }
    return data
  }
  const dayTime = getNow()
  const day = dayTime.day
  const time = dayTime.time

  // 時辰對的話顯示去拜拜按鈕
  const isNow = () => {
    if (day === data?.day && time === data?.time) {
      return true
    } else {
      return false
    }
  }
  const toPray = isNow()
  // 去拜拜將reservation加入localStorage
  const setLocal = () => {
    const tmp = {
      god: data?.god,
      day: data?.day,
      time: data?.time,
      today: true,
      now: time,
      pidArr: [data?.pid1, data?.pid2, data?.pid3],
    }
    localStorage.setItem('reservation', JSON.stringify(tmp))
    router.push('/worship/process')
  }
  return (
    <Container>
      <Row className={styles.flex}>
        {/* god */}
        <Col className="">
          <Image src={god[0].src} alt="God" width={200}></Image>
        </Col>

        <div className={styles.flex_col}>
          <Title info={info} />
        </div>

        <div className={styles.flex_col}>
          <Button
            text="詳細資訊"
            btnColor="brown"
            width="229px"
            height="50px"
            fontSize="20px"
            link={() => {
              setIsOpen(true)
            }}
          />
          {toPray && !data?.complete ? (
            <div className="mt20px">
              <Button
                text="去拜拜"
                btnColor="hot_pink"
                width="229px"
                height="50px"
                fontSize="20px"
                link={() => {
                  setLocal()
                }}
              />
            </div>
          ) : (
            ''
          )}
          <div className={`${styles.total} mt15px`}>
            <div className={`${styles.totalTitle} fwBold fs20px`}>訂單金額</div>
            <div className={` fwBold fs28px`}>${data?.total}</div>
          </div>
          <div className={`${styles.total} mt5px`}>
            <div className={`${styles.totalTitle} fwBold fs20px`}>完成參拜</div>
            <div
              className={`${styles.status} fwBold fs24px`}
              style={{
                color: data?.complete
                  ? variables['green']
                  : variables['hot_pink'],
              }}
            >
              {data?.complete ? '已完成' : '未完成'}
            </div>
          </div>
        </div>
      </Row>

      <Row>
        <Col className={`${styles.longLine} mt30px mb30px`}></Col>
      </Row>
      <Modal
        isOpen={isOpen}
        contentLabel="praying details"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // 背景顏色透明度
          },
          content: {
            maxWidth: '1050px', // 調整最大寬度
            maxHeight: '800px', // 調整最大高度
            margin: 'auto', // 水平居中
            background: variables['bgColor'],
          },
        }}
      >
        <div
          role="presentation"
          className={`${styles.close} me25px fs28px p10px`}
          onClick={() => {
            setIsOpen(false)
          }}
        >
          X
        </div>
        <PrayingDetails
          wid={data?.wid}
          info_sum={info}
          src={god[0].src}
          total={data?.total}
        />
      </Modal>
    </Container>
  )
}
