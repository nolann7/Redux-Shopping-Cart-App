import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';

import './Cart.css';
const Cart = () => {
  const dispatch = useDispatch();

  // displaying totalQuantity in the cart
  const quantity = useSelector(state => state.cart.totalQuantity);

  const cartOpenHandler = () => {
    dispatch(cartActions.showCart());
  };

  return (
    <div className="cartIcon" onClick={cartOpenHandler}>
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
