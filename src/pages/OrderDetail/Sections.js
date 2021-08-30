import whatsappIcon from "../../assets/whatsapp.svg";
import phoneIcon from "../../assets/phone-black.svg";
import addressIcon from "../../assets/profile-saved-address.svg";
import listIcon from "../../assets/order-listicon.svg";
import redCross from '../../assets/red-crossicon.svg'
import orderDebit from "../../assets/order-debit.svg";

export const OrderShop = () => {
  return (
    <div className="orderD">
      <p>Health & Hunger</p>
      <span>31 Aug, 2020 8:10 AM</span>
      <div className="price">
        <p>#1234128 • 8 ITEMS</p>
        <span>&#x20b9;460</span>
      </div>
    </div>
  );
};

export const Query = () => (
  <div className="queryOrder">
    <p>Queries? Need early delivery? Contact Merchant.</p>
    <div className="btns">
      <button>
        <img src={whatsappIcon}  alt="message" />
      </button>
      <button>
      <img src={phoneIcon} alt="call" />
      </button>
      </div>
  </div>
);

export const DeliverTo = () => {
  return (
    <div className="deliverTo">
      <img src={addressIcon} alt="icon" />
      <div className='content' >
        <p>Deliver to</p>
        <span>202, Amar Pearl Enclave</span>
      </div>
    </div>
  );
};

export const OrderStatus = () => {
  return ( 
    <div className="status-container">
        <div className='status'>
          <img src={listIcon} alt="img.." />
          <div className="content">
            <p>Order Cancelled</p>
            <span>Awaiting Refund</span>
          </div>
        </div>

        <div  className='status'>
        <img src={orderDebit} alt="img.." />
          <div className="content">
            <p>Payment Successful</p>
            
          </div>
        </div>

      
    </div>
  );
};


