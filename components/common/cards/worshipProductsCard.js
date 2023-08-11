import styles from './WorshipProductsCard.module.sass'
import Image from 'next/image'
import { useClick } from '@/hooks/useClick'
import { useHoverIndex } from '@/hooks/useHoverIndex'
import { useEffect, useState } from 'react'

export default function WorshipProductsCard({
  pid = 21,
  src = 'worship/mazu (4).png',
  text = '紅湯圓',
  price = '45',
  pidArr = [],
  setPidArr = () => {},
}) {
  const { clickState, handleClick, setClickState } = useClick(false)
  const { hoveredIndex, handleMouseEnter, handleMouseLeave } = useHoverIndex(-1)

  const [myPidArr, setMyPidArr] = useState(pidArr)

  const foundPid = myPidArr.some((v) => Number(v) === pid)

  const removePid = (pid) => {
    const newPidArr = [...pidArr]
    const filter = newPidArr.filter((v) => {
      return v != pid
    })
    setMyPidArr(filter)
  }
  const pushPid = (pid) => {
    const newPidArr = [...pidArr, pid]
    setMyPidArr(newPidArr)
  }

  useEffect(() => {
    setPidArr(myPidArr)
  }, [myPidArr])

  return (
    <div
      role="presentation"
      className={`
      ${!foundPid && pidArr.length === 3 ? styles.noEvents : ''}
      ${hoveredIndex && !clickState ? styles.animation : styles.noHover} ${
        clickState ? styles.chose : ''
      } ${styles.container} m15px p10px`}
      onMouseEnter={() => {
        foundPid ? handleMouseEnter(-1) : handleMouseEnter(1)
      }}
      onMouseLeave={() => {
        handleMouseLeave()
      }}
      onClick={() => {
        handleClick()

        if (foundPid) {
          removePid(pid)
        } else if (pidArr.length < 3) {
          pushPid(pid)
        }
      }}
    >
      {/* 圖片 */}
      <div className={`${styles.image} mb10px pt5px pb5px`}>
        <Image
          src={`/${src}`}
          alt="image"
          width={150}
          height={150}
          className="shadow"
        />
      </div>
      <div className={`${styles.detailContainer}`}>
        <div className={`${styles.text} fwBold fs18px p5px`}> {text}</div>
        <div className={`${styles.price} fwBold fs16px p5px`}>${price}</div>
      </div>
    </div>
  )
}
