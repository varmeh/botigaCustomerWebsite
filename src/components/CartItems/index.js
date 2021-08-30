import "./style.scss";
import { CartItem } from "../CartItem";

const items = [
  {
    name: "Chocolate Ganache",
    amount: "500 gms",
    price: "120",
  },
  {
    name: "Cheese Corn Samosa",
    amount: "10 pieces",
    price: "200",
  },
  {
    name: "Classic Mango Pickle",
    amount: "300 gms",
    price: "249",
  },
];

export const CartItems = ({ showButtons }) => {
  return (
    <div className="cartItems">
      {items.map((item, index) => (
        <CartItem showButtons={showButtons} {...item} key={index} />
      ))}
    </div>
  );
};
