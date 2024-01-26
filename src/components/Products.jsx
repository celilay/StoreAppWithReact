import React from "react";
import "./product.scss"

export const Products = ({ veri,addBasket }) => {
  return (
    <>
      <div className="container">
        {veri.map((d) => (
          <div className="cardBody" key={d.id}>
            <img src={d.image} />
            <p className="title">{d.title.substring(0,20)}</p>
            <p className="price">{`$ ${d.price}`}</p>
            <button className="button" onClick={()=>addBasket(d)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
};
