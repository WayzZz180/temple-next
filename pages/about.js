import React from 'react'
import Button from '@/components/common/button/index'
import variables from '@/styles/_variables.module.scss'
import '@/styles/mixins/button.module.sass'

export default function About() {
  return (
    <>
      <h1 className="test">About</h1>
      <Button text="來去報名" btnColor="btn_p" />
      <Button text="選購" btnColor="btn_b" />
      <Button text="媽祖" btnColor="btn_g" />
      <Button text="刪除" btnColor="btn_y" />
    </>
  )
}
