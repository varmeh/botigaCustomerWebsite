import "./style.scss";
import { AppLayout } from "../../components";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { coupons } from "../../data/coupon";
import { couponActions } from "../../store/cart-coupon";

export const ApplyCoupon = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const applyCoupon = (code) => {
    dispatch(couponActions.apply(code));
  };

  return (
    <AppLayout showNavigation={false}>
      <div className="coupon">
        <div className="header">
          <KeyboardBackspaceIcon
            onClick={() => {
              history.push("/cart");
            }}
          />
          <span>Apply Coupon</span>
        </div>

        <input placeholder="Enter Coupon Code" />
        <p>Or select an offer</p>

        <div className="coupons">
          {coupons.map((item) => (
            <div className='couponItem'>
              <p>{item.title} </p>
              <span> {item.discount} </span>
              <div>
                <p>{item.code} </p>
                <span
                  onClick={() => {
                    applyCoupon(item.code);
                    history.push("/cart");
                  }}
                >
                  APPLY
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};
