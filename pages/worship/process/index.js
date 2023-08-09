import Image from 'next/image'
import styles from './process.module.sass'

// bootstrap
import { Container, Row, Col } from 'react-bootstrap'

// hooks
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// components
import God from '@/components/common/cards/WorshipProcessGod'
import Button from '@/components/common/button'

// svg
import BackTable from '@/assets/tableBack.svg'
import FrontTable from '@/assets/tableFront.svg'
import Burner from '@/assets/worship_burner.svg'
import Incense from '@/assets/incense.svg'

export default function Process() {
  const [active, setActive] = useState(false)

  return (
    <main>
      <Container className={`${styles.container}`}>
        <Row className={`${styles.relative}`}>
          <Col className={`${styles.god} w100`}>
            <God />
          </Col>
          <Col className={`${styles.tableContainer}`}>
            <div className={`${styles.back}`}>
              <Image src={BackTable} alt="back table" width={620} />
            </div>
            <div className={`${styles.front}`}>
              <Image src={FrontTable} alt="front table" width={350} />
            </div>
            <div
              className={`${active ? styles.incense : styles.incenseHidden}`}
            >
              <Image src={Incense} alt="incense" width={5} />
            </div>
            <div className={`${styles.burner}`}>
              <Image src={Burner} alt="burner" width={75} />
            </div>
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
