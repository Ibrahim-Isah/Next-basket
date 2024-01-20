'use client';

import React from 'react';

import logo from '@/assets/images/Bandage.png';
import ChevronDownIcon from '@mui/icons-material/ExpandMore';
import HeartIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, Box, Menu, MenuItem, Toolbar } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar
			position='static'
			sx={{
				background: 'white',
				color: 'black',
			}}
		>
			<Toolbar
				sx={{
					maxWidth: 1440,
					width: '100%',
					mx: 'auto',
					px: 4,
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Image src={logo} alt='Bandage Logo' width={100} height={20} />
					<Box
						sx={{
							display: { md: 'flex', xs: 'none' },
							justifyContent: 'space-evenly',
							ml: 20,
							gap: 2,

							'& a': {
								'&:hover': {
									textDecoration: 'underline',
								},
							},
						}}
					>
						<Link href='#' style={{ color: 'inherit' }}>
							Home
						</Link>
						<Box
							sx={{
								display: 'inline-block',
								position: 'relative',
								groupHover: { '& Box': { display: 'block' } },
							}}
						>
							<Link
								href='#'
								style={{
									color: 'inherit',
									display: 'flex',
									alignItems: 'center',
								}}
								onClick={handleClick}
							>
								Shop
								<ChevronDownIcon sx={{ ml: 1, width: 20, height: 20 }} />
							</Link>
							<Menu
								anchorEl={anchorEl}
								open={Boolean(anchorEl)}
								onClose={handleClose}
								PaperProps={{
									sx: {
										backgroundColor: '#0D0D2B',
										color: 'white',
										pt: 1,
										'& a': {
											borderRadius: '2px',
											py: 2,
											px: 4,
											display: 'block',
											whiteSpace: 'nowrap',
											'&:hover': { backgroundColor: '#555' },
										},
									},
								}}
							>
								<MenuItem component={Link} href='#' onClick={handleClose}>
									Shop 1
								</MenuItem>
								<MenuItem component={Link} href='#' onClick={handleClose}>
									Shop 2
								</MenuItem>
								<MenuItem component={Link} href='#' onClick={handleClose}>
									Shop 3
								</MenuItem>
							</Menu>
						</Box>
						<Link href='#' style={{ color: 'inherit' }}>
							About
						</Link>
						<Link href='#' style={{ color: 'inherit' }}>
							Blog
						</Link>
						<Link href='#' style={{ color: 'inherit' }}>
							Contact
						</Link>
						<Link href='#' style={{ color: 'inherit' }}>
							Pages
						</Link>
					</Box>
				</Box>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: 2,
						color: '#23A6F0',
					}}
				>
					<Link href='#' style={{ color: 'inherit' }}>
						Log In / Register
					</Link>
					<SearchIcon sx={{ width: 24, height: 24 }} />
					<ShoppingCartIcon sx={{ width: 24, height: 24 }} />
					<HeartIcon sx={{ width: 24, height: 24 }} />
				</Box>
			</Toolbar>
		</AppBar>
	);
}
