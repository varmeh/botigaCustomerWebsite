import { useState } from "react";
import { useHistory } from "react-router-dom";
import OtpInput from "react-otp-input"; 

import "./style.scss";

import { AppLayout } from "../../components";
import { home, landing } from "../../data/url";

import closeIcon from "../../assets/close.svg";

export const Otp = () => {
  const [otp, setOtp] = useState("");
  const history = useHistory();

  return (
    <AppLayout showNavigation={false}>
      <div className="otp">
        <h1 className="heading">
          Verify OTP
          <button onClick={() => history.push(landing)}>
            <img src={closeIcon} alt="close" />
          </button>
        </h1>
        <p>Please enter OTP sent to your phone number 98480 12345</p>
        <div className="input">
          <OtpInput
            onChange={setOtp}
            numInputs={6}
            value={otp}
            isInputNum={true}
          />
        </div>
        <button className="formSubmitButton" onClick={() => history.push(home)}>
          Continue
        </button>
      </div>
    </AppLayout>
  );
};
