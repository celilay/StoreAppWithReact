import React, { useState } from "react";
import "./navbar.scss";
import { PiBasketLight } from "react-icons/pi";

export const Navbar = ({ basket, totalPrice }) => {
  const [basViewVis, setbasViewVis] = useState(false);

  const basketSet = () => {
    if (basket.length >= 1) {
      setbasViewVis(!basViewVis);
    }
  };
  return (
    <div className="navbar">
      <p className="logo">STORE</p>
      <div className="basketContainer">
        <PiBasketLight className="basket" onClick={basketSet} />
        <div className="basketCount">{basket.length}</div>
      </div>
      {basViewVis && (
        <div className="basketview">
          <p className="basketTitle">Shopping Cart</p>
          {basket.map((item) => (
            <div className="basketCard" key={item.id}>

              <img src={item.image} />
              <div className="item">{item.title.substring(0, 20)}</div>
              <p className="navprice">{item.price} $</p>
            </div>
          ))}
          <div className="totalPrice">
              <span>Toplam:</span>
              <span>$ {Number(totalPrice).toFixed(2)}</span>
              <button className="clear">Clear Shoping Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};
