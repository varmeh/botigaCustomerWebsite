import { useState } from "react";
import { Modal, ModalBody } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import OtpInput from "react-otp-input";
import { cartModalActions } from "../../store/cart-modals";

export const OtpModal = () => {
    const dispatch = useDispatch();
    const [otp, setOtp] = useState("");
    const toggle = () => {
      dispatch(cartModalActions.otpRemove());
    };
    const show = useSelector((state) => state.cartModal.otpModal);
  
    return (
      <Modal isOpen={show} toggle={toggle} className="editModal">
        <ModalBody className="loginModal">
          <p>Verify OTP</p>
          <span>Please enter OTP sent to your phone number 98480 12345</span>
          <div className="otpInput">
            <OtpInput
              placeholder={"0"}
              onChange={setOtp}
              numInputs={6}
              value={otp}
              isInputNum={true}
            />
          </div>
          <button
            onClick={() => {
              toggle();
              dispatch(cartModalActions.addressShow());
            }}
            className="formSubmitButton"
          >
            Continue
          </button>
        </ModalBody>
      </Modal>
    );
  };