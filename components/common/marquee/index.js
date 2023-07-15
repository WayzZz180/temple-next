import React, { useState } from 'react'
import styled from '@emotion/styled'
import styles from './marquee.module.sass'
import Title from '@/components/common/title'
import ShopMarqueeCard from '@/components/common/cards/ShopMarqueeCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const Cards = styled.div`
  @keyframes CardsRun {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  animation: ${(props) =>
    props.isRunning ? 'CardsRun 3s steps(1000) infinite' : 'none'};
`

const AnimatedCard = styled(ShopMarqueeCard)`
  animation: ${(props) =>
    props.isRunning ? 'CardsRun 3s steps(1000) infinite' : 'none'};
`
// 根據pid去select出recommend
export default function Marquee({ pid }) {
  const recommend = pid
  const [isRunning, setIsRunning] = useState(true)

  const handleMouseEnter = () => {
    setIsRunning(false)
  }

  const handleMouseLeave = () => {
    setIsRunning(true)
  }

  return (
    <>
      <Title text="相關選擇" text2="Related Choice" lineColor="hot_pink" />
      <Container className={`${styles.marqueeContainer}`}>
        <div className={`${styles.marqueeContent}`}>
          <Row
            className="nowrap"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {' '}
            {Array.from({ length: 200 }, (_, index) => (
              <Cards
                key={index}
                style={{ width: '100%' }}
                isRunning={isRunning}
                className={`${styles.marquee}`}
              >
                <AnimatedCard isRunning={isRunning} recommend={recommend} />
              </Cards>
            ))}
          </Row>
        </div>
      </Container>
    </>
  )
}
