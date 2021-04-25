import React, { useState, createContext, useEffect } from 'react'

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')
export const CartProvider = ({ children }) => {
   const [cart, setCart] = useState(cartFromLocalStorage)
   const getTotalSum = () => {
      return cart.reduce(
         (sum, { price, quantity }) => sum + price * quantity,
         0
      )
   }
   useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart))
   }, [cart])

   return <Store.Provider value={[cart, setCart]}>{children}</Store.Provider>
}

export const Store = createContext(cartFromLocalStorage)

export default CartProvider
