import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './mazu4.module.sass'
import Button from '@/components/common/button'
import name from '@/assets/name_60.svg'
import could from '@/assets/D_could.svg'
import { Route, useRouter } from 'next/router'

const numberToChinese = (number) => {
  const chineseNums = [
    '一',
    '二',
    '三',
    '四',
    '五',
    '六',
    '七',
    '八',
    '九',
    '十',
    '十一',
    '十二',
    '十三',
    '十四',
    '十五',
    '十六',
    '十七',
    '十八',
    '十九',
    '二十',
    '二十一',
    '二十二',
    '二十三',
    '二十四',
    '二十五',
    '二十六',
    '二十七',
    '二十八',
    '二十九',
    '三十',
    '三十一',
    '三十二',
    '三十三',
    '三十四',
    '三十五',
    '三十六',
    '三十七',
    '三十八',
    '三十九',
    '四十',
    '四十一',
    '四十二',
    '四十三',
    '四十四',
    '四十五',
    '四十六',
    '四十七',
    '四十八',
    '四十九',
    '五十',
    '五十一',
    '五十二',
    '五十三',
    '五十四',
    '五十五',
    '五十六',
    '五十七',
    '五十八',
    '五十九',
    '六十',
  ]
  return chineseNums[number - 1] || number.toString()
}
export default function Mazu4() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [currentImage, setCurrentImage] = useState('')
  const [randomNumber, setRandomNumber] = useState(1) // Store the random number separately
  const [imageNumber, setImageNumber] = useState(1)

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 60) + 1
    setRandomNumber(randomNum), setImageNumber(randomNum)
  }, [])

  const handleBoxClick = () => {
    setIsFlipped(!isFlipped)
  }

  useEffect(() => {
    if (isFlipped) {
      const ansImage = `/pray/ans/ans_${randomNumber}.png`
      const timer = setTimeout(() => {
        setCurrentImage(ansImage)
      }, 300)

      return () => clearTimeout(timer)
    } else {
      const poemImage = `/pray/poem/poem_${randomNumber}.png`
      const timer = setTimeout(() => {
        setCurrentImage(poemImage)
      }, 300)

      return () => clearTimeout(timer)
    }
  }, [isFlipped, randomNumber])

  //傳到後端
  const Router = useRouter()
  const [user, setUser] = useState({
    Member_ID: '',
    Name: '籤詩' + imageNumber,
    Datetime: '',
  })

  useEffect(() => {
    setUser({
      Member_ID: '',
      Name: '籤詩' + imageNumber,
      Datetime: '',
    })
  }, [imageNumber])

  const handleSumbit = (e) => {
    e.preventDefault()
    fetch(process.env.API_SERVER + '/pray/mazu4', {
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
      Router.push('/member/amulet')
    }, 2000)
  }
  const ButtonClick = () => {
    Router.push('/Home')
  }
  return (
    <>
      <div className={styles.parent_container}>
        <div className={`${styles.flex_row}`}>
          <Image
            src={could}
            alt=""
            width="1250"
            className={`${styles.could}`}
          />
          <div className={styles.poem_container}>
            <div
              className={`${styles.box} ${isFlipped ? styles.flipped : ''}`}
              onClick={handleBoxClick}
            >
              <Image
                src={currentImage}
                alt={`Image ${imageNumber}`}
                width="300"
                height="768"
                className={styles.card}
              />
            </div>
          </div>
          <div className={`${styles.flex_col}`}>
            <div className={`${styles.title_60}`}>
              <div className={`${styles.title} mb60px`}>六十甲子籤</div>
              <Image
                src={name}
                alt=""
                width="700"
                className={`${styles.name}`}
              />
            </div>
            <div className={`${styles.nemberGroup}`}>
              <div className={`${styles.mark1}`}>[</div>
              <div className={`${styles.nemberTitle}`}>No.{imageNumber} /</div>
              {/* value={user.Name} */}
              <div className={`${styles.nember}`}>
                第{numberToChinese(imageNumber)}首
              </div>
              <div className={`${styles.mark2}`}>]</div>
            </div>
            <div className={`${styles.line}`}></div>
            <div className={`${styles.btns}`}>
              <Button text="解籤" btnColor="hot_pink" link={handleBoxClick} />
              <Button
                text="收藏"
                btnColor="hot_pink"
                type="submit"
                link={(e) => {
                  handleSumbit(e)
                }}
              />
              <Button text="回首頁" btnColor="hot_pink" link={ButtonClick} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Mazu4.getLayout = (page) => <>{page}</>
