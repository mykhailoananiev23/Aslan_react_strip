import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('your_stripe_publishable_key');

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleOtherFormSubmit = async (formData) => {
    // Handle submission of other form data
    console.log('Other form data:', formData);
  };

  return (
    <div>
      <h1>Choose Payment Method</h1>
      <div>
        <label>
          <input
            type="radio"
            value="card"
            checked={paymentMethod === 'card'}
            onChange={handlePaymentMethodChange}
          />
          Card Payment
        </label>
        <label>
          <input
            type="radio"
            value="other"
            checked={paymentMethod === 'other'}
            onChange={handlePaymentMethodChange}
          />
          Other Payment Method
        </label>
      </div>
      <Elements stripe={stripePromise}>
        <CheckoutForm paymentMethod={paymentMethod} onOtherFormSubmit={handleOtherFormSubmit} />
      </Elements>
    </div>
  );
};

export default PaymentPage;
