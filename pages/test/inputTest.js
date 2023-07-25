import React from 'react'
import InputBox from '@/components/common/inputBox'
import { useState } from 'react'
export default function InputTest() {
  const[test,setTest]=useState()
  const func = (e)=>{
    setTest(e.currentTarget.value)
  }
  return (
    <InputBox 
    type = 'text'
    prompt = ''
    placeholder = '123'
    // func = func(e)
    width = ' 453px'
    value={test}
    // 487 - 15*2 空白 -2*2border = 453
    height = '45px'
    // 49 -2*2 border = 45

    />
  )
}
