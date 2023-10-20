"use client"
import styles from './index.module.css'
import Logo from '@public/images/logo_main.png'
import {Button, Container, Link as LinkMui, Stack} from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import WhatsApp from '@public/images/social/WhatsApp.png'
import vkApp from '@public//images/social/VK.png'
import Image from "next/image";
import Link from 'next/link'

const Header = () => {
		return (

				<header className={styles.root}>
						<Container className={styles.container} sx={{
								display: 'flex',
								height: 'fit-content',
								alignItems: 'center',
								justifyContent: 'space-between'
						}}>
								<Image width='100' src={Logo} alt="logotype" className={styles.logo}/>

								<Stack className={styles.menuBlock} alignItems='center'>
										<Stack direction='row' columnGap={1}>
												<Button sx={{
														fontSize: '17px',
														borderBottom: '1px solid #d8d8da',
														borderRadius: 0,
														paddingBottom: 0
												}}><Link href={'/'} style={{textDecoration: 'none', color: '#1976d2'}}>Главная</Link></Button>
												<Button sx={{
														fontSize: '17px',
														borderBottom: '1px solid #d8d8da',
														borderRadius: 0,
														paddingBottom: 0
												}}><Link href={'/examples'} style={{textDecoration: 'none', color: '#1976d2'}}>Примеры</Link></Button>
												<Button sx={{
														fontSize: '17px',
														borderBottom: '1px solid #d8d8da',
														borderRadius: 0,
														paddingBottom: 0
												}}><Link href={'/price'} style={{textDecoration: 'none', color: '#1976d2'}}>Цены</Link></Button>
												<Button sx={{
														fontSize: '17px',
														borderBottom: '1px solid #d8d8da',
														borderRadius: 0,
														paddingBottom: 0
												}}><Link href={'/team'} style={{textDecoration: 'none', color: '#1976d2'}}>Команда</Link></Button>
												<Button sx={{
														fontSize: '17px',
														borderBottom: '1px solid #d8d8da',
														borderRadius: 0,
														paddingBottom: 0
												}}><Link href={'/reviews'} style={{textDecoration: 'none', color: '#1976d2'}}>Отзывы</Link></Button>
												<Button sx={{
														fontSize: '17px',
														borderBottom: '1px solid #d8d8da',
														borderRadius: 0,
														paddingBottom: 0
												}}><Link href={'/question'} style={{textDecoration: 'none', color: '#1976d2'}}>Вопросы</Link></Button>

										</Stack>

								</Stack>

								<Stack rowGap={2}>
										<Stack direction='row' alignItems='center' columnGap={5} className={styles.socialContainer}>
												<Stack direction='row' alignItems='center' className={styles.number}>
														<CallIcon/>
														<LinkMui color='#000' fontWeight='700' fontSize='18px' href="tel:+79182330132"
																	underline="none">
																+7 (918) 233-01-32
														</LinkMui>
												</Stack>
												<Stack direction='row' columnGap='10px' alignItems='center'>
													<LinkMui href='https://wa.me/79182330132' target='_blank'><Image src={WhatsApp} width={24} alt="wahtsapp"/></LinkMui>
													<LinkMui href='https://vk.com/crystal_divan' target='_blank'><Image src={vkApp} width={24} alt="vk"/></LinkMui>

												</Stack>
										</Stack>

									<LinkMui href='tel:+79182330132'><Button variant="contained" className={styles.consult}>Бесплатная консультация</Button></LinkMui>
								</Stack>
						</Container>
				</header>
		);
};

export default Header;