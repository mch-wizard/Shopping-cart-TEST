'use client';

import React, { useState } from 'react';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

const Cart = ({items, removeFromCart, toggleCart, toggleOrderForm, showOrderForm, handleOrderSubmit}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        handleOrderSubmit(formData);
    };


    return (
        <div className='flex flex-col justify-center items-center p-5'>
            <div className='flex flex-col justify-center items-center'>
                <h2>Shopping cart</h2>
                <button className='m-2 p-2 border rounded-xl' onClick={toggleCart}>
                    Close
                </button>
            </div>

            <div className='flex flex-row justify-center items-center mt-5 mb-5'>
                {items.length === 0 ? (
                    <p>The shopping cart is empty!</p>
                ) : (
                    items.map((item) => (
                        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
                    ))
                )}
            </div>

            <CartSummary items={items} />

            {!showOrderForm ? (
                <button className='m-2 p-2 border rounded-xl' onClick={toggleOrderForm}>
                    Send
                </button>
            ) : (
                <form className='flex flex-col justify-center items-center mt-5' onSubmit={handleSubmit}>
                    <h3>The order form</h3>

                    <input
                        type='text'
                        name='name'
                        placeholder='first name and last name'
                        value={formData.name}
                        onChange={handleInputChange}
                        className='m-2'
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className='m-2'
                        required
                    />

                    <textarea
                        name="address"
                        placeholder="Adres dostawy"
                        value={formData.address}
                        onChange={handleInputChange}
                        rows='5'
                        cols='33'
                        className='m-2 text-black'
                        required
                    ></textarea>

                    <button className='m-2 p-2 border rounded-xl' type='submit'>Send</button>

                </form>
            )}
            
        </div>
    );
};

export default Cart;