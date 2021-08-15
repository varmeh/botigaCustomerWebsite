import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

import { SelectCommunity } from "..";
import { landing } from "../../data/url";

import brandLogo from "../../assets/brand-logo.svg";
import communityImg from "../../assets/community.svg";

export const Header = () => (
  <div className="d-flex flex-column justify-content-center">
    <div className="d-flex justify-content-center mt-5 mb-5">
      <Link to={landing}>
        <img alt="Botiga logo" src={brandLogo} />
      </Link>
    </div>
    <div className="d-flex">
      <div className="d-flex flex-column justify-content-center col-lg-6 col-sm-12 col-med-12">
        <p className="head-primary-content">
          Connecting Gated communities with curated sellers
        </p>
        <p className="head-secondary-content">
          Order till Mid-night 12AM • Doorstep delivery
        </p>
        <SelectCommunity />
      </div>
      <span className="mobile-row-space"></span>
      <div className="d-flex flex-column justify-content-center col-lg-6 col-sm-12 col-med-12">
        <img alt="Botiga overview" className="head-hero" src={communityImg} />
      </div>
    </div>
  </div>
);
