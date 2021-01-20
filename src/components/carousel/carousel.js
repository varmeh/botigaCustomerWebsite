import { React } from "react";
import Slider from "react-slick";

import "./carousel.css";


export function Carousel() {
    const items = [
        { review: "Recety started using Botiga at a friend's recommendation and really happy with convenience and ease it provides for ordering stuff from nearby places and vendors. Plus good app to figure out the services which are available in your society. Have recommended the app to few people who have recently moved into our society and they can't thank me enough.", name: "Mohit Bharti" },
        { review: "Recety started using Botiga at a friend's recommendation and really happy with convenience and ease it provides for ordering stuff from nearby places and vendors. Plus good app to figure out the services which are available in your society. Have recommended the app to few people who have recently moved into our society and they can't thank me enough.", name: "Mohit Bharti" },
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        customPaging: i => (
            <div className="ft-slick__dots--custom" />
        )


    };
    return (
        <div className="largeRowSpace">
            <Slider {...settings}>
                {items.map(review => <CarouselItem userReview={review} />)}
            </Slider>
        </div>
    );
}


function CarouselItem(props) {
    return (
        <blockquote className="wp-block-quote">
            <p className="reviewText">{props.userReview.review}</p>
            <cite className="reviewerName">{props.userReview.name}</cite>
        </blockquote>
    );
}