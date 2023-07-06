"use client"
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './index.module.css'
import {Box, Container, Stack} from "@lib/mui";
import Title from "@ui/Title";
import SampleNextArrow from "@ui/SampleNextArrow";
import SamplePrevArrow from "@ui/SamplePrevArrow";
import Slider from "react-slick";
import { Element } from '@lib/react-scroll'

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
								<Element name='otzivy'>
								<Title color="secondary" textMain='отзывы' textSecondary='клиентов'/>
								</Element>
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
														<p className={styles.text}>Отличный сервис,быстро и качественно, пользуюсь услугой химчистки второй, полностью доволен результатам</p>
														<Stack spacing={1}>
																<p className={styles.name}>Михаил</p>
																<span className={styles.city}>Армавир</span>
														</Stack>
												</Stack>
										</Box>
										<Box className={styles.box}>
												<Stack justifyContent='center' textAlign='center' padding='50px 10%' spacing={4}>
														<p className={styles.text}>Спасибо большое за быструю качественную работу. Сделали химчистку большого Дивана после переезда. Диван высох за ночь. Не осталось ни запахов ни пятен. Быстро четко приняли заявку, отработали и дали скидку. Рекомендуем.</p>
														<Stack spacing={1}>
																<p className={styles.name}>Валерий М.</p>
																<span className={styles.city}>Армавир</span>
														</Stack>
												</Stack>
										</Box>
										<Box className={styles.box}>
												<Stack justifyContent='center' textAlign='center' padding='50px 10%' spacing={4}>
														<p className={styles.text}>Дважды пользовалась услугами химчиски, светлый диван был как новый. Вчера приходили чистить матрас. Есть удобная функция напоминания раз в год. Супер быстро, надежно и чисто. Спасибо большое Вам и Вашим мастерам.</p>
														<Stack spacing={1}>
																<p className={styles.name}>Оксана В.</p>
																<span className={styles.city}>Армавир</span>
														</Stack>
												</Stack>
										</Box>
										<Box className={styles.box}>
												<Stack justifyContent='center' textAlign='center' padding='50px 10%' spacing={4}>
														<p className={styles.text}>Вызываю уже не первый раз. Как всегда всё на высоте. Дмитрий - очень вежливый и аккуратный сотрудник. Советую эту компанию, не пожалеете!</p>
														<Stack spacing={1}>
																<p className={styles.name}>Алексей</p>
																<span className={styles.city}>Армавир</span>
														</Stack>
												</Stack>
										</Box>
										<Box className={styles.box}>
												<Stack justifyContent='center' textAlign='center' padding='50px 10%' spacing={4}>
														<p className={styles.text}>Очень качествено, быстро. Большое спасибо.</p>
														<Stack spacing={1}>
																<p className={styles.name}>Людмила Свиридович</p>
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