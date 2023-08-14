import React, { useRef, useState, useEffect } from 'react'
import styles from './marquee.module.sass'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'

// components
import Title from '@/components/common/title'
import ShopMarqueeCard from '@/components/common/cards/ShopMarqueeCard'
// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { Pagination, Navigation, Autoplay } from 'swiper/modules'

export default function Marquee({
  data,
  text = '相關選擇',
  text2 = 'Related Choice',
  lineColor = 'hot_pink',
}) {
  return (
    <>
      <Container className={`${styles.marqueeContainer}`}>
        <Title text={text} text2={text2} lineColor={lineColor} />

        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            // waitForTransition:false
          }}
          // watchSlidesProgress={true}
          // slidesPerView={10}
          className="mySwiper"
          grabCursor="false"
          modules={[Autoplay, Pagination, Navigation]}
          speed={1000}
          breakpoints={{
            1674: {
              slidesPerView: 10,
            },
            1440: {
              slidesPerView: 8,
            },
            1024: {
              slidesPerView: 6,
            },
            768: {
              slidesPerView: 4,
            },
            574: {
              slidesPerView: 3,
            },
            390: {
              slidesPerView: 1,
            },
          }}
        >
          <div className={`${styles.marqueeContent} mt30px`}>
            <Row className="nowrap">
              <div className={`${styles.animation}`}>
                {data.map((v, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <ShopMarqueeCard
                        name={v.product_name}
                        price={v.product_price}
                        src={`/${v.image}`}
                        pid={v.pid}
                      />
                    </SwiperSlide>
                  )
                })}
              </div>
            </Row>
          </div>
        </Swiper>
      </Container>
    </>
  )
}
