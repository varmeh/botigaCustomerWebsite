import { React } from 'react'
import Slider from 'react-slick'
import { reviews } from '../../reviews'

import './carousel.css'

export function Carousel() {
	const items = reviews
	const settings = {
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipeToSlide: true,
		autoplay: true,
		customPaging: i => <div className='ft-slick__dots--custom' />
	}
	return (
		<div className='largeRowSpace'>
			<Slider {...settings}>
				{items.map((review, index) => (
					<CarouselItem key={index} userReview={review} />
				))}
			</Slider>
		</div>
	)
}

function CarouselItem(props) {
	return (
		<div className='d-flex justify-content-center'>
			<blockquote className='wp-block-quote' data-bg-text='“'>
				<p className='reviewText'>{props.userReview.review}</p>
				<p className='reviewerName'>{props.userReview.name}</p>
			</blockquote>
		</div>
	)
}
