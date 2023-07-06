//keyframes應用(bounce)
import { css, keyframes } from '@emotion/css'

const bounce = keyframes({
  'from, 20%, 53%, 80%, to': {
    transform: 'translate3d(0,0,0)',
  },
  '40%, 43%': {
    transform: 'translate3d(0, -30px, 0)',
  },
  '70%': {
    transform: 'translate3d(0, -15px, 0)',
  },
  '90%': {
    transform: 'translate3d(0, -4px, 0)',
  },
})

export default function CheckOut() {
  return (
    <div
      className={css({
        width: 200,
        height: 200,
        position: 'relative',
        top: 100,
        borderRadius: '50%',
        animation: `${bounce} 1s ease infinite`,
        transformOrigin: 'center bottom',
      })}
    >
      some bouncing text!
    </div>
  )
}
