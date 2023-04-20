import React from 'react';
import styles from './index.module.css'
import {Button, Container, Stack} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';


import BannerImg from '../../assets/images/default/divan-2-3.jpg'
import YandexImg from '../../assets/images/default/orig.png'
import {useAppSelector} from "../../app/hooks";

const Banner = () => {
		const {city} = useAppSelector(state => state.location)
		return (
				<Container>
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
				</Container>
		);
};

export default Banner;