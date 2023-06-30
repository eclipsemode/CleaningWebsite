import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './index.module.css'
import {Container, Divider, Stack} from "@mui/material";
import Title from "@ui/Title";
import Slider from "react-slick";
import Img1 from '@public/images/examples/b5iamlfvd2h9e7o2mv2q01i1nkatecyo.jpg'
import Img2 from '@public/images/examples/g33dfoe0ykv440rnk1htvrnk0z04yjl5.jpg'
import Img3 from '@public/images/examples/ka8c06g0saxke4exgeauwnqhogvfvjzj.jpg'
import Img4 from '@public/images/examples/l19yxqf3vq5qv3lvquhhte7nkj681cjv.jpg'
import Img5 from '@public/images/examples/mdlv4hvko850qx3aj5a9fm8nymxhrc2p.jpg'
import Img6 from '@public/images/examples/qsdjvedac2ajhomamrl4asvvfqyd0zdp.jpg'
import Img7 from '@public/images/examples/wg3vtkwawozvg2ofd3j84ohcuoir4258.jpg'
import Img8 from '@public/images/examples/za187pind7y3q2vsdn5zv66og0me9kpo.jpg'
import SampleNextArrow from "@ui/SampleNextArrow";
import SamplePrevArrow from "@ui/SamplePrevArrow";
import {Element} from 'react-scroll'
import Image from "next/image";

const VideoBlock = () => {
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
        <section className={styles.root}>
            <Container className={styles.container}>
                <Stack justifyContent='center' textAlign='center'>
                    <Element name='process'>
                        <Title color='secondary' textMain='Как мы' textSecondary='чистим мебель?'
                               style={{marginTop: '50px'}}/>
                        <p style={{maxWidth: '860px', margin: '0 auto'}}>В работе используем только
                            профессиональное оборудование, специализированные моющие средства и пятновыводители.
                            Результат
                            нашей работы — не только видимая чистота, а действительно чистый снаружи и внутри диван!</p>
                    </Element>
                    <div className={styles.video}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/fDy5SZ7YtmI"
                                title="YouTube video player" frameBorder="0" name="su-youtube"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>
                    <div itemScope itemType="https://schema.org/VideoObject" style={{display: 'none'}}>
                        <a itemProp="url" href="https://www.youtube.com/embed/fDy5SZ7YtmI">
							<span itemProp="name">Химчистка мебели в г. Армавир</span>
						</a>
						<p itemProp="description">В работе используем только профессиональное оборудование, специализированные моющие средства и пятновыводители. Результат нашей работы — не только видимая чистота, а действительно чистый снаружи и внутри диван!</p>
						<p itemProp="duration" content="T0M39S"></p>
						<p itemProp="isFamilyFriendly" content="true"></p>
						<p>Дата загрузки:<span itemProp="uploadDate">2023-04-20T00:00:00</span></p>
						<span itemProp="thumbnail" itemScope itemType="https://schema.org/ImageObject">
							<img itemProp="contentUrl" src="https://i1.ytimg.com/vi/fDy5SZ7YtmI/hqdefault.jpg" alt='video-promo'/>
						</span>
						<link itemProp="thumbnailUrl" href="https://i1.ytimg.com/vi/fDy5SZ7YtmI/hqdefault.jpg"/>
                    </div>
                    <Divider variant="middle" sx={{borderWidth: '1px'}}/>
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
                </Stack>
            </Container>
        </section>
    );
};

export default VideoBlock;