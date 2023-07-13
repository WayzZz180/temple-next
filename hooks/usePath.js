import { useState, useEffect } from 'react'

export default function usePath(
  category = 'cookies',
  product = 'pancake',
  length = 10
) {
  const [imgSrc, setImgSrc] = useState([])

  useEffect(() => {
    const loadImagePaths = () => {
      const paths = Array.from({ length }, (_, i) => {
        const imagePath = require(`@/public/img/${category}/${product}/${product} (${
          i + 1
        }).png`)
        return imagePath.default
      })
      setImgSrc(paths)
    }

    loadImagePaths()
  }, [category, product])

  return { imgSrc, setImgSrc }
}
