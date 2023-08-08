import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './loveB-2.module.sass'
import Button from '@/components/common/button'
import Light_Row from '@/components/common/pray_light/light_row'
import Light_Row2 from '@/components/common/pray_light/light_row2'
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
  useEffect(() => {
    const towerId = Router.query.towerId;
    console.log('towerId:', towerId); 
    if (towerId) {
      setUser((prevUser) => ({ ...prevUser, Tower_ID: towerId }));
    }
  }, [Router.query.towerId]);
//   const [index,setIndex]=useState({})
// console.log(index)
  // const changeUser = (e) => {
  //   setUser((old) => ({ ...old, LocationX: text , LocationY: indexY}))
  // }
  const [selectedColumnRow1, setSelectedColumnRow1] = useState(null);
  const [selectedColumnRow2, setSelectedColumnRow2] = useState(null);

  const handleColumnToggleRow1 = (column) => {
    setSelectedColumnRow1((prev) => (prev === column ? null : column));
    setSelectedColumnRow2(null);
  };

  const handleColumnToggleRow2 = (column) => {
    setSelectedColumnRow2((prev) => (prev === column ? null : column));
    setSelectedColumnRow1(null);
  };

  const [data, setData] = useState({
    redirect: '',
    totalRows: 0,
    perPage: 8,
    totalPages: 0,
    page: 1,
    rows: [],
  })

  useEffect(() => {
    fetch(process.env.API_SERVER + '/pray/loveB-2', {
      method: 'GET',
    })
      .then((r) => r.json())
      .then((data) => {
        console.log('API 響應:', data)
        setData(data)
      })
  }, [])

  console.log('data.rows:', data.rows)
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
          {letters.map((letter, i) => (
              <Light_Row
              key={letter}
                indexY={letter}
                user={user}
                setUser={setUser}
                selectedColumn={selectedColumnRow1}
                onColumnToggle={handleColumnToggleRow1}
                rows={data.rows}
              />
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
            {letters.map((letter, i) => (
              <Light_Row2
               key={letter}
                indexY={letter}
                user={user}
                setUser={setUser}
                selectedColumn={selectedColumnRow2}
                onColumnToggle={handleColumnToggleRow2}
                rows={data.rows}
              />
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
