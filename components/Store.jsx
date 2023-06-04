'use client';

import React, { useState, useEffect } from 'react';
import Cart from './Cart';
import Product from './Product';
import CartSummary from './CartSummary';
import products from '@/utils/productsData';
import Image from 'next/image';

import { v4 as uuidv4 } from 'uuid';

const Store = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [showOrderForm, setShowOrderForm] = useState(false);

    useEffect(() => {
        const savedCartItems = localStorage.getItem('cartItems');
        if (savedCartItems) {
            setCartItems(JSON.parse(savedCartItems));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        const newItem = {
            ...product,
            id: uuidv4(), // generating a unique identifier
        }
        setCartItems([...cartItems, newItem]);
    };

    const removeFromCart = (product) => {
        const itemIndex = cartItems.findIndex((item) => item.id === product.id);

        if (itemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems.splice(itemIndex, 1);
            setCartItems(updatedCartItems);
        }
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