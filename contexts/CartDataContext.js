import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
const CartDataContext = createContext({})
export default CartDataContext

export const CartDataContextProvider = function ({ children }) {
  const [cartData, setCartData] = useState([])
  const router = useRouter()

  const getCartData = () => {
    const auth = localStorage.getItem('auth')
    if (auth) {
      const obj = JSON.parse(auth)
      const Authorization = 'Bearer ' + obj.token
      fetch(`${process.env.API_SERVER}/shop/cart`, {
        headers: {
          Authorization,
        },
      })
        .then((r) => r.json())
        .then((data) => {
          setCartData(data)
        })
    }
  }
  useEffect(() => {
    getCartData()
  }, [router.query])

  return (
    <CartDataContext.Provider value={{ cartData, setCartData, getCartData }}>
      {children}
    </CartDataContext.Provider>
  )
}
