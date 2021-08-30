import "./style.scss";
import customer from "../../assets/demo/shop-customer.svg";
import storeIcon from "../../assets/demo/store.png";
import truck from '../../assets/truck.svg'

export const OrderInfo = () => ( 
  <div className="orderDetail"> 
    <div className="container">
      <div className="icons">
        <img src={storeIcon} alt="shop" />
        <hr></hr>
        <img src={customer} alt="customer" />
      </div>

      <div className="content">
        <div>
          <p >Health & Hunger</p>
          <span >
            Your family natural health store
          </span>
        </div>
        <div>
          <p>Deliver to</p>
          <span >202, Amar Pearl Enclave</span>
        </div>
      </div>
    </div>

    <div className="deliver">
        <img src={truck} alt='Deliver' />
        <p>Wed, 11 Aug • 3PM - 6PM</p>
    </div>
  </div>
);
