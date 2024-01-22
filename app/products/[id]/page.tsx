import BreadCrumb from '@/components/product/breadcrumb';
import ProductTabs from '@/components/product/product-tabs';
import RelatedProducts from '@/components/product/related-product';
import Sponsors from '@/components/product/sponsors';
import { fetchApi } from '@/services/api';
import React from 'react';

type Props = {
	params: { id: string };
};

const ProductPage: React.FC<Props> = async ({ params }) => {
	const product = await fetchApi(`products/${params.id}`);
	const related = await fetchApi(`products/category/${product.category}`);
	const breadCrumbs = [
		{
			label: 'Home',
			link: '/',
		},
		{
			label: product.title,
			link: `/products/${product.id}`,
		},
	];
	return (
		<div>
			<BreadCrumb breadCrumbs={breadCrumbs} />
			<ProductTabs product={product} />
			<RelatedProducts related={related.products} />
			<Sponsors />
		</div>
	);
};

export default ProductPage;
