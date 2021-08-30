import "./style.scss";
import { useState } from "react";
import {
  AppLayout,
  OrderInfo,
  CartItems,
  CartTotal,
  CartModals,
} from "../../components";
import { CartHeader, ProceedPay } from "./Sections";
import CouponContainer from "../../components/CouponContainer";

export const Cart = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AppLayout showNavigation={false}>
      <div className="cart">
        <CartHeader name="Cart" />

        {/* Content */}
        <div className="cartScroll">
          <OrderInfo />
          <CouponContainer />
          <CartItems showButtons={true} />
          <CartTotal />
        </div>
        <ProceedPay isLoggedIn={isLoggedIn} />

        {/* Show if Not Logged In */}
        {!isLoggedIn && <CartModals />}
        
      </div>
    </AppLayout>
  );
};
