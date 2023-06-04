import React from 'react';

const Product = ({ product, addToCart }) => {
    const { id, name, price } = product;

    return (
        <div className='flex flex-col justify-center items-center m-5 p-5 border rounded-xl'>
            <h3>{name}</h3>
            <p>Price: {price} $</p>
            <button className='m-2 p-2 border rounded-xl' onClick={() => addToCart(product)}>
                Add
            </button>
        </div>
    );
};

export default Product;