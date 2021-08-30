import "./style.scss";

import redCross from "../../assets/red-crossicon.svg";
import greenTick from "../../assets/order-greentick.svg";
import placedOrder from "../../assets/order-placed.svg";
import { Link } from "react-router-dom";
export const OrderItem = ({
  shop = "",
  info = "",
  status = "",
  amount = "",
  code = "",
}) => {
  
  let statusBox;
  if (code === "1") {
    statusBox = <img src={placedOrder} alt="..." />;
  } else if (code === "2") {
    statusBox = <img src={greenTick} alt="..." />;
  } else if (code === "3") {
    statusBox = <img src={greenTick} alt="..." />;
  } else {
    statusBox = <img src={redCross} alt="..." />;
  }

  return (
    <Link to="/orderdetail" className="orderitem">
      <div className="detail">
        <p> {shop} </p>
        <span style={{ color: "black", fontWeight: 600 }}>
          &#x20b9;{amount}
        </span>
      </div>

      <span> {info} </span>
      <div className="status">
        {statusBox}
        <p> {status} </p>
      </div>
    </Link>
  );
};
