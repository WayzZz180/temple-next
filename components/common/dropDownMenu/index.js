import styles from './drop.module.sass'
import Image from 'next/image'

// hooks
import { useEffect, useState } from 'react'
import { useHoverIndex } from '@/hooks/useHoverIndex.js'

// svg
import Triangle_fill from '@/assets/triangle_fill.svg'
import Triangle_outline from '@/assets/triangle_outline.svg'
import DESC from '@/assets/desc.svg'
import ASC from '@/assets/asc.svg'
import Arrow from '@/assets/arrow_sort.svg'

export default function DropDownMenu({
  text = '顯示 ｜ 排列',
  info,
  setDataFromChild,
  keyword,
}) {
  const [init, setInit] = useState(false)
  // 三角形hover
  const {
    hoveredIndex: triHoveredIndex,
    handleMouseEnter: triHandleMouseEnter,
    handleMouseLeave: triHandleMouseLeave,
  } = useHoverIndex(false)

  const [data, setData] = useState([])
  const [sort, setSort] = useState(DESC)

  // 顯示頁數
  const selectPage = (perPage) => {
    keyword && setData({ ...data, keyword: keyword })
    setData({ ...data, perPage: perPage })
  }

  // 排序 asc/desc
  const changeSort = (sort) => {
    keyword && setData({ ...data, keyword: keyword })
    sort === DESC ? setSort(ASC) : setSort(DESC)
    const strSort = sort === DESC ? 'ASC' : 'DESC'
    setData({ ...data, order: strSort })
  }

  // 依照...排序
  const order = (orderBy) => {
    keyword && setData({ ...data, keyword: keyword })
    setData({ ...data, orderBy: orderBy })
  }

  // 傳資料回父層
  useEffect(() => {
    setDataFromChild(data)
  }, [data])

  return (
    <>
      <div className={`${styles.container}`}>
        {/* asc/desc */}
        <div
          role="presentation"
          className={`${styles.arrow} me30px`}
          onClick={() => {
            if (!init) {
              setInit(true)
            }
            changeSort(sort)
          }}
        >
          <div className="fs18px fwBold me5px">排序方向</div>
          {/* 排序箭頭 */}
          <div
            className={`${
              sort === ASC ? (init ? styles.arrowDown : '') : styles.arrowUp
            } pt5px`}
          >
            <Image src={Arrow} alt="open" width={20} />
          </div>
        </div>
        {/* 篩選排列ul */}
        <ul className={`${styles.drop_down_menu}`}>
          <li className={`mt10px`}>
            <div
              className={`${styles.titleContainer}`}
              onMouseEnter={triHandleMouseEnter}
              onMouseLeave={triHandleMouseLeave}
            >
              {/* 篩選排列ul */}
              <div className={`${styles.title} fs18px pb10px fwBold`}>
                {text}
              </div>
              {/* 三角形 */}
              <Image
                src={triHoveredIndex ? Triangle_fill : Triangle_outline}
                alt="arrow"
                width={10}
                className={`${styles.triangle} ms10px`}
              />
            </div>
            {/* 展開的內容 */}
            <ul
              onMouseEnter={triHandleMouseEnter}
              onMouseLeave={triHandleMouseLeave}
            >
              {info.map((v, i) => (
                <li
                  key={i}
                  className={`${
                    v.title ? styles.liTitle : styles.li
                  } mt10px mb20px
                  ${v.status ? styles.select : styles.notSelect}
                  `}
                >
                  <div
                    role="presentation"
                    className={`${styles.link} fs16px`}
                    style={{ cursor: v.title ? 'default' : 'pointer' }}
                    onClick={() => {
                      if (v.perPage) {
                        selectPage(v.perPage)
                      } else if (v.orderBy) {
                        order(v.orderBy)
                      }
                    }}
                  >
                    {v.content}
                  </div>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </>
  )
}
