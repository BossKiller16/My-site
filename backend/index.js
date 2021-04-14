const { v4: uuid } = require('uuid')
const cors = require('cors')
const express = require('express')
const Stripe = require('stripe')
require('dotenv').config()

var bodyParser = require('body-parser')
const stripe = Stripe(process.env.REACT_APP_KEY)
const app = express()
app.use(express.json())

app.use(cors())
app.get('/', (req, res) => {
   res.send('IT WORKS')
})

app.post('/payment', async (req, res) => {
   const { cart, token, totalSum, billingDetails, email, nameRef } = req.body

   const idempontencyKey = uuid()
   const customer = await stripe.customers
      .create({
         email: token.token.email,
         shipping: {
            address: {
               line1: token.token.card.address_line1,
               city: token.token.card.address_city,
               state: 'Czech Republic',
            },
            name: token.token.card.name,
            phone: token.token.card.phone,
         },
      })
      .catch((e) => console.log('customer', e))
   const charge = await stripe.charges
      .create({
         source: token.token.id,
         amount: totalSum * 100,
         currency: 'czk',
         description: 'Potraviny',
      })
      .catch((e) => console.log('charge', e))

   const paymentIntent = await stripe.paymentIntents
      .create({
         amount: charge.amount,
         currency: 'czk',
         payment_method_types: token.card,
         receipt_email: customer.email,
      })
      .catch((e) => console.log('paymentIntent', e))
   await stripe.paymentIntents.confirm(paymentIntent.id, {
      payment_method: 'pm_card_visa',
   })

   return res.send(req.body)
})
app.listen(4000, () => console.log('LISTENING AT PORT 4000'))
