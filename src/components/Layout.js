import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import Products from "./Products";
import CartItems from "./CartItems";

import "./Layout.css";


const Layout = () => {
  let total = useSelector((state) => state.cart.totalAmount);

  const showCart = useSelector((state) => state.cart.setShowCart);

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCart && <CartItems/>}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
