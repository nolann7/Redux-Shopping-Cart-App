import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "./../store/cart-slice";
import "./Cart.css";


const CartItem = ({ name, quantity, totalPrice, price, id }) => {

  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };
  const addHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
      })
    );
  };
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${totalPrice}</article>
      <button className="cart-actions" onClick={removeHandler}>
        -
      </button>
      <button className="cart-actions" onClick={addHandler}>
        +
      </button>
    </div>
  );
};

export default CartItem;
