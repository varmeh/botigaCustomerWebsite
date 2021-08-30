import "./style.scss";
import { useState } from "react";
import { AppLayout, UserDetails,  EditProfile } from "../../components";
import { Modal, ModalBody } from "reactstrap";
import { SavedAddresses, NeedHelp, Merchant , LogOut } from "./Sections";

export const Profile = () => {

  const [openEditModal, setOpenEditModal] = useState(false);

  const openModal = ()=>{
    setOpenEditModal(true);
  } 

  return( 
    <AppLayout>
    <div className="profile">
      <h3>Profile</h3>

      <UserDetails openModal={openModal} />
      <SavedAddresses/>
      <NeedHelp/>
      <Merchant/>
      <LogOut/>

      {/* On Edit Profile button Click */}
      <Modal isOpen={openEditModal} 
      toggle={() => setOpenEditModal(false)}
      className='editModal'>
        <ModalBody >
          <EditProfile  />
        </ModalBody>
      </Modal>

    </div>
  </AppLayout>

  )

  
};
