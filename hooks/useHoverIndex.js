import { useState } from 'react'
// 判斷是不是在hover
export function useHoverIndex(initialValue = -1) {
  const [hoveredIndex, setHoveredIndex] = useState(initialValue)

  const handleMouseEnter = (index) => {
    setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(initialValue)
  }

  return {
    hoveredIndex,
    handleMouseEnter,
    handleMouseLeave,
  }
}
