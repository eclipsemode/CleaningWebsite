import React from 'react';
import {Button, Container, Link, Stack} from "@lib/mui";
import styles from './index.module.css'
import Image from "next/image";
import MasterImg from '@public/images/master/master.png'

const HelpBlock = () => {
		return (
				<section className={styles.root}>
						<Container sx={{position: 'relative', height: '100%'}}>
								<Stack height='100%' direction='row' justifyContent='space-between' alignItems='center' flexWrap='wrap' className={styles.container}>
										<Stack spacing={1}>
												<h2 className={styles.h2}>ТРЕБУЕТСЯ ПОМОЩЬ?</h2>
												<h4 className={styles.h4}>Хотите получить подробную консультацию по химчистке от нашего старшего технолога?</h4>
										</Stack>
									<Link href='tel:+79182330132'><Button className={styles.button} variant="contained">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</Button></Link>
										<Image priority={false} className={styles.image} width={140} src={MasterImg} alt="specialist"/>
								</Stack>
						</Container>
				</section>
		);
};

export default HelpBlock;