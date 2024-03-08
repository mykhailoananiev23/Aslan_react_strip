// Checkout.js
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51OmaaTFnjeAcTNL6XhuHz77j5DppPZ1JSyO90S03CpjNnxdnDC2rkOMWNmfWPz0DTRSALcwI6i3m228G0jplvtxC00ZdmDOwys');
const Checkout = (props) => {
  const option__ = {
    // passing the client secret obtained from the server
    // clientSecret: '{{CLIENT_SECRET}}',
  };

  console.log(props)
  const price = props.PRICEINFO;

  return (
    <div>
      <Elements stripe={stripePromise} options={option__}>
        <CheckoutForm price={price}/>
      </Elements>
    </div>
  );
};

export default Checkout;
