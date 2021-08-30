import { createSlice } from "@reduxjs/toolkit"
const initialModalState = {
    loginModal: false,
    otpModal: false,
    addressModal: false,
  }
  
  const cartModalSlice = createSlice({
    name: 'cartModal',
    initialState: initialModalState,
    reducers:{ 
      loginShow(state){
        state.loginModal = true
      },
      loginRemove(state){
        state.loginModal = false
      },
      otpShow(state){
        state.otpModal = true
      },
      otpRemove(state){
        state.otpModal = false
      },
      addressShow(state){
        state.addressModal = true
      },
      addressRemove(state){
        state.addressModal = false
      }
    }
  })
  export const cartModalActions = cartModalSlice.actions;
  export default cartModalSlice.reducer