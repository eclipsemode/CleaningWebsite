import React from 'react';
import styles from './index.module.css'
import {Button, Container, Stack} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import BannerImg from '../../assets/images/default/divan-2-3.jpg'
import YandexImg from '../../assets/images/default/orig.png'
import {useAppSelector} from "../../app/hooks";
import SampleNextArrow from "../../ui/SampleNextArrow";
import SamplePrevArrow from "../../ui/SamplePrevArrow";
import Img1 from "../../assets/images/additional/lehirtpma16neq0yl357ehcyv7728mbw.jpg";
import Img2 from "../../assets/images/additional/2.jpg";
import Img3 from "../../assets/images/additional/Lakirovka-parketa-mini-e1427902783581-360x186.jpg";
import Img4 from "../../assets/images/additional/moem-okna-2.jpg";
import Img5 from "../../assets/images/additional/909550134-1920w.jpg";
import Slider from "react-slick";

const Banner = () => {
		const {city} = useAppSelector(state => state.location)

		const settings = {
				dots: true,
				infinite: true,
				speed: 300,
				slidesToShow: 4,
				slidesToScroll: 1,
				nextArrow: <SampleNextArrow/>,
				prevArrow: <SamplePrevArrow/>,
				adaptiveHeight: true,
				// width: '270px',
				// height: '220px',
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
				<Container>
						<Stack spacing={4}>
						<section className={styles.root}>
								<Stack direction='column' justifyContent='center'>
										<h1 className={styles.title}>ПРАВИЛЬНАЯ ХИМЧИСТКА МЕБЕЛИ</h1>
										<h2 className={styles.subtitle}>В {city}е</h2>
										<p className={styles.additional}><AddIcon style={{color: '#0360c0'}}/>С 2020 года 3489 единиц почищенной мебели</p>
										<p className={styles.additional}><AddIcon style={{color: '#0360c0'}}/>Биоразлагаемые чистящие средства</p>
										<p className={styles.additional}><AddIcon style={{color: '#0360c0'}}/>Гарантия максимального результата</p>
										<p className={styles.additional}><AddIcon style={{color: '#0360c0'}}/>121 отзыв на 5 звезд</p>

										<Stack direction='row' spacing={5} marginTop='20px'>
												<Button variant="contained" sx={{maxWidth: '170px', width: '100%'}}>Заказать</Button>
												<img src={YandexImg} width={'150px'} height={'50px'} alt="yandex"/>
										</Stack>
								</Stack>


								<img className={styles.img} src={BannerImg} alt="Divan"/>
						</section>

						<section className={styles.bottomSection}>
								<Slider {...settings}>
										<div className={styles.img}>
												<img src={Img1} alt="expample"/>
												<span>Чистим шторы без снятия и глажки</span>
										</div>
										<div className={styles.img}>
												<img src={Img2} alt="expample"/>
												<span>Делаем химчистку автомобилей</span>
										</div>
										<div className={styles.img}>
												<img src={Img3} alt="expample"/>
												<span>Чистим полы и напольные покрытия</span>
										</div>
										<div className={styles.img}>
												<img src={Img4} alt="expample"/>
												<span>Моем окна</span>
										</div>
										<div className={styles.img}>
												<img src={Img5} alt="expample"/>
												<span>Делаем уборку в домах и квартирах</span>
										</div>
								</Slider>
						</section>
						</Stack>
				</Container>
		);
};

export default Banner;