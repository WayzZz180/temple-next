import styles from './arrow.module.sass'
import { useSwiper } from 'swiper/react'

export default function Arrow({}) {
  const swiper = useSwiper()
  return (
    <>
      <div className={`${styles.arrowleft}`} onClick={()=>swiper.slidePrev()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="35"
          viewBox="0 0 18 32"
          fill="none"
        >
          <path
            d="M16.9995 1L1.99951 16L16.9995 31"
            stroke="#E4007E"
            stroke-width="3"
          />
        </svg>
      </div>
    </>
  )
}
