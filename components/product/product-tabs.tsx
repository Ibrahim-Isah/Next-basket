'use client';

import React, { useState, useEffect } from 'react';
import { Tab, Typography, Paper, Box, Container } from '@mui/material';
import Image from 'next/image';
import { Product } from './product-list';
import { TabPanel, TabContext, TabList } from '@mui/lab';

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

const ProductTabs: React.FC<Props> = ({ product }) => {
	const [isClient, setIsClient] = useState(false);
	const [value, setValue] = React.useState('1');

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) return null;
	return (
		<Container
			sx={{
				display: 'block',
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
				<TabContext value={value}>
					<Box
						sx={{
							borderBottom: 1,
							borderColor: 'divider',
							py: 1,
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<TabList onChange={handleChange} aria-label='lab API tabs '>
							{data.map(({ label, value }) => (
								<Tab key={label} label={label} value={value} />
							))}
						</TabList>
					</Box>
					<Paper
						variant='outlined'
						sx={{
							p: 1,
							mt: 2,
						}}
					>
						{data.map(({ value }) => (
							<TabPanel key={value} value={value}>
								{value === 'description' && (
									<DescriptionTab product={product} />
								)}
								{value === 'additional-information' && (
									<AdditionalInformationTab />
								)}
								{value === 'reviews' && <ReviewsTab />}
							</TabPanel>
						))}
					</Paper>
				</TabContext>
			</Box>
		</Container>
	);
};

const DescriptionTab: React.FC<Props> = ({ product }) => {
	return (
		<Box
			sx={{
				display: { xs: 'block', md: 'flex' },
				justifyContent: 'space-between',
				alignItems: 'center',
				flexWrap: 'wrap',
			}}
		>
			<Box>
				<Typography variant='h5' fontWeight='bold'>
					{product.title}
				</Typography>
				<Typography variant='body1'>{product.description}</Typography>
			</Box>
			<Box>
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
