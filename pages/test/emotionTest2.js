//emotion動畫
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
export default function EmotionTest2() {
  return (
    <>
      {/* assets吃不到 */}
      {/* <Stars src="../../assets/stars.svg" style={{ width: '20%' }} /> */}
      {/* public相對路徑 */}
      {/* <Stars src="../../stars.svg" style={{ width: '20%' }} /> */}
      {/* .src很重要 */}
      <Stars src={stars.src} style={{ width: '20%' }} />
    </>
  )
}
