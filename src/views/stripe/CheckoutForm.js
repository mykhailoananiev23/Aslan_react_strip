import React, { useState, useEffect } from "react";
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe("pk_test_51OrwZd2MYeojk7WwLlwx5viX9jLq4i7qGJKPQHXwbQEzfbTJXBVeIdhUocIOSCd4cJqBGiohL8sgHb30QhK14jdx00m1E3fQtw");

const CheckoutForm = ({ PRICEINFO }) => {
  const [clientSecret, setClientSecret] = useState('');

  var PRICE = "";

  useEffect(() => {
    switch (PRICEINFO) {
      case "build":
        PRICE = "price_1OsAPw2MYeojk7WwyrCKqKUk";
        break;
      case "grow":
        PRICE = "price_1OsAQQ2MYeojk7Ww3HLNOlwT";

        break;
      case "exit":
        PRICE = "price_1OsAQq2MYeojk7WwGR7v6lyr";

        break;
    }
    fetch("/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: PRICE,
        target: PRICEINFO,

      })
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  return (
    <div id="checkout">
      {clientSecret && (
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{ clientSecret }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )}
    </div>
  )
}
export default CheckoutForm;