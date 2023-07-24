"use client"
import styles from './index.module.css'
import Logo from '@public/images/logo.png'
import {Button, Container, Link, Stack} from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import { Link as ScrollLink } from 'react-scroll'
import WhatsApp from '@public/images/social/WhatsApp.png'
import vkApp from '@public//images/social/VK.png'
import Image from "next/image";

const Header = () => {
		return (

				<header className={styles.root}>
						<Container className={styles.container} sx={{
								display: 'flex',
								height: 'fit-content',
								alignItems: 'center',
								justifyContent: 'space-between'
						}}>
								<Image width='100' src={Logo} alt="logotype"/>

								<Stack className={styles.menuBlock} alignItems='center'>
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
												}}><ScrollLink to="komanda" spy={true} smooth={true} duration={500}>Командаa</ScrollLink></Button>
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
													<Link href='https://wa.me/79182330132' target='_blank'><Image src={WhatsApp} width={24} alt="wahtsapp"/></Link>
													<Link href='https://vk.com/crystal_divan' target='_blank'><Image src={vkApp} width={24} alt="vk"/></Link>

												</Stack>
										</Stack>

									<Link href='tel:+79182330132'><Button variant="contained">Бесплатная консультация</Button></Link>
								</Stack>
						</Container>
				</header>
		);
};

export default Header;