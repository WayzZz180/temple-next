import React, { useState, useEffect, useContext, useRef } from 'react'
import styles from '@/components/common/spinWheel/spinWheel.module.sass'
import { AuthContextProvider } from '@/contexts/AuthContext'
import AuthContext from '@/contexts/AuthContext'
import { useRouter } from 'next/router'
import Modal from 'react-modal'
import variables from '@/styles/_variables.module.sass'
import Image from 'next/image'

// components
import InputBox from '@/components/common/inputBox/index.js'
import Title from '@/components/common/title/index.js'
import Button from '@/components/common/button/index.js'
import MemberNavbar from '@/components/common/memberNavbar/index.js'
import {
  Rainbow,
  colorMap,
  RainbowCoupon,
  colorMapCoupon,
} from '@/components/mydata/memberSpinWheelColor_Coupon.js'
import coupon_red from '@/assets/coupon_red.svg'
import wheel from '@/assets/wheel.svg'
import spin_button2 from '@/assets/spin_button2.svg'

//bootstrap
import { Container, Row, Col } from 'react-bootstrap'

export default function SpinWheel({ updateSpinWheel }) {
  const { auth, setAuth, logout } = useContext(AuthContext)
  const [rotationDegree, setRotationDegree] = useState(0)
  const [modalIsOpen, setModalIsOpen] = useState(false) // 跟蹤 modal 是否打開
  // 優惠券資訊的狀態
  const [couponInfo, setCouponInfo] = useState({
    coupon_type: '',
    coupon_value: '',
  })

  const handleModalCloseReload = () => {
    // 當點擊取消或按下 Esc 時，關閉小視窗
    setModalIsOpen(false)
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
  const handleSpin = () => {
    const randomDegree = 7200 + Math.ceil(Math.random() * 3600)

    setRotationDegree(rotationDegree + randomDegree)
    // 將 coupon_type 和 coupon_value 傳遞給 onCouponGenerated

    setTimeout(() => {
      setModalIsOpen(true)
    }, 1200)

    setCouponInfo(coupon_type, coupon_value)
  }

  // 使用 fetch API 發送 POST 請求到後端
  const signIn = () => {
    // 呼叫從 dailySignIn 元件傳遞的函式，觸發 dailySignIn 元件的重新渲染
    updateSpinWheel()
    fetch(process.env.API_SERVER + '/member/dailySignIn', {
      method: 'POST',
      body: JSON.stringify({
        coupon_value: coupon_value,
        coupon_type: coupon_type,
      }),

      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + auth.token,
      },
    })
      .then((r) => r.json())
      .then((data) => {
        // 存儲後端的錯誤訊息
        if (data.error) {
          console.log(data.error)
          alert(data.error) // 顯示 email 已被使用的錯誤訊息

          return // 終止後續的處理
        }

        console.log(data)

        if (data) {
          // alert('簽到成功')
          // router.push('/member/login');
          // window.location.reload()
        }
      })
      .catch((error) => {
        alert('簽到失敗', error)
      })
  }

  console.log(
    `Result: ${result}, 優惠券: ${coupon_type}, 價值: ${coupon_value}`
  )

  useEffect(() => {
    if (modalIsOpen) {
      signIn()
    }
  }, [modalIsOpen])

  return (
    <>
      <Row>
        <Col>
          <div className={styles.flex_center}>
            <div className={styles.container}>
              <Image
                src={spin_button2}
                className={styles.spin_button}
                onClick={handleSpin}
                // width={60}
                // height={60}
              />
              {/* <button className={styles.spin_button} onClick={handleSpin}>
                簽!
              </button> */}
              {/* <Image
                className={styles.newWheel}
                src={wheel}
                weight={600}
                height={600}
                style={{
                  transform: `rotate(${rotationDegree}deg)`,
                  transition: 'transform 1s cubic-bezier(0,.7,0,1.02)',
                }}
              ></Image> */}
              <div
                className={styles.wheel}
                style={{
                  transform: `rotate(${rotationDegree}deg)`,
                  transition: 'transform 1s cubic-bezier(0,.7,0,1.02)',
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
      <Modal
        isOpen={modalIsOpen}
        contentLabel="簽到成功!"
        className={styles.alert}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // 背景顏色透明度
            zIndex: 2, //1 為spin pointer
          },
          content: {
            maxWidth: '370px', // 調整最大寬度
            maxHeight: '270px', // 調整最大高度
            margin: 'auto', // 水平居中
            background: variables['bgColor'],
            //   // border: '',
            //   // color: 'white',
          },
        }}
      >
        <div className={styles.flex_center2}>
          <Image src={coupon_red} alt="coupon" />
          <h2>簽到成功</h2>
          <h2>
            恭喜獲得 {coupon_type} 折價券，價值
            {coupon_value}
          </h2>
          <button onClick={handleModalCloseReload} className="w100">
            確認
          </button>
        </div>
      </Modal>
    </>
  )
}
