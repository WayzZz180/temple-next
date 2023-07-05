import { css, keyframes } from '@emotion/react'

export default function KeyframeTest() {
  const bounce = keyframes`
      from, 20%, 53%, 80%, to {
        transform: translate3d(0,0,0);
      }
    
      40%, 43% {
        transform: translate3d(0, -30px, 0);
      }
    
      70% {
        transform: translate3d(0, -15px, 0);
      }
    
      90% {
        transform: translate3d(0,-4px,0);
      }
    `
  return (
    <>
      <div className="test">some bouncing text!</div>
      <style>
        {`
        .test{
          animation: ${bounce} 1s ease infinite;
          width:500px;
          height:500px; 
          color:green; 
        }
        `}
      </style>
    </>
  )
}
