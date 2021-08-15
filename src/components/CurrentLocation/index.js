import { Link } from "react-router-dom";

import "./style.scss";

import * as url from "../../data/url";

import location from "../../assets/location.svg";
import arrowDownIcon from "../../assets/arrow-down.svg";

export const CurrentLocation = ({ merchantCount = 0, address = "" }) => (
  <Link className="currentLocation" to={url.location}>
    <span className="merchants">{merchantCount} merchants delivering</span>
    <div className="address">
      <img src={location} alt="location" />
      <p>{address}</p>
      <img src={arrowDownIcon} alt="location" />
    </div>
  </Link>
);
