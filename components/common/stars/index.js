import styled from '@emotion/styled'
import stars from '@/assets/stars.svg'

const Flower = styled.img`
  @keyframes FlowerTurn {
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(deg) 360;
    }
    100% {
      transform: rotateY(720deg);
    }
  }
  animation: FlowerTurn 8s ease infinite;
`
export default function Stars() {
  return (
    <>
      <Flower src="../../stars.svg" style={{ width: '20%' }} />
      <Flower src={stars.src} style={{ width: '20%' }} />
    </>
  )
}
