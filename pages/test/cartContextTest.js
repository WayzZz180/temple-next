import { useContext } from 'react';
import CartContext from '@/contexts/CartCountContext';

export default function SomePageComponent() {
  const { cartCount, setCartCount } = useContext(CartContext);

  const handleUpdateCartCount = () => {
    // 假設在某些事件處理中更新購物車數量
    const newCount = cartCount + 1;
    setCartCount(newCount);
  };

  return (
    <div>
      <p>購物車數量：{cartCount}</p>
      <button onClick={handleUpdateCartCount}>增加數量</button>
    </div>
  );
}
