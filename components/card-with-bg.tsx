import { Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import image from '@/assets/images/card-1.png';
import React from 'react';

const CardWithBackground = () => {
	return (
		<Card
			sx={{
				position: 'relative',
				overflow: 'hidden',
				width: '100%',
				height: '100%',
			}}
		>
			<Image
				src={image}
				alt='Mugs'
				fill={true}
				style={{ width: '100%', height: '100%', objectFit: 'cover' }}
			/>

			<CardContent
				sx={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					color: 'white',
				}}
			>
				<Typography variant='h5' gutterBottom>
					Your Title
				</Typography>
				<Typography variant='body2'>
					Your description goes here. This is an example of a card with an image
					filling the background.
				</Typography>
			</CardContent>
		</Card>
	);
};

export default CardWithBackground;
