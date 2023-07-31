import { useContext } from 'react'
import CartContext from '@/contexts/CartCountContext'
export default function AddToCart(count,pid,getCartCount) {
    const addData = { count: count, pid: pid }
    const addToCart=()=>{
        fetch(`${process.env.API_SERVER}/shop/cart`, {
            method: 'POST',
            body: JSON.stringify({ requestData: addData }),
      headers: {
          'Content-Type': 'application/json',
        },
    })
    .then((r) => r.json())
    .then((data) => {
        getCartCount()
    })
    }

    return {addToCart}
}
