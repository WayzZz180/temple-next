import Image from 'next/image'
import styles from './imgTest.module.sass'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ShopProductsCard from '@/components/common/cards/ShopProductsCard'

// const path = ['cookies', 'candy', 'drinks', 'gifts', 'salty']
const imgSrc = []
const path = [
  {
    category: 'cookies',
    detail: [
      'chips',
      'crisps',
      'milk_crackers',
      'oodles',
      'pancake',
      'puffs',
      'shaqima',
      'soda_crackers',
      'yolk_pie',
    ],
  },
  {
    category: 'candy',
    detail: ['candy', 'chocolate', 'fudge', 'soft', 'throat'],
  },
  {
    category: 'drinks',
    detail: [
      'black_tea',
      'eight',
      'green_tea',
      'juice',
      'oolong',
      'soda',
      'water',
    ],
  },
  {
    category: 'gifts',
    detail: ['cow', 'floss', 'gong', 'pineapple', 'yolk'],
  },
  {
    category: 'salty',
    detail: ['can', 'instant_noodles', 'peanut'],
  },
]

// -candy

// candy 77
// chocolate 169
// fudge 48
// soft 109
// throat 64

// -drinks

// black_tea 77
// eight 13
// green_tea 94
// juice 145
// oolong 21
// soda 66
// water 93

// -gifts

// cow 25
// floss 37
// gong 10
// pineapple 27
// yolk 54

// -salty

// can 64
// instant_noodles 223
// peanut 83

// path.map((v, i) => {
for (let i = 1; i <= 31; i++) {
  const imagePath = require(`@/public/img/cookies/pancake/pancake (${i}).png`)
  imgSrc.push(imagePath.default)
}
// })

// -cookies

// chips 87
// crisps 123
// milk_crackers 63
// oodles 38
// pancake 31
// puffs 49
// shaqima 67
// soda_crackers 86
// yolk_pie 89

// @/public/img/cookies/chips/chips (${i}).png
// @/public/img/cookies/crisps/crisps (${i}).png
// @/public/img/cookies/milk_crackers/milk_crackers (${i}).png
// @/public/img/cookies/oodles/oodles (${i}).png
// @/public/img/cookies/pancake/pancake (${i}).png
// @/public/img/cookies/puffs/puffs (${i}).png
// @/public/img/cookies/shaqima/shaqima (${i}).png
// @/public/img/cookies/soda_crackers/soda_crackers (${i}).png
// @/public/img/cookies/yolk_pie/yolk_pie (${i}).png
// export default function ImgTest() {
//   return (
//     <Container className="">
//       <Row className={`${styles.row}  border`}>
//         {imgSrc.map((v, i) => {
//           return (
//             <Col key={i} className="">
//               <ShopProductsCard src={v} />
//             </Col>
//           )
//         })}
//       </Row>
//     </Container>
//   )
// }
function chunkArray(arr, size) {
  const chunks = []
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size))
  }
  return chunks
}

export default function ImgTest() {
  const imgChunks = chunkArray(imgSrc, 5) // 将 imgSrc 分割成每个子数组包含五个元素的数组

  return (
    <Container className={`${styles.container}`}>
      {imgChunks.map((chunk, rowIndex) => (
        <Row
          key={rowIndex}
          className={`border ${styles.row} ${styles.flex_start}`}
        >
          {chunk.map((src, colIndex) => (
            <Col key={colIndex} className={``}>
              <ShopProductsCard src={src} />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  )
}
