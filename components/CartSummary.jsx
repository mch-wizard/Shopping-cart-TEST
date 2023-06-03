import React from 'react'

const CartSummary = ({ items, total }) => {
    return (
        <div>
            <h2>Order summary</h2>
            {items.map((product, index) => (
                <p key={index}>{product.name}: {product.price}</p>
            ))}
            <p>Total amount: {total} $</p>
        </div>
    );
};

export default CartSummary;