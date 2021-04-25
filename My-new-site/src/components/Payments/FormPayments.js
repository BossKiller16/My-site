import { useState, useRef, useContext } from 'react'
import { Store } from '../chart/CartReducer'
import styles from './FormPayments.module.css'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import axios from 'axios'

function FormPayments() {
   const emailRef = useRef()
   const lastNameRef = useRef()
   const numberRef = useRef()
   const uliceRef = useRef()
   const obecRef = useRef()
   const nameRef = useRef()
   /*    const PSCRef = useRef()
    */ const [cart, setCart] = useContext(Store)
   const getTotalSum = () => {
      return cart.reduce(
         (sum, { price, quantity }) => sum + price * quantity,
         0
      )
   }

   const totalSum = getTotalSum()
   console.log(totalSum)
   const stripe = useStripe()
   const elements = useElements()

   const handleSubmit = async (e) => {
      e.preventDefault()
      const billingDetails = {
         address_city: obecRef.current.value,
         address_line1: uliceRef.current.value,
         address_country: 'CZ',
         email: emailRef.current.value,
         name: nameRef.current.value + ' ' + lastNameRef.current.value,
         phone: numberRef.current.value,
      }
      const token = await stripe
         .createToken(elements.getElement(CardElement), billingDetails)
         .then(function (result) {
            handleToken(result)
         })
   }

   async function handleToken(token) {
      console.log(token)
      const headers = {
         'Content-Type': 'application/json',
      }
      const response = await axios.post('http://localhost:4000/payment', {
         token,
         totalSum,
         cart,
      })
      const { status } = response.data
   }
   var cardElementOptions = {
      base: {
         color: '#303238',
         fontSize: '16px',
         fontFamily: '"Open Sans", sans-serif',
         fontSmoothing: 'antialiased',
         '::placeholder': {
            color: '#CFD7DF',
         },
      },
      invalid: {
         color: '#e5424d',
         ':focus': {
            color: '#303238',
         },
      },
   }
   return (
      <main className={styles.main}>
         <h1 className={styles.nadpis}>Platba</h1>
         <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.form_inner}>
               <div className={styles.form_group}>
                  <label>Jméno:</label>
                  <input type="text" ref={nameRef} />
               </div>
               <div className={styles.form_group}>
                  <label>Příjmení:</label>
                  <input type="text" ref={lastNameRef} />
               </div>
               <div className={styles.form_group}>
                  <label>Email:</label>
                  <input type="email" ref={emailRef} />
               </div>
               <div className={styles.form_group}>
                  <label>Tel:</label>
                  <input type="Tel" ref={numberRef} />
               </div>
               <div className={styles.form_group}>
                  <label>Ulice a č. p.:</label>
                  <input type="text" ref={uliceRef} />
               </div>{' '}
               {/*        <div className={styles.form_group}>
                  <label>PSČ:</label>
                  <input type="text" ref={PSCRef} />
               </div> */}
               <div className={styles.form_group}>
                  <label>Obec:</label>
                  <input type="text" ref={obecRef} />
               </div>
               <div className={styles.form_group}>
                  Platební údaje
                  <CardElement options={cardElementOptions} />
               </div>
               <button type="submit" className={styles.button}>
                  <div>Celkově Zaplatit {totalSum}</div>
               </button>
            </div>
         </form>
      </main>
   )
}

export default FormPayments
