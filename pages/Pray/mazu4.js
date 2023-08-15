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
const numberToChinese2 = (number) => {
  const chineseNums2 = [
    '第一首 - 甲子籤',
    '第二首 - 乙丑籤',
    '第三首 - 丙寅籤',
    '第四首 - 丁卯籤',
    '第五首 - 戊辰籤',
    '第六首 - 己巳籤',
    '第七首 - 庚午籤',
    '第八首 - 辛未籤',
    '第九首 - 壬申籤',
    '第十首 - 癸酉籤',
    '第十一首 - 甲戌籤',
    '第十二首 - 乙亥籤',
    '第十三首 - 丙子籤',
    '第十四首 - 丁丑籤',
    '第十五首 - 戊寅籤',
    '第十六首 - 己卯籤',
    '第十七首 - 庚辰籤',
    '第十八首 - 辛巳籤',
    '第十九首 - 壬午籤',
    '第二十首 - 癸未籤',
    '第二十一首 - 甲申籤',
    '第二十二首 - 乙酉籤',
    '第二十三首 - 丙戌籤',
    '第二十四首 - 丁亥籤',
    '第二十五首 - 戊子籤',
    '第二十六首 - 己丑籤',
    '第二十七首 - 庚寅籤',
    '第二十八首 - 辛卯籤',
    '第二十九首 - 壬辰籤',
    '第三十首 - 癸巳籤',
    '第三十一首 - 甲午籤',
    '第三十二首 - 乙未籤',
    '第三十三首 - 丙申籤',
    '第三十四首 - 丁酉籤',
    '第三十五首 - 戊戌籤',
    '第三十六首 - 己亥籤',
    '第三十七首 - 庚子籤',
    '第三十八首 - 辛丑籤',
    '第三十九首 - 壬寅籤',
    '第四十首 - 癸卯籤',
    '第四十一首 - 甲辰籤',
    '第四十二首 - 乙巳籤',
    '第四十三首 - 丙午籤',
    '第四十四首 - 丁未籤',
    '第四十五首 - 戊申籤',
    '第四十六首 - 己酉籤',
    '第四十七首 - 庚戌籤',
    '第四十八首 - 辛亥籤',
    '第四十九首 - 壬子籤',
    '第五十首 - 癸丑籤',
    '第五十一首 - 甲寅籤',
    '第五十二首 - 乙卯籤',
    '第五十三首 - 丙辰籤',
    '第五十四首 - 丁巳籤',
    '第五十五首 - 戊午籤',
    '第五十六首 - 己未籤',
    '第五十七首 - 庚申籤',
    '第五十八首 - 辛酉籤',
    '第五十九首 - 壬戌籤',
    '第六十首 - 癸亥籤',
  ]
  return chineseNums2[number - 1] || number.toString()
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
    Name: '籤詩' + numberToChinese2(imageNumber),
    Datetime: '',
  })

  useEffect(() => {
    setUser({
      Member_ID: '',
      Name: '籤詩' + numberToChinese2(imageNumber),
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
    Router.push('/pray')
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
              <Button text="其他神明" btnColor="hot_pink" link={ButtonClick} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Mazu4.getLayout = (page) => <>{page}</>
