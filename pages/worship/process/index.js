import React from 'react'
import Image from 'next/image'
import styles from './process.module.sass'

// bootstrap
import { Container, Row, Col } from 'react-bootstrap'

// hooks
import { sortable } from 'react-sortable'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// components
import God from '@/components/common/cards/WorshipProcessGod'
import Button from '@/components/common/button'
import Loading from '@/components/common/loading'

// svg
import BackTable from '@/assets/tableBack.svg'
import FrontTable from '@/assets/tableFront.svg'
import Burner from '@/assets/worship_burner.svg'
import Incense from '@/assets/incense.svg'
import mazuGod from '@/assets/mazuGod.svg'
import loveGod from '@/assets/loveGod.svg'
import studyGod from '@/assets/studyGod.svg'

// data
import godInfo from '@/components/mydata/godInfo'

export default function Process() {
  const [active, setActive] = useState(false)
  const router = useRouter()
  const [data, setData] = useState([])
  const [reservation, setReservation] = useState([])

  useEffect(() => {
    if (localStorage.getItem('reservation')) {
      setReservation(JSON.parse(localStorage.getItem('reservation')))
    }
  }, [router.query])

  // 參拜資料(worship_summary, worship_details)
  useEffect(() => {
    const pidArr = { pidArr: reservation?.pidArr }
    if (pidArr?.pidArr) {
      fetch(`${process.env.API_SERVER}/worship/image`, {
        method: 'POST',
        body: JSON.stringify({ requestData: pidArr }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((r) => r.json())
        .then((data) => {
          setData(data)
        })
    }
  }, [reservation])

  if (!data) return <Loading />

  const gods = [
    {
      god: '媽組',
      src: mazuGod,
    },
    {
      god: '月老',
      src: loveGod,
    },
    {
      god: '文昌',
      src: studyGod,
    },
  ]

  if (!reservation) return <Loading />
  const index = gods.findIndex((v, i) => v.god === reservation?.god)

  class Item extends React.Component {
    render() {
      return <li {...this.props}>{this.props.children}</li>
    }
  }

  const SortableItem = sortable(Item)

  class SortableList extends React.Component {
    state = {
      items: this.props.items,
    }

    onSortItems = (items) => {
      this.setState({
        items: items,
      })
    }

    render() {
      const { items } = this.state
      const listItems = items.map((item, i) => {
        return (
          <SortableItem
            key={i}
            onSortItems={this.onSortItems}
            items={items}
            sortId={i}
          >
            <Image src={item} alt="products" width={120} height={120} />
          </SortableItem>
        )
      })

      return <ul className={`${styles.sortList}`}>{listItems}</ul>
    }
  }

  const [items, setItems] = useState([])
  if (items.length === 0) {
    data?.map((v, i) => {
      items.push(`/${v.image}`)
    })
  }

  return (
    <main>
      <Container className={`${styles.container}`}>
        <Row className={`${styles.relative}`}>
          {/* God */}
          <Col className={`${styles.god} w100`}>
            <God
              pic={gods[index]?.src}
              wordLeft={godInfo[index]?.wordLeft}
              wordRight={godInfo[index]?.wordRight}
            />
          </Col>
          {/* 桌子 */}
          <Col className={`${styles.tableContainer}`}>
            <div className={`${styles.back}`}>
              <Image src={BackTable} alt="back table" width={620} />
            </div>
            <div className={`${styles.front}`}>
              <Image
                src={FrontTable}
                alt="front table"
                width={350}
                height={350}
              />
            </div>
            {/* 供品 */}
            <div className={`${styles.productsContainer} `}>
              <SortableList items={items} />
            </div>
            {/* 香 */}
            <div
              className={`${active ? styles.incense : styles.incenseHidden}`}
            >
              <Image src={Incense} alt="incense" width={5} />
            </div>
            {/* 香爐 */}
            <div className={`${styles.burner}`}>
              <Image src={Burner} alt="burner" width={75} />
            </div>
            {/* Button */}
            <div className={`${styles.button}`}>
              <Button
                text={active ? '祭拜' : '點香'}
                fontSize="16px"
                padding="10px 50px"
                link={() => {
                  setActive(true)
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

Process.getLayout = (page) => <>{page}</>
