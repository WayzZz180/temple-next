import styles from './house.module.sass'
import Image from 'next/image'
import house from '@/assets/house.svg'

export default function House() {
  return (
    <>
    <div className={`${styles.container}`}>
    <div className={`${styles.titleNumber_1}`}>1</div>
    <div className={`${styles.titleNumber_2}`}>1</div>
    <div className={`${styles.question}`}>三月瘋媽祖，常在電視上看到一群人，排成一長條人龍，跪在地上，等待媽祖神轎經 過時，從其底下鑽過，稱為「鑽神轎」。請問「鑽神轎」這個動作，從文化層面具有何 種意義？</div>
      <Image
        src={house}
        alt=""
        width="1540"
        className={`${styles.house}`}
      ></Image>
      </div>
    </>
  )
}
