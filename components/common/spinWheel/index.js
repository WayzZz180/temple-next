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

//bootstrap
import { Container, Row, Col } from 'react-bootstrap'

const Rainbow = {
  sw_Violet: '#7D3C98',
  sw_Indigo: '#3B4B9B',
  sw_Blue: '#3498DB',
  sw_Green: '#47B990',
  sw_YellowGreen: '#9ACD32',
  sw_Yellow: '#F1C40F',
  sw_Orange: '#E67E22',
  sw_Red: '#EE3835',
  sw_Pink: '#E91E63',
  sw_Magenta: '#E4007E',
  //   sw_Magenta: 'black',
}

const colorMap = {
  purple: 'rgb(197, 176, 213)',
  blue: 'rgb(31, 119, 180)',
  light_blue: 'rgb(174, 199, 232)',
  orange: 'rgb(255, 127, 14)',
  light_orange: 'rgb(255, 187, 120)',
  green: 'rgb(44, 160, 44)',
  light_green: 'rgb(152, 223, 138)',
  red: 'rgb(214, 39, 40)',
  light_red: 'rgb(255, 152, 150)',
  violet: 'rgb(148, 103, 189)',
}

const coupon = {
  a: '10',
  b: '20',
  c: '30',
  d: '40',
  e: '50',
  f: '60',
  g: '70',
  h: '80',
  i: '90',
  j: '100',
  x: '1000',
}
// const colorMapCoupon = [
//   { color: 'purple', value: '10' },
//   { color: 'blue', value: '20' },
//   { color: 'light_blue', value: '30' },
//   { color: 'orange', value: '40' },
//   { color: 'light_orange', value: '50' },
//   { color: 'green', value: '60' },
//   { color: 'light_green', value: '70' },
//   { color: 'red', value: '80' },
//   { color: 'light_red', value: '90' },
//   { color: 'violet', value: '100' },
// ]

const RainbowCoupon = [
  { color: 'sw_Violet', value: '10' },
  { color: 'sw_Indigo', value: '20' },
  { color: 'sw_Blue', value: '30' },
  { color: 'sw_Green', value: '40' },
  { color: 'sw_YellowGreen', value: '50' },
  { color: 'sw_Yellow', value: '60' },
  { color: 'sw_Orange', value: '70' },
  { color: 'sw_Red', value: '80' },
  { color: 'sw_Pink', value: '90' },
  { color: 'sw_Magenta', value: '100' },
]

export default function SpinWheel() {
  const [rotationDegree, setRotationDegree] = useState(0)

  const handleSpin = () => {
    // const randomDegree = 3600 + Math.ceil(Math.random() * 3600)
    const randomDegree = 3600 + Math.ceil(Math.random() * 3600)
    setRotationDegree(rotationDegree + randomDegree)
  }

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
                transition: 'transform 4s cubic-bezier(0,.7,0,1.02)',
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
        {/* <button id="spin-btn" onclick="spinWheel()">
          GPT Spin
        </button> */}
      </Col>
    </Row>
  )
}
