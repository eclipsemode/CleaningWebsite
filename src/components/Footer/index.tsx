import React from 'react';
import styles from './index.module.css'
import {Button, Container, Link as LinkMUI, Stack} from "@mui/material";
import Logo from '../../assets/images/logo.png'
import YandexImg from '../../assets/images/default/orig.png'
import {useAppSelector} from "../../app/hooks";
import {Link} from "react-router-dom";
import RouterService from "../../services/RouterService";
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
		const {city} = useAppSelector(state => state.location)
		return (
				<footer className={styles.root}>
						<Container className={styles.container}>
								<Stack className={styles.first} alignItems='center'>
										<img src={Logo} width={100} height={100} alt="logo"/>
										<p>© 2022-2023 CRYSTAL</p>
										<p>Химчистка мягкой мебели в {city}е</p>
										<p>Информация на сайте не является публичной офертой</p>
										<Link to={RouterService.HOME}>Политика в отношении обработки персональных данных</Link>
								</Stack>

								<Stack spacing={2}>
										<Stack className={styles.topMenu} direction='row' spacing={2} alignItems='center' justifyContent='space-between'>
												<LinkMUI style={{color: '#fff'}} underline='none' href='#'>О компании</LinkMUI>
												<LinkMUI style={{color: '#fff'}} underline='none' href='#'>Оборудование</LinkMUI>
												<LinkMUI style={{color: '#fff'}} underline='none' href='#'>Сертификаты</LinkMUI>
												<LinkMUI style={{color: '#fff'}} underline='none' href='#'>Наш блог</LinkMUI>
												<Stack direction='row' alignItems='center' spacing={1}>
														<InstagramIcon style={{color: '#fff'}}/>
														<YouTubeIcon style={{color: '#fff'}}/>
												</Stack>
										</Stack>
										<Stack direction='row' spacing={3} className={styles.bottomMenu}>
												<Link className={styles.menuLink} to={RouterService.HOME}>Услуги</Link>
												<Link className={styles.menuLink} to={RouterService.HOME}>Бизнесу</Link>
												<Link className={styles.menuLink} to={RouterService.HOME}>Цены</Link>
												<Link className={styles.menuLink} to={RouterService.HOME}>Работы</Link>
												<Link className={styles.menuLink} to={RouterService.HOME}>Отзывы</Link>
												<Link className={styles.menuLink} to={RouterService.HOME}>Контакты</Link>
										</Stack>
										<Stack className={styles.additionalMenu} direction='row' justifyContent='space-between'>
												<Stack spacing={2}>
														<h3 className={styles.footer__title}>Частным лицам</h3>
														<Link className={styles.secondLink} to={RouterService.HOME}>Химчистка диванов</Link>
														<Link className={styles.secondLink} to={RouterService.HOME}>Химчистка мягкой мебели</Link>
														<Link className={styles.secondLink} to={RouterService.HOME}>Химчистка кожаной мебели</Link>
														<Link className={styles.secondLink} to={RouterService.HOME}>Химчистка стульев</Link>
														<Link className={styles.secondLink} to={RouterService.HOME}>Химчистка кресел</Link>
														<Link className={styles.secondLink} to={RouterService.HOME}>Химчистка матрасов</Link>
														<Link className={styles.secondLink} to={RouterService.HOME}>Химчистка ковролина</Link>
														<Link className={styles.secondLink} to={RouterService.HOME}>Химчистка автомобилей</Link>
												</Stack>
												<Stack spacing={2}>
														<h3 className={styles.footer__title}>Юридическим лицам</h3>
														<Link className={styles.secondLink} to={RouterService.HOME}>Химчистка мебели в офисах</Link>
														<Link className={styles.secondLink} to={RouterService.HOME}>Химчистка мебели в ресторанах</Link>
														<Link className={styles.secondLink} to={RouterService.HOME}>Химчистка мебели в кинотеатрах и театрах</Link>
														<Link className={styles.secondLink} to={RouterService.HOME}>Химчистка мебели в учебных заведениях</Link>
												</Stack>
										</Stack>
								</Stack>

								<Stack spacing={2} className={styles.third} justifyContent='space-around' alignItems='center'>
										<Stack spacing={2}>
												<Stack direction='row' alignItems='center' spacing={1}>
													<CallIcon style={{color: '#fff'}}/>
														<LinkMUI href="#" style={{color: '#fff'}} underline="none">
																+7 (918) 000-00-00
														</LinkMUI>
														<Stack direction='row'>
																<WhatsAppIcon style={{color: '#fff'}}/>
																<TelegramIcon style={{color: '#fff'}}/>
														</Stack>
												</Stack>
												<Button variant={"contained"}>Заказать звонок</Button>
										</Stack>
										<img src={YandexImg} width={150} height={50} alt="yandex"/>
								</Stack>
						</Container>
				</footer>
		);
};

export default Footer;