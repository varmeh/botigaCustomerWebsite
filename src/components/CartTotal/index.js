import "./style.scss";
import { useSelector } from "react-redux";

export const CartTotal = ({
  extra = false
}) => {
  const applied = useSelector((state) => state.coupon.applied);

  return (
    <div className={extra ? "cartTotal border-class" : "cartTotal" }>
      <div className="type1">
        <p>Items Total</p> 
        <p>&#x20b9;1240</p> 
      </div>
      <div className="type1">
        <p>Delivery Fee</p>
        <p>&#x20b9;25</p>
      </div>

      <div className="removeFee">
        <span>Add ₹60 more for Free Shipping</span>
      </div>

      {applied && (
        <div className="withCoupon">
          <p>Saved with coupon</p>
          <span>-&#x20b9;240</span>
        </div>
      )}

      <div className="total">
        <p>Total to pay</p>
        <p>&#x20b9;1200</p>
      </div>
    </div>
  );
};
