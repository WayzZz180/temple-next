import React from 'react'
import styles from './drop.module.sass'
import Link from 'next/link'
import Image from 'next/image'

// hooks
import { useHoverIndex } from '@/hooks/useHoverIndex.js'

// svg
import Triangle_fill from '@/assets/triangle_fill.svg'
import Triangle_outline from '@/assets/triangle_outline.svg'

export default function DropDownMenu({ text = '篩選｜排列', info }) {
 

  const { hoveredIndex, handleMouseEnter, handleMouseLeave } =
    useHoverIndex(false)

  return (
    <ul className={`${styles.drop_down_menu}`}>
      <li className={`mt10px`}>
        <div
          className={`${styles.titleContainer}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`${styles.title} fs18px mt5px pb15px fwBold`}>{text}</div>
          <Image
            src={hoveredIndex ? Triangle_fill : Triangle_outline}
            alt="arrow"
            width={10}
            className={`${styles.triangle} ms10px`}
          />
        </div>
        <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {info.map((v, i) => (
            
              <li
                key={i}
                className={`${
                  v.title ? styles.liTitle : styles.li
                } mt10px mb20px`}
              >
                <Link href="#" className={`fs16px link`}>
                  {v.content}
                </Link>
              </li>
            
          ))}
        </ul>
      </li>
    </ul>
  )
}
