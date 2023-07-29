import { useState,useEffect } from 'react'
import styles from './HomeCarousel.module.sass'

// components
import HomeSet from '../cards/HomeSet'
import ArrowRight from '@/components/common/arrow/arrowRight'
import ArrowLeft from '@/components/common/arrow/arrowLeft'

export default function HomeCarousel(){
    const [position, setPosition] = useState(24)
    const [index, setIndex] = useState(0)
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
    

    useEffect(() => {
      const handleAutoCarousel = () => {
        setPosition(position+1)
        if(position>=(2+3*index)){
          setIndex(index+1)
          }
        };
      
      const interval = setInterval(handleAutoCarousel, 4500);
  
      return () => clearInterval(interval);
    }, [position]); 

    return(
      <div className={`${styles.flex} mt50px `}>
        <button className={`${styles.button} ps45px`}
        onClick={()=>{
          setPosition(position-1)
          // if(position<=0){
          // }
        }}
        >
        <ArrowLeft />
        </button>
          <div className={`${styles.homeSetContainer}`}>
            
            { 
              Array.from({ length: index+50}).map((_, i) => (
              slide.map((v,i)=>{
              return(
                <div  key={v.text1} className={`${styles.homeSet}`}
                style={{right: `${position*1490}px`}}
                >
                  <HomeSet text1={v.text1} text2={v.text2} pic1={v.pic1} />
                </div>
              )
              })
              ))
            }
          </div>
        <button className={`${styles.button} pe45px`}
        onClick={()=>{
          setPosition(position+1)
          if(position>=(2+3*index)){
            setIndex(index+1)
            }
          console.log(position)
        }}
        >
        <ArrowRight />
        </button>
      </div>
    )

}