import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
    return (
        <div className='flex flex-col justify-center items-center m-5 p-5 border rounded-xl'>
            <p>{item.name}</p>
            <p> Price: {item.price} $</p>
            <button className='m-2 p-2 border rounded-xl' onClick={() => removeFromCart(item)}>
                Delete
            </button>
        </div>
    );
};

export default CartItem;