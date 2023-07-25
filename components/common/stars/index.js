import React from 'react'
import Image from 'next/image';
// svg
import goldenStar_fill from '@/assets/goldenStar_fill.svg'
import goldenStar_outline from '@/assets/goldenStar_outline.svg'

export default function Stars( {width=20, stars=5}) {
  const totalStars = 5;
  const starArray = Array.from({ length: stars });
  return (
    <div>
      {starArray.map((_, index) => (
        <Image
          key={index}
          src={goldenStar_fill}
          alt="star"
          width={width}
        />
      ))}
      {Array.from({ length: totalStars - stars }).map((_, index) => (
        <Image
          key={index + stars}
          src={goldenStar_outline}
          alt="star"
          width={width}
        />
      ))}
  </div>
  )
}
