'use client';
import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import ProductList, {
	Product,
	ProductsResponse,
} from '../product/product-list';
import { fetchApi } from '@/services/api';

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
		marginBottom: '30px',
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
		margin: '50px auto',
		maxWidth: 'screen-xl',
		padding: '15px',
		'@media (min-width: 600px)': {
			padding: '20px 0',
		},
	},
	productListGridStyle: {
		width: '100%',
	},
};

const Featured = () => {
	const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
	const [total, setTotal] = useState(0);
	const [limit, setLimit] = useState(0);
	const pages = Math.ceil(total / limit);
	const [currentPage, setCurrentPage] = useState(1);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		async function getProducts() {
			const response = await fetchApi('products?limit=10');
			if (response.products) {
				setFeaturedProducts(response.products);
				setTotal(response.total);
				setLimit(response.limit);
			}
		}

		getProducts();
	}, []);

	const loadMore = async () => {
		const nextPage = currentPage + 1;

		if (nextPage > pages) return;

		setIsLoading(true);
		const loadMoreProductsResponse: ProductsResponse = await fetchApi(
			`products?limit=${limit}&skip=${(nextPage - 1) * limit}`
		);
		setFeaturedProducts([
			...featuredProducts,
			...loadMoreProductsResponse.products,
		]);
		setCurrentPage(nextPage);
		setIsLoading(false);
	};

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

				<ProductList products={featuredProducts} />

				{currentPage + 1 < pages && (
					<Box sx={styles.buttonContainerStyle}>
						<Button
							variant='outlined'
							sx={styles.button}
							disabled={isLoading}
							onClick={loadMore}
						>
							{isLoading ? 'Loading products' : 'Load more products'}
						</Button>
					</Box>
				)}
			</Box>
		</Container>
	);
};

export default Featured;
