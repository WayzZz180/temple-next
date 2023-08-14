import styles from './loading.module.sass'
import loggingOut from '@/assets/loggingOut.gif'
import Image from 'next/image'

export default function LoggingOut() {
  return (
    <div className={`w100`}>
      <div className={`${styles.container} `}>
        <Image
          src={loggingOut}
          alt="loading..."
          className={`${styles.image}`}
        />
      </div>
    </div>
  )
}
