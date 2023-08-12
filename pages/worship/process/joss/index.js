import React from 'react'
import Image from 'next/image'
import styles from './joss.module.sass'

// bootstrap
import { Container, Row, Col } from 'react-bootstrap'

// hooks
import Draggable from 'react-draggable' // The default
import { DraggableCore } from 'react-draggable' // <DraggableCore>

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

export default function Joss() {
  const router = useRouter()
  const [reservation, setReservation] = useState([])

  useEffect(() => {
    if (localStorage.getItem('reservation')) {
      setReservation(JSON.parse(localStorage.getItem('reservation')))
    }
  }, [router.query])

  const clearLocal = () => {
    if (localStorage.getItem('reservation')) {
      localStorage.removeItem('reservation')
    }
  }
  // 金紙初始位置

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
      console.log(index)
      const position = 15 - y

      if (position > 615) {
        index === 0 && setDone(true)
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
              className={`${styles.hellMoney} handle`}
              style={{ width: 300 }}
            >
              <Image
                className={shouldAnimate ? styles.animation : ''}
                alt="joss"
                src={HellMoney}
                width={300}
              />
            </div>
          </Draggable>
        )
      }
    }
  }

  // 更新complete
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

  return (
    <main className={`${styles.main}`}>
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
              <Image src={jossContainer} alt="floor" width={300} />
            </div>
          </Col>
          {/* 金紙 */}
          <Col className={`${styles.hellMoneyContainer}`}>
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
                if (done) {
                  updateComplete()
                  clearLocal()
                  router.push('/member/praying')
                } else {
                  alert('還有剩')
                }
              }}
            />
          </Col>
        </Row>
      </Container>
    </main>
  )
}

Joss.getLayout = (page) => <>{page}</>
