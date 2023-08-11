import styles from './cloud.module.sass'
import Image from 'next/image'
import C1 from '@/assets/littleC1.svg'

export default function Cloud1() {
  return (
    <>
      <div className={`${styles.C1}`}>
        <Image src={C1} alt="cloud" width={400}></Image>
      </div>
    </>
  )
}
