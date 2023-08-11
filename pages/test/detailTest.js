import React from 'react'

const ProductDetails = ({ dataFromDatabase }) => {
  return <div dangerouslySetInnerHTML={{ __html: dataFromDatabase }} />
}

export default ProductDetails

export async function getServerSideProps() {
  const dataFromDatabase =
    '華元 波的多濃厚蚵仔煎洋芋片213g/包\r\n熱銷20年經典零食 夾鏈袋設計~封口好保存 吃趣味 吃氣味 攏是吃這味 經典獨門口味 越吃越涮嘴'

  const sanitizedData = dataFromDatabase.replace(/\r\n/g, '<br />')

  return {
    props: {
      dataFromDatabase: sanitizedData,
    },
  }
}
