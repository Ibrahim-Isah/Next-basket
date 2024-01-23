'use client';

import React from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';
import { PostCard } from './post-card';
import postcard_1 from '@/assets/images/postcard-1.png';
import postcard_2 from '@/assets/images/postcard-2.png';
import postcard_3 from '@/assets/images/postcard-3.png';

const posts = [
	{
		id: '1',
		title: "Loudest à la Madison #1 (L'integral)",
		description:
			"We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
		image: postcard_1,
		date: new Date(),
		numComments: 10,
	},
	{
		id: '2',
		title: "Loudest à la Madison #1 (L'integral)",
		description:
			"We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
		image: postcard_2,
		date: new Date(),
		numComments: 10,
	},
	{
		id: '3',
		title: "Loudest à la Madison #1 (L'integral)",
		description:
			"We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
		image: postcard_3,
		date: new Date(),
		numComments: 10,
	},
];

const styles = {
	titleContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginBottom: '30px',
		textAlign: 'center',

		'>': {
			my: 2,
		},
	},
};
const FeaturedPost = () => {
	return (
		<Container sx={{ my: '50px' }}>
			<Box sx={styles.titleContainer}>
				<Typography variant='h6' color={'#23A6F0'}>
					Practice Advice
				</Typography>
				<Typography variant='h4' fontWeight={700}>
					Featured Products
				</Typography>
			</Box>

			<Grid container spacing={2}>
				{posts.map((post) => (
					<Grid item key={post.id} xs={12} sm={6} md={4}>
						<PostCard post={post as any} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default FeaturedPost;
