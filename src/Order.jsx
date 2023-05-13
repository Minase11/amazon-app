import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

const Order = ({ order }) => {
  return (
    <div className="order">
      <h3>Order</h3>
      <p className="order__id">{order?.id}</p>
      <p>{moment.unix(order?.data.created).format("MMMM Do YYYY h:mma")}</p>
      {order?.data.basket.map((item, index) => (
        <CheckoutProduct
          key={index}
          id={item.id}
          title={item.title}
          price={item.price}
          rating={item.rating}
          image={item.image}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <p>
            Order Total: <strong>{value}</strong>
          </p>
        )}
        displayType="text"
        decimalScale={2}
        value={order?.data.amount}
        thousandSeparator={true}
        prefix="$"
      />
    </div>
  );
};

export default Order;
