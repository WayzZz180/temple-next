import React from 'react'
import Image from 'next/image'
import styles from './forumhomepage.module.sass'
import nav from '@/assets/nav.svg'
import Rightgod from '@/assets/rightgod.svg'
import Leftgod from '@/assets/leftgod.svg'
import ForumLogo from '@/components/common/forumlogo'
import Title from '@/components/common/title'
import Forumcard from '@/components/common/cards/forumcard'
import CountdownTimer from '@/components/common/cards/countdownTimer'
// import gossiplogo from '@/assets/gossiplogo.svg'

export default function Forum() {
  return (
    <>
      <div className={`${styles.background}`}>
        <div className={`${styles.place}`}>
          <div className={`${styles.flex_row}`}>
            <div className={`${styles.gods}`}>
              <Image src={Leftgod} alt="leftgod" height={1450} />
              <ForumLogo />
              <Image src={Rightgod} alt="rightgod" height={1450} />
            </div>
          </div>
          <div className={`${styles.floor}`}>
            <Image src={nav} width={1990} alt="nav" />
          </div>
        </div>
      </div>
      <Title text="主題看板" text2="TOPIC BOARD" />
      <div className={`${styles.flex_row2}`}>
        <Forumcard
          text1="八卦版"
          text2="湊一腳"
          pic="gossiplogo"
          href={`/forum/gossip?page=1`}
        />
        <Forumcard
          text1="鬼故事版"
          text2="涼一下"
          pic="marvellogo"
          href={`/forum/ghost?page=1`}
        />
        <Forumcard
          text1="愛情版"
          text2="男人嘴"
          pic="lovelogo"
          href={`/forum/love?page=1`}
        />
        <Forumcard
          text1="籤詩版"
          text2="抽一根"
          pic="godtellyoulogo"
          href={`/forum/fortunesticks?page=1`}
        />
      </div>
      <div className={`${styles.flex_know}`}>
        <Title text="知識區" text2="KNOWLEDGE普拉斯" />
      </div>
      <div className={`${styles.flex_row2}`}>
        <Forumcard text1="神佛介紹" text2="長知識" pic="introgod" href={`/forum/godstory`}/>
        <Forumcard text1="禁忌百科" text2="母湯喔" pic="dontdo" href={`/forum/folktaboos`}/>
        <Forumcard text1="節期拜法" text2="長知識" pic="howtobye" href={`/forum/seasoncircle`}/>
        <Forumcard text1="山野怪談" text2="長知識" pic="monogatari" href={`/forum/monsters`}/>
      </div>
      <div className={`${styles.flex_know}`}>
        <Title
          text="鬼門關倒數"
          text2="GHOST GATE COUNTDOWN TIMER"
          lineColor="hot_pink"
        />
      </div>
      <div className="mt100px">
      <CountdownTimer />
      </div>
    </>
  )
}
