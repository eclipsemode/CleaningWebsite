import React from 'react';
import {Container, Stack} from "@mui/material";
import Title from "../../ui/Title";
import styles from './index.module.css'
import Master1Img from '../../assets/images/team/dbbc8b6e785ee196db2e0414f51c7447.jpg'
import Master2Img from '../../assets/images/team/810ef0ef59b47119ea372326acca274f.jpg'

const TeamBlock = () => {
		return (
				<section>
						<Container>
								<Title color='secondary' textMain='команда' textSecondary='мастеров' style={{marginTop: '50px'}}/>
								<Stack direction='row' flexWrap='wrap' marginTop='50px' marginBottom='50px' columnGap='100px' rowGap='40px' justifyContent='center'>
										<Stack spacing={3}>
												<img className={styles.img} width={254} height={254} src={Master1Img} alt='master'/>
												<Stack spacing={1}>
												<h3 className={styles.name}><span>Иван</span> Иванов</h3>
												<p className={styles.role}>Менеджер консультант</p>
												<p className={styles.experience}>Опыт работы 2 года</p>
												</Stack>
										</Stack>

										<Stack spacing={3}>
												<img className={styles.img} width={254} height={254} src={Master2Img} alt='master'/>
												<Stack spacing={1}>
														<h3 className={styles.name}><span>Иван</span> Иванов</h3>
														<p className={styles.role}>Менеджер консультант</p>
														<p className={styles.experience}>Опыт работы 2 года</p>
												</Stack>
										</Stack>
								</Stack>

						</Container>
				</section>
		);
};

export default TeamBlock;