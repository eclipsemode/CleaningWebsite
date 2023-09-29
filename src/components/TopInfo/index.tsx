"use client"
import React from 'react';
import {Box, Button, Container, Stack, Link as LinkMUI} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import {useAppSelector} from "@store/hooks";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import styles from './index.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import {CSSTransition} from 'react-transition-group';
import './MobileMenuTransitionGroup.css'
import WhatsApp from "@public/images/social/WhatsApp.png";
import vkApp from "@public/images/social/VK.png";
import Image from "next/image";
import Link from "next/link";

const TopInfo = () => {
		const {city} = useAppSelector(state => state.location)
		const [opened, setOpened] = React.useState<boolean>(false);
		const nodeRef = React.useRef<HTMLDivElement>(null);
		let buttonRef = React.useRef<HTMLDivElement | null>(null)

	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent | React.PropsWithRef<any>) => {
			if (opened && !nodeRef.current?.contains(event.target) && !buttonRef.current?.contains(event.target)) {
				setOpened(false);
			}
		};

		document.body.addEventListener('click', handleClickOutside);

		return () => {
			document.body.removeEventListener('click', handleClickOutside);
		}
	}, [opened])

		const renderMenuOpened = () => (
				<CSSTransition nodeRef={nodeRef} in={opened} timeout={300} classNames='menu' unmountOnExit>
				<Stack ref={nodeRef}
							 style={{
						width: '100%',
						height: '500px',
						background: '#fff',
						position: 'fixed',
						top: '0',
						left: '0',
						bottom: '0',
						zIndex: '100',
				}}
							 justifyContent='center' alignItems='center'>
						<Stack alignItems='center' spacing={2} sx={{padding: '20px 0'}}>
								<Link className={styles.menuLinkMobile} href='/' onClick={() => setOpened(false)}><Button>Главная</Button></Link>
								<Link className={styles.menuLinkMobile} href='/examples' onClick={() => setOpened(false)}><Button>Примеры</Button></Link>
								<Link className={styles.menuLinkMobile} href='/price' onClick={() => setOpened(false)}><Button>Цены</Button></Link>
								<Link className={styles.menuLinkMobile} href='/team' onClick={() => setOpened(false)}><Button>Команда</Button></Link>
								<Link className={styles.menuLinkMobile} href='/reviews' onClick={() => setOpened(false)}><Button>Отзывы</Button></Link>
								<Link className={styles.menuLinkMobile} href='/question' onClick={() => setOpened(false)}><Button>Вопросы</Button></Link>
						</Stack>
						<Stack justifyContent='center' alignItems='center' direction='row' width='100%' style={{position: 'absolute', bottom: '0', background: '#f5f5f5', height: '58px'}}>
								<div style={{width: '100%', display: 'flex', justifyContent: 'center', cursor: 'pointer'}}>
									<LinkMUI href='https://wa.me/79182330132' target='_blank'><Image src={WhatsApp} width={24} alt="wahtsapp"/></LinkMUI>
								</div>
								<div style={{width: '100%', display: 'flex', justifyContent: 'center', cursor: 'pointer'}}>
									<LinkMUI href='https://vk.com/crystal_divan' target='_blank'><Image src={vkApp} width={24} alt="vk"/></LinkMUI>
								</div>
						</Stack>
				</Stack>
				</CSSTransition>
		)
		return (
				<Box className={styles.box}>
						<Container>
								<div className={styles.container}>
										<Stack direction='row' alignItems='center' columnGap={1}>
												<InfoIcon color='info'/>
												<p style={{margin: '0', color: '#fff'}}>Приедем в удобное время</p>
										</Stack>

										<Stack direction='row' alignItems='center' columnGap={1}>
												<LinkMUI href="#" className={styles.link}>{city}</LinkMUI>
												<FiberManualRecordIcon sx={{fontSize: '10px', color: '#fff'}}/>
												<p style={{margin: '0', color: '#fff'}}>Есть свободный мастер</p>
										</Stack>

										<div className={styles.menuButtonContainer} ref={buttonRef} style={{cursor: 'pointer', zIndex: '101'}} onClick={() => setOpened(!opened)}>
												<MenuIcon className={styles.menuButton} sx={{width: '40px', height: '40px'}} />
										</div>
								</div>
						</Container>
						{renderMenuOpened()}
				</Box>
		);
};

export default TopInfo;