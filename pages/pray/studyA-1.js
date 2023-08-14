import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import study from '@/assets/studyGod.svg'
import godlight from '@/assets/GodLight.svg'
import styles from './studyA-1.module.sass'
import Button from '@/components/common/button'
import star from '@/assets/Star_green.svg'
import handLeft from '@/assets/handLeft.svg'
import handRight from '@/assets/handRight.svg'
import Input from '@/components/common/inputBox'
import { Router, useRouter } from 'next/router'

export default function StudyA1() {
  const Router = useRouter()
  const [user, setUser] = useState({
    Member_ID: '',
    Name: '',
    School: '',
    Ticket_Img: '',
    Datetime: '',
  })

  const handleButtonClick = () => {
    Router.push({
      pathname: '/pray/studyA-2',
      query: { Name: user.Name, School: user.School },
    })
  }
  const changeUser = (e) => {
    setUser((old) => ({ ...old, [e.target.id]: e.target.value }))
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
      School: '松山高中',
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
              src={study}
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
        <div className={`${styles.form}`}>
          <div className={`${styles.inputAn} ${isVisible ? styles.show : ''}`}>
            <div className={`${styles.input} `}>
              <Input
                id="Name"
                name="Name"
                width="500px"
                placeholder="姓名"
                value={user.Name}
                onChange={changeUser}
              />
              <Input
                id="School"
                name="School"
                width="500px"
                placeholder="第一志願"
                value={user.School}
                onChange={changeUser}
              />
            </div>
          </div>
          <div className={`${styles.btn} ${isVisible ? styles.show : ''}`}>
            <Button
              text="上傳照片去"
              btnColor="green"
              link={handleButtonClick}
            />
          </div>
        </div>
      </div>
    </>
  )
}

StudyA1.getLayout = (page) => <>{page}</>