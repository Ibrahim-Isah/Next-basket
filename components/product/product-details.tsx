'use client';

import { Box, Container } from '@mui/material';
import React from 'react';
import { PhotoCarousel } from './carousel';
import { Product } from './product-list';

const styles = {
	flexContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: { sm: 'column', md: 'row' },
	},
	imageContainer: {
		width: { xs: '100%', sm: '50%' },
	},
};

type Props = {
	product: Product;
};

const ProductDetails: React.FC<Props> = ({ product }) => {
	return (
		<Container>
			<Box sx={styles.flexContainer}>
				<Box sx={styles.imageContainer}>
					<PhotoCarousel imageLinks={[product.thumbnail, ...product.images]} />
				</Box>
				<Box>wahala</Box>
			</Box>
		</Container>
	);
};

export default ProductDetails;
