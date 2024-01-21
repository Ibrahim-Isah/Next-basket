'use client';

import Link from 'next/link';
import { Box, TextField, Button } from '@mui/material';
import logo from '@/assets/images/Bandage.png';
import Image from 'next/image';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

export function Footer() {
	return (
		<footer>
			<Box
				component={'section'}
				sx={{
					bgcolor: 'white',
				}}
			>
				<Box sx={styles.top}>
					<Image src={logo} alt='Bandage Logo' width={130} height={30} />
					<Box
						sx={{
							color: '#23A6F0',
						}}
					>
						<InstagramIcon
							fontSize='medium'
							sx={{
								mr: 0.5,
							}}
						/>
						<YouTubeIcon
							fontSize='medium'
							sx={{
								mr: 0.5,
							}}
						/>
						<FacebookOutlinedIcon
							fontSize='medium'
							sx={{
								mr: 0.5,
							}}
						/>
						<TwitterIcon
							fontSize='medium'
							sx={{
								mr: 0.5,
							}}
						/>
					</Box>
				</Box>
			</Box>
			<Box
				component={'section'}
				sx={{
					bgcolor: 'white',
				}}
			>
				<Box sx={styles.sectionContainer}>
					<Box sx={styles.container}>
						<Box component={'span'} fontWeight={'bold'}>
							Company Info
						</Box>
						<Box sx={styles.list}>
							<Link href='/'>
								<Box sx={styles.listItem}>Bandage</Box>
							</Link>
							<Link href='/'>
								<Box sx={styles.listItem}>Carrier</Box>
							</Link>
							<Link href='/'>
								<Box sx={styles.listItem}>We are hiring</Box>
							</Link>
							<Link href='/'>
								<Box sx={styles.listItem}>Blog</Box>
							</Link>
						</Box>
					</Box>

					<Box sx={styles.container}>
						<Box fontWeight='bold'>Legal</Box>
						<Box sx={styles.list}>
							<Link href='/'>
								<Box sx={styles.listItem}>Bandage</Box>
							</Link>
							<Link href='/'>
								<Box sx={styles.listItem}>Carrier</Box>
							</Link>
							<Link href='/'>
								<Box sx={styles.listItem}>We are hiring</Box>
							</Link>
							<Link href='/'>
								<Box sx={styles.listItem}>Blog</Box>
							</Link>
						</Box>
					</Box>

					<Box sx={styles.container}>
						<Box fontWeight='bold'>Features</Box>
						<Box sx={styles.list}>
							<Link href='/'>
								<Box sx={styles.listItem}>Business Marketing</Box>
							</Link>
							<Link href='/'>
								<Box sx={styles.listItem}>User Analytic</Box>
							</Link>
							<Link href='/'>
								<Box sx={styles.listItem}>Live Chat</Box>
							</Link>
							<Link href='/'>
								<Box sx={styles.listItem}>Unlimited Support</Box>
							</Link>
						</Box>
					</Box>

					<Box sx={styles.container}>
						<Box fontWeight='bold'>Resources</Box>
						<Box sx={styles.list}>
							<Link href='/'>
								<Box sx={styles.listItem}>IOS & Android</Box>
							</Link>
							<Link href='/'>
								<Box sx={styles.listItem}>Watch a Demo</Box>
							</Link>
							<Link href='/'>
								<Box sx={styles.listItem}>Customers</Box>
							</Link>
							<Link href='/'>
								<Box sx={styles.listItem}>API</Box>
							</Link>
						</Box>
					</Box>

					<Box sx={{ ...styles.container, flexGrow: 1, bgcolor: 'white' }}>
						<Box fontWeight='bold'>Get In Touch</Box>
						<Box sx={styles.list}>
							<Box sx={styles.inputContainer}>
								<TextField
									fullWidth
									type='email'
									sx={styles.input}
									placeholder='Your Email'
								/>
								<Button size='medium' sx={styles.button}>
									Subscribe
								</Button>
							</Box>
							<Box className='text-xs text-secondary-gray'>
								Lore imp sum dolor Amit
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box className='mx-auto flex max-w-screen-1.5xl justify-center px-12 py-[25px] lg:px-0'>
				<Box className='w-[200px] text-center text-sm font-bold text-secondary-gray md:w-full md:text-left'>
					Made With Love By Finland All Right Reserved
				</Box>
			</Box>
		</footer>
	);
}

const styles = {
	top: {
		display: 'flex',
		maxWidth: 1080,
		mx: 'auto',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderBottom: '1px solid #E6E6E6',
		px: { sm: 10, lg: 0 },
		py: { sm: 20, md: 5 },
	},
	sectionContainer: {
		mx: 'auto',
		maxWidth: 1080,
		display: 'flex',
		flexWrap: { xs: 'nowrap', sm: 'wrap' },
		flexDirection: { xs: 'column', sm: 'row' },
		gap: 3,
		px: { sm: 10, lg: 0 },
		py: 10,
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		width: '150px',

		'>': {
			marginBottom: '10px',
			marginTop: '10px',
		},
	},
	list: {
		display: 'flex',
		flexDirection: 'column',
		my: 2,

		'> a': {
			marginBottom: '5px',
			marginTop: '5px',
		},
	},
	listItem: {
		fontSize: '16px',
		fontWeight: 'bold',
		color: 'gray',
	},
	inputContainer: {
		display: 'flex',
		position: 'relative',
		width: '100%',
	},
	input: {
		bgcolor: '#f9f9f9',
		px: 10,
		fontSize: '16px',
		height: '58px',
		pr: 4,
		width: '100',
		borderRadius: '10% 0 0 10%',
	},
	button: {
		position: 'absolute',
		right: 0,
		top: 0,
		height: '58px',
		color: 'white',
		bgcolor: '#23A6F0',
		px: '22px',
		py: 'auto',
		fontSize: '16px',
		fontWeight: 'normal',
		textTransform: 'capitalize',
		borderRadius: '0 10% 10% 0',
	},
};
