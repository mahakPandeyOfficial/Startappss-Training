import React from 'react';
import  {  useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';

const products = [
    { id: 1, name: 'Laptop', price: 100000 },
    { id: 2, name: 'Mobile', price: 20000 },
    { id: 3, name: 'Charger', price: 300 },
    { id: 4, name: 'Headphones', price: 1500 },
    { id: 5, name: 'Mouse', price: 500 },
    { id: 6, name: 'Keyboard', price: 800 },
    { id: 7, name: 'Monitor', price: 12000 },
    { id: 8, name: 'Printer', price: 8000 },
    { id: 9, name: 'Webcam', price: 2500 },
    { id: 10, name: 'Speakers', price: 3000 }
];

function ProductList() {
    const dispatch = useDispatch();

    return (
        <>
          <div>
            <h2>Product Cart</h2>

            <ul>
                {products.map(product => (
                    <li key= {product.id}>
                        {product.name} 
                        <button onClick={() => dispatch(addToCart(product))} >Add To Cart</button>
                    </li>
                ))}
            </ul>
          </div>
        </>
    )
}

export default ProductList;