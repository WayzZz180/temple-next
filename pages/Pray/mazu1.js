import React, { useState, useEffect } from 'react'
import Image from 'next/image'
// import { Link } from 'react-router-dom'
import mazu from '@/assets/mazuGod.svg'
import godlight from '@/assets/GodLight.svg'
import styles from './mazu1.module.sass'
import Button from '@/components/common/button'
import star from '@/assets/Star_pink.svg'
import handLeft from '@/assets/handLeft.svg'
import handRight from '@/assets/handRight.svg'
import Input from '@/components/common/inputBox'
import { Route, useRouter } from 'next/router'

export default function Mazu1() {
  const Router = useRouter()
  const [user, setUser] = useState({
    Member_ID: '',
    Name: '',
    Birthday: '',
    Address: '',
  })
  const changeUser = (e) => {
    setUser((old) => ({ ...old, [e.target.id]: e.target.value }))
  }

  const handleSumbit = (e) => {
    e.preventDefault()
    const postData = user
    fetch(process.env.API_SERVER + '/pray/mazu1', {
      method: 'POST',
      body: JSON.stringify({ requestData: postData }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((result) => {
        console.log(result)
      })
    setTimeout(() => {
      Router.push('/pray/mazu2')
    }, 2000)
  }
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handlePresetClick = () => {
    setUser({
      ...user,
      Name: '洪郁雯',
      Birthday: '2000-01-21',
      Address: '台南市東區東門路三段226巷66號',
    })
  }
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.flex_row}`}>
        <div
            role="presentation"
            className={`${styles.leftAn} ${isVisible ? styles.show : ''}`}
            onClick={handlePresetClick}
          >
            <Image
              src={handLeft}
              alt=""
              width="300"
              className={`${styles.left} `}
            ></Image>
          </div>
          <div className={`${styles.god}`}>
            <div className={`${styles.starsA} mb380px`}>
              <Image
                src={star}
                alt=""
                width="42"
                className={`${styles.star2} mb140px`}
              ></Image>
              <Image
                src={star}
                alt=""
                width="70"
                className={`${styles.star1}`}
              ></Image>
            </div>
            <Image
              src={mazu}
              alt=""
              width="930"
              className={`${styles.mazu}`}
            ></Image>
            <div className={`${styles.divlight}`}>
              <Image
                src={godlight}
                alt=""
                width="900"
                className={`${styles.light}`}
              ></Image>
            </div>
            <div className={`${styles.starsB} mb380px`}>
              <Image
                src={star}
                alt=""
                width="70"
                className={`${styles.star1}`}
              ></Image>
              <Image
                src={star}
                alt=""
                width="42"
                className={`${styles.star2} mb140px`}
              ></Image>
            </div>
            <div
              className={`${styles.rightAn} ${isVisible ? styles.show : ''}`}
            >
              <Image
                src={handRight}
                alt=""
                width="300"
                className={`${styles.right}`}
              ></Image>
            </div>
          </div>
        </div>
        <form className={`${styles.form}`}>
          <div className={`${styles.inputAn} ${isVisible ? styles.show : ''}`}>
            <div className={`${styles.input} `}>
              <Input
                id="Name"
                name="Name"
                width="230px"
                placeholder="姓名"
                value={user.Name}
                onChange={changeUser}
              />
              <Input
                id="Birthday"
                name="Birthday"
                width="260px"
                type="date"
                value={user.Birthday}
                onChange={changeUser}
              />
              <Input
                id="Address"
                name="Address"
                width="485px"
                placeholder="現居地址"
                value={user.Address}
                onChange={changeUser}
              />
            </div>
          </div>
          <div className={`${styles.btn} ${isVisible ? styles.show : ''}`}>
            <Button
              text="擲筊"
              btnColor="brown"
              type="submit"
              link={(e) => {
                handleSumbit(e)
              }}
            />
          </div>
        </form>
      </div>
    </>
  )
}

Mazu1.getLayout = (page) => <>{page}</>