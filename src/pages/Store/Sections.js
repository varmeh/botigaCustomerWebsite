import storeIcon from "../../assets/demo/store.png";
import shopIcon from "../../assets/shop.svg";
import truckIcon from "../../assets/truck-black.svg";
import cartIcon from "../../assets/cart-black.svg";
import phoneIcon from "../../assets/phone-black.svg";
import whatsappIcon from "../../assets/whatsapp.svg";

export const Name = () => (
  <div className="name">
    <div>
      <h1>Health & Hunger</h1>
      <p>Your family natural health store</p>
    </div>
    <img src={storeIcon} alt="store" />
  </div>
);

export const Features = () => (
  <ul className="features">
    <li>
      <img src={shopIcon} alt="store" />
      <span>Fruits & vegetables</span>
    </li>
    <li>
      <img src={truckIcon} alt="truck" />
      <span>Delivery by Tue, 4 Sep • 8 AM - 12 PM</span>
    </li>
    <li>
      <img src={cartIcon} alt="cart" />
      <span>Free Delivery</span>
    </li>
  </ul>
);

export const Query = () => (
  <div className="query">
    <p>
      Queries? Need early delivery? <br /> Contact Merchant.
    </p>
    <div>
      <button>
        <img src={whatsappIcon} alt="whatsapp" />
      </button>
      <button>
        <img src={phoneIcon} alt="phone" />
      </button>
    </div>
  </div>
);
