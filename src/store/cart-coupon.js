import { createSlice } from "@reduxjs/toolkit";
const initialCouponState = {
    couponCode: '',
    applied: false
  }
  
  const couponSlice = createSlice({
    name: 'coupon',
    initialState: initialCouponState,
    reducers:{
      apply(state , action){
        state.couponCode = action.payload ;
        state.applied = true;
      },
      remove(state){
        state.couponCode = '';
        state.applied = false;
      }
    }
  })
  export const couponActions = couponSlice.actions;
  export default couponSlice.reducer;