import React from "react";
import ReactDOM from "react-dom"

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const Checkout = () => {
  const createOrder = (data, actions) =>{
    return actions.order.create({
      purchase_units: [
        {
          description: "Vanilla Blog",
          amount: {
            value: "0.50",
          },
        },
      ],
    });
  };

  const onApprove = async (data, actions) => {
    const order = await actions.order.capture();
    console.log(order, data)

    await fetch('/purchase-confirmation',{
    method: 'post',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(order)
  });

  };

  return (
      <div className = 'checkout-button-wrapper'>
        <h1 className = 'left-greeting'>ITS ALMOST YOURS!</h1>
        <div className = 'checkout-button-wrapper_img'></div>
        <PayPalButton
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
            />
      </div>
  );
}

export default Checkout
