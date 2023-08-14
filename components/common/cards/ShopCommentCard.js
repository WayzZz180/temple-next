import styles from './ShopCommentCard.module.sass'
import Image from 'next/image'
// svg
import goldenStar_fill from '@/assets/goldenStar_fill.svg'
import goldenStar_outline from '@/assets/goldenStar_outline.svg'

export default function ShopCommentCard({
  name = `宮美村掐`,
  content = `經常網購，總有大量的包裹收，有很多的評語要寫！

        但是，總是寫評語花掉了我大量的時間和精力！
        
        所以在一段時間裡，我總是不去評價或者隨便寫寫！
        
        但是，我又總是覺得好像有點對不住那些辛苦工作的賣家客服、倉管、老闆
        
        於是我寫下了一小段話，說不定在寫完評語之後呢
        
        老闆還會送你個優惠折扣碼之類的~`,
  date = `2023-05-31 19:30`,
  num = 4,
}) {
  const outline = 5 - num
  return (
    <>
      <div className={`${styles.container} pt50px pb80px`}>
        {/* 暱稱 */}
        <div className={`fs27px fwBold`}>{name}</div>
        <div className="pt10px pb30px">
          {Array(num)
            .fill(1)
            .map((v, i) => {
              return (
                <Image
                  key={`fill${i}`}
                  src={goldenStar_fill}
                  alt="star"
                  width={25}
                />
              )
            })}
          {Array(outline)
            .fill(1)
            .map((v, i) => {
              return (
                <Image
                  key={`outline${i}`}
                  src={goldenStar_outline}
                  alt="star"
                  width={25}
                />
              )
            })}
        </div>
        {/* 評價內容 */}
        <div className={`${styles.contentContainer}`}>
          <div className={`${styles.content} fs20px fwBolder`}>{content}</div>
          {/* 日期s */}
          <div className={`${styles.date} fs20px fwBolder`}>{date}</div>
        </div>
      </div>
      <div className={`${styles.commentLine}`}></div>
    </>
  )
}
