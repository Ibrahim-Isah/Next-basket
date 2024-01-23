import * as React from 'react';
import { Typography, List, ListItem, Box, Button } from '@mui/material';
import {
	Remove as RemoveIcon,
	Delete as DeleteIcon,
	Add as AddIcon,
} from '@mui/icons-material';

import Modal from './main-modal';
import { formatCurrency } from '@/lib/utils';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import {
	addProduct,
	deleteFromCart,
	getCartProducts,
	reduceProduct,
} from '@/lib/features/product-slice';
import { Product } from '../product/product-list';
import Image from 'next/image';

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
	totalBox: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		py: 2,
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
		flexDirection: 'column',
		gap: 3,
		width: 60,
	},
	quantityContainer: {
		display: 'flex',
		alignItems: 'center',
		gap: 2,
	},
	totalPriceContainer: {
		display: 'flex',
		alignItems: 'center',
	},
};

interface CartModalProps {
	open: boolean;
	setOpen: (open: boolean) => void;
}

const CartModal: React.FC<CartModalProps> = ({ open, setOpen }) => {
	const dispatch = useAppDispatch();
	const cart = useAppSelector(getCartProducts);
	const handleClose = () => {
		setOpen(false);
	};

	const renderItems = cart.map(
		(
			product: Product & {
				quantity: number;
			}
		) => {
			const cartTotalPrice = product.price * product.quantity;
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
							<Box sx={styles.quantityContainer}>
								<Button
									variant='text'
									sx={{ padding: 1 }}
									onClick={() => {
										product.quantity > 1
											? dispatch(reduceProduct(product))
											: dispatch(deleteFromCart(product));
									}}
								>
									{product.quantity > 1 ? <RemoveIcon /> : <DeleteIcon />}
								</Button>
								<Typography variant='body2' fontWeight='bold' color='primary'>
									{product.quantity}
								</Typography>
								<Button
									variant='text'
									sx={{ padding: 1 }}
									onClick={() => dispatch(addProduct(product))}
								>
									<AddIcon />
								</Button>
							</Box>
						</Box>
					</Box>
					<Box sx={styles.totalPriceContainer}>
						<Typography variant='body2' fontWeight='medium'>
							{formatCurrency(cartTotalPrice)}
						</Typography>
					</Box>
				</ListItem>
			);
		}
	);
	return (
		<Modal open={open} title='Your Cart' handleClose={handleClose}>
			<Box>
				{cart.length > 0 ? (
					<Box sx={styles.paper}>
						<List sx={styles.list}>{renderItems}</List>
						<Box sx={styles.totalBox}>
							<Typography variant='h6' fontWeight='bold'>
								Total
							</Typography>
							<Typography variant='h6' fontWeight='bold'>
								{formatCurrency(
									cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
								)}
							</Typography>
						</Box>
					</Box>
				) : (
					<Box sx={styles.emptyCartBox}>
						<Typography variant='h6' fontWeight='bold'>
							Your cart is empty
						</Typography>
					</Box>
				)}
			</Box>
		</Modal>
	);
};

export default CartModal;
