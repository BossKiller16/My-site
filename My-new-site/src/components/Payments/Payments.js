import React from 'react'
import { StripeProvider } from 'react-stripe-elements'
import FormPayments from './FormPayments'
function Payments() {
   return (
      <>
         <StripeProvider apiKey={process.env.REACT_APP_KEY_PUBLIC}>
            <FormPayments />
         </StripeProvider>
      </>
   )
}

export default Payments
