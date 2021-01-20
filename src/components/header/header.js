import React from 'react';
import {
    Link,
} from "react-router-dom";
import brandLogo from '../../assets/brand-logo.svg';
import communityImg from '../../assets/community.svg'
import { DownloadAppBtn } from "../download-app-btn/downloadAppBtn";

import './header.css';

export function Header() {
    return (
        <div className="d-flex flex-column justify-content-center">
            <div className="d-flex justify-content-center mt-5 mb-5">
                <Link to="/"><img alt="Botiga logo" src={brandLogo} /></Link>
            </div>
            <div className="d-flex">
                <div className="d-flex flex-column justify-content-center col-lg-6 col-sm-12 col-med-12">
                    <p className="head-primary-content">Order products from hand-picked local merchants</p>
                    <p className="head-secondary-content">No minimum order. Free Doorstep delivery</p>
                    <DownloadAppBtn />
                </div>
                <span className="mobile-row-space"></span>
                <div className="d-flex flex-column justify-content-center col-lg-6 col-sm-12 col-med-12">
                    <img alt="Botiga overview" className="head-hero" src={communityImg} />
                </div>
            </div>
        </div>
    );
}