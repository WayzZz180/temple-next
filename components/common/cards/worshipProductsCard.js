import styles from './worshipProductsCard.module.sass'
import Image from 'next/image'
import { useClick } from '@/hooks/useClick'
import { useHoverIndex } from '@/hooks/useHoverIndex'

export default function WorshipProductsCard({
  src = 'worship/mazu (4).png',
  text = '紅湯圓',
  price = '45',
}) {
  const { clickState, handleClick, setClickState } = useClick(false)
  const { hoveredIndex, handleMouseEnter, handleMouseLeave } = useHoverIndex(-1)
  return (
    <div
      role="presentation"
      className={`${hoveredIndex && !clickState ? styles.animation : ''} ${
        clickState ? styles.chose : ''
      } ${styles.container} m15px p10px`}
      onMouseEnter={() => {
        handleMouseEnter(1)
      }}
      onMouseLeave={() => {
        handleMouseLeave()
      }}
      onClick={() => {
        handleClick()
      }}
    >
      {/* 圖片 */}
      <div className={`${styles.image} mb10px`}>
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
