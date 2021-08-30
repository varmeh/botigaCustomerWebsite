import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Modal, ModalBody } from "reactstrap";

import { cartModalActions } from "../../store/cart-modals";
import HomeIcon from "../../assets/profile-saved-address.svg";

import { TextField } from "@material-ui/core";

export const AddressModal = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.cartModal.addressModal);
  const toggle = () => {
    dispatch(cartModalActions.addressRemove());
  };
  return (
    <Modal isOpen={show} toggle={toggle} className="editModal">
      <ModalBody className="loginModal">
        <div className="addressHeader">
          <img src={HomeIcon} alt="address" />
          <p>Your Address</p>
        </div>

        <div className="addressText">
          <p>Adarsh Plam Acres</p>
          <span>
            Jala Hobli, Vidhya Nagar Cross, Huttanahalli, Bengaluru, Karnataka
            562157
          </span>
        </div>
        <TextField
          className="input"
          variant="outlined"
          label="Flat No/Villa Number"
        />
        <Link to="/signup">
          <button onClick={()=>dispatch(cartModalActions.addressRemove())} className="formSubmitButton">Continue</button>
        </Link>
      </ModalBody>
    </Modal>
  );
};
