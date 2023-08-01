import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './loveB-2.module.sass'
import Button from '@/components/common/button'
import Light from '@/components/common/pray_light/light_row'
import Light2 from '@/components/common/pray_light/light_row2'
import love from '@/assets/loveGod.svg'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export default function Love2() {
  const [data, setData] = useState({
    redirect : '',
    totalRows :0, 
    perPage :8, 
    totalPages :0, 
    page :1 , 
    rows :[]
  })
  const [selectedLetters, setSelectedLetters] = useState({})
  const [requestData, setRequestData] = useState(null) 

  useEffect(() => {
    fetch(process.env.API_SERVER + '/pray/loveB-2', {
      method: 'POST',
      body: JSON.stringify({ requestData: 'Datetime' }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((data) => {
        setData(data)
      })
  }, [])

  const handleLetterClick = (letter) => {
    setSelectedLetters((prevSelected) => ({
      ...prevSelected,
      [letter]: true,
    }))
  }

  const handleSelectDone = () => {
    // 將已點選的字母組成陣列，準備傳送到後端
    const selectedLettersArray = Object.keys(selectedLetters).filter(
      (letter) => selectedLetters[letter]
    )

    // 準備要傳送的資料
    const requestData = { selectedLetters: selectedLettersArray }

    // 呼叫後端 API 儲存資料
    fetch(process.env.API_SERVER + '/Pray/loveB-2/saveSelectedLetters', {
      method: 'POST',
      body: JSON.stringify(requestData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((data) => {
        console.log('資料已儲存至資料庫:', data)
        // 可以在此處更新資料或顯示訊息等
      })
  }

  const shouldUseHotPink = (letter) => {
    if (data[letter] !== null && selectedLetters[letter]) {
      return true
    }
    return false
  }

  return (
    <>
      <div className={styles.parent_container}>
        <div className={styles.flex_row}>
          <div className={styles.flex_col}>
            {letters.split('').map((letter) => (
              <Light
                key={letter}
                text={letter}
                className={shouldUseHotPink(letter) ? 'hot_pink' : ''}
                onClick={() => handleLetterClick(letter)}
              />
            ))}
            <div className={`${styles.text2}`}>正面</div>
            <div className={`${styles.line}`}></div>
          </div>
          <div className={`${styles.flex_col}`}>
            <div className={`${styles.flex_col2}`}>
              <div>姻</div>
              <div>緣</div>
              <div>燈</div>
            </div>
            <Image
              src={love}
              alt=""
              width="340"
              className={`${styles.love}`}
            ></Image>
            <div className={`${styles.text}`}>
              點選欲點燈的位子，桃色為不可選
            </div>
            {/* 按下按鈕時呼叫 handleSelectDone 函式 */}
            <Button
              text="選好了"
              btnColor="hot_pink"
              onClick={handleSelectDone}
            />
          </div>
          <div className={styles.flex_col}>
            {letters.split('').map((letter) => (
              <Light2
                key={letter}
                text={letter}
                className={shouldUseHotPink(letter) ? 'hot_pink' : ''}
                onClick={() => handleLetterClick(letter)}
              />
            ))}
            <div className={`${styles.text2}`}>背面</div>
            <div className={`${styles.line}`}></div>
          </div>
        </div>
      </div>
    </>
  )
}

Love2.getLayout = (page) => <>{page}</>
