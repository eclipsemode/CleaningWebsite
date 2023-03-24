import React from 'react';
import styles from './index.module.css'
import {Button, Container, Stack} from "@mui/material";
import Logo from '../../assets/images/logo.png'
import YandexImg from '../../assets/images/default/orig.png'
import {useAppSelector} from "../../app/hooks";
import {Link} from "react-router-dom";
import RouterService from "../../services/RouterService";

const Footer = () => {
		const {city} = useAppSelector(state => state.location)
		return (
				<footer className={styles.root}>
						<Container>
								<Stack className={styles.first}>
										<img src={Logo} width={100} height={100} alt="logo"/>
										<p>© 2022-2023 CRYSTAL</p>
										<p>Химчистка мягкой мебели в {city}е</p>
										<p>Информация на сайте не является публичной офертой</p>
										<Link to={RouterService.HOME}>Политика в отношении обработки персональных данных</Link>
								</Stack>

								<Stack>

								</Stack>

								<Stack>
										<Stack>
												<Stack>

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