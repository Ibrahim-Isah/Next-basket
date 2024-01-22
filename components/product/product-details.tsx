'use client';

import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import { PhotoCarousel } from './carousel';
import { Product } from './product-list';
import { formatCurrency } from '@/lib/utils';

const styles = {
	flexContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		gap: 4,
		flexDirection: { sm: 'column', md: 'row' },
	},
	imageContainer: {
		width: { xs: '100%', sm: '50%' },
	},
	infoContainer: {
		width: 'full',
		padding: '6',
		'@media (min-width: 600px)': {
			width: '1/2',
		},
	},
};

type Props = {
	product: Product;
};

const ProductDetails: React.FC<Props> = ({ product }) => {
	const hasStock = true;
	return (
		<Container>
			<Box sx={styles.flexContainer}>
				<Box sx={styles.imageContainer}>
					<PhotoCarousel imageLinks={[product.thumbnail, ...product.images]} />
				</Box>
				<Box sx={styles.infoContainer}>
					<Box sx={{ marginBottom: '67px' }}>
						<Typography variant='h4'>{product.title}</Typography>
						<Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
							<Box sx={{ display: 'flex', gap: '10px' }}>
								<Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
									{[1, 2, 3, 4, 5].map((_, index) => (
										<StarIcon key={index} sx={{ color: '#F3CD03' }} />
									))}
								</Box>
								<Typography variant='subtitle1' fontWeight='bold'>
									10 Reviews
								</Typography>
							</Box>
						</Box>
					</Box>
					<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
						<Typography variant='h5' fontWeight={500}>
							{formatCurrency(product.price)}
						</Typography>
						<Box sx={{ fontWeight: 600, mb: 1 }}>
							{' '}
							Availability :
							<span
								style={{
									color: hasStock ? '#23A6F0' : 'gray',
								}}
							>
								{hasStock ? ' In Stock' : ' Out of Stock'}
							</span>
						</Box>
					</Box>
					<Box
						sx={{
							borderBottom: '1px solid #ccc',
							paddingBottom: '15px',
							color: '#858585',
						}}
					>
						{product.description}
					</Box>
				</Box>
			</Box>
		</Container>
	);
};

export default ProductDetails;
