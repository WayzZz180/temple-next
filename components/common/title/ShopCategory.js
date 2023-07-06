import React from 'react'
import variables from '@/styles/_variables.module.sass'

export default function ShopCategory({ text = 'text', color = 'color' }) {
  return (
    <>
      <div
        className="w10px h29px"
        style={{ background: variables[{ color }] }}
      ></div>
      <div>{text}</div>
    </>
  )
}
