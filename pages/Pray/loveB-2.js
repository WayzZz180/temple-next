import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './loveB-2.module.sass'
import Button from '@/components/common/button'
import Light from '@/components/common/pray_light/light_row'
import Light2 from '@/components/common/pray_light/light_row2'
import love from '@/assets/loveGod.svg'
import { Route, useRouter } from 'next/router'

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']


export default function Love2() {
  const Router = useRouter()
  const [user, setUser] = useState({
    Member_ID: '',
    Tower_ID: '',
    All_Light: '',
    LocationX: '',
    LocationY: '',
    Datetime:'',
  })
  console.log(user)
//   const [index,setIndex]=useState({})
// console.log(index)
  // const changeUser = (e) => {
  //   setUser((old) => ({ ...old, LocationX: text , LocationY: indexY}))
  // }

  const handleSumbit = (e) => {
    e.preventDefault()

    fetch(process.env.API_SERVER + '/pray/loveB-2', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((result) => {
        console.log(result)
      })
    setTimeout(() => {
      Router.push('/pray/loveB-3')
    }, 2000)
  }
  return (
    <>
      <div className={styles.parent_container}>
        <div className={styles.flex_row}>
          <div className={styles.flex_col}>
          {letters.map((letter,i) => (
              <Light key={letter} text={letter} indexY={letters[i]} setUser={setUser}/>
            ))}
            <div className={`${styles.text2}`}>正面</div>
            <div  className={`${styles.line}`}></div>
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
            <div className={`${styles.text}`}>點選欲點燈的位子，桃色為不可選</div>
            <Button text="選好了" btnColor="hot_pink" link={(e) => {
                handleSumbit(e)
              }}/>
          </div>
            <div className={styles.flex_col}>
            {letters.map((letter,i) => (
              <Light2 key={letter} text={letter} indexY={letters[i]}  setUser={setUser}/>
            ))}
            <div className={`${styles.text2}`}>背面</div>
            <div  className={`${styles.line}`}></div>
          </div>
        </div>
      </div>
    </>
  )
}

Love2.getLayout = (page) => <>{page}</>
