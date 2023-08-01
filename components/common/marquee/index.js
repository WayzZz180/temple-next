import React, { useRef, useState, useEffect } from "react";
import styles from './marquee.module.sass'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

// components
import Title from '@/components/common/title'
import ShopMarqueeCard from '@/components/common/cards/ShopMarqueeCard'
// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { Pagination, Navigation, Autoplay } from 'swiper/modules';


export default function Marquee({ 
  data, 
  text = '相關選擇',
  text2="Related Choice" ,
  lineColor="hot_pink"
   }) {
    
    // const mySwiper = new Swiper('.swiper-container', {
    //   loop:true,
    //   autoplay:{ delay:0,
    //   disableOnInteraction: false,
    //   pauseOnMouseEnter: 
    //   },
    //   watchSlidesProgress:true,
    //   slidesPerView:10,
    //   className:"mySwiper",
    //   grabCursor:'false',
    //   modules:[Autoplay, Pagination, Navigation],
    //   speed:1000,
    // });
    
    // // 監聽滑鼠進入和離開幻燈片的事件
    // const mySwiper = document.querySelector('.mySwiper')

    // mySwiper.on('mouseenter', function () {
    //   mySwiper.autoplay.stop();
    // });
    
    // mySwiper.on('mouseleave', function () {
    //   mySwiper.autoplay.start();
    // });
    // const swiperRef = useRef(null);

    // useEffect(() => {
    //   const swiperInstance = swiperRef.current && swiperRef.current.swiper;
    //   if (swiperInstance) {
    //     swiperInstance.el.addEventListener('mouseenter', function () {
    //       swiperInstance.autoplay.stop();
    //     });

    //     swiperInstance.el.addEventListener('mouseleave', function () {
    //       swiperInstance.autoplay.start();
    //     });
    //   }
    // }, []);

  return (
    <> 
      <Container className={`${styles.marqueeContainer}`}>
      <Title text={text} text2={text2} lineColor={lineColor}/>

        <Swiper
        loop={true}
        autoplay={{delay:2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        // waitForTransition:false
        }}
        // watchSlidesProgress={true} 
        slidesPerView={10} 
        className="mySwiper"
        grabCursor='false'
        modules={[Autoplay, Pagination, Navigation]}
        speed={1000} 
        // onSwiper={swiper => (swiperRef.current = swiper)}
        >
      
        <div className={`${styles.marqueeContent} mt30px`}>
          <Row
            className="nowrap"

          >
         <div className={`${styles.animation}`
         }
         >
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
  );
}
