import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  cart: [],
  total: 0,
  totalQuantity: 0, 
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0); 
  const [totalQuantity, setTotalQuantity] = useState(0); 

  
  useEffect(() => {
    const newTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);

    const newTotalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    setTotalQuantity(newTotalQuantity);
  }, [cart]);

  const addItem = (item, quantity) => {
    if (!isIncart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error('El producto ya fue agregado');
    }
  }

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  }

  const clearCart = () => {
    setCart([]);
  }

  const isIncart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
