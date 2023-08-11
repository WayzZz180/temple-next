import styles from './WorshipGod.module.sass'
import React from 'react'
import Image from 'next/image'

// hooks
import { useState, useEffect } from 'react'
import { useClick } from '@/hooks/useClick.js'
import { useRouter } from 'next/router'

// svg
import Arched from '@/assets/arched.svg'
import BackLight from '@/assets/worshipBackLight.svg'
import Couplet from '@/assets/worshipCouplet.svg'
import Lantern from '@/assets/worshipLantern.svg'

export default function WorshipGod({
  text = '媽祖',
  pic = 'mazuGod',
  wordLeft = '母恩似海共霑恩',
  wordRight = '聖德如天同景仰',
  setGod = () => {},
  foundGod = false,
  godState = false,
}) {
  const router = useRouter()
  const src = '../../' + pic + '.svg'

  const { clickState, handleClick, setClickState } = useClick(foundGod)

  const [myGod, setMyGod] = useState('')
  const [mygodState, setMyGodState] = useState(godState)
  useEffect(() => {
    if (localStorage.getItem('reservation')) {
      setMyGod(JSON.parse(localStorage.getItem('reservation')).god)
      if (text === JSON.parse(localStorage.getItem('reservation')).god) {
        setClickState(true)
      }
    }
  }, [router.query])

  useEffect(() => {
    mygodState ? setClickState(true) : ''
  }, [mygodState])

  useEffect(() => {
    if (!mygodState) {
      clickState != foundGod && setClickState(foundGod)
    }
  }, [foundGod])

  useEffect(() => {
    if (text != myGod) {
      setMyGodState(false)
    }
    if (!mygodState) {
      clickState && setGod(myGod)
    }
  }, [clickState])

  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.width}`}>
          <div className={`${styles.side}`} style={{ paddingRight: '30%' }}>
            <Image src={Lantern} alt="lantern" />
            <div className={`${styles.couplet} mt15px`}>
              <Image src={Couplet} alt="couplet" />
              <div className={`${styles.word} fwBold`}>{wordLeft}</div>
            </div>
          </div>
          {/* whole god  */}
          <div className={`${styles.relative}`}>
            {/* 背後轉的光 */}
            <div className={`${styles.BackLight}`}>
              <Image src={BackLight} alt="light" />
            </div>
            {/* god+arched */}
            <div
              role="presentation"
              className={`${styles.godContainer}`}
              onClick={() => {
                setClickState(true)
                setMyGod(text)
              }}
            >
              {/* God */}
              <Image
                src={`${src}`}
                alt=""
                width="400"
                height="530"
                className={`${styles.img} ${clickState ? styles.chose : ''}`}
              />
              {/* 拱門 */}
              <Image src={Arched} alt="" width="430" />
            </div>
            <div
              className={`${styles.title} ${
                clickState ? styles.titleChose : ''
              }`}
            >
              {text}
            </div>
            {/* god name */}
          </div>
          <div className={`${styles.side}`} style={{ paddingLeft: '30%' }}>
            <Image src={Lantern} alt="lantern" />
            <div className={`${styles.couplet} mt15px`}>
              <Image src={Couplet} alt="couplet" />
              <div className={`${styles.word} fwBold`}>{wordRight}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
