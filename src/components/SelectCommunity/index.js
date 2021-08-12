import { Link } from "react-router-dom";

import "./style.scss";

import { location, login } from "../../data/url";

export const SelectCommunity = () => (
  <div className="selectCommunity">
    <Link to={location}>Select your Community</Link>
    <p>
      Already have an account? <Link to={login}>Login</Link>
    </p>
  </div>
);
