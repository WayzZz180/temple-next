import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import mazu from '@/assets/mazuGod.svg'
import godlight from '@/assets/GodLight.svg'
import styles from './mazu1.module.sass'
import Button from '@/components/common/button'
import star from '@/assets/Star_pink.svg'
import handLeft from '@/assets/handLeft.svg'
import handRight from '@/assets/handRight.svg'
import Input from '@/components/common/inputBox'

export default function Mazu1() {
  const [name, setName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [address, setAddress] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [sumbit, setSumbit] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.flex_row}`}>
          <div className={`${styles.leftAn} ${isVisible ? styles.show : ''}`}>
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
        {/* <form id="personal" onSumbit={handleSumbit}> */}
          <div className={`${styles.inputAn} ${isVisible ? styles.show : ''}`}>
            <div className={`${styles.input} `}>
              <Input
                name="name"
                width="230px"
                placeholder="姓名"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                name="birthday"
                width="260px"
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              />
              <Input
                name="address"
                width="485px"
                placeholder="現居地址"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className={`${styles.btn} ${isVisible ? styles.show : ''}`}>
            <Button text="擲筊" btnColor="brown" type="submit" />
          </div>
        {/* </form> */}
      </div>
    </>
  )
}

Mazu1.getLayout = (page) => <>{page}</>
