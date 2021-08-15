import { useHistory } from "react-router-dom";

import "./style.scss";

import { AppLayout } from "../../components";
import { landing, otp } from "../../data/url";

import closeIcon from "../../assets/close.svg";
import phoneIcon from "../../assets/phone.svg";

export const Login = () => {
  const history = useHistory();

  return (
    <AppLayout showNavigation={false}>
      <div className="login">
        <h1 className="heading">
          Login
          <button onClick={() => history.push(landing)}>
            <img src={closeIcon} alt="close" />
          </button>
        </h1>
        <div className="input">
          <input placeholder="Phone number" />
          <img src={phoneIcon} alt="phone" />
        </div>
        <button className="formSubmitButton" onClick={() => history.push(otp)}>
          Continue
        </button>
      </div>
    </AppLayout>
  );
};
