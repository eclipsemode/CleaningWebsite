import React from 'react';
import {Container, Stack} from "@mui/material";
import styles from './index.module.css'
import Title from "@ui/Title";
import FirstImg from '@public/images/why/uzrpy3alwh0rnv165bqrtxdc5x73jelg.png'
import SecondImg from '@public/images/why/oz4u1zv5wz59pg9oizjpha242bnwry0k.png'
import ThirdImg from '@public/images/why/ot1nkj7kwawdt4mia6fpimvbtqn8u2tx.png'
import Image from "next/image";


const UnderBanner = () => {
		return (
				<section className={styles.root}>
						<div className={styles.top}>
								<Container>
										<h3 className={styles.topText}>Наши клиенты наслаждаются чистой мебелью уже более двух лет. У вас
												будет так же, если обратитесь
												к нам!</h3>
								</Container>
						</div>

						<div className={styles.bottom}>
								<Container>
										<Stack alignItems='center' justifyContent='center' spacing={4}>
												<Title textMain='ПОЧЕМУ ВЫБИРАЮТ' textSecondary='CRYSTAL?'/>
												<Stack direction='row' flexWrap='wrap' justifyContent='center' spacing={1} rowGap='40px'>
														<Stack alignItems='center' justifyContent='center' spacing={2}>
																<Image src={FirstImg} className={styles.img} height={130} width={99} alt="why"/>
																<span className={styles.why__top}>Без запаха</span>
																<span className={styles.why__bottom}>Используем премиальные моющие средства Chemspec.</span>
														</Stack>
														<Stack alignItems='center' justifyContent='center' spacing={2}>
																<Image src={SecondImg} className={styles.img} height={130} width={99} alt="why"/>
																<span className={styles.why__top}>Безопасно</span>
																<span className={styles.why__bottom}>Технология безопасна для детей и животных.</span>
														</Stack>
														<Stack alignItems='center' justifyContent='center' spacing={2}>
																<Image src={ThirdImg} className={styles.img} height={130} width={99} alt="why"/>
																<span className={styles.why__top}>Гарантия результата</span>
																<span className={styles.why__bottom}>Гарантия 30 дней на все работы по договору.</span>
														</Stack>
												</Stack>
										</Stack>
								</Container>
						</div>

				</section>
		);
};

export default UnderBanner;