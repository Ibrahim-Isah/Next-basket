'use client';

import React, { useState, useEffect } from 'react';
import { Tab, Tabs, Typography, Paper, Box } from '@mui/material';
import Image from 'next/image';
import { Product } from './product-list';

type Props = {
	product: Product;
};

const data = [
	{
		label: 'Description',
		value: 'description',
	},
	{
		label: 'Additional Information',
		value: 'additional-information',
	},
	{
		label: 'Reviews (0)',
		value: 'reviews',
	},
];

interface TabPanelProps {
	children?: React.ReactNode;
	index: string;
	value: string;
}

function CustomTabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

const ProductTabs: React.FC<Props> = ({ product }) => {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) return null;
	return (
		<Box
			sx={{
				display: { xs: 'none', md: 'block' },
				bgcolor: 'white',
				paddingBottom: 5,
			}}
		>
			<Box
				sx={{
					mx: 'auto',
					maxWidth: 1080,
				}}
			>
				<Tabs value='description' centered>
					{data.map(({ label, value }) => (
						<Tab
							key={value}
							value={value}
							label={label}
							sx={{
								fontWeight: 'semibold',
							}}
						/>
					))}
				</Tabs>
				<Paper
					variant='outlined'
					sx={{
						p: 1,
						mt: 2,
					}}
				>
					{data.map(({ value }) => (
						<CustomTabPanel key={value} value={value} index={value}>
							{value === 'description' && <DescriptionTab product={product} />}
							{value === 'additional-information' && (
								<AdditionalInformationTab />
							)}
							{value === 'reviews' && <ReviewsTab />}
						</CustomTabPanel>
					))}
				</Paper>
			</Box>
		</Box>
	);
};

const DescriptionTab: React.FC<Props> = ({ product }) => {
	console.log(product);
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				flexWrap: 'wrap',
			}}
		>
			<Box sx={{ width: '50%' }}>
				<Typography variant='h5' fontWeight='bold'>
					{product.title}
				</Typography>
				<Typography variant='body1'>{product.description}</Typography>
			</Box>
			<Box style={{ width: '50%' }}>
				<Image
					src={product.thumbnail}
					alt={product.title}
					width={413}
					height={372}
					style={{
						borderRadius: 4,
					}}
				/>
			</Box>
		</Box>
	);
};

const AdditionalInformationTab: React.FC = () => {
	return (
		<Box>
			{Array.from({ length: 5 }).map((_, index) => (
				<Typography key={index} paragraph>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nulla
					maxime sint porro vero alias, dolor a, facilis maiores assumenda
					necessitatibus numquam voluptate veritatis nihil nisi cum, aut modi
					reiciendis?
				</Typography>
			))}
		</Box>
	);
};

const ReviewsTab: React.FC = () => {
	return (
		<Box>
			{Array.from({ length: 5 }).map((_, index) => (
				<Typography key={index} paragraph>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nulla
					maxime sint porro vero alias, dolor a, facilis maiores assumenda
					necessitatibus numquam voluptate veritatis nihil nisi cum, aut modi
					reiciendis?
				</Typography>
			))}
		</Box>
	);
};

export default ProductTabs;
