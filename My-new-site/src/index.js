import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { CartProvider } from './components/chart/CartReducer'
import { AuthProvider } from './components/Login/RegisterState'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const stripe = loadStripe(process.env.REACT_APP_KEY_PUBLIC, {
   locale: 'cs',
})

ReactDOM.render(
   <Elements stripe={stripe}>
      <AuthProvider>
         <CartProvider>
            <App />
         </CartProvider>
      </AuthProvider>
   </Elements>,

   document.getElementById('root')
)
