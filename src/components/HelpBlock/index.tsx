import React from 'react';
import {Button, Container, Stack} from "@mui/material";
import styles from './index.module.css'

const masterImg: string = '/img/master.png'

const HelpBlock = () => {
		return (
				<section className={styles.root}>
						<Container sx={{position: 'relative', height: '100%'}}>
								<Stack height='100%' direction='row' justifyContent='space-between' alignItems='center' flexWrap='wrap' className={styles.container}>
										<Stack spacing={1}>
												<h2>ТРЕБУЕТСЯ ПОМОЩЬ?</h2>
												<h4>Хотите получить подробную консультацию по химчистке от нашего старшего технолога?</h4>
										</Stack>
										<Button className={styles.button} variant="contained">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</Button>
										<img className={styles.image} width={140} src={masterImg} alt="specialist"/>
								</Stack>
						</Container>
				</section>
		);
};

export default HelpBlock;