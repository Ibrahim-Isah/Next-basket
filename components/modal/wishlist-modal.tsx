import * as React from 'react';
import { Typography, List, ListItem, Box, Button } from '@mui/material';
import { Delete as DeleteIcon, Add as AddIcon } from '@mui/icons-material';

import Modal from './main-modal';
import { formatCurrency } from '@/lib/utils';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import {
	addProduct,
	addWishlist,
	deleteFromCart,
	getCartProducts,
	getWishlistProducts,
	reduceProduct,
} from '@/lib/features/product-slice';
import { Product } from '../product/product-list';
import Image from 'next/image';

interface WishlistModalProps {
	open: boolean;
	setOpen: (open: boolean) => void;
}

const styles = {
	paper: {
		marginBottom: 2,
		padding: 2,
	},
	list: {
		gap: 2,
		borderBottom: '1px solid #ccc',
		outline: 'none',
		outlineColor: '#ccc',
	},

	emptyCartBox: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 2,
		p: 4,
	},
	menuItem: {
		flex: '0 0 400px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderRadius: 'lg',
		'&:hover': {
			backgroundColor: 'white',
		},
	},
	itemContainer: {
		display: 'flex',
		alignItems: 'center',
		gap: 3,
	},
	image: {
		width: 80,
		height: 80,
		borderRadius: 'md',
	},
	detailsContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		flexGrow: 1,
	},
};

const WishlistModal: React.FC<WishlistModalProps> = ({ open, setOpen }) => {
	const dispatch = useAppDispatch();
	const wishlist = useAppSelector(getWishlistProducts);
	const handleClose = () => {
		setOpen(false);
	};

	const renderItems = wishlist.map((product: Product) => {
		return (
			<ListItem key={product.id} sx={styles.menuItem}>
				<Box sx={styles.itemContainer}>
					<Image
						width={80}
						height={80}
						src={product.thumbnail}
						alt={product.title}
						style={styles.image}
					/>
					<Box sx={styles.detailsContainer}>
						<Typography variant='body2' fontWeight='bold' color='primary'>
							{product.title}
						</Typography>
					</Box>
				</Box>
				<Button
					variant='text'
					sx={{ padding: 1, justifySelf: 'end' }}
					onClick={() => {
						dispatch(addWishlist(product));
					}}
				>
					<DeleteIcon />
				</Button>
			</ListItem>
		);
	});
	return (
		<Modal open={open} title='Your Wish List' handleClose={handleClose}>
			<Box>
				{wishlist.length > 0 ? (
					<Box sx={styles.paper}>
						<List sx={styles.list}>{renderItems}</List>
					</Box>
				) : (
					<Box sx={styles.emptyCartBox}>
						<Typography variant='h6' fontWeight='bold'>
							Your Wishlist is empty
						</Typography>
					</Box>
				)}
			</Box>
		</Modal>
	);
};

export default WishlistModal;
