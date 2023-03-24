import React from 'react';
import {Box, Container, Stack} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import {useAppSelector} from "../../app/hooks";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {Link} from "react-router-dom";
import styles from './index.module.css'
import MenuIcon from '@mui/icons-material/Menu';

const TopInfo = () => {
		const {city} = useAppSelector(state => state.location)
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

										<MenuIcon className={styles.menuButton}/>
								</div>
						</Container>
				</Box>
		);
};

export default TopInfo;