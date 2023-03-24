import React from 'react';
import styles from './index.module.css'
import Logo from '../../assets/images/logo.png'
import {Button, Container, Link, Stack} from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MenuButton from "../MenuButton";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import CallIcon from '@mui/icons-material/Call';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {useNavigate} from "react-router-dom";
import RouterService from "../../services/RouterService";

const Header = () => {
		const navigate = useNavigate();

		return (
				<header className={styles.root}>
						<Container className={styles.container} sx={{display: 'flex', height: 'fit-content', alignItems: 'center', justifyContent: 'space-between'}}>
								<img width='100' src={Logo} alt="logotype" onClick={() => navigate(RouterService.HOME)}/>

								<Stack className={styles.menuBlock} alignItems='center'>

										<Stack direction='row' alignItems='center' columnGap={4}>
												<Stack direction='row' columnGap={2}>
														<Button style={{color: '#898989'}} variant="text">О компании</Button>
														<Button style={{color: '#898989'}} variant="text">Оборудование</Button>
														<Button style={{color: '#898989'}} variant="text">Сертификаты</Button>
														<Button style={{color: '#898989'}} variant="text">Наш блог</Button>
												</Stack>

												<Stack direction='row' columnGap={1}>
														<InstagramIcon/>
														<YouTubeIcon/>
												</Stack>
										</Stack>

										<Stack direction='row' columnGap={1}>
												<Stack direction='row' alignItems='center'>
														<MenuButton title='Услуги' children={[
																{id: 1, path: RouterService.HOME, name: 'Химчистка диванов'},
																{id: 2, path: RouterService.HOME, name: 'Химчистка мягкой мебели'},
																{id: 3, path: RouterService.HOME, name: 'Химчистка кожанной мебели'},
																{id: 4, path: RouterService.HOME, name: 'Химчистка стульев'},
																{id: 5, path: RouterService.HOME, name: 'Химчистка кресел'},
																{id: 6, path: RouterService.HOME, name: 'Химчистка матрасов'},
																{id: 7, path: RouterService.HOME, name: 'Химчистка ковролина'},
																{id: 8, path: RouterService.HOME, name: 'Химчистка автомобилей'},
														]}/>
														<ArrowDropDownIcon sx={{fontSize: '15px'}}/>
												</Stack>

												<Stack direction='row' alignItems='center'>
												<MenuButton title='Бизнесу' children={[
														{id: 1, path: RouterService.HOME, name: 'Химчистка мебели в офисах'},
														{id: 2, path: RouterService.HOME, name: 'Химчистка мебели в ресторанах'},
														{id: 3, path: RouterService.HOME, name: 'Химчистка мебели в кинотеатрах и театрах'},
														{id: 4, path: RouterService.HOME, name: 'Химчистка мебели в учебных заведениях'},
												]}/>
														<ArrowDropDownIcon sx={{fontSize: '15px'}}/>
												</Stack>
												<Button sx={{fontSize: '17px', borderBottom: '1px solid #d8d8da', borderRadius: 0, paddingBottom: 0}}>Цены</Button>
												<Button sx={{fontSize: '17px', borderBottom: '1px solid #d8d8da', borderRadius: 0, paddingBottom: 0}}>Работы</Button>
												<Button sx={{fontSize: '17px', borderBottom: '1px solid #d8d8da', borderRadius: 0, paddingBottom: 0}}>Отзывы</Button>
												<Button sx={{fontSize: '17px', borderBottom: '1px solid #d8d8da', borderRadius: 0, paddingBottom: 0}}>Контакты</Button>

										</Stack>

								</Stack>

								<Stack rowGap={2}>
										<Stack direction='row' alignItems='center' columnGap={5}>
												<Stack direction='row' alignItems='center'>
														<CallIcon/>
														<Link color='#000' fontWeight='700' fontSize='18px' href="tel:+79180000000"
																	underline="none">
																+7 918 000-00-00
														</Link>
												</Stack>
												<Stack direction='row' alignItems='center'>
														<WhatsAppIcon/>
														<TelegramIcon/>
												</Stack>
										</Stack>

										<Button variant="contained">Бесплатная консультация</Button>
								</Stack>
						</Container>
				</header>
		);
};

export default Header;