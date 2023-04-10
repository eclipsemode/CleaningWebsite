import React from 'react';
import styles from './index.module.css'

interface IProps {
		textMain: string,
		textSecondary: string,
		color?: 'primary' | 'secondary',
		style?: React.CSSProperties
}

const Title = ({textMain, textSecondary, color = 'primary', style}: IProps) => {
		return (
				<h2 className={styles.root} style={{color: color === 'primary' ? '#fff' : '#0360c0', ...style}}>{textMain} <span>{textSecondary}</span></h2>
		);
};

export default Title;