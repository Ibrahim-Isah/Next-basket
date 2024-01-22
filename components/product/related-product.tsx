import React from 'react';
import ProductList, { Product } from './product-list';
import { Box, Typography, Container } from '@mui/material';

type Props = {
	related: Product[];
};
const RelatedProducts: React.FC<Props> = ({ related }) => {
	return (
		<Container>
			<Typography
				variant='h5'
				fontWeight={700}
				textTransform={'uppercase'}
				sx={{
					borderBottom: '2px solid #f5f5f5',
					fontSize: '32px',
					px: { sm: 10, lg: 0 },
					py: 1,
					my: 2,
				}}
			>
				Bestseller Products
			</Typography>
			<ProductList products={related} />
		</Container>
	);
};

export default RelatedProducts;
