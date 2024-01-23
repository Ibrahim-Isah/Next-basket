import * as React from 'react';
import { Box } from '@mui/material';
import Modal from './main-modal';

interface WishlistModalProps {
	open: boolean;
	setOpen: (open: boolean) => void;
}

const WishlistModal: React.FC<WishlistModalProps> = ({ open, setOpen }) => {
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<Modal open={open} title='Your Wish List' handleClose={handleClose}>
			<Box>Some random things</Box>
		</Modal>
	);
};

export default WishlistModal;
