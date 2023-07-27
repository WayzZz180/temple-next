import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
const CartContext = createContext({})
export default CartContext


export const CartContextProvider = function ({ children }) {
  const [cartCount, setCartCount] = useState(0)
  const router = useRouter();
  const getCartCount = ()=>{
    fetch(`${process.env.API_SERVER}/shop`)
      .then((r) => r.json())
      .then((data) => {
        console.log('data:',data)
        setCartCount(data)
      })
  }
  useEffect(() => {
    getCartCount()
  }, [router.query])

  return (
    <CartContext.Provider value={{ cartCount, setCartCount, getCartCount}}>
      {children}
    </CartContext.Provider>
  )
}