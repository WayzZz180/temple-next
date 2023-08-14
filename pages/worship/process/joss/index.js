import React from 'react'
import Image from 'next/image'
import styles from './joss.module.sass'
import variables from '@/styles/_variables.module.sass'
import Head from 'next/head'

// bootstrap
import { Container, Row, Col } from 'react-bootstrap'

// hooks
import Modal from 'react-modal'
import Draggable from 'react-draggable'
import Confetti from 'react-confetti'
import { css, keyframes } from '@emotion/css'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// components
import God from '@/components/common/cards/WorshipProcessGod'
import Button from '@/components/common/button'
import Loading from '@/components/common/loading'

// svg
import Floor from '@/assets/floor.svg'
import Fire from '@/assets/fire.gif'
import HellMoney from '@/assets/joss.svg'
import jossContainer from '@/assets/jossContainer.svg'
import Star from '@/assets/Star_pink.svg'

export default function Joss() {
  const router = useRouter()
  const [drag, setDrag] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [modal, setModal] = useState(false)

  const handleStartConfetti = () => {
    setShowConfetti((prev) => !prev)
    setTimeout(() => {
      setShowConfetti(false)
    }, 5000)
  }

  // 完成祭拜清除預約資訊
  const clearLocal = () => {
    if (localStorage.getItem('reservation')) {
      localStorage.removeItem('reservation')
    }
  }

  // 有無燒完金紙判斷
  const [done, setDone] = useState(false)

  // draggable
  class Drag extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        controlledPosition: { x: 0, y: 0 },
      }
      this.handleStop = this.handleStop.bind(this)
    }

    handleStop(e, data) {
      const { y } = data
      const { index } = this.props
      const position = 15 - y
      if (position > 475) {
        index === 0 && setDone(true)
        // index === 4 && this.props.setDrag(true)
        this.setState({ shouldAnimate: true })
      } else {
        this.setState({ shouldAnimate: false })
      }
    }

    render() {
      if (!done) {
        const { shouldAnimate } = this.state
        const { index } = this.props
        const position = 15 * (index + 1)

        return (
          <Draggable
            axis="y"
            handle=".handle"
            defaultPosition={{ x: 0, y: -position }}
            bounds={{ top: -700, bottom: 0 }}
            scale={1}
            onStop={this.handleStop}
            onStart={this.handleStart}
          >
            <div
              role="presentation"
              className={`${styles.hellMoney} handle`}
              style={{ width: 280 }}
            >
              <Image
                className={shouldAnimate ? styles.animation : ''}
                alt="joss"
                src={HellMoney}
                width={280}
              />
            </div>
          </Draggable>
        )
      }
    }
  }

  // 更新 worship summary 的 complete
  const updateComplete = () => {
    const reqData = JSON.parse(localStorage.getItem('reservation'))
    const auth = localStorage.getItem('auth')
    if (auth) {
      const obj = JSON.parse(auth)
      const Authorization = 'Bearer ' + obj.token
      fetch(`${process.env.API_SERVER}/worship/summary`, {
        method: 'PUT',
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

  // 提示消失
  const disappear = keyframes({
    '0%': {
      opacity: 1,
    },
    '100%': {
      opacity: 0,
    },
  })

  return (
    <main className={`${styles.main}`}>
      <Head>
        <title>燒金紙</title>
      </Head>
      <Container className={`${styles.container}`}>
        <Row className={`${styles.prayContainer}`}>
          {/* 火 */}
          <Col className={`${styles.fire}`}>
            <div>
              <Image src={Fire} alt="floor" width={500} />
            </div>
          </Col>
          {/* 鐵桶 */}
          <Col className={`${styles.jossContainer}`}>
            <div>
              <Image src={jossContainer} alt="floor" width={280} />
            </div>
          </Col>
          {/* 金紙 */}
          <Col
            className={`${styles.hellMoneyContainer}`}
            onMouseDown={() => {
              setDrag(true)
            }}
          >
            {Array(5)
              .fill(1)
              .map((v, i) => {
                return <Drag key={i} index={i} />
              })}
          </Col>
          {/* 地板 */}
          <Col className={`${styles.floorContainer}`}>
            <div>
              <Image src={Floor} alt="floor" width={3600} />
            </div>
          </Col>
          <Col className={`${styles.button}`}>
            <Button
              text="祭拜結束"
              link={() => {
                // if (done) {
                handleStartConfetti()
                updateComplete()
                setTimeout(() => {
                  clearLocal()
                  router.push('/member/praying')
                }, 3000)
                // } else {
                //   setModal(true)
                //   setTimeout(() => {
                //     setModal(false)
                //   }, 1500)
                // }
              }}
            />
          </Col>
        </Row>
        <div
          className={`${styles.hintContainer} ${
            drag ? '' : styles.shine
          } fwBold fs20px
            ${css({
              animation: drag ? `${disappear} 1s ease 1` : ``,
              opacity: drag ? 0 : 1,
            })}
          `}
        >
          <div className={`${styles.hint}`}>
            <Image src={Star} alt="star" />
            <div className="p10px">將金紙拖曳進鐵桶</div>
            <Image src={Star} alt="star" />
          </div>
        </div>
      </Container>
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={200}
          confettiSource={{ x: window.innerWidth / 2, y: 500 }}
          // gravity={{ x: 0, y: 0.2 }}
          run={showConfetti}
        />
      )}
      <Modal
        isOpen={modal}
        contentLabel="praying details"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // 背景顏色透明度
          },
          content: {
            maxWidth: '300px', // 調整最大寬度
            maxHeight: '100px', // 調整最大高度
            margin: 'auto', // 水平居中
            background: variables['bgColor'],
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}
      >
        <div className="fwBold fs20px">噢不！金紙還有剩！</div>
      </Modal>
    </main>
  )
}

Joss.getLayout = (page) => <>{page}</>
