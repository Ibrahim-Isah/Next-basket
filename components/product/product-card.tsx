import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { Product } from './product-list';

const styles = {
	card: {
		display: 'flex',
		flexDirection: 'column',
		boxShadow: 'none',
		'&:hover': {
			boxShadow: `0px 4px 10px rgba(0,0,0,0.5)`,
		},
	},
	media: {
		height: '250px',
		width: '100%',
		objectFit: 'cover',
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		textAlign: 'center',
		gap: '1rem',
		backgroundColor: 'white',
		padding: '1rem',
	},
	title: {
		fontWeight: 'bold',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
	},
	brand: {
		fontWeight: 'bold',
		color: 'gray',
	},
	price: {
		display: 'flex',
		justifyContent: 'center',
		gap: '8px',
	},
	originalPrice: {
		fontWeight: 'bold',
		color: 'gray',
	},
	discountedPrice: {
		fontWeight: 'bold',
		color: '#23856D',
	},
};

interface ProductCardProps {
	product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	const formatCurrency = (value: number | string) => {
		const numericValue = typeof value === 'string' ? parseFloat(value) : value;
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
		}).format(numericValue);
	};
	const discountedPrice =
		product.price - product.price * (product.discountPercentage / 100);

	return (
		<Link href={`/products/${product.id}`} passHref>
			<Card component='a' sx={styles.card} title={product.title}>
				<CardMedia
					component='div'
					sx={styles.media}
					style={{ backgroundImage: `url(${product.thumbnail})` }}
				/>
				<CardContent sx={styles.content}>
					<Typography variant='body1' component='span' sx={styles.title}>
						{product.title}
					</Typography>
					<Typography variant='body2' sx={styles.brand}>
						{product.brand}
					</Typography>
					<Box sx={styles.price}>
						<Typography variant='body2' sx={styles.originalPrice}>
							{formatCurrency(product.price)}
						</Typography>
						<Typography variant='body2' sx={styles.discountedPrice}>
							{formatCurrency(discountedPrice)}
						</Typography>
					</Box>
				</CardContent>
			</Card>
		</Link>
	);
};

export default ProductCard;
