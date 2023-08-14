import React, { useState, useEffect } from 'react'
import styles from './signOut.module.sass'
import Image from 'next/image'
import { useContext } from 'react'
import AuthContext from '@/contexts/AuthContext'
import Head from 'next/head'
// svg
import nav from '@/assets/nav.svg'
import foo_dog_left from '@/assets/foo_dog_left.svg'
import foo_dog_right from '@/assets/foo_dog_right.svg'
import Temple from '@/components/common/temple'
import dog from '@/assets/dog_out.gif'
import pink_star from '@/assets/Green_Star.svg'
import lighting from '@/assets/green_lighting.svg'
import signIn from '@/assets/sing_out.svg'

// components
import Title from '@/components/common/title'
import God from '@/components/common/cards/HomeGod'
import Online from '@/components/common/cards/HomeOnline'
import Pocket from '@/components/common/cards/HomePocket'
import Job from '@/components/common/cards/HomeJob'
import HomeCarousels from '@/components/common/carousel/HomeCarousels'
import HomeDoor from '@/components/common/cards/HomeDoor'
import HomeDoor2 from '@/components/common/cards/HomeDoor2'
import { useRouter } from 'next/router'

export default function Home() {
  const Router = useRouter()
  const [isClicked, setIsClicked] = useState(false)
  const { auth, setAuth, logout } = useContext(AuthContext)

  const handleClick = () => {
    setIsClicked(true)
    setTimeout(() => {
      setIsClicked(false)
      logout()
      Router.push('/')
    }, 6500)

    setTimeout(() => {
      Router.push('/')
      logout()
    }, 4500)

    // 隐藏 HomeDoor2
    setTimeout(() => {
      setIsClicked(false)
    }, 5000) // 5 seconds
  }
  const mazu = () => {
    Router.push('/pray/mazu1')
  }

  const love = () => {
    Router.push('/pray/loveA-1')
  }

  const study = () => {
    Router.push('/pray/studyA-1')
  }
  return (
    <>
      <Head>
        <title>錦囊廟祭</title>
      </Head>
      {/* section1 */}
      <div className={`${styles.container}`}>
        <div className={`${styles.background}`}>
          <div className={`${styles.place}`}>
            <div className={`${styles.floor}`}>
              <Image src={nav} width={1990} alt="nav" />
            </div>
            <div className={styles.flex_row}>
              <Image
                src={foo_dog_left}
                width={250}
                alt="foo_dog_left"
                className={`${styles.right}`}
              />
              <Temple />
              <div className={`${styles.position}`}>
                {/* dog */}
                <div className={`${styles.dog}`}>
                  <Image src={dog} width={350} alt="dog" />
                </div>
                {/* lighting */}
                <div className={`${styles.lighting}`}>
                  <Image src={lighting} width={25} alt="lighting" />
                </div>
                {/* lighting */}
                <div className={`${styles.light_div}`}>
                  <div className={`${styles.lighting2}`}>
                    <Image src={lighting} width={25} alt="lighting" />
                  </div>
                </div>
              </div>
              <Image
                src={foo_dog_right}
                width={250}
                alt="foo_dog_right"
                className={`${styles.left}`}
              />
            </div>
          </div>
        </div>
        <div className={`${styles.position}`}>
          <div className={`${styles.signIn}`}>
            <div
              role="presentation"
              className={`${styles.signInBlock}`}
              onClick={handleClick}
            >
              {/* signin star */}
              <div className={`${styles.pinkStar}`}>
                <Image src={pink_star} width={40} alt="star" />
              </div>
              {/* sign in word */}
              <div className={``}>
                <Image src={signIn} width={30} alt="signIn" />
              </div>
            </div>
            <div
              className={`${styles.HomeDoor} ${
                isClicked ? styles.HomeDoorclick : ''
              }`}
            >
              <HomeDoor />
            </div>
            <div
              className={`${styles.signInDoor} ${
                isClicked ? styles.signInDoorclick : ''
              }`}
            >
              <div className={`${styles.HomeDoor2}`}>
                <HomeDoor2 />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section2 */}
      <Title
        text="供品套組精選"
        text2="OFFERING SELECTION SET"
        lineColor="hot_pink"
      />
      <HomeCarousels />

      {/* section3 */}
      <Title
        text="求神問卜"
        text2="INQUIRING OF THE DIVINE"
        lineColor="green"
      />
      <div className={styles.flex_row2}>
        <God text1="媽祖" text2="求籤" pic="MazuGod" link={mazu} />
        <God text1="月老" text2="求紅線" link={love} />
        <God text1="文昌" text2="點學業燈" pic="StudyGod" link={study} />
      </div>
      {/* section4 */}
      <Title text="遶境online" text2="PILGRIMAGE ONLINE" lineColor="green" />
      <div>
        <Online />
      </div>
      {/* section5 */}
      <Title text="錦囊小知識" text2="POCKET TRIVIA" lineColor="hot_pink" />
      <div>
        <Pocket />
      </div>
      <div className="mt60px">
        <Title text="加入我們" text2="JOB ADVERTISEMENT" lineColor="hot_pink" />
      </div>
      <Job />
    </>
  )
}
