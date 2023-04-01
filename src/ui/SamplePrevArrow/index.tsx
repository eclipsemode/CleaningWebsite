import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface IProps {
		className?: string,
		style?: React.CSSProperties,
		onClick?: () => void
}

const SamplePrevArrow = (props: IProps) => {
		const { className, style, onClick } = props;
		return (
				<ArrowBackIosIcon className={className} style={{ ...style, display: "block", color: "#0360c0" }} onClick={onClick}/>
		);
};

export default SamplePrevArrow;