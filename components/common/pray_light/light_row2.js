import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './light_row.module.sass'
import Btn from './index'

export default function Light_Row({ indexY = 'A', user, setUser, selectedColumn, onColumnToggle }) {

  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);


  const handleButtonToggle = (index) => {
    setSelectedButtonIndex(index);
  };

  

  const buttons = []

  for (let i = 16; i <= 30; i++) {
    buttons.push(<Btn
               key={i}
        text={i.toString()}
        indexY={indexY}
        setUser={setUser}
        user={user}
        isSelected={selectedColumn === indexY && selectedButtonIndex === i}
        onToggle={() => {
          if (selectedColumn === indexY) {
            handleButtonToggle(i);
          } else {
            onColumnToggle(indexY);
            handleButtonToggle(i);
          }
        }}
    />)
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
