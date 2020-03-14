// core
import React from 'react';

// library
import Slider from "react-slick";

// styles
import './PrysmSlider.scss';
import development from "../../../../../assets/image/prysm/development.svg";
import comunications from "../../../../../assets/image/prysm/comunications.svg";
import analytic from "../../../../../assets/image/prysm/analytic.svg";
import integration from "../../../../../assets/image/prysm/integration.svg";

export const PrysmSlider = () => {
    const settings = {
        dots: true,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
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
    return (<div className='prysmSlider'>
        <Slider {...settings}>
            <div className='sliderItem'>
                <img src={development} alt="message"/>
                <h4>Grateful Patient <br/> Pipeline Development</h4>
                <ul>
                    <li>Major giving lead generation</li>
                    <li>Prospect management & research</li>
                    <li>Discovery visit scheduling</li>
                    <li>Clinician partnership development</li>
                    <li>Donor acquisition</li>
                </ul>
            </div>
            <div className='sliderItem'>
                <img src={comunications} alt="diagram"/>
                <h4>Communications</h4>
                <ul>
                    <li>E-marketing & newsletters</li>
                    <li>Annual giving</li>
                    <li>Event invitations</li>
                </ul>
            </div>
            <div className='sliderItem'>
                <img src={analytic} alt="people"/>
                <h4>List Management<br/>
                    & Reporting</h4>
                <ul>
                    <li>Hyper segmentation</li>
                    <li>EvPatient visit summary analytics</li>
                    <li>Multi record updates</li>
                    <li>Track full program KPI’s</li>
                    <li>Automated activity tracking</li>
                </ul>
            </div>
            <div className='sliderItem'>
                <img src={integration} alt="people"/>
                <h4>Native <br/>
                    Integrations</h4>
                <ul>
                    <li>Wealth screening</li>
                    <li>Geo-mapping</li>
                    <li>Machine learning</li>
                    <li>VOIP calling</li>
                </ul>
            </div>
        </Slider>
    </div>);
};