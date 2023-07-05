//Hover

import { css } from '@emotion/css'

export default function EmotionTest() {
  const color = 'white'

  return (
    <div
      className={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        &:hover {
          color: ${color};
        }
      `}
    >
      Hover to change color.
    </div>
  )
}
