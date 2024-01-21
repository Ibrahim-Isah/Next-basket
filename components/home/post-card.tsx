import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, Paper, Typography } from '@mui/material';
import Image from 'next/image';

const styles = {
	postCard: {
		margin: 'auto',
		width: '330px',
		'@media (min-width: 768px)': {
			width: '348px',
		},
	},
	cardImage: {
		height: '300px',
		width: '100%',
		overflow: 'hidden',
		position: 'relative',
	},
	cardZoomImage: {
		width: '100%',
		height: '100%',
		backgroundSize: 'cover',
	},
	cardContent: {
		display: 'flex',
		flexDirection: 'column',
		background: 'white',
		px: 2.5,
		py: 2,
	},
	categoryTags: {
		display: 'flex',
		gap: 1,
	},
	timestamp: {
		display: 'flex',
		alignItems: 'center',
		spaceBetween: '5px',
		paddingTop: '15px',
	},
	comments: {
		display: 'flex',
		alignItems: 'center',
		spaceBetween: '5px',
		paddingTop: '15px',
	},
	learnMore: {
		display: 'flex',
		alignItems: 'center',
		spaceBetween: '10px',
		paddingTop: '15px',
	},
	badge: {
		position: 'absolute',
		top: 0,
		left: 0,
		borderRadius: 2,
		fontWeight: 600,
		m: 2,
		px: 2,
		py: 0.7,
	},
};

type Props = {
	post: {
		id: string;
		title: string;
		description: string;
		image: string;
		date: number;
		numComments: number;
	};
};

export function PostCard({ post }: Props) {
	const formatDate = (timestamp: number) => {
		const date = new Date(timestamp);
		return date.toLocaleDateString('en-GB', {
			day: 'numeric',
			month: 'long',
			year: 'numeric',
		});
	};

	return (
		<Paper sx={styles.postCard} elevation={3} title={post.title}>
			<Box sx={styles.cardImage}>
				<Image src={post.image} alt={post.title} fill={true} />
				<Typography
					variant='body2'
					bgcolor={'#E74040'}
					color='white'
					sx={styles.badge}
				>
					New
				</Typography>
			</Box>
			<Box sx={styles.cardContent}>
				<Box sx={styles.categoryTags}>
					<Typography variant='body2' color='#23A6F0'>
						Google
					</Typography>
					<Typography variant='body2' color='gray'>
						Trending
					</Typography>
					<Typography variant='body2' color='gray'>
						New
					</Typography>
				</Box>
				<Typography variant='h6'>{post.title}</Typography>
				<Typography variant='body2' color='gray'>
					{post.description}
				</Typography>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Box sx={styles.timestamp}>
						<svg
							width='13'
							height='14'
							viewBox='0 0 13 14'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M6.49933 13.6667C3.20378 13.6232 0.542765 10.9622 0.499328 7.66668C0.542765 4.37113 3.20378 1.71011 6.49933 1.66668C9.79488 1.71011 12.4559 4.37113 12.4993 7.66668C12.4559 10.9622 9.79488 13.6232 6.49933 13.6667ZM6.49933 3.00001C3.93611 3.03376 1.86641 5.10346 1.83266 7.66668C1.86641 10.2299 3.93611 12.2996 6.49933 12.3333C9.06255 12.2996 11.1322 10.2299 11.166 7.66668C11.1322 5.10346 9.06255 3.03376 6.49933 3.00001ZM9.83266 8.33334H5.83266V4.33334H7.16599V7.00001H9.83266V8.33334ZM12.0273 3.47201L10.0213 1.47201L10.9607 0.527344L12.9673 2.52734L12.0273 3.47134V3.47201ZM0.970662 3.47201L0.0273285 2.52734L2.02133 0.527344L2.96466 1.47201L0.971995 3.47201H0.970662Z'
								fill='#23A6F0'
							/>
						</svg>

						<Typography variant='body2' color='gray' ml={1}>
							{formatDate(post.date)}
						</Typography>
					</Box>
					<Box sx={styles.comments}>
						<svg
							width='17'
							height='16'
							viewBox='0 0 17 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M16.3333 13.8334H2V0.833415C2 0.741748 1.925 0.666748 1.83333 0.666748H0.666667C0.575 0.666748 0.5 0.741748 0.5 0.833415V15.1667C0.5 15.2584 0.575 15.3334 0.666667 15.3334H16.3333C16.425 15.3334 16.5 15.2584 16.5 15.1667V14.0001C16.5 13.9084 16.425 13.8334 16.3333 13.8334ZM3.5 12.5001H14.6667C14.7583 12.5001 14.8333 12.4251 14.8333 12.3334V3.25008C14.8333 3.10008 14.6521 3.02716 14.5479 3.13133L10.1667 7.51258L7.55417 4.92925C7.52284 4.89823 7.48054 4.88083 7.43646 4.88083C7.39238 4.88083 7.35007 4.89823 7.31875 4.92925L3.38125 8.87925C3.36596 8.89457 3.35385 8.91277 3.34562 8.93279C3.3374 8.95281 3.33322 8.97427 3.33333 8.99591V12.3334C3.33333 12.4251 3.40833 12.5001 3.5 12.5001Z'
								fill='#23856D'
							/>
						</svg>

						<Typography variant='body2' color='gray' ml={1}>
							{`${post.numComments} comment${post.numComments > 1 ? 's' : ''}`}
						</Typography>
					</Box>
				</Box>
				<Box sx={styles.learnMore}>
					<Typography variant='body2' color={'gray'} fontWeight={'bold'}>
						Learn More
					</Typography>
					<ChevronRightIcon
						sx={{
							color: '#23A6F0',
						}}
					/>
				</Box>
			</Box>
		</Paper>
	);
}
