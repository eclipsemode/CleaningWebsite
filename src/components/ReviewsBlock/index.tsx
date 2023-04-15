import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './index.module.css'
import {Box, Container, Stack} from "@mui/material";
import Title from "../../ui/Title";
import SampleNextArrow from "../../ui/SampleNextArrow";
import SamplePrevArrow from "../../ui/SamplePrevArrow";
import Slider from "react-slick";

const ReviewsBlock = () => {
		const settings = {
				dots: true,
				infinite: true,
				speed: 300,
				slidesToShow: 1,
				slidesToScroll: 1,
				nextArrow: <SampleNextArrow/>,
				prevArrow: <SamplePrevArrow/>
		};
		return (
				<section className={styles.root}>
						<Container sx={{padding: '50px 0', '& .slick-dots': { left: 'calc(50% - 90px)', width: 'auto' }}}>
								<Title color="secondary" textMain='отзывы' textSecondary='клиентов'/>
								<Slider {...settings} className={styles.sliderContainer}>
										<Box className={styles.box}>
												<Stack justifyContent='center' textAlign='center' padding='50px 10%' spacing={4}>
														<p className={styles.text}>Хорошие ребята! Приехали в обозначенное время, заранее позвонили, хорошо почистили матрас, были очень приветливы. По деньгам взяли ровно столько, сколько обговаривали по телефону. В общем, впечатления самые хорошие!</p>
														<Stack spacing={1}>
																<p className={styles.name}>Наталья С.</p>
																<span className={styles.city}>Армавир</span>
														</Stack>
												</Stack>
										</Box>
										<Box className={styles.box}>
												<Stack justifyContent='center' textAlign='center' padding='50px 10%' spacing={4}>
														<p className={styles.text}>Хорошие ребята! Приехали в обозначенное время, заранее позвонили, хорошо почистили матрас, были очень приветливы. По деньгам взяли ровно столько, сколько обговаривали по телефону. В общем, впечатления самые хорошие!</p>
														<Stack spacing={1}>
																<p className={styles.name}>Наталья С.</p>
																<span className={styles.city}>Армавир</span>
														</Stack>
												</Stack>
										</Box>
										<Box className={styles.box}>
												<Stack justifyContent='center' textAlign='center' padding='50px 10%' spacing={4}>
														<p className={styles.text}>Хорошие ребята! Приехали в обозначенное время, заранее позвонили, хорошо почистили матрас, были очень приветливы. По деньгам взяли ровно столько, сколько обговаривали по телефону. В общем, впечатления самые хорошие!</p>
														<Stack spacing={1}>
																<p className={styles.name}>Наталья С.</p>
																<span className={styles.city}>Армавир</span>
														</Stack>
												</Stack>
										</Box>
										<Box className={styles.box}>
												<Stack justifyContent='center' textAlign='center' padding='50px 10%' spacing={4}>
														<p className={styles.text}>Хорошие ребята! Приехали в обозначенное время, заранее позвонили, хорошо почистили матрас, были очень приветливы. По деньгам взяли ровно столько, сколько обговаривали по телефону. В общем, впечатления самые хорошие!</p>
														<Stack spacing={1}>
																<p className={styles.name}>Наталья С.</p>
																<span className={styles.city}>Армавир</span>
														</Stack>
												</Stack>
										</Box>
										<Box className={styles.box}>
												<Stack justifyContent='center' textAlign='center' padding='50px 10%' spacing={4}>
														<p className={styles.text}>Хорошие ребята! Приехали в обозначенное время, заранее позвонили, хорошо почистили матрас, были очень приветливы. По деньгам взяли ровно столько, сколько обговаривали по телефону. В общем, впечатления самые хорошие!</p>
														<Stack spacing={1}>
																<p className={styles.name}>Наталья С.</p>
																<span className={styles.city}>Армавир</span>
														</Stack>
												</Stack>
										</Box>
										<Box className={styles.box}>
												<Stack justifyContent='center' textAlign='center' padding='50px 10%' spacing={4}>
														<p className={styles.text}>Хорошие ребята! Приехали в обозначенное время, заранее позвонили, хорошо почистили матрас, были очень приветливы. По деньгам взяли ровно столько, сколько обговаривали по телефону. В общем, впечатления самые хорошие!</p>
														<Stack spacing={1}>
																<p className={styles.name}>Наталья С.</p>
																<span className={styles.city}>Армавир</span>
														</Stack>
												</Stack>
										</Box>
								</Slider>
						</Container>
				</section>
		);
};

export default ReviewsBlock;