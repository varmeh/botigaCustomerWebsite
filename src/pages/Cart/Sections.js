import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
 
import { cartModalActions } from "../../store/cart-modals";

import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

export const CartHeader = () => {
  const history = useHistory();
  return (
    <div className="header">
      <KeyboardBackspaceIcon
        onClick={() => {
          history.push('/home');
        }}
        style={{ cursor: "pointer" }}
      />
      <p>Cart</p>
    </div>
  );
};

export const ProceedPay = ({ isLoggedIn }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <button
      onClick={
        () =>{
          isLoggedIn ?
          history.push("/checkout"):
          dispatch(cartModalActions.loginShow())
          

        }
      }
      className="formSubmitButton"
    >
      Proceed to Pay
    </button>
  );
};
