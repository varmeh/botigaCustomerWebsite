import { React } from "react";
import Slider from "react-slick";

import "./style.css";

export const Carousel = ({ children, settings = {} }) => {
  const options = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    customPaging: i => <div className="ft-slick__dots--custom" />,
    ...settings,
  };

  return <Slider {...options}>{children}</Slider>;
};
