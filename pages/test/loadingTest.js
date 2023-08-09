import styles from './loading.module.sass'
import LoadingGif from '@/assets/loading.gif'
import Image from 'next/image'

export default function Loading() {
  return (
    <div className={`w100`}>
      <div className={`${styles.container} `}>
        <Image
          src={LoadingGif}
          alt="loading..."
          className={`${styles.image}`}
        />
      </div>
    </div>
  )
}
