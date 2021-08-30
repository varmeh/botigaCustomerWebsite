import "./style.scss";
import rightArrow from "../../assets/profile-rightarrow.svg";
import coupon from "../../assets/cart-coupon.svg";
import { Link } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import { couponActions } from "../../store/cart-coupon";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const CouponContainer = () => {
  const dispatch = useDispatch();
  const couponCode = useSelector((state) => state.coupon.couponCode);
  const applied = useSelector((state) => state.coupon.applied);
  return (  
    <div  className="couponContainer" >
      <img src={coupon} alt="coupon" />
      {!applied && (
        <Link to="/coupon" style={{ color: "black" }} className="apply">
          <p>Apply Coupon</p>
          <img src={rightArrow} alt="go" />
        </Link>
      )}

      {applied && (
        <div className="apply">
          <p style={{ textTransform: "uppercase" }}>
            {couponCode} Applied
          </p>
          <HighlightOffIcon onClick={()=> {dispatch(couponActions.remove()); }} />
        </div>
      )}
    </div>
  );
};

export default CouponContainer;
