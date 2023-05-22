"use client"
import styles from './index.module.css'
import {Button, Container, Link as LinkMUI, Stack} from "@mui/material";
import Logo from '@public/images/logo.png'
import YandexImg from '@public/images/default/orig.png'
import {useAppSelector} from "@store//hooks";
import CallIcon from '@mui/icons-material/Call';
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsApp from "@public/images/social/WhatsApp.png";
import vkApp from "@public/images/social/VK.png";
import Image from "next/image";

const Footer = () => {
		const {city} = useAppSelector(state => state.location)
		return (
				<footer className={styles.root}>
						<Container className={styles.container}>
								<Stack className={styles.first} alignItems='center'>
										<Image src={Logo} width={100} height={100} alt="logo"/>
										<p>© 2022-2023 CRYSTAL</p>
										<p>Химчистка мягкой мебели в {city}е</p>
										<p>Информация на сайте не является публичной офертой</p>
										<p>Политика в отношении обработки персональных данных</p>
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
										<Stack className={styles.additionalMenu} direction='row' justifyContent='space-between' spacing={1}>
												<Stack spacing={2}>
														<h3 className={styles.footer__title}>Частным лицам</h3>
														<p className={styles.secondLink}>Химчистка диванов</p>
														<p className={styles.secondLink}>Химчистка мягкой мебели</p>
														<p className={styles.secondLink}>Химчистка кожаной мебели</p>
														<p className={styles.secondLink}>Химчистка стульев</p>
														<p className={styles.secondLink}>Химчистка кресел</p>
														<p className={styles.secondLink}>Химчистка матрасов</p>
														<p className={styles.secondLink}>Химчистка ковролина</p>
														<p className={styles.secondLink}>Химчистка автомобилей</p>
												</Stack>
												<Stack spacing={2}>
														<h3 className={styles.footer__title}>Юридическим лицам</h3>
														<p className={styles.secondLink}>Химчистка мебели в офисах</p>
														<p className={styles.secondLink}>Химчистка мебели в ресторанах</p>
														<p className={styles.secondLink}>Химчистка мебели в кинотеатрах и театрах</p>
														<p className={styles.secondLink}>Химчистка мебели в учебных заведениях</p>
												</Stack>
										</Stack>
								</Stack>

								<Stack spacing={2} className={styles.third} justifyContent='space-around' alignItems='center'>
										<Stack spacing={2}>
												<Stack direction='row' alignItems='center' spacing={1}>
													<CallIcon style={{color: '#fff'}}/>
														<LinkMUI href="tel:+79182330132" style={{color: '#fff'}} underline="none">
															+7 (918) 233-01-32
														</LinkMUI>
														<Stack direction='row' columnGap='10px'>
															<LinkMUI href='https://wa.me/79182330132' target='_blank'><Image src={WhatsApp} width={24} alt="wahtsapp"/></LinkMUI>
															<LinkMUI href='https://vk.com/crystal_divan' target='_blank'><Image src={vkApp} width={24} alt="vk"/></LinkMUI>
														</Stack>
												</Stack>
											<LinkMUI href='tel:+79182330132'><Button variant={"contained"}>Заказать звонок</Button></LinkMUI>
										</Stack>
										<Image src={YandexImg} width={150} height={50} alt="yandex"/>
								</Stack>
						</Container>
				</footer>
		);
};

export default Footer;