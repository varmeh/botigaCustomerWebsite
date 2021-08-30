import {  configureStore } from "@reduxjs/toolkit";
import cartModalReducer from "./cart-modals";
import cartCouponReducer from './cart-coupon'


const store = configureStore({
  reducer: {
    coupon: cartCouponReducer,
    cartModal: cartModalReducer
  }
});

export default store;