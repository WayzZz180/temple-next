import { useEffect, useState } from 'react'
import styles from './readpost.module.sass'
import Forumline from '@/components/common/forumlogo/forumline'
import Avatar from '@mui/material/Avatar'
import Image from 'next/image'

export default function ReadPost({ src = '' }) {
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.row}`}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 77, height: 77 }}
            className={`${styles.avatar}`}
          />
          <div className={`${styles.adjust}`}>id</div>
          <div>·</div>
          <div className={`${styles.adjust}`}>category</div>
          <div>·</div>
          <div className={`${styles.adjust}`}>time</div>
        </div>
        <div className={`${styles.row2}`}>
          9天8夜！大甲媽祖遶境21日深夜起駕 鎮瀾宮推薦必備行囊清單
        </div>
        <div className={`${styles.row3}`}>
          Discovery探索頻道譽為世界3大宗教盛事的大甲媽祖遶境進香活動，將於21日深夜起駕，
          為期9天8夜，大甲鎮瀾宮預估將有五六百萬人次參與。無論是全程參與或是一日輕裝，大
          甲鎮瀾宮提供行囊清單，供隨香客參考。
          「大甲鎮瀾宮」臉書粉專小編根據不同需求，推薦行囊清單。針對一日輕裝團，建議要準
          備：帽子與防曬用品、雨傘或雨衣、水壺與個人餐具、手機和行動電源、夜間警示燈。
          至於長征跋涉團，建議要準備：換洗衣物（運動用衣褲、防風薄外套、襪子、內衣褲）、
          毛巾、運動鞋、拖鞋、個人藥品、睡袋、睡墊與寢具或帳篷、帽子與防曬用品、雨傘或雨
          衣、水壺與個人餐具、手機、行動電源、充電器、夜間警示燈。
          大甲鎮瀾宮說，建議下載「大甲媽祖」遶境進香即時定位App（ios版|Android版），
          在網路上觀看媽祖遶境進香的盛況。
          運用GPS衛星定位，即可在手機線上地圖中呈現「大 甲媽祖鑾轎」即時位置。
          台鐵局為配合「大甲媽祖癸卯年遶境進香」暨「2023台中媽祖國際觀光文化節─大甲鎮瀾
          宮周邊演藝活動」，將於4月21日、22日及4月30日加開EMU900型區間快車共19列次，以疏
          運活動日人潮。
          台鐵局表示，為便利民眾搭車前往參加2023大甲媽祖遶境活動，提供悠遊卡、一卡通及愛
          金卡等電子票證服務，或預先購買回程車票，節省排隊購票時間。相關加開列車車次、時
          刻，可參閱台鐵網站及各車站公告。
        </div>
        <div className={`${styles.img}`}>
          <Image
            src={src}
            alt="test"
            // className={`${styles.img}`}
            width={600}
            height={450}
          />
        </div>
        <Forumline />
        <div className={`${styles.col}`}>
          <div className={`${styles.row4}`}>
            <div>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 66, height: 66 }}
                className={`${styles.avatar}`}
              />
            </div>
            <div className={`${styles.col2}`}>
              <div className={`${styles.commenter}`}>吸貓是快樂泉源</div>
              <div className={`{${styles.commenttime}`}>
                2023-05-11-08:11:15
              </div>
              <div className={`${styles.comment}`}>
                窩魯妹啦 一大群人追著很明顯就是人為操控的轎子到處跑
                而且對轎子是自己動的深信 窩魯妹啦
                一大群人追著很明顯就是人為操控的轎子到處跑
                而且對轎子是自己動的深信
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
