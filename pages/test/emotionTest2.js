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
export default function EmotionTest2() {
  return (
    <>
      {/* assets吃不到 */}
      {/* <Flower src="../../assets/stars.svg" style={{ width: '20%' }} /> */}
      {/* public相對路徑 */}
      {/* <Flower src="../../stars.svg" style={{ width: '20%' }} /> */}
      {/* .src很重要 */}
      <Flower src={stars.src} style={{ width: '20%' }} />
    </>
  )
}
