import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';
import HomeSet from '../cards/HomeSet'
import ArrowRight from '@/components/common/arrow/arrowRight'
import ArrowLeft from '@/components/common/arrow/arrowLeft'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './HomeCarousels.module.sass'


// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function HomeCarousels() {
    const swiperRef = useRef(null);

    const slide = [
        {
          text1: "吉祥如意",
          text2: "媽祖基本款",
          pic1: "MazuSet"
        },
        {
          text1: "花好月圓",
          text2: "月老基本款",
          pic1: "loveSet"
        },
        {
          text1: "金榜題名",
          text2: "文昌基本款",
          pic1: "studySet"
        },
      ]
      
  return (
    <div className='mt30px'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        // centeredSlides='true'
        autoplayDisableOnInteraction='false'
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        speed={600} 
        className="mySwiper"
      >
      {
        slide.map((v,i)=>{
            return <SwiperSlide key={i}><HomeSet text1={v.text1} text2={v.text2} pic1={v.pic1} /></SwiperSlide>
        })
        }
        <div className={`${styles.container}`}>
            <div className={`${styles.arrowLeft} swiper-button-prev`}
            >
                <ArrowLeft/>
            </div>
            <div className={`${styles.arrowRight} swiper-button-next`}
            >
                <ArrowRight/>
            </div>
        </div>
        </Swiper>

    </div>
  );
}