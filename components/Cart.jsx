'use client';

import React, { useState } from 'react';
import Item from './Item';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

const Cart = () => {
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);

    const addItem = (product) => {
        setItems([...items, product]);
        setTotal(total + product.price);
    };

    const removeItem = (product) => {
        const updatedItems = items.filter((i) => i !== product);
        
        setItems(updatedItems);
        setTotal(total - product.price);
    };

    const sendOrder = () => {
        // add logic for sending an order via email, np. nodemailer
        // Configure the shipping data and call the appropriate functions
        console.log('The order has been sent!');
    };


    return (
        <div className='flex flex-col justify-center items-center p-5'>
            <h1>Shopping cart</h1>
            <Item addItem={addItem} />
            <div className='flex justify-center items-center m-10'>
                {items.map((product, index) => (
                    <CartItem key={index} product={product} removeItem={removeItem} />
                ))}
            </div>
            <CartSummary items={items} total={total} />
            <button className='m-2 p-2 border rounded-xl' onClick={sendOrder}>Send</button>
        </div>
    );
};

export default Cart;