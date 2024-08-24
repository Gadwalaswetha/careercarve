import React from 'react';

const PaymentPage = ({ amount }) => {
  return (
    <div>
      <h1>Payment</h1>
      <p>Total Amount: ₹{amount}</p>
      <button onClick={() => alert('Payment Successful!')}>Pay Now</button>
    </div>
  );
};

export default PaymentPage;
