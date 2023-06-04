'use client';

import React, { useState, useEffect } from 'react';
import Cart from './Cart';
import Product from './Product';
import CartSummary from './CartSummary';
import products from '@/data/productsData';
import Image from 'next/image';

// import { sendEmail } from '@/utils/mailer';

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
        const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);
      
        if (existingItemIndex !== -1) {
          const updatedCartItems = [...cartItems];
          updatedCartItems[existingItemIndex].quantity += 1;
          setCartItems(updatedCartItems);
        } else {
          const newItem = {
            ...product,
            quantity: 1,
          };
          setCartItems([...cartItems, newItem]);
        }
      };
      
      

    const removeFromCart = (product) => {
        const itemIndex = cartItems.findIndex((item) => item.id === product.id);

        if (itemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems.splice(itemIndex, 1);
            setCartItems(updatedCartItems);
        }
    };

    const decreaseQuantity = (item) => {
        if (item.quantity === 1) {
            removeFromCart(item);
        } else {
            const updatedCartItems = cartItems.map((cartItem) =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
            );
            setCartItems(updatedCartItems);
        }
    };

    const increaseQuantity = (item) => {
        const updatedCartItems = cartItems.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
        setCartItems(updatedCartItems);
    };

    const toggleCart = () => {
        setCartOpen(!cartOpen);
    };

    const toggleOrderForm = () => {
        setShowOrderForm(!showOrderForm);
    };

    const handleOrderSubmit = (formData) => {
        const emailContent = `
            <h2>Customer details:</h2>
            <p>First name and last name: ${formData.name}</p>
            <p>Email: ${formData.email}</p>
            <h3>Order:</h3>
            <ul>
                ${cartItems.map((item) => `<li>${item.name} - ${item.quantity} pcs.</li>`).join('')}
            </ul>
        `;

        // Implement the email sending logic
        sendEmail('your-email@example.com', 'New order', emailContent).then((success) => {
            if (success) {
                console.log('Order sent!');
                
              // Clear your cart after sending your order
                setCartItems([]);
                setShowOrderForm(false);
            } else {
                console.log('There was a problem sending your order.');
            }
        });
    };

    return (
        <div className='mt-5'>
            <h1 className='mb-10 text-center'>Welcome to the store!</h1>
            <div className='flex flex-row justify-center items-center'>
                {products.map((product) => (
                    <Product key={product.id} product={product} addToCart={addToCart} />
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
                    decreaseQuantity={decreaseQuantity}
                    increaseQuantity={increaseQuantity}
                />
            )}

            <CartSummary items={cartItems} />
        </div>
    );
};

export default Store;