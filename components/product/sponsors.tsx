import React from 'react';
import { Grid, Container } from '@mui/material';
import Image from 'next/image';
import Hooli from '@/assets/svg/hooli.svg';
import Lyft from '@/assets/svg/lyft.svg';
import PiedPiperHat from '@/assets/svg/piper.svg';
import Stripe from '@/assets/svg/stripe.svg';
import Aws from '@/assets/svg/aws.svg';
import RedditAlien from '@/assets/svg/reddit.svg';

const Sponsors = () => {
	const brands = [
		{ icon: Hooli, name: 'Hooli' },
		{ icon: Lyft, name: 'Lyft' },
		{ icon: PiedPiperHat, name: 'Pied Piper Hat' },
		{ icon: Stripe, name: 'Stripe' },
		{ icon: Aws, name: 'AWS' },
		{ icon: RedditAlien, name: 'Reddit Alien' },
	];

	return (
		<Container
			sx={{
				my: 5,
			}}
		>
			<Grid
				container
				spacing={2}
				mx={'auto'}
				alignItems={'center'}
				justifyContent='center'
			>
				{brands.map((brand, index) => (
					<Grid item key={index} xs={12} sm={6} md={4} lg={2}>
						<Image
							src={brand.icon}
							alt={brand.name}
							width={150}
							height={150}
							style={{
								margin: '0 auto',
							}}
						/>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default Sponsors;
