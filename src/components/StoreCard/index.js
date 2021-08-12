import { useHistory } from "react-router-dom";

import "./style.scss";

import { Carousel } from "..";
import { store } from "../../data/url";

import truckIcon from "../../assets/truck.svg";
import infoIcon from "../../assets/info.svg";

export const StoreCard = ({
  id = "",
  image = "",
  title = "",
  subTitle = "",
  time = "",
  topSeller = false,
  organic = false,
  homechef = false,
}) => {
  const history = useHistory();

  return (
    <div className="storeCard" onClick={() => history.push(`${store}/${id}`)}>
      <img src={image} alt="store" />
      <div className="content">
        <h6>{title}</h6>
        <h3>{subTitle}</h3>
        <p>
          <img src={truckIcon} alt="truck" />
          <span>{time}</span>
        </p>
      </div>
      {topSeller && <div className="topSeller">Top Seller</div>}
      {organic && <div className="organic tag">100% Organic</div>}
      {homechef && <div className="homechef tag">Homechef</div>}
    </div>
  );
};

export const StoreCardSlider = ({ title = "", info = false, items = [] }) => (
  <div className="storeCardSlider">
    <h2>
      {title} {info && <img src={infoIcon} alt="info" />}
    </h2>
    <div style={{ margin: "-6px -6px 32px" }}>
      <Carousel
        settings={{
          dots: false,
          autoplay: false,
          infinite: false,
          variableWidth: true,
        }}
      >
        {items.map((item, index) => (
          <StoreCard key={index} {...item} />
        ))}
      </Carousel>
    </div>
  </div>
);
