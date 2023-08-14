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
import Gossip from '@/pages/forum/index'
import Pray from '@/pages/pray/index'
import Buy from '@/pages/shop/index'
import Worship from '@/pages/worship/index'
import Singnblock from '@/components/common/signinblock'

export default function Pilgrimage() {
  const [modalIsOpen, setIsOpen] = React.useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }
  const [modalIsOpen2, setIsOpen2] = React.useState(false)

  function openModal2() {
    setIsOpen2(true)
  }

  function closeModal2() {
    setIsOpen2(false)
  }
  const [modalIsOpen3, setIsOpen3] = React.useState(false)

  function openModal3() {
    setIsOpen3(true)
  }

  function closeModal3() {
    setIsOpen3(false)
  }
  const [modalIsOpen4, setIsOpen4] = React.useState(false)

  function openModal4() {
    setIsOpen4(true)
  }

  function closeModal4() {
    setIsOpen4(false)
  }
  const [modalIsOpen5, setIsOpen5] = React.useState(false)

  function openModal5() {
    setIsOpen5(true)
  }

  function closeModal5() {
    setIsOpen5(false)
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
      <div className={`${styles.signin}`}>
        <Singnblock />
      </div>
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
      <button className={`${styles.bubble2}`} onClick={openModal2}>
        <div className={`${styles.text}`}>好熱鬧啊，快來一起聊</div>
      </button>
      <Modal
        isOpen={modalIsOpen2}
        onClose={closeModal2}
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
          <div
            style={{
              transform: 'scale(1.01)',
              transformOrigin: 'top left',
              height: '3600px',
            }}
          >
            <Gossip />
          </div>
        </div>
      </Modal>
      <button className={`${styles.bubble3}`} onClick={openModal3}>
        <div className={`${styles.text}`}>汪咿～！</div>
      </button>
      <Modal
        isOpen={modalIsOpen3}
        onClose={closeModal3}
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
          <div
            style={{
              transform: 'scale(1)',
              transformOrigin: 'top left',
            }}
          >
            <Pray />
          </div>
        </div>
      </Modal>
      <button className={`${styles.bubble4}`} onClick={openModal4}>
        <div className={`${styles.text}`}>心誠則靈</div>
      </button>
      <Modal
        isOpen={modalIsOpen4}
        onClose={closeModal4}
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
          <div
            style={{
              transform: 'scale(1)',
              transformOrigin: 'top left',
            }}
          >
            <Worship />
          </div>
        </div>
      </Modal>
      <button className={`${styles.bubble5}`} onClick={openModal5}>
        <div className={`${styles.text}`}>供品底加買啦～！</div>
      </button>
      <Modal
        isOpen={modalIsOpen5}
        onClose={closeModal5}
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
          <div
            style={{
              transform: 'scale(1)',
              transformOrigin: 'top left',
            }}
          ></div>
          <Buy />
        </div>
      </Modal>
    </>
  )
}

Pilgrimage.getLayout = (page) => <>{page}</>
