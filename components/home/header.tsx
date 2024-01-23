'use client';

import React, { useState, useEffect } from 'react';

import logo from '@/assets/images/Bandage.png';
import CloseIcon from '@mui/icons-material/Close';
import ChevronDownIcon from '@mui/icons-material/ExpandMore';
import HeartIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import UserIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import {
	AppBar,
	Box,
	IconButton,
	List,
	ListItem,
	Menu,
	MenuItem,
	SwipeableDrawer,
	Toolbar,
	Typography,
	Button,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Topbar from './topbar';
import { useAppSelector } from '@/lib/hooks';
import {
	getCartProducts,
	getWishlistProducts,
} from '@/lib/features/product-slice';
import CartModal from '../modal/cart-modal';
import WishlistModal from '../modal/wishlist-modal';

const NavList = () => {
	return (
		<List
			sx={{
				gap: 2,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<Typography
				component={Link}
				href='/'
				color='blue-gray'
				className='font-bold'
			>
				<ListItem>Home</ListItem>
			</Typography>
			<Typography
				component={Link}
				href='/'
				color='blue-gray'
				className='font-bold'
			>
				<ListItem>Shop</ListItem>
			</Typography>
			<Typography
				component={Link}
				href='/'
				color='blue-gray'
				className='font-bold'
			>
				<ListItem>About</ListItem>
			</Typography>
			<Typography
				component={Link}
				href='/'
				color='blue-gray'
				className='font-bold'
			>
				<ListItem>Blog</ListItem>
			</Typography>
			<Typography
				component={Link}
				href='/'
				color='blue-gray'
				className='font-bold'
			>
				<ListItem>Contact</ListItem>
			</Typography>
			<Typography
				component={Link}
				href='/'
				color='blue-gray'
				className='font-bold'
			>
				<ListItem>Pages</ListItem>
			</Typography>
		</List>
	);
};

export default function Header() {
	const [isClient, setIsClient] = useState(false);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [open, setOpen] = React.useState<boolean>(false);
	const [openCart, setOpenCart] = React.useState(false);
	const [openWishlist, setOpenWishlist] = React.useState(false);
	const cart = useAppSelector(getCartProducts);
	const wishlist = useAppSelector(getWishlistProducts);

	useEffect(() => {
		setIsClient(true);
	}, []);

	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	if (!isClient) return null;

	return (
		<header>
			<Topbar />
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
							display: { md: 'flex', xs: 'none' },
							alignItems: 'center',
							gap: 2,
							color: '#23A6F0',
						}}
					>
						<Link
							href='#'
							style={{
								color: 'inherit',
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<UserIcon />
							Log In / Register
						</Link>
						<SearchIcon sx={{ width: 24, height: 24 }} />
						<Box
							sx={{
								display: ' flex',
								cursor: 'pointer',
							}}
							onClick={() => {
								setOpenCart(!openCart);
							}}
						>
							<ShoppingCartIcon sx={{ width: 24, height: 24 }} />
							<Typography variant='body1'>
								{cart.length > 0 && cart.length}
							</Typography>
						</Box>
						<Box
							sx={{
								display: ' flex',
								cursor: 'pointer',
							}}
							onClick={() => {
								setOpenWishlist(!openWishlist);
							}}
						>
							<HeartIcon sx={{ width: 24, height: 24 }} />
							<Typography variant='body1'>
								{wishlist.length > 0 && wishlist.length}
							</Typography>
						</Box>
					</Box>
					<IconButton
						sx={{
							display: { md: 'none' },
						}}
						onClick={() => setOpen(!open)}
					>
						{open ? <CloseIcon /> : <MenuIcon />}
					</IconButton>
				</Toolbar>
				<SwipeableDrawer
					anchor='top'
					open={open}
					onClose={() => setOpen(false)}
					onOpen={() => setOpen(true)}
				>
					<IconButton
						sx={{
							ml: 'auto',
							py: 1,
							px: 3,
						}}
						onClick={() => setOpen(false)}
					>
						<CloseIcon fontSize='medium' />
					</IconButton>
					<Box
						sx={{
							minHeight: '50vh',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							my: 10,
							gap: 2,
						}}
					>
						<Image src={logo} alt='Bandage Logo' width={100} height={20} />
						<NavList />
						<Box
							sx={{
								gap: 2,
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								color: '#23A6F0',
							}}
						>
							<Link
								href='#'
								style={{
									color: 'inherit',
									display: 'flex',
									alignItems: 'center',
								}}
							>
								<UserIcon />
								Log In / Register
							</Link>
							<SearchIcon sx={{ width: 24, height: 24 }} />
							<Box
								display={'flex'}
								onClick={() => {
									setOpenCart(!openCart);
								}}
							>
								<ShoppingCartIcon sx={{ width: 24, height: 24 }} />
								<Typography variant='body1'>
									{cart.length > 0 && cart.length}
								</Typography>
							</Box>
							<Box
								display={'flex'}
								onClick={() => {
									setOpenWishlist(!openWishlist);
								}}
							>
								<HeartIcon sx={{ width: 24, height: 24 }} />
								<Typography variant='body1'>
									{wishlist.length > 0 && wishlist.length}
								</Typography>
							</Box>
						</Box>
					</Box>
				</SwipeableDrawer>
			</AppBar>
			<CartModal open={openCart} setOpen={setOpenCart} />
			<WishlistModal open={openWishlist} setOpen={setOpenWishlist} />
		</header>
	);
}
