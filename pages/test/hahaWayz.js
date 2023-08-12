import React, { useState } from 'react'
import Confetti from 'react-confetti'

const ExamplePage = () => {
  const [showConfetti, setShowConfetti] = useState(false)

  const handleStartConfetti = () => {
    setShowConfetti((prev) => !prev)
    setTimeout(() => {
      setShowConfetti(false)
    }, 5000)
  }

  return (
    <div>
      <h1>Confetti</h1>
      <button onClick={handleStartConfetti}>gooooooooooo!</button>
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
    </div>
  )
}

export default ExamplePage
// npm install react-confetti555
