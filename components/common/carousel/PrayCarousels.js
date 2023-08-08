import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import ArrowRight from '@/components/common/arrow/arrowRight'
import ArrowLeft from '@/components/common/arrow/arrowLeft'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import styles from './HomeCarousels.module.sass'

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

import Mazu from '@/components/common/cards/PrayMazu'
import Love from '@/components/common/cards/PrayLove'
import Study from '@/components/common/cards/PrayStudy'

export default function HomeCarousels() {

  return (
    <div className={`${styles.parent_container }`}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        speed={1000}
        className="mySwiper"
      >
            <SwiperSlide >
              <Mazu />
            </SwiperSlide>
            <SwiperSlide >
              <Love />
            </SwiperSlide>
            <SwiperSlide >
              <Study />
            </SwiperSlide>
          
        <div className={`${styles.container}`}>
          <div className={`${styles.arrowLeft} swiper-button-prev`}>
            <ArrowLeft />
          </div>
          <div className={`${styles.arrowRight} swiper-button-next`}>
            <ArrowRight />
          </div>
        </div>
      </Swiper>
    </div>
  )
}
