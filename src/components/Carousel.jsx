import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { cloudinaryImage1 } from '../utils/constants';
import { cloudinaryCarouselImage1, cloudinaryCarouselImage2, cloudinaryCarouselImage3 } from '../utils/constants';

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
            <Slider {...settings} className="mt-6">
                <div className="h-48 md:h-56 lg:h-64 outline-none">
                    <img src={cloudinaryCarouselImage1} alt="" className="object-contain w-full h-full" />
                </div>
                <div className="h-48 md:h-56 lg:h-64 outline-none">
                    <img src={cloudinaryCarouselImage2} alt="" className="object-contain w-full h-full" />
                </div>
                <div className="h-48 md:h-56 lg:h-64 outline-none">
                    <img src={cloudinaryCarouselImage3} alt="" className="object-contain w-full h-full" />
                </div>
            </Slider>
        </div>
    );
}

export default Carousel;
