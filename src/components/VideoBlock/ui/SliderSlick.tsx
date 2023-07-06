"use client"
import React from 'react';
import SampleNextArrow from "@ui/SampleNextArrow";
import SamplePrevArrow from "@ui/SamplePrevArrow";
import Slider from "react-slick";
import {Stack} from "@lib/mui";
import {Element} from "react-scroll";
import Title from "@ui/Title";
import styles from "@components/VideoBlock/index.module.css";
import Image from "next/image";
import Img1 from "@public/images/examples/b5iamlfvd2h9e7o2mv2q01i1nkatecyo.jpg";
import Img2 from "@public/images/examples/g33dfoe0ykv440rnk1htvrnk0z04yjl5.jpg";
import Img3 from "@public/images/examples/ka8c06g0saxke4exgeauwnqhogvfvjzj.jpg";
import Img4 from "@public/images/examples/l19yxqf3vq5qv3lvquhhte7nkj681cjv.jpg";
import Img5 from "@public/images/examples/mdlv4hvko850qx3aj5a9fm8nymxhrc2p.jpg";
import Img6 from "@public/images/examples/qsdjvedac2ajhomamrl4asvvfqyd0zdp.jpg";
import Img7 from "@public/images/examples/wg3vtkwawozvg2ofd3j84ohcuoir4258.jpg";
import Img8 from "@public/images/examples/za187pind7y3q2vsdn5zv66og0me9kpo.jpg";

const SliderSlick = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        responsive: [
            {
                breakpoint: 1120,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 630,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Stack paddingBottom='50px' paddingTop='50px'>
            <Element name='primeri'>
                <Title color='secondary' textMain='Примеры' textSecondary='наших работ'/>
                <div className={styles.slider__container}>
                    <Slider {...settings}>
                        <div className={styles.img}>
                            <Image src={Img1} alt="expample"/>
                        </div>
                        <div className={styles.img}>
                            <Image src={Img2} alt="expample"/>
                        </div>
                        <div className={styles.img}>
                            <Image src={Img3} alt="expample"/>
                        </div>
                        <div className={styles.img}>
                            <Image src={Img4} alt="expample"/>
                        </div>
                        <div className={styles.img}>
                            <Image src={Img5} alt="expample"/>
                        </div>
                        <div className={styles.img}>
                            <Image src={Img6} alt="expample"/>
                        </div>
                        <div className={styles.img}>
                            <Image src={Img7} alt="expample"/>
                        </div>
                        <div className={styles.img}>
                            <Image src={Img8} alt="expample"/>
                        </div>
                    </Slider>
                </div>
            </Element>
        </Stack>
    );
};

export default SliderSlick;