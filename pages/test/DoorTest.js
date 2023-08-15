import React from 'react'

import Image from 'next/image'
import pink_star from '@/assets/Pink_Star.svg'
import signIn from '@/assets/sing_in.svg'
import PrayMaz from '@/components/common/cards/PrayMazu'
import Love from '@/components/common/temple/timeCirle'

// import DefaultLayout from '@/components/layout/default-layout'

export default function About() {
  return (
    <>
      <Love />
    </>
  )
}
About.getLayout = (page) => (<>{page}</>)