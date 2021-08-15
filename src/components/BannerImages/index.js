import { Link } from "react-router-dom";

import "./style.scss";

import { Carousel } from "../Carousel";

export const BannerImages = ({ items = [] }) => (
  <div
    className="bannerImages"
    style={{ marginBottom: items.length > 1 ? "50px" : "32px" }}
  >
    <Carousel>
      {items.map((item, index) =>
        item.redirect ? (
          <a
            key={index}
            href={item.url}
            rel="noreferrer"
            className="fullImage banner"
          >
            <img src={item.image} alt="banner" />
          </a>
        ) : (
          <Link to={item.url} key={index}>
            <img src={item.image} alt="banner" />
          </Link>
        )
      )}
    </Carousel>
  </div>
);
