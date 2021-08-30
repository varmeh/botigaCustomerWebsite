import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import {
  Landing,
  Location,
  Home,
  Orders,
  Cart,
  Profile,
  Login,
  Otp,
  Store, 
  Addresses,
  ApplyCoupon,
  SignUp, Checkout, OrderDetail,
  PaymentFailed

} from "./pages";
import {
  landing,
  location,
  home,
  orders,
  cart,
  profile,
  login,
  otp,
  store,
  addresses,
  coupon,
  signup, checkout , orderdetail,
  paymentfailed
} from "./data/url";

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path={landing} exact component={Landing} />
        <Route path={location} exact component={Location} />
        <Route path={home} exact component={Home} />
        <Route path={`${store}/:id`} exact component={Store} />
        <Route path={orders} exact component={Orders} />
        <Route path={paymentfailed} exact component={PaymentFailed} />
        <Route path={orderdetail} exact component={OrderDetail} />
        <Route path={cart} exact component={Cart} />
        <Route path={coupon} exact component={ApplyCoupon} />
        <Route path={checkout} exact component={Checkout} />
        <Route path={profile} exact component={Profile} />
        <Route path={addresses} exact component = {Addresses} />
        <Route path={login} exact component={Login} />
        <Route path={signup} exact component={SignUp} />
        <Route path={otp} exact component={Otp} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
