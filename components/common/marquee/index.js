import React from 'react';
import styled from '@emotion/styled'
import styles from './marquee.module.sass';
import Title from '@/components/common/title';
import ShopMarqueeCard from '@/components/common/cards/ShopMarqueeCard'
// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Cards = styled.div`
  @keyframes CardsRun {
    0% {
      transform: translateX(0)
    }
    100% {
      transform: translateX(-100%)
    }
  }
  animation: CardsRun 3s steps(1000) infinite;
`

const AnimatedCard = styled(ShopMarqueeCard)`
  animation: CardsRun 3s steps(1000) infinite;
`;

export default function Marquee () {

  return (
    <>
    <Title text="相關選擇" text2="Related Choice" lineColor='hot_pink'/>
    <Container className={`${styles.marqueeContainer}`}>
          <div className={`${styles.marqueeContent} `} 
        >
            <Row className='nowrap'>
            {Array.from({ length: 200 }, (_, index) => (
                  <Cards style={{ width: '100%' }}>
                    <AnimatedCard key={index} />
                  </Cards>
                ))}
              </Row>    

          </div>
      </Container>
     </>


  );
};

