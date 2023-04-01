import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './index.module.css'
import {Container, Divider, Stack} from "@mui/material";
import Title from "../../ui/Title";
import Slider from "react-slick";
import Img1 from '../../assets/images/examples/b5iamlfvd2h9e7o2mv2q01i1nkatecyo.jpg'
import Img2 from '../../assets/images/examples/g33dfoe0ykv440rnk1htvrnk0z04yjl5.jpg'
import Img3 from '../../assets/images/examples/ka8c06g0saxke4exgeauwnqhogvfvjzj.jpg'
import Img4 from '../../assets/images/examples/l19yxqf3vq5qv3lvquhhte7nkj681cjv.jpg'
import Img5 from '../../assets/images/examples/mdlv4hvko850qx3aj5a9fm8nymxhrc2p.jpg'
import Img6 from '../../assets/images/examples/qsdjvedac2ajhomamrl4asvvfqyd0zdp.jpg'
import Img7 from '../../assets/images/examples/wg3vtkwawozvg2ofd3j84ohcuoir4258.jpg'
import Img8 from '../../assets/images/examples/za187pind7y3q2vsdn5zv66og0me9kpo.jpg'
import SampleNextArrow from "../../ui/SampleNextArrow";
import SamplePrevArrow from "../../ui/SamplePrevArrow";

const VideoBlock = () => {
		const settings = {
				dots: true,
				infinite: false,
				speed: 300,
				slidesToShow: 4,
				slidesToScroll: 4,
				nextArrow: <SampleNextArrow/>,
				prevArrow: <SamplePrevArrow/>,
				responsive: [
						{
								breakpoint: 1024,
								settings: {
										slidesToShow: 3,
										slidesToScroll: 3,
										infinite: true,
										dots: true
								}
						},
						{
								breakpoint: 600,
								settings: {
										slidesToShow: 2,
										slidesToScroll: 2
								}
						},
						{
								breakpoint: 480,
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
										<Title color='#0360c0' textMain='Как мы' textSecondary='чистим мебель?'/>
										<p style={{maxWidth: '860px', margin: '0 auto'}}>Химчистка мягкой мебели в CRYSTAL проводится
												методом аквачистки. В работе используем только
												профессиональное оборудование, специализированные моющие средства и пятновыводители. Результат
												нашей работы — не только видимая чистота, а действительно чистый снаружи и внутри диван!</p>
										<div className={styles.video}>
												<iframe
														width="560" height="315" src="https://www.youtube.com/embed/zexf-r7bwWY"
														title="YouTube video player" frameBorder="0"
														allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
														allowFullScreen></iframe>
										</div>
										<Divider variant="middle" sx={{borderWidth: '1px'}}/>
										<Stack paddingBottom='50px' paddingTop='50px'>
												<Title color='#0360c0' textMain='Примеры' textSecondary='наших работ'/>
												<div className={styles.slider__container}>
														<Slider {...settings}>
																<div className={styles.img}>
																		<img src={Img1} alt="expample"/>
																</div>
																<div className={styles.img}>
																		<img src={Img2} alt="expample"/>
																</div>
																<div className={styles.img}>
																		<img src={Img3} alt="expample"/>
																</div>
																<div className={styles.img}>
																		<img src={Img4} alt="expample"/>
																</div>
																<div className={styles.img}>
																		<img src={Img5} alt="expample"/>
																</div>
																<div className={styles.img}>
																		<img src={Img6} alt="expample"/>
																</div>
																<div className={styles.img}>
																		<img src={Img7} alt="expample"/>
																</div>
																<div className={styles.img}>
																		<img src={Img8} alt="expample"/>
																</div>
														</Slider>
												</div>
										</Stack>
								</Stack>
						</Container>
				</section>
		);
};

export default VideoBlock;