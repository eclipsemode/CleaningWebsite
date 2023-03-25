import React from 'react';
import {Box, Container, Stack} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import {useAppSelector} from "../../app/hooks";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {Link} from "react-router-dom";
import styles from './index.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import RouterService from "../../services/RouterService";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const TopInfo = () => {
		const {city} = useAppSelector(state => state.location)
		const [opened, setOpened] = React.useState<boolean>(false);
		const menuRef = React.useRef<HTMLDivElement>(null)
		let buttonRef = React.useRef<HTMLDivElement | null>(null)

		React.useEffect(() => {
				const handleClickOutside = (event: MouseEvent | React.PropsWithRef<any>) => {
						if (menuRef.current && !menuRef.current.contains(event.target)) {
								setOpened(true)
						}
				};

				document.body.addEventListener('click', handleClickOutside);

				return () => {
						document.body.removeEventListener('click', handleClickOutside);
				};
		}, [opened])

		const renderMenuOpened = () => (
				<Stack ref={menuRef} style={{
						width: '100%',
						height: '50%',
						background: '#fff',
						position: 'fixed',
						top: '0',
						left: '0',
						bottom: '0',
						zIndex: '100'
				}} justifyContent='center' alignItems='center'>
						<Stack alignItems='center' spacing={2}>
								<Link className={styles.menuLinkMobile} to={RouterService.HOME}>Услуги</Link>
								<Link className={styles.menuLinkMobile} to={RouterService.HOME}>Бизнесу</Link>
								<Link className={styles.menuLinkMobile} to={RouterService.HOME}>Цены</Link>
								<Link className={styles.menuLinkMobile} to={RouterService.HOME}>Работы</Link>
								<Link className={styles.menuLinkMobile} to={RouterService.HOME}>Отзывы</Link>
								<Link className={styles.menuLinkMobile} to={RouterService.HOME}>Контакты</Link>
								<Link className={styles.menuLinkMobile} to={RouterService.HOME}>О компании</Link>
								<Link className={styles.menuLinkMobile} to={RouterService.HOME}>Оборудование</Link>
								<Link className={styles.menuLinkMobile} to={RouterService.HOME}>Сертификаты</Link>
								<Link className={styles.menuLinkMobile} to={RouterService.HOME}>Наш блог</Link>
						</Stack>
						<Stack justifyContent='center' alignItems='center' direction='row' width='100%' style={{position: 'absolute', bottom: '0', background: '#f5f5f5', height: '58px'}}>
								<div style={{width: '100%', display: 'flex', justifyContent: 'center', cursor: 'pointer'}}>
										<InstagramIcon/>
								</div>
								<div style={{width: '100%', display: 'flex', justifyContent: 'center', cursor: 'pointer'}}>
										<YouTubeIcon/>
								</div>
						</Stack>
				</Stack>
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
												<Link to="/" className={styles.link}>{city}</Link>
												<FiberManualRecordIcon sx={{fontSize: '10px', color: '#fff'}}/>
												<p style={{margin: '0', color: '#fff'}}>Есть свободный мастер</p>
										</Stack>

										<div className={styles.menuButtonContainer} ref={buttonRef} style={{cursor: 'pointer', zIndex: '101'}} onClick={() => setOpened(!opened)}>
												<MenuIcon className={styles.menuButton} />
										</div>
								</div>
						</Container>
						{opened && renderMenuOpened()}
				</Box>
		);
};

export default TopInfo;