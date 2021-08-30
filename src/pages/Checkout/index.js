import "./style.scss";
import { useHistory } from "react-router";

import {
  AppLayout,
  OrderInfo,
} from "../../components";
import { CheckoutHeader } from "./Sections";
import { PayingModes } from "../../components";


export const Checkout = () => {
  const history = useHistory()
    
    return (
      <AppLayout showNavigation={false} >
        <div className="checkout">
          {/* Content */}
          <CheckoutHeader  />
          <OrderInfo />

          
          <PayingModes/>
          <button className='formSubmitButton extra' onClick={()=> history.push('/paymentfailed')} >Complete Payment</button>
        </div>
      </AppLayout>
    );
  };

