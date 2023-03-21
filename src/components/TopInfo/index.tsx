import React from 'react';
import {Box, Container, Stack} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import {useAppSelector} from "../../app/hooks";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {Link} from "react-router-dom";
import styles from './index.module.css'

const TopInfo = () => {
		const {city} = useAppSelector(state => state.location)
		return (
				<Box sx={{width: '100%', height: '42px', background: '#222', display: 'flex', alignItems: 'center'}}>
						<Container>
								<Stack direction='row' alignItems='center' justifyContent='space-between'>
										<Stack direction='row' alignItems='center' columnGap={1}>
												<InfoIcon color='info'/>
												<p style={{margin: '0', color: '#fff'}}>Приедем в удобное время</p>
										</Stack>

										<Stack direction='row' alignItems='center' columnGap={1}>
												<Link to="/" className={styles.link}>{city}</Link>
												<FiberManualRecordIcon sx={{fontSize: '10px', color: '#fff'}}/>
												<p style={{margin: '0', color: '#fff'}}>Есть свободный мастер</p>
										</Stack>
								</Stack>
						</Container>
				</Box>
		);
};

export default TopInfo;