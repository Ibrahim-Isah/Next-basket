'use client';

import React from 'react';
import { Container, Typography, Avatar, Grid, Box } from '@mui/material';
import StarSolidIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import user_avatar from '@/assets/images/user.png';
import Image from 'next/image';

import review1 from '@/assets/images/review-1.png';
import review2 from '@/assets/images/review-2.png';
import review3 from '@/assets/images/review-3.png';
import review4 from '@/assets/images/review-4.png';
import review5 from '@/assets/images/review-5.png';
import review6 from '@/assets/images/review-6.png';
import review7 from '@/assets/images/review-7.png';
import review8 from '@/assets/images/review-8.png';
import review9 from '@/assets/images/review-9.png';

const styles = {
	section: {
		margin: '50px auto',
		paddingBottom: '10px',
		paddingTop: '55px',
		'@media (min-width: 600px)': {
			paddingTop: '20px',
		},
	},
	flexContainer: {
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'wrap',
		justifyContent: 'center',
		gap: '37px',
		padding: '28px',
		'@media (min-width: 600px)': {
			padding: '12px',
			justifyContent: 'space-between',
		},
	},
	testimonialContainer: {
		display: 'flex',
		flexDirection: 'column',
		gap: '28px',
		'@media (min-width: 600px)': {
			width: '438px',
		},
	},
	testimonialHeader: {
		textAlign: 'center',
		fontSize: '2xl',
		fontWeight: 'bold',
	},
	testimonialContent: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '5px',
		paddingTop: '30px',
		paddingBottom: '35px',
	},
	starContainer: {
		display: 'flex',
		alignItems: 'center',
		gap: '5px',
	},
	testimonialText: {
		textAlign: 'center',
		fontWeight: 'bold',
		color: 'gray',
	},
	testimonialAuthor: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '3px',
	},

	reviewCard: {
		width: '112px',
		height: '112px',
		'@media (min-width: 600px)': {
			width: '142px',
			height: '142px',
		},
		overflow: 'hidden',
		position: 'relative',
	},
};

const images = [
	review1,
	review2,
	review3,
	review4,
	review5,
	review6,
	review7,
	review8,
	review9,
];

const Testimonial = () => {
	return (
		<Container sx={styles.section}>
			<Box sx={styles.flexContainer}>
				<Box sx={styles.testimonialContainer}>
					<Typography variant='h4' sx={styles.testimonialHeader}>
						What they say about us
					</Typography>
					<Box sx={styles.testimonialContent}>
						<Avatar
							src={user_avatar.src}
							alt='user-review-1'
							sx={{
								height: 'auto',
								width: 120,
							}}
						/>
						<Box sx={styles.starContainer}>
							{[...Array(4)].map((_, i) => (
								<StarSolidIcon
									key={i}
									sx={{
										color: '#F3CD03',
									}}
								/>
							))}
							<StarOutlineIcon
								sx={{
									color: '#F3CD03',
								}}
							/>
						</Box>
						<Typography variant='body1' sx={styles.testimonialText}>
							Slate helps you see how many more days you need to work to reach
							your financial goal.
						</Typography>
						<Box sx={styles.testimonialAuthor}>
							<Typography variant='body2' color={'#23A6F0'} fontWeight={'bold'}>
								Regina Miles
							</Typography>
							<Typography variant='body2' fontWeight={'bold'}>
								Designer
							</Typography>
						</Box>
					</Box>
				</Box>

				<Grid
					container
					spacing={2}
					sx={{
						maxWidth: { xs: 'auto', md: '500px' },
					}}
				>
					{images.map((image, i) => (
						<Grid key={i} item xs={4}>
							<Image
								src={image}
								alt='testimonial review image'
								width={150}
								height={150}
							/>
						</Grid>
					))}
				</Grid>
			</Box>
		</Container>
	);
};

export default Testimonial;
