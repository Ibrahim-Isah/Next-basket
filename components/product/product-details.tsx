'use client';

import EyeIcon from '@/assets/svg/eye.svg';
import { formatCurrency } from '@/lib/utils';
import CartIcon from '@/assets/svg/cart.svg';
import StarIcon from '@mui/icons-material/Star';
import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import { PhotoCarousel } from './carousel';
import { Product } from './product-list';
import LikeIcon from '@/assets/svg/love.svg';
import Image from 'next/image';
import './carousel.css';

const styles = {
	flexContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		gap: 4,
		flexDirection: { xs: 'column', md: 'row' },
	},
	imageContainer: {
		width: { xs: '100%', sm: '50%' },
	},
	infoContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		pb: 10,
		pt: 3,
		width: 'full',
		'@media (min-width: 600px)': {
			width: '1/2',
		},
	},
	rounded: {
		width: '40px',
		minWidth: '20px',
		height: '40px',
		borderRadius: '50%',
		p: 0,
	},
	iconButton: {
		display: 'flex',
		height: '10px',
		width: '10px',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: '50%',
		border: `1px solid #ccc`,
		padding: '0',
		boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
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
					<Box>
						<Box sx={{ marginBottom: '67px' }}>
							<Typography
								variant='subtitle1'
								fontSize={28}
								fontWeight={'light'}
							>
								{product.title}
							</Typography>
							<Box
								sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
							>
								<Box sx={{ display: 'flex', gap: '10px' }}>
									<Box
										sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
									>
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
							<Typography variant='h5' fontWeight={700}>
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
								color: '#959595',
							}}
						>
							{product.description}
						</Box>
					</Box>
					<Box>
						<Box
							sx={{
								display: 'flex',
								gap: 1,
								my: 4,
							}}
						>
							<Button
								sx={{
									bgcolor: '#23A6F0',
									...styles.rounded,
									'&:hover': {
										bgcolor: '#23A6F0',
										boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.2)',
									},
								}}
							></Button>

							<Button
								sx={{
									bgcolor: '#2DC071',
									...styles.rounded,
									'&:hover': {
										bgcolor: '#2DC071',
										boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.5)',
									},
								}}
							/>

							<Button
								sx={{
									bgcolor: '#E77C40',
									...styles.rounded,
									'&:hover': {
										bgcolor: '#E77C40',
										boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.2)',
									},
								}}
							/>

							<Button
								sx={{
									bgcolor: '#252B42',
									...styles.rounded,
									'&:hover': {
										bgcolor: '#252B42',
										boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.2)',
									},
								}}
							/>
						</Box>
						<Box sx={{ display: 'flex', gap: '5px' }}>
							<Button
								sx={{
									bgcolor: '#23A6F0',
									color: 'white',
									px: 3,
									py: 1,
									textTransform: 'capitalize',

									'&:hover': {
										boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.2)',
										bgcolor: '#23A6F0',
									},
								}}
							>
								Select Options
							</Button>
							<Button size='small'>
								<Image src={LikeIcon} alt='Icons' width={40} height={40} />
							</Button>
							<Button size='small'>
								<Image src={CartIcon} alt='Icons' width={40} height={40} />
							</Button>
							<Button size='small'>
								<Image src={EyeIcon} alt='Icons' width={40} height={40} />
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Container>
	);
};

export default ProductDetails;
