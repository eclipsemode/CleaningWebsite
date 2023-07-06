import React from 'react';
import {Container, Stack} from "@lib/mui";
import Title from "../../ui/Title";
import styles from './index.module.css'
import { Element } from '@lib/react-scroll'
import Master1Img from '@public/images/master/master1.jpg'
import Master2Img from '@public/images/master/master2.jpg'
import Image from "next/image";

const TeamBlock = () => {
		return (
				<section>
						<Container>
								<Element name='komanda'>
								<Title color='secondary' textMain='команда' textSecondary='мастеров' style={{marginTop: '50px'}}/>
								</Element>
								<Stack direction='row' flexWrap='wrap' marginTop='50px' marginBottom='50px' columnGap='100px' rowGap='40px' justifyContent='center'>
										<Stack spacing={3}>
												<Image priority={false} className={styles.img} width={254} height={254} src={Master1Img} alt='master'/>
												<Stack spacing={1}>
												<h3 className={styles.name}><span>Игорь</span> Мухатаев</h3>
												<p className={styles.role}>Старший мастер по химчистке</p>
												<p className={styles.experience}>Опыт работы 4 года</p>
												</Stack>
										</Stack>

										<Stack spacing={3}>
											<Image priority={false} className={styles.img} width={254} height={254} src={Master2Img} alt='master'/>

												<Stack spacing={1}>
														<h3 className={styles.name}><span>Данил</span> Комнин</h3>
														<p className={styles.role}>Мастер по химчистке</p>
														<p className={styles.experience}>Опыт работы 1 года</p>
												</Stack>
										</Stack>
								</Stack>

						</Container>
				</section>
		);
};

export default TeamBlock;