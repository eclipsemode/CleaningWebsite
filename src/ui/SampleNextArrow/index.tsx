import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface IProps {
		className?: string,
		style?: React.CSSProperties,
		onClick?: () => void
}

const SampleNextArrow = (props: IProps) => {
		const { className, style, onClick } = props;
		return (
				<ArrowForwardIosIcon className={className} style={{ ...style, display: "block", color: "#0360c0" }} onClick={onClick}/>
		);
};

export default SampleNextArrow;