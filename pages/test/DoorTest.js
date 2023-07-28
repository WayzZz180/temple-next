import React from 'react'
import styles from '../Home/head.module.sass'
import Image from 'next/image'
import pink_star from '@/assets/Pink_Star.svg'
import signIn from '@/assets/sing_in.svg'
import PrayMaz from '@/components/common/cards/PrayMazu'
import Love from '@/components/common/pray_light/light_row'

// import DefaultLayout from '@/components/layout/default-layout'

export default function About() {
  return (
    <>
      <Love text="A"/>
      <Love text="B"/>
      <Love text="C"/>
      <Love text="D"/>
    </>
  )
}
