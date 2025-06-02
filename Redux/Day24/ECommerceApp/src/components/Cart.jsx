import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.qty, 0).toFixed(2);
  };

  if (cartItems.length === 0) {
    return (
      <div className="container py-5">
        <h3 className="text-center">Your Cart is Empty</h3>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center fw-bold">Shopping Cart</h2>
      <div className="row">
        {cartItems.map((item) => (
          <div className="col-md-6 mb-4" key={item.id}>
            <div className="card shadow-sm" style={{ backgroundColor: '#FFF2EB' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="img-fluid rounded-start"
                    style={{ height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">Price: ${item.price}</p>
                    <p className="card-text">Quantity: {item.qty}</p>
                    <p className="card-text fw-bold">Total: ${(item.qty * item.price).toFixed(2)}</p>
                    <button
                      className="btn btn-outline-dark"
                      style={{ backgroundColor: '#FFD6BA' }}
                      onClick={() => handleRemove(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-end fw-bold fs-5 mt-4">
        Grand Total: ${getTotal()}
      </div>
    </div>
  );
};

export default Cart;
