import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from './product-card';

export type Product = {
	id: number;
	title: string;
	description: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	brand: string;
	category: string;
	thumbnail: string;
	images: string[];
};

export type ProductsResponse = {
	products: Product[];
	total: number;
	skip: number;
	limit: number;
};

type Props = {
	products: Product[];
};

const ProductList: React.FC<Props> = ({ products }) => {
	return (
		<Grid container justifyContent='center' spacing={{ xs: 2, md: 3 }} my={3}>
			{products.map((product) => (
				<Grid key={product.id} item xs={12} sm={4} md={3} lg={2.3}>
					<ProductCard product={product} />
				</Grid>
			))}
		</Grid>
	);
};

export default ProductList;
