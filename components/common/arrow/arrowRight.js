import styles from './arrow.module.sass'
import { useSwiper } from 'swiper/react'

export default function Arrow() {
  const swiper = useSwiper()
  return (
    <>
      <div className={`${styles.arrowright}`} onClick={()=>swiper.slideNext()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="35"
          viewBox="0 0 18 32"
          fill="none"
        >
          <path
            d="M0.999512 31L15.9995 16L0.99951 1"
            stroke="#E4007E"
            stroke-width="3"
          />
        </svg>
      </div>
    </>
  )
}
