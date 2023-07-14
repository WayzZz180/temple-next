import React from 'react'
import Image from 'next/image'
import styles from '@/components/common/forumcard/forumcard.module.sass'
import Button from '@/components/common/button'
import Gossip from '@/assets/'

export default function Forumcard({ pic1 = 'gossip', text1 = '湊一腳' }) {
  const pic = '../../' + pic1 + '.svg'
  return (
    <>
      <div className={`${styles.flex}`}>
        <div>
          <Image src={`${pic}`} alt="" />
        </div>
        <div>{text1}</div>
        <Button text="湊一腳" btnColor="btn_g" />
      </div>
    </>
  )
}
