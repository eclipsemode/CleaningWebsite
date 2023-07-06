"use client"
import React, {JSX} from 'react';
import SampleNextArrow from "@ui/SampleNextArrow";
import SamplePrevArrow from "@ui/SamplePrevArrow";
import Slider from "react-slick";

const SliderSlick = ({children}: {children: JSX.Element}) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1165,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 890,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (

        <Slider {...settings}>
            {children}
        </Slider>
    );
};

export default SliderSlick;