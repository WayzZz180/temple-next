import { useState, useEffect } from 'react'
import admissionTicketTest from '@/assets/admissionTicketTest.svg'
import coupon_red from '@/assets/coupon_red.svg'
import Image from 'next/image'

export default function Home() {
  const cardData = [
    {
      id: 1,
      img: admissionTicketTest, // Specify the image source here
      value: 'C',
      matched: false,
      flipped: false,
    },
    {
      id: 2,
      img: coupon_red, // Specify the image source here
      value: 'A',
      matched: false,
      flipped: false,
    },
    {
      id: 3,
      img: coupon_red, // Specify the image source here
      value: 'A',
      matched: false,
      flipped: false,
    },

    {
      id: 4,
      img: admissionTicketTest, // Specify the image source here
      value: 'C',
      matched: false,
      flipped: false,
    },
  ]

  const [cards, setCards] = useState(cardData)
  const [flippedCards, setFlippedCards] = useState([])

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [card1, card2] = flippedCards
      if (card1.value === card2.value) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === card1.id || card.id === card2.id
              ? { ...card, matched: true }
              : card
          )
        )
      } else {
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

  const handleCardClick = (id) => {
    const clickedCard = cards.find((card) => card.id === id)

    if (!clickedCard.flipped && flippedCards.length < 2) {
      const newCards = cards.map((card) =>
        card.id === id ? { ...card, flipped: true } : card
      )
      setCards(newCards)
      setFlippedCards([...flippedCards, clickedCard])
    }
  }

  return (
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
              {/* {card.flipped ? (
                <Image src={card.img} width={80} height={80} />
              ) : (
                '?'
              )} */}
            </div>
            <div className="face back">
              <Image src={card.img} width={80} height={80} />
            </div>
          </div>
        </div>
      ))}
      {/* 計時器 */}
      <div className="timer">00:00</div>
      <div className="startbtn">
        {/* 開始遊戲 */}
        <button>Start</button>
      </div>
      <table>{/* Table content */}</table>
      {/* 計分器 */}
      <div className="cntr">
        <div className="points">Points: 0</div>
      </div>
      <style jsx>{`
        .game-board {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
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

        .cntr {
          margin: 15px auto;
        }

        .points {
          position: absolute;
        }
      `}</style>
    </div>
  )
}
