import React, { useEffect } from 'react'
import Image from 'next/image'

import { useState, useContext } from 'react'

//bootstrap
import { Container, Row, Col } from 'react-bootstrap'

//components
import Button from '@/components/common/button'

// cards
import admissionTicketTest from '@/assets/admissionTicketTest.svg'
import coupon_red from '@/assets/coupon_red.svg'
import Rightgod from '@/assets/rightgod.svg'
import Leftgod from '@/assets/leftgod.svg'
import lion from '@/assets/lion.svg'
import studyGod from '@/assets/studyGod.svg'

export default function CardGame() {
  // create and shuffle!
  const cardData = []
  const imageSources = [
    admissionTicketTest,
    coupon_red,
    Rightgod,
    Leftgod,
    lion,
    studyGod,
  ]
  // 建立牌
  for (let id = 1; id <= 12; id++) {
    const imgIndex = Math.floor((id - 1) / 2)
    const card = {
      id: id,
      img: imageSources[imgIndex],
      matched: false,
      flipped: false,
    }
    cardData.push(card)
  }
  // 洗牌
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

  useEffect(() => {
    // 兩張比對
    if (flippedCards.length === 2) {
      const [card1, card2] = flippedCards
      if (card1.img === card2.img) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === card1.id || card.id === card2.id
              ? { ...card, matched: true }
              : card
          )
        )
        //分數系統
        setPoints(points + 1)
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
        }, 1000)
      }
      setFlippedCards([])
    }
  }, [flippedCards])

  //   每次點擊

  const handleCardClick = (id) => {
    if (gameStarted) {
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

  //開始遊戲
  const [gameStarted, setGameStarted] = useState(false)
  //時鐘
  const [remainingTime, setRemainingTime] = useState(60) // 60 seconds
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (gameStarted) {
      shuffleCards()
    }
  }, [gameStarted])

  useEffect(() => {
    let interval

    if (isRunning) {
      interval = setInterval(() => {
        if (remainingTime > 0) {
          setRemainingTime((prevTime) => prevTime - 1)
        } else {
          clearInterval(interval)
        }
      }, 1000)
    } else {
      clearInterval(interval)
    }

    return () => {
      clearInterval(interval)
    }
  }, [isRunning, remainingTime])

  const minutes = Math.floor(remainingTime / 60)
  const seconds = remainingTime % 60
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`

  const handleStartClick = () => {
    setIsRunning(true)
  }

  return (
    <Container>
      <div className="game-board">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card_container ${card.flipped ? 'flip' : ''} ${
              card.matched ? 'matched' : ''
            }`}
            onClick={() => handleCardClick(card.id)}
          >
            <div className="card">
              <div className="face">
                ?
                {/* {card.flipped ? (
                <Image src={card.img} width={80} height={80} />
              ) : (
                '?'
              )} */}
              </div>
              <div className="face back">
                <Image src={card.img} width={100} height={100} />
              </div>
            </div>
          </div>
        ))}
        {/* 計時器 */}
        <div className="timer">{formattedTime}</div>

        {/* 開始遊戲 按鈕*/}
        <div className="startbtn">
          <div>
            <Button
              text="開始"
              btnColor="orderGray"
              link={() => {
                setIsRunning(true)
                setGameStarted(true)
                shuffleCards()
              }}
              disabled={isRunning}
            />
          </div>
        </div>

        {/* 重新 按鈕*/}
        <div className="startbtn">
          <Button
            text="重新"
            btnColor="green"
            link={() => {
              setCards(cardData)
              setFlippedCards([])
              setPoints(0)
              setRemainingTime(60)
              setIsRunning(false)
              setGameStarted(false)
            }}
            // disabled={isRunning}
          />
        </div>
        <table>{/* Table content */}</table>

        {/* 計分器 */}
        <div className="center">
          <div className="points">Points: {points} / 10 </div>
        </div>
        <style jsx>{`
          .game-board {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            width: 500px;
          }

          .card_container {
            position: relative;
            margin: 10px;
            width: 100px;
            height: 135px;
            perspective: 1000;
          }

          .card_container.flip {
            perspective: 1000;
          }

          .card_container.matched .card {
            cursor: default;
          }

          .card {
            background-color: #68c39f;
            width: 100%;
            height: 100%;
            cursor: pointer;
            border-radius: 3px;
            box-shadow: 0.5px 2.5px #ccc;
            transform-style: preserve-3d;
            transition: all 0.25s linear;
          }

          .flip .card {
            transform: rotateY(180deg);
          }

          .face {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            font-weight: bold;
          }

          .face.back {
            background-color: #ffcc66;
            color: white;
            border-radius: 3px;
            transform: rotateY(180deg);
            box-sizing: border-box;
            padding: 10px;
            text-align: center;
          }

          .timer {
            display: block;
            margin: 10px auto;
            width: 150px;
            height: 50px;
            line-height: 50px;
            background-color: #fff;
            border-radius: 25px;
            border: 2px solid #1abc9c;
            font-size: 40px;
            text-align: center;
            color: #999;
          }

          .startbtn {
            display: block;
            margin: 10px auto;
            text-align: center;
          }

          .center {
            margin: 15px auto;
          }

          .points {
            position: absolute;
            font-size: 24px;
          }
        `}</style>
      </div>
    </Container>
  )
}
