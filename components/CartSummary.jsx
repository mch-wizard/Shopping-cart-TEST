import React from 'react';

const CartSummary = ({ items }) => {
    const getTotalPrice = () => {
        let totalPrice = 0;
        items.forEach((item) => {
            totalPrice += item.price * item.quantity;
        });
        return totalPrice.toFixed(2);
    };

    const getTotalQuantity = () => {
        let totalQuantity = 0;
        items.forEach((item) => {
          totalQuantity += item.quantity;
        });
        return totalQuantity;
      };

    return (
        <div className='flex flex-col justify-center items-center'>
            <h3>Order summary</h3>
            <p>Number of products: {getTotalQuantity()}</p>
            <p>Total amount: {getTotalPrice()} $</p>
        </div>
    );
};

export default CartSummary;