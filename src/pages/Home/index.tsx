import React from 'react';
import styles from './index.module.css'
import Banner from "../../components/Banner/Banner";
import UnderBanner from "../../components/UnderBanner";

const Home = () => {
		return (
				<main className={styles.root}>
						<Banner/>
						<UnderBanner/>
				</main>
		);
};

export default Home;