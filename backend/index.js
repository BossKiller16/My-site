/* const { v4: uuid } = require('uuid'); */
const cors = require("cors");
const express = require("express")
const stripe = require("stripe")(process.env.REACT_APP_KEY)
const app = express();
app.use(express.json())
app.use(cors());
app.get("/", (req, res) => {
    res.send("IT WORKS")
})
app.get("/payment", (req, res) => {
    const { cart, token } = req.body.stripeToken
    console.log("cart", cart);
    console.log("price", cart.price);
    /*     const idempontencyKey = uuid(); */
    return stripe.customers.create({
        email: token.email,
        source: token.id
    }).then(customer => {
        stripe.charges.create({
            amount: cart.price * 100,
            currency: 'czk',
            customer: customer.id,
            receipt_email: token.email,
            source: token,
            description: "HEJ"
        })
    }).then(result => res.status(200).json(result))
        .catch(err => console.log(err))
})
app.listen(8282, () => console.log("LISTENING AT PORT 8282"));


