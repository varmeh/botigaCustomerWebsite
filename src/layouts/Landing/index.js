import React from "react";

import "./style.css";

import { DownloadAppButton, Carousel } from "../../components";
import { reviews } from "../../data/reviews";

import upiImage from "../../assets/upi.svg";
import privacyLogo from "../../assets/privacy.png";
import appScreen from "../../assets/app-screen.png";
import botigaBackground from "../../assets/background.svg";

export const LandingLayout = () => (
  <div>
    <LeadingImageRow
      clName="stepImageAppScreen"
      image={appScreen}
      primary="Buy daily needs to specialty items"
      secondary="Find merchants fulfilling your everyday groceries to occassional hand crafts."
    />
    <TrailingImageRow
      clName="stepImageUPI"
      image={upiImage}
      primary="Pay Online"
      secondary="Pay with GPay, PhonePE, Paytm or any of your favorite UPI app."
    />
    <Infocard />
    <Reviews />
    <DownloadAppCard />
  </div>
);

const Reviews = () => (
  <div className="largeRowSpace">
    <Carousel>
      {reviews.map((item, index) => (
        <div className="d-flex justify-content-center" key={index}>
          <blockquote className="wp-block-quote" data-bg-text="“">
            <p className="reviewText">{item.review}</p>
            <p className="reviewerName">{item.name}</p>
          </blockquote>
        </div>
      ))}
    </Carousel>
  </div>
);

const LeadingImageRow = props => (
  <div className={`d-flex rowSpace ${props.clName}Container`}>
    <div className="d-flex flex-column justify-content-center col-lg-5 col-med-12 col-sm-12">
      <img alt={props.primary} className={props.clName} src={props.image} />
    </div>
    <div className="col-lg-2 col-sm-12 col-med-12 mobile-row-space" />
    <div className="d-flex flex-column justify-content-center col-lg-4 col-med-12 col-sm-12">
      <p
        dangerouslySetInnerHTML={{ __html: props.primary }}
        className="primaryText"
      />
      <p
        dangerouslySetInnerHTML={{ __html: props.secondary }}
        className="secondaryText"
      />
    </div>
    <div className="col-lg-1 col-sm-12 col-med-12 mobile-row-space" />
  </div>
);

const TrailingImageRow = props => (
  <div className={`d-flex rowSpace col-reverse ${props.clName}Container`}>
    <div className="col-lg-1 col-sm-12 col-med-12 mobile-row-space" />
    <div className="d-flex flex-column justify-content-center col-lg-4 col-med-12 col-sm-12">
      <p
        dangerouslySetInnerHTML={{ __html: props.primary }}
        className="primaryText"
      />
      <p
        dangerouslySetInnerHTML={{ __html: props.secondary }}
        className="secondaryText"
      />
    </div>
    <div className="col-lg-2 col-sm-12 col-med-12 mobile-row-space" />
    <div className="d-flex flex-column justify-content-center col-lg-5 col-med-12 col-sm-12">
      <img alt={props.primary} className={props.clName} src={props.image} />
    </div>
  </div>
);

const Infocard = () => (
  <div className="infoCard rowSpace">
    <div className="d-flex infoCard-content">
      <div className="d-flex flex-column justify-content-center align-item-center col-lg-5 col-sm-12 col-med-12">
        <img
          alt="privacy-logo"
          style={{ height: "64px", width: "64px" }}
          src={privacyLogo}
        />
        <p className="primaryText mt-3">Privacy focused.</p>
        <p className="secondaryText">
          Just Name, Phone Number &amp; Delivery Address
        </p>
      </div>
      <div className="col-lg-1 col-sm-12 col-med-12 mobile-row-space" />
      <div className="d-flex flex-column justify-content-center col-lg-6 col-sm-12 col-med-12">
        <div className="primaryText">No permissions needed.</div>
        <div className="primaryText-subtext">We don’t track you</div>
        <p className="secondaryText mt-3">
          We respect your privacy. We are also humans on the other side and we
          seriosuly have no intention to know what are you doing. We are busy
          working to make your shopping experience better.
        </p>
      </div>
    </div>
  </div>
);

const DownloadAppCard = () => (
  <div
    className="downloadAppCard largeRowSpace"
    style={{ backgroundImage: `url(${botigaBackground})` }}
  >
    <div className="d-flex flex-column justify-content-center downloadAppCard-content">
      <div className="d-flex justify-content-center col-lg-12 col-sm-12 col-med-12">
        <p className="downloadAppCard-primaryText">Download Botiga app now</p>
      </div>
      <div className="d-flex justify-content-center col-lg-12 col-sm-12 col-med-12">
        <DownloadAppButton />
      </div>
    </div>
  </div>
);
