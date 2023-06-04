import React from 'react';

const CartSummary = ({ items }) => {
    const getTotalPrice = () => {
        return items.reduce((total, item) => total + item.price, 0);
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <h3>Order summary</h3>
            <p>Number of products: {items.length}</p>
            <p>Total amount: {getTotalPrice()} $</p>
        </div>
    );
};

export default CartSummary;