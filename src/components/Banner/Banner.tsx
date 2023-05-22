import React from 'react';
import styles from './index.module.css'
import {Button, Container, Link, Stack} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerImg from '@public/images/default/divan-2-3.jpg'
import YandexImg from '@public/images/default/orig.png'
import {useAppSelector} from "@store/hooks";
import SampleNextArrow from "@ui/SampleNextArrow";
import SamplePrevArrow from "@ui/SamplePrevArrow";
import Img2 from "@public/images/additional/2.jpg";
import Img4 from "@public/images/additional/moem-okna-2.jpg";
import Img5 from "@public/images/additional/rent.jpg";
import Img6 from "@public/images/additional/kovrolin.jpg";
import Slider from "react-slick";
import Image from "next/image";
import {useRouter} from "next/navigation";

const Banner = () => {
		const {city} = useAppSelector(state => state.location)
	const router = useRouter();

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
											<Link href='tel:+79182330132'><Button variant="contained" sx={{maxWidth: '170px', width: '100%'}}>Заказать</Button></Link>
												<Image src={YandexImg} width={150} height={50} alt="yandex"/>
										</Stack>
								</Stack>


								<Image className={styles.img} src={BannerImg} width={612} alt="Divan"/>
						</section>

						<section className={styles.bottomSection}>
								<Slider {...settings}>
										<div className={styles.img}>
												<Image src={Img6} alt="expample"/>
												<span>Делаем чистку ковролина</span>
										</div>
										<div className={styles.img}>
												<Image src={Img2} alt="expample"/>
												<span>Делаем химчистку автомобилей</span>
										</div>
										<div className={styles.img}>
												<Image src={Img5} alt="expample"/>
												<span>Сдаем в прокат оборудование для уборки</span>
										</div>
										<div className={styles.img}>
												<Image src={Img4} alt="expample"/>
												<span>Моем окна</span>
										</div>
								</Slider>
						</section>
						</Stack>
				</Container>
		);
};

export default Banner;