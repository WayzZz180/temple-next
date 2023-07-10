import React from 'react'
import InputBox from '@/components/common/inputBox/index.js'
import Title from '@/components/common/title/index.js'
import BasicExample from '@/components/common/inputBox/123'

export default function WayzTEST() {
  return (
    <>
      <div>
        <h1>123</h1>
        <h1>123</h1>

        <h1>123</h1>

        <h1>123</h1>

        <InputBox prompt="123" type="email" placeholder="請輸入..." onChange />
        <Title CHNtext="中文" ENGtext="ENG" colored_line_blue />
        <Title CHNtext="中文" ENGtext="ENG" colored_line_blue />
        <BasicExample />
      </div>
    </>
  )
}
