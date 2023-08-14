import React from 'react'
import Button from '@/components/common/button'
import Title from '@/components/common/title'
import HomeGod from '@/components/common/cards/HomeGod'
import HomeCarousel from '@/components/common/carousel/HomeCarousels'
import HomeDoor from '@/components/common/cards/HomeDoor'
import Light_Row from '@/components/common/button/bts'
import Light_Ro from '@/components/common/button'

// import DefaultLayout from '@/components/layout/default-layout'

export default function About() {
  return (
    <>
      {/* <Button text="來去報名" btnColor="btn_p" />
      <Button text="選購" btnColor="btn_b" />
      <Button text="媽祖" btnColor="btn_g" />
      <Button text="刪除" btnColor="btn_y" />
      <Title
        text="供品套組精選"
        text2="OFFERING SELECTION SET"
        lineColor="line_g"
      /> */}
      {/* <HomeGod />
      <HomeCarousel /> */}
      <Light_Row />
      <Light_Ro />
    </>
  )
}
