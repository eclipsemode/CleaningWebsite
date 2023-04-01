import React from 'react';
import styles from './index.module.css'

interface IProps {
		textMain: string,
		textSecondary: string,
		color?: string
}

const Title = ({textMain, textSecondary, color = '#fff'}: IProps) => {
		return (
				<h2 className={styles.root} style={{color}}>{textMain} <span>{textSecondary}</span></h2>
		);
};

export default Title;