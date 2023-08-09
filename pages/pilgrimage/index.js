import React, { useState, useEffect, useRef } from 'react'
import Modal from 'react-modal'
import Image from 'next/image'
import styles from './pilgri.module.sass'
import Teams from './teams'
import Bg from './backGround'
import Sh from '@/assets/swingHand.gif'
import jump from '@/assets/jump.gif'
import flag from '@/assets/flag.gif'
import dog from '@/assets/dog_in.gif'
import Quiz from '@/pages/pilgrimage/onlineQuiz'

export default function Pilgrimage() {
  const [teamsPosition, setTeamsPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateTeamsPosition = () => {
      const container = document.querySelector('.teamscontainer')
      if (container) {
        const { width, height } = container.getBoundingClientRect()
        const x = window.innerWidth / 2 - width / 2
        const y = window.innerHeight / 2 - height / 2 + window.scrollY
        setTeamsPosition({ x, y })
      }
    }

    updateTeamsPosition()

    window.addEventListener('scroll', updateTeamsPosition)
    window.addEventListener('resize', updateTeamsPosition)

    return () => {
      window.removeEventListener('scroll', updateTeamsPosition)
      window.removeEventListener('resize', updateTeamsPosition)
    }
  }, [])
  const [modalIsOpen, setIsOpen] = React.useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '1150px', // 調整最大寬度
      maxHeight: '800px', // 調整最大高度
      margin: 'auto', // 水平居中
      background: '#EBE9DD',
    },
  }
  return (
    <>
      <Bg />
      <Image id="" alt="" src={Sh} className={`${styles.sh}`} />
      <Image id="" alt="" src={jump} className={`${styles.jump}`} />
      <Image id="" alt="" src={flag} className={`${styles.flag}`} />
      <Image id="" alt="" src={dog} className={`${styles.dog}`} />
      <button className={`${styles.bubble}`} onClick={openModal}>
        <div className={`${styles.text}`}>來做測驗，拿小禮物～</div>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <Quiz />
        </div>
      </Modal>
      <button className={`${styles.bubble2}`}>
        <div className={`${styles.text}`}>好熱鬧啊，快來一起聊</div>
      </button>
      <button className={`${styles.bubble3}`}>
        <div className={`${styles.text}`}>汪咿～！</div>
      </button>
      <button className={`${styles.bubble4}`}>
        <div className={`${styles.text}`}>心誠則靈</div>
      </button>
      <button className={`${styles.bubble5}`}>
        <div className={`${styles.text}`}>供品底加買啦～！</div>
      </button>
      <Teams />
      {/* <div
        className={`${styles.teamscontainer}`}
        style={{ left: teamsPosition.x, top: teamsPosition.y }}
      > */}

      {/* </div> */}
    </>
  )
}

Pilgrimage.getLayout = (page) => <>{page}</>
