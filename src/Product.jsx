import React from "react";
import "./Product.css";
import { StarRate } from "@mui/icons-material";
import { useStateValue } from "./StateProvider";

const Product = ({ id, title, price, rating, image }) => {
  const [state, dispatch] = useStateValue();

  const add_To_Basket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <StarRate
                key={index}
                style={{ color: "orange" }}
                fontSize="large"
              />
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={add_To_Basket}>Add To Basket</button>
    </div>
  );
};

export default Product;
