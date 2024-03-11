// This is your test secret API key.
const stripe = require('stripe')('sk_test_51OrwZd2MYeojk7WwFskOWCv2QFOgWZ5tTStlPZmf24lggRq1h8plbkaXzmSBTTftr1sIEbUtoJJXfqzTRzOw8Hgo00pL6BOB8K');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://192.168.107.145:3000'
app.use(express.json());
app.post('/create-checkout-session', async (req, res) => {
  const PRICE = req.body.price;
  const TAGET=req.body.target;
console.log(TAGET);
  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: PRICE,
        quantity: 1,
      },
    ],
    mode: 'payment',
    return_url: `${YOUR_DOMAIN}/${TAGET}`,
  });

  res.send({clientSecret: session.client_secret});
});

app.get('/session-status', async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

  res.send({
    status: session.status,
    customer_email: session.customer_details.email
  });
});

app.listen(4242, () => console.log('Running on port 4242'));