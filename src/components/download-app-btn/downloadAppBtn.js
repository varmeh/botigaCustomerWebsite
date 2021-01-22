import React from "react";
import playStore from "../../assets/play-store.png";
import appStore from "../../assets/app-store.png"
import { config } from '../../config';

import "./downloadAppBtn.css";

export function DownloadAppBtn() {
    return (
        <div className="d-flex-btn mt-4">
            <a href={config.store.appStore} target="_blank" rel="noreferrer">
                <input type="image" className="app-btn" role="button" alt="app store"  src={appStore} />
            </a>
            <span className="mobile-row-space"></span>
            <div className="col-1" />
            <a href={config.store.playStore} target="_blank" rel="noreferrer">
                <img type="app-btn" className="app-btn" role="button" alt="play store"  src={playStore} />
            </a>
        </div>
    );
}