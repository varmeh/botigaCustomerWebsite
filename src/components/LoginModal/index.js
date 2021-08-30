import { useSelector, useDispatch } from "react-redux";

import { Modal, ModalBody } from "reactstrap";

import { cartModalActions } from "../../store/cart-modals";
import CallIcon from '../../assets/cart-login-call.svg'


export const LoginModal = () => {
    const dispatch = useDispatch();
    const show = useSelector((state) => state.cartModal.loginModal);
    const toggle = () => {
      dispatch(cartModalActions.loginRemove());
    };
    return (
      <Modal isOpen={show} toggle={toggle} className="editModal">
        <ModalBody className="loginModal">
          <p>That's it...</p>
          <span>Login/Sign Up to place order</span>
          <div className='login_container' > 
          <img src={CallIcon} alt='phone' />
          <input className="input"  placeholder="Phone Number" />
          </div>
            
          
          <button
            className="formSubmitButton"
            onClick={() => {
              toggle();
              dispatch(cartModalActions.otpShow());
            }}
          >
            Continue
          </button>
        </ModalBody>
      </Modal>
    );
  };