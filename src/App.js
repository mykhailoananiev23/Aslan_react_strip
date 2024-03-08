import React, { useState, useEffect } from "react";
import {loadStripe} from '@stripe/stripe-js';
import {  EmbeddedCheckoutProvider,  EmbeddedCheckout} from '@stripe/react-stripe-js';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/css/my_style.css";

import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss?v1.1.0";
import Index from "./views/Index.js";
import Pay from "./App.js";
import Build from "./views/IndexSections/Build_page.js";
import Grow from "./views/IndexSections/Grow_page.js";

const stripePromise = loadStripe("pk_test_51OrwZd2MYeojk7WwLlwx5viX9jLq4i7qGJKPQHXwbQEzfbTJXBVeIdhUocIOSCd4cJqBGiohL8sgHb30QhK14jdx00m1E3fQtw");

const CheckoutForm = () => {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    fetch("/create-checkout-session", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  return (
    <div id="checkout">
      {clientSecret && (
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{clientSecret}}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )}
    </div>
  )
}

const Return = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState('');

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get('session_id');

    fetch(`/session-status?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      });
  }, []);

  if (status === 'open') {
    return (
      <Navigate to="/checkout" />
    )
  }

  if (status === 'complete') {
    return (
      <section id="success">
        <p>
          We appreciate your business! A confirmation email will be sent to {customerEmail}.
          If you have any questions, please email <a href="mailto:orders@example.com">orders@example.com</a>.
        </p>
      </section>
    )
  }

  return null;
}

function App ()  {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"    exact element={<Index />} />
      <Route path="/Build_Pay" exact element={<Pay PRICEINFO={950}  />} />
      <Route path="/Grow_Pay" exact element={<Pay PRICEINFO={2950}  />} />
      <Route path="/Exit_Pay" exact element={<Pay PRICEINFO={8950}  />} />
      <Route path="/build"    exact element={<Build />} />
      <Route path="/grow"    exact element={<Grow />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/return" element={<Return />} />
      </Routes>
  </BrowserRouter>
  
  
  )
}

export default App;
