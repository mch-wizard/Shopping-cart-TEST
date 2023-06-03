import React from 'react';

const product = {
    name: 'Product 1',
    price: 10,
};

const Item = ({addItem}) => {
    return (
        <div className='flex flex-col justify-center items-center m-5 p-5 border rounded-xl'>
            <p>{product.name}</p>
            <p>{product.price} $</p>
            <button className='m-2 p-2 border rounded-xl' onClick={() => addItem(product)}>Add</button>
        </div>
    );
};

export default Item;