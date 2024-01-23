import { Box, Button, Container, Typography } from '@mui/material';
import bottom from '@/assets/images/bottom.png';

const styles = {
	heroSection: {
		background: `url(${bottom.src}) center/cover no-repeat`,
		width: '100%',
		py: 7,
		px: { xs: 2, sm: 0 },
		'@media (min-width: 600px)': {
			py: 10,
		},
	},
	contentContainer: {
		maxWidth: 1500,
		margin: 'auto',
		display: 'flex',
		justifyContent: 'center',
	},
	contentWrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 3,
		'@media (min-width: 600px)': {
			width: 871,
		},
	},
	heroText: {
		textAlign: 'center',
		fontSize: '40px',
		fontWeight: 'bold',
		margin: 0,
		'@media (min-width: 600px)': {
			width: 647,
		},
	},
	priceText: {
		fontWeight: 'bold',
		color: '#23856D',
	},
	styledButton: {
		backgroundColor: '#23A6F0',
		color: 'white',
		py: 1.2,
		px: 2.5,
		textTransform: 'uppercase',
	},
};

const CallToAction = () => {
	return (
		<Box sx={styles.heroSection}>
			<Container sx={styles.contentContainer}>
				<Box sx={styles.contentWrapper}>
					<Typography variant='body2' fontWeight={'bold'} color={'#23A6F0'}>
						Designing Better Experience
					</Typography>
					<Typography variant='h1' sx={styles.heroText}>
						Problems trying to resolve the conflict between
					</Typography>
					<Typography
						variant='body1'
						sx={{
							width: '100%',
							color: 'gray',
							maxWidth: 500,
							textAlign: 'center',
						}}
					>
						Problems trying to resolve the conflict between the two major realms
						of Classical physics:
					</Typography>
					<Typography variant='h3' sx={styles.priceText}>
						$16.48
					</Typography>
					<Button sx={styles.styledButton}>Add your call to action</Button>
				</Box>
			</Container>
		</Box>
	);
};

export default CallToAction;
