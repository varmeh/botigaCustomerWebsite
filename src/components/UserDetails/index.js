import "./styles.scss";
import smile from "../../assets/profile-smile.svg";
import email from "../../assets/profile-email.svg";
import whatsapp from "../../assets/whatsapp-black.svg";

export const UserDetails = ({ openModal }) => {
  return (
    <ul className="details">
      <li>
        <img src={smile} alt="Name" />
        <p style={{ fontWeight: 600 }}>Ayush Thakur</p>
      </li>
      <li>
        <img src={email} alt="Email" />
        <p>ayushthakur3001@gmail.com</p>
      </li>
      <li>
        <img src={whatsapp} alt="Number" />
        <p>85808 00690</p>
      </li>
      <li>
        <button onClick={() => openModal()}>Edit Profile</button>
      </li>
    </ul>
  );
};
