import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from 'next/link';

const styles = {
	container: {
		margin: '0 auto',
		maxWidth: '1600px',
	},
	breadCrumbsContainer: {
		display: 'flex',
		width: '100%',
		alignItems: 'center',
		padding: '24px 16px',
	},
	breadCrumbs: {
		display: 'flex',
		alignItems: 'center',
		gap: '8px',
	},
	breadcrumbItem: {
		fontSize: '14px',
		fontWeight: 'bold',
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'underline',
		},
	},
	chevronIcon: {
		height: '16px',
		width: '16px',
		color: '#6B7280',
	},
};

type Props = {
	breadCrumbs: {
		label: string;
		link?: string;
	}[];
};

const BreadCrumb: React.FC<Props> = ({ breadCrumbs }) => {
	return (
		<Container sx={styles.container}>
			<Box sx={styles.breadCrumbsContainer}>
				<Box sx={styles.breadCrumbs}>
					{breadCrumbs.map((breadCrumb, index) => {
						const isLastItem = index === breadCrumbs.length - 1;
						return (
							<React.Fragment key={index}>
								<Typography
									component={Link}
									href={breadCrumb.link ?? '#'}
									sx={styles.breadcrumbItem}
								>
									{breadCrumb.label}
								</Typography>
								{!isLastItem && <ChevronRightIcon sx={styles.chevronIcon} />}
							</React.Fragment>
						);
					})}
				</Box>
			</Box>
		</Container>
	);
};

export default BreadCrumb;
