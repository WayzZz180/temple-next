import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import HomeSet from '../cards/HomeSet'
import ArrowRight from '@/components/common/arrow/arrowRight'
import ArrowLeft from '@/components/common/arrow/arrowLeft'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import styles from './HomeCarousels.module.sass'

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

export default function HomeCarousels() {
  const slide = [
    {
      text1: '吉祥如意',
      text2: '媽祖基本款',
      text3:
        '在香燭的映照下，仿佛是一場紅龜粿般的信仰盛宴，象徵著對媽祖的虔誠。這些美味的祭品猶如是一種祈願的延伸，希望媽祖的神靈能像糕點一樣，為人們帶來幸運與吉祥。在早期的儀式中，飲食的素葷之別並不是主要焦點，更重要的是心誠則靈，唯有真摯的虔敬，才能引得媽祖的保佑與庇佑。',
      pic1: 'MazuSet',
      id: 'Mazu',
    },
    {
      text1: '花好月圓',
      text2: '月老基本款',
      text3:
        '月老的祭祀，猶如一場甜蜜的文化糖漿，在香燭花卉的映襯下，甜點的芬芳四溢。除了擺放鮮花香燭，供品也包括湯圓、水果等美味。這些美味的祭品彷彿是心靈的滋養，象徵著愛情的美好滋味，更重要的是誠摯的祈願，只有充滿甜蜜的誠意，才能引來月老的青睞與祝福。',
      pic1: 'loveSet',
      id: 'LoveGod',
    },
    {
      text1: '金榜題名',
      text2: '文昌基本款',
      text3:
        '拜文昌猶如一道滋補的文化佳餚，香燭的火焰映照出蔥的青翠，象徵著好彩頭的美好前景。這些美味的祭品宛如心靈的滋養，象徵著知識的滋長，就像蔥的層層生長。唯有心意的凝聚，方能引得文昌神的加持。',
      pic1: 'studySet',
      id: 'StudyGod',
    },
  ]

  return (
    <div className="mt30px">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        speed={1000}
        className="mySwiper"
      >
        {slide.map((v, i) => {
          return (
            <SwiperSlide key={i}>
              <HomeSet
                text1={v.text1}
                text2={v.text2}
                text3={v.text3}
                pic1={v.pic1}
                id={v.id}
              />
            </SwiperSlide>
          )
        })}
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
