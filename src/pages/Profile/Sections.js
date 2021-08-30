import addressIcon from "../../assets/profile-saved-address.svg";
import rightArrow from "../../assets/profile-rightarrow.svg";
import needHelp from "../../assets/profile-help.svg";
import phoneIcon from "../../assets/phone-black.svg";
import whatsappIcon from "../../assets/whatsapp.svg";
import merchant from "../../assets/profile-merchant.svg";
import logout from "../../assets/profile-logout.svg";

import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export const SavedAddresses = () => (
  <Link to="/addresses" className="address">
    <div>
      <img src={addressIcon} alt="address" /> 
      <p>Saved Addresses</p>
    </div>
    <img src={rightArrow} alt="go" />
  </Link>
);


export const NeedHelp = () => (
  <div className="needHelp">
    <div className='help'>
      <img src={needHelp} alt="help" />
      <span>Need Help?</span>
      <p>Any queries or concerns. We are always available to help you out.</p>
    </div>

    <div className="timing">
      <div>
        <p>Monday - Friday</p>
        <span>10 AM to 6PM</span>
      </div>

      <div className="btns">
      <button>
        <img src={whatsappIcon}  alt="message" />
      </button>
      <button>
      <img src={phoneIcon} alt="call" />
      </button>
      </div>

    </div>
  </div>
);


export const Merchant = () => (
  <div className="merchant">
    <div>
      <img src={merchant} alt="help" />
      <span>Help your Merchant</span>
      <p>
      Is your merchant finding difficult to manage orders? Share Botiga to them
      and they will remember you forever :)
      </p>
    </div>
    <div className="share">
      <img src={whatsappIcon} alt="contact" />
      <span>Share Botiga App</span>
    </div>
  </div>
);


export const LogOut = () => {
  const history = useHistory();
  return (
    <div className="logout">
      <p>Logout</p>
      <img
        src={logout}
        alt="logout"
        onClick={() => {
          history.replace("/");
        }}
      />
    </div>
  );
};
