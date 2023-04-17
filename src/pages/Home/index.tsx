import React from 'react';
import styles from './index.module.css'
import Banner from "../../components/Banner/Banner";
import UnderBanner from "../../components/UnderBanner";
import VideoBlock from "../../components/VideoBlock";
import PriceBlock from "../../components/PriceBlock";
import HelpBlock from "../../components/HelpBlock";
import TeamBlock from "../../components/TeamBlock";
import ReviewsBlock from "../../components/ReviewsBlock";
import QuestionAndAnswerBlock from "../../components/QuestionAndAnswerBlock";

const Home = () => {
		return (
				<main className={styles.root}>
						<Banner/>
						<UnderBanner/>
						<VideoBlock/>
						<PriceBlock/>
						<HelpBlock/>
						<TeamBlock/>
						<ReviewsBlock/>
						<QuestionAndAnswerBlock/>
				</main>
		);
};

export default Home;