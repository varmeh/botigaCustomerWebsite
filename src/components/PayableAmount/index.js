import "./style.scss";

import locationIcon from "../../assets/location-black.svg";

export const PayableAmount = ({
  addressTitle = "",
  addressContent = "",
  onClick = () => 0,
  count = 0,
  amount = 0,
}) => (
  <div className="payableAmount">
    <div className="address">
      <div>
        <h5>{addressTitle}</h5>
        <p>{addressContent}</p>
      </div>
      <img src={locationIcon} alt="location" />
    </div>
    <div className="amount" onClick={onClick}>
      <span>Pay for {count} item</span>
      <span>Rs.{amount}</span>
    </div>
  </div>
);
