import React from 'react';
import {Container} from "@mui/material";
import styles from './index.module.css'

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
										<div className={styles.bottomContainer}>
												<h3 className={styles.bottomText}>ПОЧЕМУ ВЫБИРАЮТ <span className={styles.bottomTextSecond}>CRYSTAL?</span></h3>
										</div>
								</Container>
						</div>

				</section>
		);
};

export default UnderBanner;