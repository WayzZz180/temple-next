import { useState, useEffect } from 'react'

export default function usePath(data) {
  const [imgSrc, setImgSrc] = useState([])

  useEffect(() => {
    const loadImagePaths = () => {
      if (data && Array.isArray(data)) {
        const paths = data.map((v) => {
          return `/${v.image}?v=12345`
        })
        setImgSrc(paths)
      }
    }

    loadImagePaths()
  }, [data])

  return { imgSrc, setImgSrc }
}
