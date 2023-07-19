import Image from "next/image"
//hooks
import { useRouter } from "next/router"
//components
import Chip from '@/public/img/cookies/chips/chips (2).png'
import Marquee from '@/components/common/marquee'
import Title from '@/components/common/title'
// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export default function Pid() {
    const router = useRouter()
    const { category } = router.query
    console.log(router.asPath)
    return (
        <>

        <Container >
            <Row className="nowrap mt100px mb100px">
                <Col><div>商城首頁 ＞ 唰嘴ㄟ ＞ 洋芋片</div></Col>
            </Row>
            <Row className="nowrap">
                <Col>
                    <div>Product name</div>
                    <div>Product details</div>
                </Col>
                <Col>
                    <Image src={Chip} alt="details" width={550} className={`shadow`}/>
                </Col>
                <Col>
                    <div>Price</div>
                    <span>加入購物車</span><span> 愛心</span>
                    <div>Browse num</div>
                    <div>Purchase num</div>
                </Col>
            </Row>
            <Row>
        <Marquee  />
            </Row>
            <Title text="商品評價" text2="products rewiews"/>
        </Container>
        </>

  )
}
