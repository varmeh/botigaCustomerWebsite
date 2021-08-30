import { useHistory } from "react-router";

import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

export const CheckoutHeader = () => {
  const history = useHistory();
  return (
    <div className="header">
      <KeyboardBackspaceIcon
        onClick={() => {
          history.push("/cart");
        }}
        style={{ cursor: "pointer" }}
      />
      <span>Checkout</span>
    </div>
  );
};
