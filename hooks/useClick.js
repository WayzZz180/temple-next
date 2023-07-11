import { useState } from 'react'
// click切換狀態
export function useClick(initialValue = false) {
  const [clickState, setClickState] = useState(initialValue)
  const handleClick = () => {
    setClickState(!clickState)
  }

  return {
    clickState,
    handleClick,
  }
}
