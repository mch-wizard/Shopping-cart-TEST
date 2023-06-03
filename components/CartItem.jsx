import React from 'react';

const CartItem = ({ product, removeItem }) => {
    return (
        <div className='flex flex-col justify-center items-center m-5 p-5 border rounded-xl'>
            <p>{product.name}</p>
            <p>{product.price} $</p>
            <button className='m-2 p-2 border rounded-xl' onClick={() => removeItem(product)}>Delete</button>
        </div>
    );
};

export default CartItem;