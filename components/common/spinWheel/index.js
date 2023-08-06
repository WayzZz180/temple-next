import React, { useState, useEffect, useContext, useRef } from 'react'
import styles from '@/components/common/spinWheel/spinWheel.module.sass'
import { AuthContextProvider } from '@/contexts/AuthContext'
import AuthContext from '@/contexts/AuthContext'
import { useRouter } from 'next/router'
import Modal from 'react-modal'
import variables from '@/styles/_variables.module.sass'

// components
import InputBox from '@/components/common/inputBox/index.js'
import Title from '@/components/common/title/index.js'
import Button from '@/components/common/button/index.js'
import MemberNavbar from '@/components/common/memberNavbar/index.js'
import {
  Rainbow,
  RainbowCoupon,
} from '@/components/mydata/memberSpinWheelColor_Coupon.js'

//bootstrap
import { Container, Row, Col } from 'react-bootstrap'

export default function SpinWheel({ onCouponGenerated }) {
  const [rotationDegree, setRotationDegree] = useState(0)

  const handleSpin = () => {
    // const randomDegree = 3600 + Math.ceil(Math.random() * 3600)
    const randomDegree = 7200 + Math.ceil(Math.random() * 3600)
    setRotationDegree(rotationDegree + randomDegree)
  }
  // useState 的狀態更新是同步的 React 更新狀態後才會 render
  // useCallback 同步函式
  useEffect(() => {
    onCouponGenerated(coupon_type, coupon_value)
    console.log('onCouponGenerated到了')
  }, [rotationDegree])

  // 將 x 減去 3600，再對 360 取餘數，得到的結果會是 5 到 364 之間的值
  const result = rotationDegree % 360

  // 使用 switch 和 case 語句根據 result 的值對應到不同的 coupon
  let coupon_type
  let coupon_value

  switch (true) {
    case result >= 5 && result <= 40:
      coupon_type = 'A'
      coupon_value = '100'
      break

    case result >= 41 && result <= 75:
      coupon_type = 'B'
      coupon_value = '90'
      break

    case result >= 76 && result <= 110:
      coupon_type = 'C'
      coupon_value = '80'
      break

    case result >= 111 && result <= 145:
      coupon_type = 'D'
      coupon_value = '70'
      break

    case result >= 146 && result <= 180:
      coupon_type = 'E'
      coupon_value = '60'
      break

    case result >= 181 && result <= 215:
      coupon_type = 'F'
      coupon_value = '50'
      break

    case result >= 216 && result <= 250:
      coupon_type = 'G'
      coupon_value = '40'
      break

    case result >= 251 && result <= 285:
      coupon_type = 'H'
      coupon_value = '30'
      break

    case result >= 286 && result <= 320:
      coupon_type = 'I'
      coupon_value = '20'
      break

    case result >= 321 && result <= 355:
      coupon_type = 'J'
      coupon_value = '10'
      break

    case (result >= 356 && result <= 360) || (result >= 0 && result <= 4):
      coupon_type = 'K'
      coupon_value = '1000'
      break

    default:
      coupon_type = 'Unknown'
      coupon_value = '0'
      break
  }

  console.log(
    `Result: ${result}, 優惠券: ${coupon_type}, 價值: ${coupon_value}`
  )

  return (
    <Row>
      <Col>
        <div className={styles.flex_center}>
          <div className={styles.container}>
            <button className={styles.spin_button} onClick={handleSpin}>
              簽!
            </button>
            <div
              className={styles.wheel}
              style={{
                transform: `rotate(${rotationDegree}deg)`,
                transition: 'transform 4.5s cubic-bezier(0,.7,0,1.02)',
              }}
            >
              {RainbowCoupon.map(({ color, value }, index) => (
                <div
                  key={color}
                  className={styles.slice}
                  style={{ '--i': index + 1, '--color': Rainbow[color] }}
                >
                  <span>
                    {value} {/* Display the corresponding coupon value */}
                  </span>
                </div>
              ))}
              <div
                className={styles.slice1}
                style={{ '--i': 11, '--color': '#E4C16D' }}
              >
                <span>千元折價券</span>
              </div>
            </div>
            {/* //原始檔案 */}
            {/* <div className={styles.wheel}>
              <div
                className={styles.slice}
                style={{ '--i': 1, '--color': variables['sw_Violet'] }}
              >
                <span>100</span>
              </div>
              <div
                className={styles.slice}
                style={{ '--i': 2, '--color': variables['sw_Indigo'] }}
              >
                <span>1</span>
              </div>
              <div
                className={styles.slice}
                style={{ '--i': 3, '--color': variables['sw_Blue'] }}
              >
                <span>50</span>
              </div>
              <div
                className={styles.slice}
                style={{ '--i': 4, '--color': variables['sw_Green'] }}
              >
                <span>0</span>
              </div>
              <div
                className={styles.slice}
                style={{ '--i': 5, '--color': variables['sw_Yellow'] }}
              >
                <span>1000</span>
              </div>
              <div
                className={styles.slice}
                style={{ '--i': 6, '--color': variables['sw_Orange'] }}
              >
                <span>10</span>
              </div>
              <div
                className={styles.slice}
                style={{ '--i': 7, '--color': variables['sw_Red'] }}
              >
                <span>5</span>
              </div>
              <div
                className={styles.slice}
                style={{ '--i': 8, '--color': variables['sw_Magenta'] }}
              >
                <span>20</span>
              </div>
            </div> */}
          </div>
        </div>
      </Col>
    </Row>
  )
}
