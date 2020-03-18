// core
import React from 'react';

// library
import Slider from "react-slick";
import Img from "react-image"
// styles
import './PrysmAmountSlider.scss';
import logoBlack from "../../../../../assets/image/logo-black.svg";

export const PrysmAmountSlider = () => {
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
    return (<div className='prysmAmountSlider'>
        <Slider {...settings}>
            <div className='sliderItem'>
                <div className='amountTitle'>Health System 1</div>
                <div className='amountValue'>$42,908</div>
                <hr/>
                <ul className='amountList'>
                    <li>8 MGO’s</li>
                    <li>Raiser’s Edge</li>
                    <li>Microsoft Access</li>
                </ul>
            </div>
            <div className='sliderItem'>
                <div className='amountTitle'>Health System 2</div>
                <div className='amountValue'>$62,000</div>
                <hr/>
                <ul className='amountList'>
                    <li>21 MGO’s</li>
                    <li>Blackbaud CRM</li>
                    <li>Blackbaud Grateful<br/> Patient Solution</li>
                </ul>
            </div>
            <div className='sliderItem'>
                <div className='amountTitle'>Health System 3</div>
                <div className='amountValue'>$516,000</div>
                <hr/>
                <ul className='amountList'>
                    <li>2 MGO’s + 2 Dev Associates</li>
                    <li>Ellucian Advance</li>
                </ul>
                <Img src={logoBlack} alt="logo"/>
            </div>
        </Slider>
    </div>);
};

