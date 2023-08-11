import React from 'react'
import Image from 'next/image'
import styles from './joss.module.sass'

// bootstrap
import { Container, Row, Col } from 'react-bootstrap'

// hooks
import { sortable } from 'react-sortable'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// components
import God from '@/components/common/cards/WorshipProcessGod'
import Button from '@/components/common/button'
import Loading from '@/components/common/loading'

// svg
import Floor from '@/assets/floor.svg'
import Fire from '@/assets/fire.gif'
import HellMoney from '@/assets/joss.svg'

export default function Joss() {
  const router = useRouter()
  const clearLocal = () => {
    if (localStorage.getItem('reservation')) {
      localStorage.removeItem('reservation')
    }
  }
  return (
    <main>
      <Container>
        {/* 鐵桶 */}
        <Row className={`${styles.floorContainer}`}>
          <div>
            <Image src={Fire} alt="floor" width={500} />
          </div>
        </Row>
        {/* 金紙 */}
        <Row className={`${styles.floorContainer}`}>
          <div>
            <Image src={HellMoney} alt="floor" width={500} />
          </div>
        </Row>
        {/* 地板 */}
        <Row className={`${styles.floorContainer}`}>
          <div>
            <Image src={Floor} alt="floor" width={500} />
          </div>
        </Row>
        <Button
          text="祭拜結束"
          link={() => {
            // TODO: 把祭拜紀錄寫進資料庫 如果已經有的話就更新complete
            clearLocal()
            router.push('/member/praying')
          }}
        />
      </Container>
    </main>
  )
}

Joss.getLayout = (page) => <>{page}</>
