import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

import { Contact } from "..";
import { config } from "../../data/config";
import { landing } from "../../data/url";

import logo from "../../assets/brand-logo.svg"; 

export const Footer = () => (
  <div className="d-flex footer rowSpace">
    <img src={logo} alt="logo" />
    <div className="mr-lg-auto company-name p-3">
      &copy; <Link to={landing}>BOTIGA PVT LTD 2020.</Link>
    </div>
    <div className="links">
      <div className="p-3">
        <a href="/" target="_blank" rel="noreferrer">
          ABOUT US
        </a>
      </div>
      <div className="p-3">
        <a href={config.documents.privacy} target="_blank" rel="noreferrer">
          PRIVACY POLICY
        </a>
      </div>
      <div className="p-3">
        <a href={config.documents.terms} target="_blank" rel="noreferrer">
          TERMS
        </a>
      </div>
      <div className="p-3">
        <Contact />
      </div>
    </div>
  </div>
);
