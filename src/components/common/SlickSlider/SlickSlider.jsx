// core
import React from 'react';

// library
import Slider from "react-slick";

// styles
import './SlickSlider.scss';
import message from "../../../assets/image/home/message.svg";
import diagram from "../../../assets/image/home/diagram.svg";
import people from "../../../assets/image/home/people.svg";

export const SlickSlider = () => {
    const settings = {
        dots: true,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (<div className='slider'>
        <Slider {...settings}>
            <div className='sliderItem'>
                <img src={message} alt="message"/>
                <p>
                    Strengthen stakeholder relationships with a science based approach that measures contact
                    attempts, answered phone calls and detailed discovery information.
                </p>
            </div>
            <div className='sliderItem'>
                <img src={diagram} alt="diagram"/>
                <p>
                    An intuitive, repeatable process designed by fundraisers allows users to move hundreds of
                    patients through the identification – qualification process with minimal friction.
                </p>
            </div>
            <div className='sliderItem'>
                <img src={people} alt="people"/>
                <p>
                    Understand which clinicians and departments represent the best fundraising opportunities,
                    based
                    on encounter analysis and granular metrics tracking.
                </p>
            </div>
        </Slider>
    </div>);
};