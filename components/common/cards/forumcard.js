import React from 'react'
import Image from 'next/image'
import styles from '@/components/common/cards/forumcard.module.sass'
import Button from '@/components/common/button/forumbutton'
import { useRouter } from 'next/router'
// import gossiplogo from '@/assets/gossiplogo.svg'

export default function Forumcard({
  pic = 'pic',
  text1 = 'text1',
  text2 = 'text2',
  href = 'href1',
}) {
  const temp = '../../' + pic + '.svg'
  const router = useRouter()
  return (
    <div
      role="presentation"
      onClick={() => {
        router.push(href)
      }}
    >
      <div className={`${styles.flex}`}>
        <div className={`${styles.container}`}>
          <Image src={`${temp}`} alt="" width="230" height="230"></Image>
        </div>
        <div className={`${styles.adjust} `}>{text1}</div>
        <div className="mt20px">
          <Button text={text2} btnColor="green" />
        </div>
      </div>
    </div>
  )
}
