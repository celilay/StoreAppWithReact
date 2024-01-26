import React, { useState } from "react";
import "./navbar.scss";
import { PiBasketLight } from "react-icons/pi";

export const Navbar = ({ basket }) => {
  const [basViewVis, setbasViewVis] = useState(false);

  const basketSet = () =>{

    if(basket.length >= 1){
      setbasViewVis(!basViewVis)
    }
  }

  return (
    <div className="navbar">
      <p>STORE</p>
      <div className="basketContainer">
        <PiBasketLight className="basket" onClick={basketSet} />
        <div className="basketCount">{basket.length}</div>
      </div>
      {
        basViewVis && 
        <div className="basketview">
          {basket.map((item) => (
            <div className="basketCard">
              <img src={item.image} />
              <div className="item">{item.title}</div>
            </div>
          ))}
        </div>
      }
    </div>
  );
};
