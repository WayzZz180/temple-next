import styles from './cloud.module.sass'
import Image from 'next/image'
import C2 from '@/assets/littleC2.svg'

export default function Cloud2() {
  return (
    <>
      <div className={`${styles.C2}`}>
        <Image src={C2} alt="cloud" width={400}></Image>
      </div>
    </>
  )
}
