import styled from '@emotion/styled'
import stars from '@/assets/stars.svg'

const Stars = styled.img`
  @keyframes StarsTurn {
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
  animation: StarsTurn 8s ease infinite;
`
export default function StarsMove() {
  return <Stars src={stars.src} style={{ width: '150' }} />
}
