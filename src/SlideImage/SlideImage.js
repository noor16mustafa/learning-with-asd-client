import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';

import Slider from "react-slick";
import image1 from '../assets/images2.jpg';
import image2 from '../assets/images.jpg';
import image3 from '../assets/images3.jpg';
import image4 from '../assets/images4.jpg';
import image5 from '../assets/images2.jpg';
import image6 from '../assets/images3.jpg';

SlideImage = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };

    return (
        <div>
            <h2>Center Mode</h2>
            <Slider {...settings}>
                <div>
                    <img src={image1} alt="" />
                </div>
                <div>
                    <img src={image6} alt="" />
                </div>
                <div>
                    <img src={image4} alt="" />
                </div>
                <div>
                    <img src={image2} alt="" />
                </div>
                <div>
                    <img src={image3} alt="" />
                </div>
                <div>
                    <img src={image5} alt="" />
                </div>
            </Slider>
        </div>
    );
};

export default SlideImage;