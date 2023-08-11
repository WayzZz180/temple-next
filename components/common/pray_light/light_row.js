import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './light_row.module.sass'
import Btn from './index'

export default function Light_Row({
  indexY = 'A',
  user,
  setUser,
  selectedColumn,
  onColumnToggle,
  rows,
}) {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null)
  const handleButtonToggle = (index) => {
    setSelectedButtonIndex(index)
  }

  const buttons = []

  for (let i = 1; i <= 15; i++) {
    const buttonText = i.toString()
    const isButtonInDB = rows.some(
      (row) => row.LocationX === buttonText && row.LocationY === indexY
    )
    const isSelected =
      isButtonInDB || (selectedColumn === indexY && selectedButtonIndex === i)

    buttons.push(
      <Btn
        key={i}
        text={buttonText}
        indexY={indexY}
        setUser={setUser}
        user={user}
        isSelected={isSelected}
        isDisabled={isButtonInDB || !!selectedButtonIndex}
        onToggle={() => {
          if (!isButtonInDB) {
            if (selectedColumn === indexY) {
              handleButtonToggle(i)
            } else {
              onColumnToggle(indexY)
              handleButtonToggle(i)
            }
          }
        }}
      />
    )
  }
  return (
    <>
      <div className={`${styles.flex_row}`}>
        <div className={`${styles.title}`}>{indexY}</div>
        {buttons}
        <div className={`${styles.title}`}>{indexY}</div>
      </div>
    </>
  )
}
