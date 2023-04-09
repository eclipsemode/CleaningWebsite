import React from 'react';
import styles from './index.module.css'
import Banner from "../../components/Banner/Banner";
import UnderBanner from "../../components/UnderBanner";
import VideoBlock from "../../components/VideoBlock";
import PriceBlock from "../../components/PriceBlock";

const Home = () => {
		return (
				<main className={styles.root}>
						<Banner/>
						<UnderBanner/>
						<VideoBlock/>
						<PriceBlock/>
				</main>
		);
};

export default Home;