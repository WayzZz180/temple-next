import React, { useState, useEffect, useRef } from 'react'
import Modal from '@/components/common/Modal/DialogWrapper'
import Modal2 from '@/components/common/Modal/DialogWrapper2'
import Image from 'next/image'
import styles from './pilgri.module.sass'
import Sh from '@/assets/swingHand.gif'
import jump from '@/assets/jump.gif'
import flag from '@/assets/flag.gif'
import dog from '@/assets/dog_in.gif'
import Quiz from '@/pages/pilgrimage/onlineQuiz'
import Gossip from '@/pages/forum/forumgossip'

export default function Pilgrimage() {
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
    },
  }
  return (
    <>
      <Image id="" alt="" src={Sh} className={`${styles.sh}`} />
      <Image id="" alt="" src={jump} className={`${styles.jump}`} />
      <Image id="" alt="" src={flag} className={`${styles.flag}`} />
      <Image id="" alt="" src={dog} className={`${styles.dog}`} />
      <button className={`${styles.bubble}`} onClick={openModal}>
        <div className={`${styles.text}`}>來做測驗，拿小禮物～</div>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          className={`${styles.modal}`}
          style={{
            width: '100%',
            height: '100%',
            overflow: 'auto',
            transform: 'scale(1)',
          }}
        >
          <Quiz />
        </div>
      </Modal>
      <button className={`${styles.bubble2}`} onClick={openModal}>
        <div className={`${styles.text}`}>好熱鬧啊，快來一起聊</div>
      </button>
      <Modal2
        isOpen={modalIsOpen}
        onClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          className={`${styles.modal}`}
          style={{
            width: '100%',
            height: '100%',
            overflow: 'auto',
            transform: 'scale(1)',
          }}
        >
          <Gossip />
        </div>
      </Modal2>
      <button className={`${styles.bubble3}`}>
        <div className={`${styles.text}`}>汪咿～！</div>
      </button>
      <button className={`${styles.bubble4}`}>
        <div className={`${styles.text}`}>心誠則靈</div>
      </button>
      <button className={`${styles.bubble5}`}>
        <div className={`${styles.text}`}>供品底加買啦～！</div>
      </button>
    </>
  )
}

Pilgrimage.getLayout = (page) => <>{page}</>
