import styles from './buyContent.module.sass'
import Image from 'next/image'

// hooks
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useClick } from '@/hooks/useClick.js'

// components
import ShopOrderContentCard from '@/components/common/cards/ShopOrderContentCard'

// bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//svg
import Arrow from '@/assets/orderArrow.svg'

export default function BuyContent({data=[]}) {

  const [init, setInit] = useState(false)
  
  //判斷有無點擊收藏和購物車
  const { clickState: openClickState, handleClick: handleOpenClick } =
    useClick(true)

    const total = data?.reduce((result, v) => {
    return result + v.product_price * v.quantity
    }, 0)
    
  return (
        <>  
            {/* 合計 */}
            <Row className="nowrap">
                <Col className="w100">
                <div
                    className={`${styles.totalBox} pt30px pb30px`}
                    onClick={() => {
                    handleOpenClick()
                    if (!init) {
                        setInit(true)
                    }
                    }}
                >
                    <div className={`fs28px fwBolder`}>合計：NT${total}</div>
                    <div className={`${styles.flex_row} fs24px`}>
                    <div>總共 {data?.length} 件&nbsp;</div>
                    <div
                        className={`${
                        openClickState
                            ? init
                            ? styles.arrowDown
                            : ''
                            : styles.arrowUp
                        } pt5px`}
                    >
                        <Image src={Arrow} alt="open" width={20} />
                    </div>
                    </div>
                </div>
                </Col>
            </Row>
            {/* 商品內容 */}
            <Row
            >
                <div
                className={`${openClickState ? styles.open : styles.close}`}
                style={{ overflow: 'hidden', maxHeight: openClickState ? '100%' : 0 }}
                >
                <div
                    className={`${styles.trans} ${
                    openClickState ? styles.floatIn : ''
                    }`}
                    style={{
                    bottom: openClickState ? '' : `${260 * data?.length + 20}px`,
                    }}
                >
                    {data?.map((v, i) => (
                    <ShopOrderContentCard
                        key={i}
                        src={`/${v.image}`}
                        name={`${v.product_name}`}
                        price={`${v.product_price}`}
                        quantity={`${v.quantity}`}
                    />
                    ))}
                </div>
                </div>
            </Row>
        </>

  )
}
