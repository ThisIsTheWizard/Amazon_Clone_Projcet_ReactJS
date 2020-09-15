import React from "react";

import "./index.css";

import {useStateValue} from "../../../stateProvider";

function Products({ id, title, price, rating, image }) {

  const [ dispatch ] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        price,
        rating,
        image
      }
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p className="product_title">{ title }</p>

        <p className="product_price">
          <small>$</small>
          <strong>{ price }</strong>
        </p>

        <div className="product_rating">
          {
            Array(rating).fill().map(()=> (
              <p>&#10033;</p>
            ))
          }
        </div>
      </div>

      <img src={image} alt={title} />

      <button onClick={ addToBasket }>Add to Basket</button>
    </div>
  );
}

export default Products;