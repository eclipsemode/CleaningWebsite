import React from 'react';
import styles from './index.module.css'
import Logo from '../../assets/images/logo.png'
import {Button, Container, Link, Stack} from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import {useNavigate} from "react-router-dom";
import RouterService from "../../services/RouterService";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import WhatsApp from '../../assets/images/social/WhatsApp.png'
import vkApp from '../../assets/images/social/VK.png'

const Header = () => {
		const navigate = useNavigate();

		return (
				<header className={styles.root}>
						<Container className={styles.container} sx={{
								display: 'flex',
								height: 'fit-content',
								alignItems: 'center',
								justifyContent: 'space-between'
						}}>
								<img width='100' src={Logo} alt="logotype" onClick={() => navigate(RouterService.HOME)}/>

								<Stack className={styles.menuBlock} alignItems='center'>

										<Stack direction='row' alignItems='center' columnGap={4}>
												<Stack direction='row' columnGap={2}>
														<Button style={{color: '#898989'}} variant="text">О компании</Button>
														<Button style={{color: '#898989'}} variant="text">Оборудование</Button>
														<Button style={{color: '#898989'}} variant="text">Сертификаты</Button>
														<Button style={{color: '#898989'}} variant="text" onClick={() => scroll.scrollToBottom()}>Контакты</Button>
												</Stack>
										</Stack>

										<Stack direction='row' columnGap={1}>
												<Button sx={{
														fontSize: '17px',
														borderBottom: '1px solid #d8d8da',
														borderRadius: 0,
														paddingBottom: 0
												}}><ScrollLink to="process" spy={true} smooth={true} duration={500}>Процесс</ScrollLink></Button>
												<Button sx={{
														fontSize: '17px',
														borderBottom: '1px solid #d8d8da',
														borderRadius: 0,
														paddingBottom: 0
												}}><ScrollLink to="primeri" spy={true} smooth={true} duration={500}>Примеры</ScrollLink></Button>
												<Button sx={{
														fontSize: '17px',
														borderBottom: '1px solid #d8d8da',
														borderRadius: 0,
														paddingBottom: 0
												}}><ScrollLink to="ceny" spy={true} smooth={true} duration={500}>Цены</ScrollLink></Button>
												<Button sx={{
														fontSize: '17px',
														borderBottom: '1px solid #d8d8da',
														borderRadius: 0,
														paddingBottom: 0
												}}><ScrollLink to="komanda" spy={true} smooth={true} duration={500}>Команда</ScrollLink></Button>
												<Button sx={{
														fontSize: '17px',
														borderBottom: '1px solid #d8d8da',
														borderRadius: 0,
														paddingBottom: 0
												}}><ScrollLink to="otzivy" spy={true} smooth={true} duration={500}>Отзывы</ScrollLink></Button>
												<Button sx={{
														fontSize: '17px',
														borderBottom: '1px solid #d8d8da',
														borderRadius: 0,
														paddingBottom: 0
												}}><ScrollLink to="voprosy" spy={true} smooth={true} duration={500}>Вопросы</ScrollLink></Button>

										</Stack>

								</Stack>

								<Stack rowGap={2}>
										<Stack direction='row' alignItems='center' columnGap={5}>
												<Stack direction='row' alignItems='center'>
														<CallIcon/>
														<Link color='#000' fontWeight='700' fontSize='18px' href="tel:+79182330132"
																	underline="none">
																+7 (918) 233-01-32
														</Link>
												</Stack>
												<Stack direction='row' columnGap='10px' alignItems='center'>
													<Link href='https://wa.me/79182330132' target='_blank'><img src={WhatsApp} width={24} alt="wahtsapp"/></Link>
													<Link href='https://vk.com/crystal_divan' target='_blank'><img src={vkApp} width={24} alt="vk"/></Link>

												</Stack>
										</Stack>

										<Button variant="contained">Бесплатная консультация</Button>
								</Stack>
						</Container>
				</header>
		);
};

export default Header;