import React from 'react';
import {Box} from "@mui/material";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import {animateScroll as scroll} from "react-scroll/modules";
import styles from './index.module.css'

const ToTopArrow = () => {
		const [arrowHidden, setArrowHidden] = React.useState<boolean>(true);

		const scrollToTop = () => {
				scroll.scrollToTop();
		}

		const isCheckOffset = React.useCallback(() => {
				window.scrollY > 100
						? setArrowHidden(false)
						: setArrowHidden(true);
		}, []);

		React.useEffect(() => {
				isCheckOffset();
				window.addEventListener("scroll", () => {
						isCheckOffset();
				});
		}, [isCheckOffset]);
		return arrowHidden ? null : (
				<Box className={styles.root}>
						<div onClick={() => scrollToTop()}>
								<ArrowCircleUpIcon sx={{
										cursor: 'pointer',
										color: '#0360c0',
										width: '50px',
										height: '50px',
										background: '#fff',
										borderRadius: '50%',
										'&:hover': {
												background: '#ebebeb'
										}
								}}
								/>
						</div>
				</Box>
		);
};

export default ToTopArrow;