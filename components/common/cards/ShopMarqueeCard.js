import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './ShopMarqueeCard.module.sass'
import { useRouter } from 'next/router'

// 根據recommend顯示圖片
export default function ShopMarqueeCard({
  name = 'name',
  price = 100,
  src = '',
  pid = 1,
}) {
  const router = useRouter()
  const browse = () => {
    // 瀏覽量加一
    fetch(`${process.env.API_SERVER}/shop/${router.query.category}/${pid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((data) => {})
  }
  return (
    <div
      role="presentation"
      onClick={() => {
        browse()
      }}
    >
      <Link href={`/shop/${router.query.category}/${pid}`} className="link">
        <div className="m30px">
          <div className={styles.flex}>
            <div className={`${styles.container} ${styles.flex}`}>
              <Image
                src={src}
                alt=""
                width={140}
                height={140}
                className={`${styles.image} shadow`}
              ></Image>
            </div>
            <div
              className={`${styles.textContainer} p10px mt40px fs18px fwBolder`}
            >
              {name}
            </div>
            <div className={'pt10px pb10px fs20px fwBolder'}>${price}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}
