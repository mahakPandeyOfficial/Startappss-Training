import React from 'react';
import { useSelector, useDispatch  }  from 'react-redux';
import { removeFromCart} from '../actions/cartActions';

function Cart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <>
          <div>
            <h2>Cart</h2>
            {cart.length === 0 ? (<p>Your Cart is empty</p>) : (
                <ul>
                    {cart.map(item => (
                        <li key ={item.id} >
                            {item.name} 
                            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove from cart</button>
                        </li>
                    ))}
                </ul>
            )}
          </div>
        </>
    )
}

export default Cart;