import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './cuntdownTimer.module.sass'
import lion from '@/assets/lion.svg'

const CountdownTimer = () => {
  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 30)

  const calculateTimeLeft = () => {
    const targetDate = new Date('2023-09-14T23:00:00')
    const now = new Date()
    const difference = targetDate - now

    if (difference <= 0) {
      return {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
      }
    }

    const totalSeconds = Math.floor(difference / 1000)
    const days = String(Math.floor(totalSeconds / (24 * 60 * 60))).padStart(
      2,
      '0'
    )
    const hours = String(
      Math.floor((totalSeconds % (24 * 60 * 60)) / 3600)
    ).padStart(2, '0')
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
      2,
      '0'
    )
    const seconds = String(totalSeconds % 60).padStart(2, '0')

    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  //動動眼睛
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 })

  // 調整這些值以確保眼睛在預期的位置
  const eyeLeftOffset = 900
  const eyeTopOffset = 78

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event
    const relativeX = clientX - eyeLeftOffset
    const relativeY = clientY - eyeTopOffset

    // 限制眼睛位置在範圍內
    const maxX = 20
    const maxY = 20
    const clampedX = Math.min(Math.max(relativeX, -maxX), maxX)
    const clampedY = Math.min(Math.max(relativeY, -maxY), maxY)

    setEyePosition({ x: clampedX, y: clampedY })
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  return (
    <>
      <div className={styles.parent_container}>
        <div className={`${styles.container1}`}>
          <div className={`${styles.container}`}>
            <div className={`${styles.flex_rowt}`}>
              <div className={`${styles.title}`}>DAYS</div>
              <div className={`${styles.title}`}>HOURS</div>
              <div className={`${styles.title}`}>MINUTES</div>
              <div className={`${styles.title}`}>SECONDS</div>
            </div>
            <div className={`${styles.flex_row}`}>
              <div className={`${styles.flex_row2}`}>
                <div className={`${styles.box}`}></div>
                <div className={`${styles.box}`}></div>
              </div>

              <div className={`${styles.flex_row2}`}>
                <div className={`${styles.box}`}></div>
                <div className={`${styles.box}`}></div>
              </div>

              <div className={`${styles.flex_row2}`}>
                <div className={`${styles.box}`}></div>
                <div className={`${styles.box}`}></div>
              </div>

              <div className={`${styles.flex_row2}`}>
                <div className={`${styles.box}`}></div>
                <div className={`${styles.box}`}></div>
              </div>
            </div>
            <div className={`${styles.flex_rowc}`}>
              <div className={`${styles.flex_row3}`}>
                <p className={`${styles.text}`}>{timeLeft.days}</p>
              </div>

              <div className={`${styles.flex_row3}`}>
                <p className={`${styles.text2}`}>:</p>
              </div>

              <div className={`${styles.flex_row3}`}>
                <p className={`${styles.text}`}>{timeLeft.hours}</p>
              </div>

              <div className={`${styles.flex_row3}`}>
                <p className={`${styles.text2}`}>:</p>
              </div>

              <div className={`${styles.flex_row3}`}>
                <p className={`${styles.text}`}>{timeLeft.minutes}</p>
              </div>

              <div className={`${styles.flex_row3}`}>
                <p className={`${styles.text2}`}>:</p>
              </div>

              <div className={`${styles.flex_row3}`}>
                <p className={`${styles.text}`}>{timeLeft.seconds}</p>
              </div>
            </div>
          </div>

          <div className={styles.eyeleft}>
            <div
              className={styles.eyeblack}
              style={{
                '--eye-position-x': `${eyePosition.x}px`,
                '--eye-position-y': `${eyePosition.y}px`,
                '--eye-left-offset': `${eyeLeftOffset}px`,
                '--eye-top-offset': `${eyeTopOffset}px`,
              }}
            ></div>
          </div>
          <div className={styles.eyeright}>
            <div
              className={styles.eyeblack}
              style={{
                '--eye-position-x': `${eyePosition.x}px`,
                '--eye-position-y': `${eyePosition.y}px`,
                '--eye-left-offset': `${eyeLeftOffset}px`,
                '--eye-top-offset': `${eyeTopOffset}px`,
              }}
            ></div>
          </div>
          <Image
            src={lion}
            alt=""
            width="810"
            className={`${styles.lion}`}
          ></Image>
        </div>
      </div>
    </>
  )
}

export default CountdownTimer
