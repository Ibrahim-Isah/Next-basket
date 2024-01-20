'use client';

import React from 'react';
import { Box, styled } from '@mui/material';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

const TopBarContainer = styled('div')(({ theme }) => ({
	backgroundColor: '#23856D',
	color: 'white',
	fontWeight: 700,
	fontSize: '14px',
	padding: '10px 20px',

	'@media (max-width: 900px)': {
		display: 'none',
	},
}));

const styles = {
	center: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		mx: 1,
	},
	icon: {
		mr: 0.5,
	},
};

const Topbar = () => {
	return (
		<TopBarContainer>
			<Box
				maxWidth={1440}
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					mx: 'auto',
				}}
			>
				<Box sx={styles.center}>
					<Box sx={styles.center}>
						<LocalPhoneOutlinedIcon fontSize='small' sx={styles.icon} />
						(225) 555-0118
					</Box>
					<Box sx={styles.center}>
						{' '}
						<EmailOutlinedIcon fontSize='small' sx={styles.icon} />
						michelle.rivera@example.com
					</Box>
				</Box>
				<Box>Follow Us and get a chance to win 80% off</Box>
				<Box sx={styles.center}>
					Follow Us :
					<InstagramIcon fontSize='small' sx={styles.icon} />
					<YouTubeIcon fontSize='small' sx={styles.icon} />
					<FacebookOutlinedIcon fontSize='small' sx={styles.icon} />
					<TwitterIcon fontSize='small' sx={styles.icon} />
				</Box>
			</Box>
		</TopBarContainer>
	);
};

export default Topbar;
