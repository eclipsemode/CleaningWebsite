import React, { Suspense } from 'react';

import styles from './index.module.css'
import {Container} from "@lib/mui";
import Title from "@ui/Title";
import Products from "@store/features/products/Products";
import { Element } from '@lib/react-scroll'


const PriceBlock = () => {
		return (
				<section className={styles.root}>
						<Container>
								<Element name='ceny'>
								<Title color='secondary' textMain='Стоимость' textSecondary='химчистки мебели' style={{marginTop: '50px'}}/>
								</Element>
						</Container>

					<Suspense fallback={<></>}>
						<Products/>
					</Suspense>
				</section>
		);
};

export default PriceBlock;