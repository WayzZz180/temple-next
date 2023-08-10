import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
const CartCountContext = createContext({})
export default CartCountContext

export const CartCountContextProvider = function ({ children }) {
  const [cartCount, setCartCount] = useState(0)

  const router = useRouter()

  const getCartCount = () => {
    const auth = localStorage.getItem('auth')
    if (auth) {
      const obj = JSON.parse(auth)
      const Authorization = 'Bearer ' + obj.token
      fetch(`${process.env.API_SERVER}/shop/count`, {
        headers: {
          Authorization,
        },
      })
        .then((r) => r.json())
        .then((data) => {
          setCartCount(data)
        })
    }
  }

  useEffect(() => {
    getCartCount()
  }, [router.query])

  return (
    <CartCountContext.Provider
      value={{ cartCount, setCartCount, getCartCount }}
    >
      {children}
    </CartCountContext.Provider>
  )
}
