'use client';
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const styles = {
	button: {
		borderRadius: 1,
		borderColor: '#23A6F0',
		px: '25px',
		py: '10px',
		color: '#23A6F0',
	},
	buttonContainerStyle: {
		display: 'flex',
		justifyContent: 'center',
		paddingTop: '6px',
	},
	titleContainerStyle: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginBottom: '10px',
		textAlign: 'center',

		'>': {
			my: 1,
		},

		'> h5': {
			color: 'gray',
		},

		'> p': {
			color: 'gray',
			fontWeight: 'medium',
		},
	},
	sectionStyle: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		paddingTop: '6px',
	},
	containerStyle: {
		margin: '0 auto',
		maxWidth: 'screen-xl',
		padding: '10px',
		'@media (min-width: 600px)': {
			padding: '20px 0',
		},
	},
	productListGridStyle: {
		width: '100%',
	},
};

const Featured = () => {
	const isLoading = false;
	return (
		<Container sx={styles.containerStyle}>
			<Box sx={styles.sectionStyle}>
				<Box sx={styles.titleContainerStyle}>
					<Typography variant='h5'>Featured Products</Typography>
					<Typography variant='h4' fontWeight={700} textTransform={'uppercase'}>
						Bestseller Products
					</Typography>
					<Typography variant='body2'>
						Problems trying to resolve the conflict between
					</Typography>
				</Box>

				{/* <ProductListGrid
					products={featuredProducts}
					sx={productListGridStyle}
				/> */}

				{/* {currentPage + 1 < pages && ( */}
				<Box sx={styles.buttonContainerStyle}>
					<Button
						variant='outlined'
						sx={styles.button}
						// loading={isLoading}
						// onClick={handleLoadMoreProducts}
					>
						{isLoading ? 'Loading products' : 'Load more products'}
					</Button>
				</Box>
				{/* )} */}
			</Box>
		</Container>
	);
};

export default Featured;
