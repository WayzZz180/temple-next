import Head from 'next/head'
import styles from '@/pages/member/myCoupons.module.sass'

//hooks
import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { CartDataContextProvider } from '@/contexts/CartCountContext'
import CartDataContext from '@/contexts/CartDataContext'
import WannaBuyDataContext from '@/contexts/WannaBuyDataContext'
// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// components
import ShopStepBar from '@/components/common/bar/ShopStepBar'
import Cart from '@/components/common/cart/cart'
import WannaBuy from '@/components/common/cart/wannaBuy'
import CartCategory from '@/components/common/button/CartCategory'
import ProfilePhoto from '@/components/common/profilePhoto'
import MemberTitle from '@/components/common/title/memberTitle'
import MemberNavbar from '@/components/common/memberNavbar'
import data from '@/components/mydata/memberNavbarData.js'

// coupon components
import CouponCategory from '@/components/common/button/CouponCategory.js'
import CouponNavbar from '@/components/common/coupons/couponNavbar'
import AllCoupons from '@/components/common/coupons/allCoupons'
import AvailableCoupons from '@/components/common/coupons/availableCoupons'
import UsedCoupons from '@/components/common/coupons/usedCoupons'
import ExpiredCoupons from '@/components/common/coupons/expiredCoupons'

export default function IndexCart() {
  const router = useRouter()

  // id = 1 (購物車) , id = 2 (下次再買)
  const { tab } = router.query
  const [idFromChild, setIdFromChild] = useState(tab ? parseInt(tab) : 1)

  // 抓購物車或下次再買的資料
  useEffect(() => {
    if (tab) {
      setIdFromChild(parseInt(tab))
    }
  }, [router.query])

  return (
    <div className={styles.flex}>
      <Head>
        <title>{data[4]?.text}</title>
      </Head>
      <Container>
        <ProfilePhoto />
        <Row>
          <Col>
            <MemberTitle text="我的優惠券" text2="COUPONS" lineColor="green" />
          </Col>
        </Row>

        <MemberNavbar />

        {/* 購物車、下次再買、一鍵清空 */}
        <Row className={`${styles.row} nowrap mt100px`}>
          <Col className={`${styles.top}`}>
            <CouponCategory
              idFromChild={idFromChild}
              setIdFromChild={setIdFromChild}
            />
          </Col>
        </Row>
        <CouponNavbar />
        {idFromChild === 1 ? (
          <AllCoupons />
        ) : idFromChild === 2 ? (
          <AvailableCoupons />
        ) : idFromChild === 3 ? (
          <UsedCoupons />
        ) : idFromChild === 4 ? (
          <ExpiredCoupons />
        ) : null}
      </Container>
    </div>
  )
}
