import styles from './alert.module.sass'
import variables from '@/styles/_variables.module.sass'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Modal from 'react-modal'

// gif
import correct from '@/assets/O.gif'
import wrong from '@/assets/X.gif'

export default function Alert({
  isOpen = false,
  text = '',
  status = 'correct',
  setIsOpen = () => {},
}) {
  const [timeout, setTimeOut] = useState(false)
  const [isOpenChild, setIsOpenChild] = useState(isOpen)
  // const [gifSrc, setGifSrc] = useState(status === 'correct' ? correct : wrong)

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeOut(true)
      // setGifSrc(status === 'correct' ? correct : wrong)

      setIsOpenChild(false)
    }, 1500) // 3000毫秒 = 3秒

    return () => {
      clearTimeout(timer) // 清除定时器，以防组件卸载时触发
    }
  }, [])

  useEffect(() => {
    setIsOpen(isOpenChild)
  }, [isOpenChild])

  return (
    <Modal
      isOpen={!timeout ? isOpenChild : !timeout}
      contentLabel="correct"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // 背景顏色透明度
        },
        content: {
          maxWidth: '500px', // 調整最大寬度
          maxHeight: '500px', // 調整最大高度
          margin: 'auto', // 水平居中
          background: variables['bgColor'],
        },
      }}
      className={`${styles.modal}`}
    >
      {/* <div
        role="presentation"
        className={`${styles.close} me25px fs28px p10px`}
        onClick={() => {
          setTimeOut(true)
        }}
      >
        X
      </div> */}

      <div className={`${styles.icon} mt50px`}>
        <Image
          key={new Date().getTime().toString()}
          src={status === 'correct' ? correct : wrong}
          alt="alert"
          width={300}
          className={`${styles.image}`}
        />
      </div>
      <div className={`${styles.text} fwBold fs30px mt50px`}>{text}</div>
    </Modal>
  )
}
