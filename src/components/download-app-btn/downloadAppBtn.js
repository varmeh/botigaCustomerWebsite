import React from "react";
import playStore from "../../assets/play-store.png";
import appStore from "../../assets/app-store.png"
import { config } from '../../config';

export function DownloadAppBtn() {
    const style = { height: '60px', width: '203px' }
    return (
        <div className="d-flex mt-4">
            <a href={config.store.appStore} target="_blank" rel="noreferrer">
                <img role="button" alt="app store" style={style} src={appStore} />
            </a>
            <span className="mobile-row-space"></span>
            <div className="col-lg-1 col-xs-12 col-sm-2 col-med-2" />
            <a href={config.store.playStore} target="_blank" rel="noreferrer">
                <img role="button" alt="play store" style={style} src={playStore} />
            </a>
        </div>
    );
}

