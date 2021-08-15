import { Modal, ModalBody } from "reactstrap";

import "./style.scss";

export const Alert = ({
  show = false,
  message = "",
  confirmText = "",
  onClose = () => 0,
}) => (
  <Modal isOpen={show} toggle={onClose} className="alertModal" centered={true}>
    <ModalBody>
      <p>{message}</p>
      <button onClick={onClose}>{confirmText}</button>
    </ModalBody>
  </Modal>
);
