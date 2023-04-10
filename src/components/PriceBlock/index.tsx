import React from 'react';
import styles from './index.module.css'
import {Container} from "@mui/material";
import Title from "../../ui/Title";
import Products from "../../features/products/Products";


const PriceBlock = () => {
		return (
				<section className={styles.root}>
						<Container>
								<Title color='secondary' textMain='Стоимость' textSecondary='химчистки мебели' style={{marginTop: '50px'}}/>
						</Container>

						<Products/>
				</section>
		);
};

export default PriceBlock;