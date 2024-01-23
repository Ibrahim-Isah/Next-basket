import * as React from 'react';
import { Box } from '@mui/material';
import Modal from './main-modal';

interface CartModalProps {
	open: boolean;
	setOpen: (open: boolean) => void;
}

const CartModal: React.FC<CartModalProps> = ({ open, setOpen }) => {
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<Modal open={open} title='Your Cart' handleClose={handleClose}>
			<Box>Some random things</Box>
		</Modal>
	);
};

export default CartModal;
