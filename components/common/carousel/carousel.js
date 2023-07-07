import Image from 'next/image'
import styles from './carousel.module.sass'
import ArrowRight from '@/components/common/arrow/arrowRight'
import ArrowLeft from '@/components/common/arrow/arrowLeft'
import Set from '@/components/common/cards/HomeSet.js'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import settings from './settings.js'

export default function Carousel() {
  return (
    <>
      <div>
        <Slider>
          <Set />
        </Slider>
      </div>
    </>
  )
}
