import "./style.scss";
import minusIcon from "../../assets/minus.svg";
import plusIcon from "../../assets/plus.svg";
import { useState } from "react";

export const CartItem = ({
  name = "",
  amount = "",
  price = "",
  showButtons,
}) => {
  const [count, setCount] = useState(1);
  const decrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  price = count * price;

  const addToCart = () => (
    <div className="actions">
      <button className="minus" onClick={decrement}>
        <img src={minusIcon} alt="minus" />
      </button>
      <span>{count}</span>
      <button className="plus" onClick={increment}>
        <img src={plusIcon} alt="plus" />
      </button>
    </div>
  );

  return (
    <div className="cartitem">
      <div className="context">
        <p>{name} </p>
        <span>{amount}</span>
      </div>
      {showButtons && addToCart()}
      <p>&#x20b9;{price}</p>
    </div>
  );
};
