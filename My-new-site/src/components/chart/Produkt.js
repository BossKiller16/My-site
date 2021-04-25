import Product from '../Products/data'
import { useContext } from 'react'
import styles from './Cart.module.css'
import * as AiIcons from 'react-icons/ai'
import * as GrIcons from 'react-icons/gr'
import * as TirIcons from 'react-icons/ti'
import { Store } from '../chart/CartReducer'

function Produkty(props) {
   const [cart, setCart] = useContext(Store)
   const quantityHandler = (hodnota) => {
      props.handleQuntityChange(props.id, hodnota)
   }
   const decrement = () => {
      if (cart[0 && 1].quantity === 1) {
         removeFromCart()
      } else {
         quantityHandler(-1)
      }
   }

   console.log(cart[0 && 1].quantity)

   const increment = () => {
      quantityHandler(+1)
   }
   const removeFromCart = () => {
      setCart(cart.filter((product) => product.id !== props.id))
   }
   const currentProduct = Product.find((value) => value.id === props.id) || {}

   return (
      <>
         <cart className={styles.celek}>
            <div key={currentProduct.id} className={styles.blok}>
               <img
                  className={styles.img}
                  alt={currentProduct.name}
                  src={currentProduct.img}
               />
               <h3 className={styles.name}>{currentProduct.name}</h3>
               <h2 className={styles.price}>{currentProduct.price + ',-'}</h2>
               <div className={styles.buttons}>
                  <button
                     key={currentProduct.id}
                     className={styles.minus}
                     onClick={decrement}
                  >
                     <AiIcons.AiOutlineMinus />
                  </button>

                  {<span className={styles.quantity}>{props.quantity}</span>}
                  <button
                     key={currentProduct.id}
                     className={styles.plus}
                     onClick={increment}
                  >
                     <GrIcons.GrAdd />
                  </button>

                  <button
                     onClick={() => removeFromCart(currentProduct)}
                     className={styles.bin}
                  >
                     <TirIcons.TiTimes />
                  </button>
                  <span className={styles.total}>
                     {props.quantity * currentProduct.price + 'Kč'}
                  </span>
               </div>
            </div>
         </cart>
      </>
   )
}

export default Produkty
