import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Cart.module.css'
import * as BiIcons from 'react-icons/bi'
import StripeCheckout from 'react-stripe-checkout'
import Products from './Produkt'
import { useContext } from 'react'
import { Store } from '../chart/CartReducer'

export const Cart = () => {
   const [cart, setCart] = useContext(Store)

   const handleQuntityChange = (id, hodnota) => {
      const newState = cart.map((value) => {
         if (value.id === id)
            return { ...value, quantity: value.quantity + hodnota }
         return value
      })
      setCart(newState)
   }

   const getTotalSum = () => {
      return cart.reduce(
         (sum, { price, quantity }) => sum + price * quantity,
         0
      )
   }
   const totalSum = getTotalSum()

   var DPH = getTotalSum() * 0.15

   if (cart.length === 0) {
      return (
         <cart>
            <p className={styles.empty}>
               Košík je prázdný
               <BiIcons.BiSad />
            </p>
         </cart>
      )
   }

   return (
      <cart>
         <h1 className={styles.nadpis}>Košík</h1>
         {cart.map((val, index) => (
            <Products
               key={index}
               id={val.id}
               quantity={val.quantity}
               handleQuntityChange={handleQuntityChange}
            />
         ))}

         <div className={styles.DPH}>
            Celkem bez DPH {getTotalSum() - DPH} Kč
            <br />
            Celkem s DPH {getTotalSum()} Kč
         </div>
         <Link to="platba">
            <button className={styles.btn}>Pokračovat v objednávce</button>
         </Link>
      </cart>
   )
}

export default Cart
