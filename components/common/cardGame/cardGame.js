import Head from 'next/head'

import Image from 'next/image'
import Modal from 'react-modal'
import variables from '@/styles/_variables.module.sass'
import AuthContext from '@/contexts/AuthContext'
import React, { useState, useEffect, useContext, useRef } from 'react'
import styles from '@/components/common/cardGame/cardGame.module.sass'
import Confetti from 'react-confetti'

//bootstrap
import { Container, Row, Col } from 'react-bootstrap'

//components
import Button from '@/components/common/button'
import NoButton from '@/components/common/button/noButton.js'
import data from '@/components/mydata/memberNavbarData.js'
import dog_out from '@/assets/dog_out.gif'

// cards
import Rightgod from '@/assets/rightgod.svg'
import Leftgod from '@/assets/leftgod.svg'
import lion from '@/assets/lion.svg'
import studyGod from '@/assets/studyGod.svg'
import teabox from '@/assets/teabox.svg'
import coupon_red from '@/assets/coupon_red.svg'
import loveGod from '@/assets/loveGod.svg'
import mazuGod from '@/assets/mazuGod.svg'
import zhongzi from '@/assets/zhongzi.svg'
import loveSet from '@/assets/loveSet.svg'
import foo_dog_right from '@/assets/foo_dog_right.svg'
import worship_burner from '@/assets/worship_burner.svg'
import plum from '@/assets/plum.svg'
import flag from '@/assets/flag.gif'
import dog_in from '@/assets/dog_in.gif'
import samL from '@/assets/samL.gif'

import temple from '@/assets/temple.svg'

export default function CardGame() {
  const { auth, setAuth, logout } = useContext(AuthContext)

  // create and shuffle!
  const cardData = []
  const imageSources = [
    Leftgod,
    temple,
    teabox,
    foo_dog_right,
    dog_in,
    samL,
    flag,
    lion,
    zhongzi,
    worship_burner,
    studyGod,
    Rightgod,
    loveGod,
    // coupon_red,
    mazuGod,
    loveSet,
    plum,
  ]

  //難度調整
  const [idRange, setIdRange] = useState(6)
  console.log(idRange)
  // const handleDifficultyChange = (event) => {
  //   const value = parseInt(event.target.value)
  //   setNumberOfCards(value)
  // }

  // for (let id = 1; id <= idRange; id++) {
  for (let id = 1; id <= idRange; id++) {
    const imgIndex = Math.floor((id - 1) / 2)
    const card = {
      id: id,
      img: imageSources[imgIndex],

      matched: false,
      flipped: false,
    }
    cardData.push(card)
  }
  // 難度調整 關鍵行
  useEffect(() => {
    const newCardData = []
    for (let id = 1; id <= idRange; id++) {
      const imgIndex = Math.floor((id - 1) / 2)
      const card = {
        id: id,
        img: imageSources[imgIndex],
        matched: false,
        flipped: false,
      }
      newCardData.push(card)
    }
    setCards(newCardData)
  }, [idRange])

  // 建立牌 雙ID變成共用來源

  // Yates shuffle
  const shuffleCards = () => {
    const shuffledCards = [...cards]
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffledCards[i], shuffledCards[j]] = [
        shuffledCards[j],
        shuffledCards[i],
      ]
    }
    setCards(shuffledCards)
  }

  const [cards, setCards] = useState(cardData)
  const [flippedCards, setFlippedCards] = useState([])
  const [points, setPoints] = useState(0)
  const [highestPoints, setHighestPoints] = useState(0)

  const [canClick, setCanClick] = useState(true)

  // 遊戲邏輯
  useEffect(() => {
    // 兩張比對
    if (flippedCards.length === 2) {
      const [card1, card2] = flippedCards
      setCanClick(false)
      if (card1.img === card2.img) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === card1.id || card.id === card2.id
              ? { ...card, matched: true }
              : card
          )
        )
        //分數系統
        setPoints(points + 2)
        setCanClick(true)
      } else {
        // 錯誤，翻回去
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === card1.id || card.id === card2.id
                ? { ...card, flipped: false }
                : card
            )
          )
          setCanClick(true)
        }, 700)
      }
      setFlippedCards([])
    }
  }, [flippedCards])

  //   每次點擊
  const handleCardClick = (id) => {
    if (gameStarted && canClick && remainingTime !== 0) {
      const clickedCard = cards.find((card) => card.id === id)
      //要知道點哪張
      //下次也要看有沒有點

      if (!clickedCard.flipped && flippedCards.length < 2) {
        const newCards = cards.map((card) =>
          card.id === id ? { ...card, flipped: true } : card
        )
        setCards(newCards)
        setFlippedCards([...flippedCards, clickedCard])
      }
    }
  }
  // 遊戲結束 邏輯
  const [gameOver, setGameOver] = useState(false)
  useEffect(() => {
    // 檢查所有牌配對成功?
    const allCardsMatched = cards.every((card) => card.matched)

    if (allCardsMatched) {
      // setIsRunning(false) // 停止計時器
      setGameOver(true)
      handleRecordGame()
      handleCoupon()
      // handleRecordGame()
      // 在這裡增加所其他遊戲的邏輯跟判斷
    }
  }, [cards])

  //開始遊戲
  const [gameStarted, setGameStarted] = useState(false)
  //開場洗牌
  useEffect(() => {
    if (gameStarted) {
      shuffleCards()
    }
  }, [gameStarted])
  //計時器邏輯
  const [remainingTime, setRemainingTime] = useState(5) // 60 seconds
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval

    if (isRunning && !gameOver) {
      interval = setInterval(() => {
        if (remainingTime > 0) {
          setRemainingTime((prevTime) => prevTime - 1)
        } else {
          clearInterval(interval)
          setFailedModalIsOpen(true)
          handleRecordGame()
        }
      }, 1000)
    } else {
      clearInterval(interval)
    }

    return () => {
      clearInterval(interval)
    }
  }, [isRunning, remainingTime, gameOver])

  const minutes = Math.floor(remainingTime / 60)
  const seconds = remainingTime % 60
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`

  // modal 視窗 跳出 提示 相關
  const [restartModalIsOpen, setRestartModalIsOpen] = useState(false)
  const [failedModalIsOpen, setFailedModalIsOpen] = useState(false)
  const [couponSuccessfulModalIsOpen, setCouponSuccessfulModalIsOpen] =
    useState(false)
  const [couponReceivedModalIsOpen, setCouponReceivedModalIsOpen] =
    useState(false)

  const [showConfetti, setShowConfetti] = useState(false)
  const [sg, setSg] = useState(175)

  // API 遊玩紀錄
  const handleRecordGame = () => {
    if (auth.token) {
      fetch(process.env.API_SERVER + '/member/cardGame', {
        method: 'POST',
        body: JSON.stringify({ points }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + auth.token,
        },
      })
        .then((r) => r.json())
        .then((data) => {
          console.log(data)
          // 存儲後端的錯誤訊息
          if (data.error) {
            console.log(data.error)
            // alert(data.error) // 顯示 錯誤訊息

            return // 終止後續的處理
          }

          if (data) {
          }
        })
        .catch((error) => {
          alert('簽到失敗', error)
        })
    }
  }

  // 已經領取
  const [showCouponStatus, setShowCouponStatus] = useState('')
  useEffect(() => {
    if (auth.token) {
      fetch(process.env.API_SERVER + '/member/cardGameCoupon', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + auth.token,
        },
      })
        .then((r) => r.json())
        .then((data) => {
          console.log(`CG頁面 data:`, data.data)
          setShowCouponStatus(data.data)
        })
    } else {
      setShowCouponStatus('已經領取')
    }
  }, [auth.token, gameOver])

  // API 優惠券紀錄
  const handleCoupon = () => {
    if (auth.token) {
      fetch(process.env.API_SERVER + '/member/cardGameCoupon', {
        method: 'POST',
        body: JSON.stringify({ points }),
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

            setCouponReceivedModalIsOpen(true)
            return // 終止後續的處理
          }
          setCouponSuccessfulModalIsOpen(true)
          console.log(data)
        })
        .catch((error) => {
          // alert('簽到失敗', error)
          // setCouponReceivedModalIsOpen(true)
        })
    }
  }

  //讀取最高分
  useEffect(() => {
    if (auth.token) {
      fetch(process.env.API_SERVER + '/member/cardGame', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + auth.token,
        },
      })
        .then((r) => r.json())
        .then((data) => {
          console.log(`最高分`, data)
          setHighestPoints(data.points)
          // 存儲後端的錯誤訊息
          if (data.error) {
            console.log(data.error)
            // alert(data.error) // 顯示 錯誤訊息

            return // 終止後續的處理
          }

          if (data) {
          }
        })
        .catch((error) => {
          alert('簽到失敗', error)
        })
    }
  }, [auth.token, gameOver])

  return (
    <>
      <Row>
        <Col className="nowrap">
          <div className={styles.game_board}>
            {cards.map((card) => (
              <div
                role="presentation"
                key={card.id}
                className={`${styles.card_container} ${
                  card.flipped ? styles.flip : ''
                } ${card.matched ? styles.matched : ''}`}
                onClick={() => handleCardClick(card.id)}
              >
                <div className={idRange === 6 ? styles.card : styles.card2}>
                  <div className={styles.face}>
                    ?
                    {/* {card.flipped ? (
              <Image src={card.img} width={80} height={80} />
            ) : (
              '?'
            )} */}
                  </div>
                  <div
                    className={`${styles.face} ${
                      idRange === 6 ? styles.back : styles.back2
                    }`}
                  >
                    <Image
                      src={card.img}
                      width={155}
                      height={190}
                      alt=""
                      style={
                        {
                          // objectFit: 'cover',
                          // width: '90%',
                          // height: '90%',
                        }
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="nowrap mt15px">
          {/* 計時器 */}
          <div className={styles.timer}>{formattedTime}</div>
        </Col>
        <Col className="nowrap">
          {/* 開始遊戲 按鈕*/}
          <div className={styles.startBtn}>
            <div className="mt15px mb15px">
              <Button
                text="開始"
                btnColor={gameStarted ? 'orderGray' : 'green'}
                link={() => {
                  setIsRunning(true)
                  setGameStarted(true)
                  shuffleCards()
                  setCanClick(true)
                }}
                disabled={isRunning || gameOver}
              />
            </div>
          </div>
        </Col>
        <Col className="nowrap">
          {/* 重新 按鈕*/}
          <div className={styles.startBtn}>
            <Button
              text="重新"
              btnColor={gameStarted ? 'green' : 'orderGray'}
              link={() => {
                setRestartModalIsOpen(true)
              }}
              disabled={!gameStarted}
            />
          </div>
        </Col>
        <Col className="nowrap">
          {/* 計分器 */}
          <div className={styles.center}>
            <div className={styles.points}>這次的分數: {points} </div>
            <div className={styles.points}>歷史最高分: {highestPoints} </div>

            {/* <div className={styles.points}>Points: {points} / 10 </div> */}
          </div>
        </Col>
        <Col className="nowrap">
          {/* 遊玩次數 */}
          <div className={styles.center}>
            <div className={styles.points}>
              今天優惠券狀況 : {showCouponStatus}
            </div>
            {/* <div className={styles.points}>本日可遊玩次數 X / 3 </div> */}
          </div>
        </Col>
        <Col className="nowrap">
          {idRange === 6 ? (
            <Button
              text="調整難度為:困難"
              link={() => {
                setIdRange(24)
                setRemainingTime(60)
              }}
              disabled={isRunning || gameStarted}
            />
          ) : (
            <Button
              text="調整難度為:簡單"
              link={() => {
                setIdRange(6)
                setRemainingTime(30)
              }}
              disabled={isRunning || gameStarted}
            />
          )}
        </Col>
      </Row>
      {/* 遊戲 重新 提示 */}
      <Modal
        isOpen={restartModalIsOpen}
        contentLabel="確定要重新?"
        className={styles.alert}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // 背景顏色透明度
            zIndex: 2, //1 為spin pointer
          },
          content: {
            maxWidth: '300px', // 調整最大寬度
            maxHeight: '250px', // 調整最大高度
            margin: 'auto', // 水平居中
            background: variables['bgColor'],
            //   // border: '',
            //   // color: 'white',
          },
        }}
      >
        <div className={`${styles.flex_center} mt10px`}>
          <div className="fs24px mb20px">本次分數將不會列入紀錄喔</div>
          <div className={`${styles.flex} fwBold fs24px mb20px`}>
            這樣...還要離開我嗎?
          </div>
          <div className="mb5px">
            <Button
              text="確認"
              btnColor="green"
              link={() => {
                setCards(cardData)
                setPoints(0)
                if (idRange === 6) {
                  setRemainingTime(30)
                } else {
                  setRemainingTime(60)
                }

                setIsRunning(false)
                setFlippedCards([])
                setGameStarted(false)
                setGameOver(false)

                setRestartModalIsOpen(false)
                // handleRecordGame()
              }}
              width="100%"
              fontSize="20px"
              padding="10px 50px"
            />
          </div>
          <div>
            <Button
              text="取消"
              btnColor="orderGray"
              link={() => {
                setRestartModalIsOpen(false)
              }}
              width="100%"
              fontSize="20px"
              padding="10px 50px"
            />
          </div>
        </div>
      </Modal>

      {/* 遊戲 失敗 提示 */}
      <Modal
        isOpen={failedModalIsOpen}
        contentLabel="確定要重新?"
        className={styles.alert}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // 背景顏色透明度
            zIndex: 2, //1 為spin pointer
          },
          content: {
            maxWidth: '300px', // 調整最大寬度
            maxHeight: '250px', // 調整最大高度
            margin: 'auto', // 水平居中
            background: variables['bgColor'],
            //   // border: '',
            //   // color: 'white',
          },
        }}
      >
        <div className={`${styles.flex_center} mt10px`}>
          <div className="fs24px mb20px">可惜不是你...</div>
          <div className={`${styles.flex} fwBold fs24px mb20px`}>
            要不要再試試看呢?
          </div>
          <div className="mb5px">
            <Button
              text="確認"
              btnColor="green"
              link={() => {
                // handleRecordGame()
                //新增
                setCards(cardData)
                setPoints(0)
                if (idRange === 6) {
                  setRemainingTime(30)
                } else {
                  setRemainingTime(60)
                }

                setIsRunning(true)
                setFlippedCards([])

                setGameStarted(true)
                setGameOver(false)
                setFailedModalIsOpen(false)

                shuffleCards()
                setCanClick(true)
                //新增
              }}
              width="100%"
              fontSize="20px"
              padding="10px 50px"
            />
          </div>
          <div>
            <Button
              text="取消"
              btnColor="orderGray"
              link={() => {
                setFailedModalIsOpen(false)
              }}
              width="100%"
              fontSize="20px"
              padding="10px 50px"
            />
          </div>
        </div>
      </Modal>
      {/*優惠券 成功 提示 */}
      <Modal
        isOpen={couponSuccessfulModalIsOpen}
        contentLabel="成功取得優惠券!"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // 背景顏色透明度
            zIndex: 2, //1 為spin pointer
          },
          content: {
            maxWidth: '370px', // 調整最大寬度
            maxHeight: '325px', // 調整最大高度
            margin: 'auto', // 水平居中
            background: variables['bgColor'],
            //   // border: '',
            //   // color: 'white',
          },
        }}
      >
        <div className={`${styles.flex_center} mt10px`}>
          <div className="mb20px">
            <Image src={coupon_red} alt="coupon" />
          </div>
          <div className="fwBold fs24px mb25px">恭喜獲得 66大順 折價券</div>
          <div className="fwBold fs24px mb20px">但...你敢挑戰下一個難度嗎?</div>
          <Button
            text="確認"
            link={() => {
              setCouponSuccessfulModalIsOpen(false)
            }}
            fontSize="20px"
            padding="10px 45px"
          />

          {/* <Confetti
            width={typeof window !== 'undefined' ? window.innerWidth : 0}
            height={typeof window !== 'undefined' ? window.innerHeight : 0}
            numberOfPieces={sg}
            confettiSource={{ x: 960, y: 250 }}
            run={showConfetti}
            style={{ position: 'fixed', top: 0, left: 0 }}
          /> */}
        </div>
      </Modal>
      {/* {showConfetti && (
        <Confetti
          width={typeof window !== 'undefined' ? window.innerWidth : 0}
          height={typeof window !== 'undefined' ? window.innerHeight : 0}
          numberOfPieces={sg}
          // confettiSource={{ x: window.innerWidth / 2, y: 50 }}
          run={showConfetti}
          style={{ position: 'fixed', top: 0, left: 0 }}
        />
      )} */}
      {/*優惠券 領過 提示 */}
      <Modal
        isOpen={couponReceivedModalIsOpen}
        contentLabel="已經領取過優惠券!"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // 背景顏色透明度
            zIndex: 2, //1 為spin pointer
          },
          content: {
            maxWidth: '370px', // 調整最大寬度
            maxHeight: '325px', // 調整最大高度
            margin: 'auto', // 水平居中
            background: variables['bgColor'],
            //   // border: '',
            //   // color: 'white',
          },
        }}
      >
        <div className={`${styles.flex_center} mt10px`}>
          <div>
            <Image src={dog_out} alt="coupon" width={250} height={200} />
          </div>
          <div className="fwBold fs24px mb25px">
            您太強啦，但今天已經領取過囉~
          </div>

          <Button
            text="確認"
            link={() => {
              setCouponReceivedModalIsOpen(false)
            }}
            fontSize="20px"
            padding="10px 45px"
          />

          {/* <Confetti
            width={typeof window !== 'undefined' ? window.innerWidth : 0}
            height={typeof window !== 'undefined' ? window.innerHeight : 0}
            numberOfPieces={sg}
            confettiSource={{ x: 960, y: 250 }}
            run={showConfetti}
            style={{ position: 'fixed', top: 0, left: 0 }}
          /> */}
        </div>
      </Modal>
    </>
  )
}
