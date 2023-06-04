import React from 'react';

const CartItem = ({ item, removeFromCart, decreaseQuantity, increaseQuantity }) => {
    return (
        <div className='flex flex-col justify-center items-center m-5 p-5 border rounded-xl'>
            <div className='flex flex-col justify-center items-center'>
                <p>{item.name}</p>
                <p> Price: {item.price} $</p>

                <div className='flex justify-center items-center mt-2 mb-2'>
                    <button className='p-3 border rounded-xl mr-2' onClick={() => decreaseQuantity(item)}>
                        -
                    </button>
                    <p>{item.quantity}</p>
                    <button className='p-3 border rounded-xl ml-2' onClick={() => increaseQuantity(item)}>
                        +
                    </button>
                </div>
            </div>
            <button className='m-2 p-2 border rounded-xl' onClick={() => removeFromCart(item)}>
                Delete
            </button>
        </div>
    );
};

export default CartItem;