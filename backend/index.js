const { v4: uuid } = require('uuid')
const cors = require('cors')
const express = require('express')
const Stripe = require('stripe')
const { google } = require('googleapis')
require('dotenv').config()

const stripe = Stripe(process.env.REACT_APP_KEY)
const app = express()
app.get('/', async (req, res) => {
   /*  const auth = new google.auth.GoogleAuth({
      keyFile: 'credentials.json',
      scopes: 'https://www.googleapis.com/auth/spreadsheets',
   })

   const client = await auth.getClient()

   const googleSheets = google.sheets({ version: 'v4', auth: client })
   const spreadsheetId = '1tbWKYof6ekLR1uYgjiPkRgfTnrAb2o4GUE_0S467UMI'
   const metaData = await googleSheets.spreadsheets.get({
      auth,
      spreadsheetId,
   })
   res.send(metaData) */
})
app.use(express.json())

app.use(cors())
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
app.listen(4000, (req, res) => console.log('LISTENING AT PORT 4000'))
