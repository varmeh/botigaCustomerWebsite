import React from "react";

import "./style.css";

import { config } from "../../data/config";

import playStore from "../../assets/play-store.png";
import appStore from "../../assets/app-store.png";

export const DownloadAppButton = () => (
  <div className="d-flex-btn mt-4">
    <a href={config.store.appStore} target="_blank" rel="noreferrer">
      <img className="app-btn" alt="app store" src={appStore} />
    </a>
    <span className="mobile-row-space"></span>
    <div className="col-1" />
    <a href={config.store.playStore} target="_blank" rel="noreferrer">
      <img className="app-btn" alt="play store" src={playStore} />
    </a>
  </div>
);
