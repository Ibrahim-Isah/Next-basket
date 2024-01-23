import React from 'react';
import { Grid, Card, Typography, Box } from '@mui/material';
import card_1 from '@/assets/images/card-1.png';
import card_2 from '@/assets/images/card-2.png';
import card_3 from '@/assets/images/card-3.png';
import card_4 from '@/assets/images/card-4.png';

const styles = {
	overlayStyle: {
		position: 'absolute',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		width: '100%',
		padding: '20px',
		top: 0,
		right: 0,
	},
	imageStyle: {
		height: '100%',
		width: '100%',
		objectFit: 'cover',
	},
	cardStyle: {
		height: '300px',
		width: '100%',
		position: 'relative',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	containerStyle: {
		margin: '20px auto',
		maxWidth: 1080,
		padding: '15px',
		'@media (min-width: 600px)': {
			padding: '20px 0',
		},
	},
};

const Hero = () => {
	return (
		<Box sx={styles.containerStyle}>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={5} md={4}>
					<Card
						sx={{
							...styles.cardStyle,
							height: '100%',
							backgroundImage: `url(${card_1.src})`,
						}}
					>
						<Box
							className='bg-home-hero-image-1 card-zoom-image'
							sx={styles.imageStyle}
						></Box>
						<Box sx={styles.overlayStyle}>
							<Typography
								variant='body2'
								fontWeight='bold'
								color=' #2DC071
'
							>
								5 Items
							</Typography>
							<Typography
								variant='h4'
								fontWeight={'bold'}
								textTransform={'capitalize'}
								sx={{ fontSize: { lg: '40px' } }}
							>
								Furniture
							</Typography>
							<Typography variant='body2' className='font-bold'>
								Read More
							</Typography>
						</Box>
					</Card>
				</Grid>

				<Grid item xs={12} sm={7} md={8}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6} md={12}>
							<Card
								sx={{
									...styles.cardStyle,
									backgroundImage: `url(${card_4.src})`,
								}}
							>
								<Box sx={styles.overlayStyle}>
									<Typography
										variant='body2'
										fontWeight='bold'
										color=' #2DC071
'
									>
										5 Items
									</Typography>
									<Typography
										variant='h4'
										fontWeight={'bold'}
										textTransform={'capitalize'}
										sx={{ fontSize: { lg: '40px' } }}
									>
										Furniture
									</Typography>
									<Typography variant='body2' className='font-bold'>
										Read More
									</Typography>
								</Box>
							</Card>
						</Grid>
						<Grid item xs={12} sm={6} md={6}>
							<Card
								sx={{
									...styles.cardStyle,
									backgroundImage: `url(${card_3.src})`,
								}}
							>
								<Box sx={styles.overlayStyle}>
									<Typography
										variant='body2'
										fontWeight='bold'
										color=' #2DC071
'
									>
										5 Items
									</Typography>
									<Typography
										variant='h4'
										fontWeight={'bold'}
										textTransform={'capitalize'}
										sx={{ fontSize: { lg: '40px' } }}
									>
										Furniture
									</Typography>
									<Typography variant='body2' className='font-bold'>
										Read More
									</Typography>
								</Box>
							</Card>
						</Grid>

						<Grid item xs={12} sm={6} md={6}>
							<Card
								sx={{
									...styles.cardStyle,
									backgroundImage: `url(${card_2.src})`,
								}}
							>
								<Box sx={styles.overlayStyle}>
									<Typography
										variant='body2'
										fontWeight='bold'
										color=' #2DC071
'
									>
										5 Items
									</Typography>
									<Typography
										variant='h4'
										fontWeight={'bold'}
										textTransform={'capitalize'}
										sx={{ fontSize: { lg: '40px' } }}
									>
										Furniture
									</Typography>
									<Typography variant='body2' className='font-bold'>
										Read More
									</Typography>
								</Box>
							</Card>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Hero;
