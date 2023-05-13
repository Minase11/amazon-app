import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom";

const Subtotal = () => {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              <span>This order contains a gift</span>
            </small>
          </>
        )}
        displayType="text"
        decimalScale={2}
        value={getBasketTotal(basket)}
        thousandSeparator={true}
        prefix="$"
      />
      <button onClick={() => navigate("/payment")}>Proceed To Checkout</button>
    </div>
  );
};

export default Subtotal;
