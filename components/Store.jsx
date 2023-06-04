'use client';

import React, { useState } from 'react';
import Cart from './Cart';
import Product from './Product';
import CartSummary from './CartSummary';
import products from '@/utils/productsData';
import Image from 'next/image';

const Store = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [showOrderForm, setShowOrderForm] = useState(false);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const removeFromCart = (product) => {
        const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
        setCartItems(updatedCartItems);
    };

    const toggleCart = () => {
        setCartOpen(!cartOpen);
    };

    const toggleOrderForm = () => {
        setShowOrderForm(!showOrderForm);
    };

    const handleOrderSubmit = (formData) => {
        const emailBody = `
            Order:
            ${items.map((item) => `${item.name} - ${item.price}`).join('\n')}

            Customer details:
            First name and last name: ${formData.name}
            Email: ${formData.email}
            Address: ${formData.address}
        `;

        // Implement the email sending logic


        setCartItems([]);
        setShowOrderForm(false);
    };

    return (
        <div className='mt-5'>
            <h1 className='mb-10 text-center'>Welcome to the store!</h1>
            <div className='flex flex-row justify-center items-center'>
                {products.map((product) => (
                    <Product key={product.id} product={product} addItem={addToCart} />
                ))}
            </div>

            <div className='flex justify-center items-center m-10' onClick={toggleCart}>
                <Image
                    src='/assets/icons/cart-icon.svg'
                    alt='Cart Icon'
                    width={50}
                    height={50}
                    className='cursor-pointer'
                />
            </div>

            {cartOpen && (
                <Cart
                    items={cartItems}
                    removeFromCart={removeFromCart}
                    toggleCart={toggleCart}
                    toggleOrderForm={toggleOrderForm}
                    showOrderForm={showOrderForm}
                    handleOrderSubmit={handleOrderSubmit}
                />
            )}

            <CartSummary items={cartItems} />
        </div>
    );
};

export default Store;