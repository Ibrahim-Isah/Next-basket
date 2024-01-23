import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import * as React from 'react';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	'& .MuiDialogContent-root': {
		padding: theme.spacing(2),
	},
	'& .MuiDialogActions-root': {
		padding: theme.spacing(1),
	},
}));

interface ModalProps {
	open: boolean;
	title: string;
	handleClose: () => void;
	children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
	open,
	handleClose,
	title,
	children,
}) => {
	return (
		<React.Fragment>
			<BootstrapDialog
				onClose={handleClose}
				aria-labelledby='customized-dialog-title'
				open={open}
			>
				<DialogTitle sx={{ m: 0, p: 2 }} id='customized-dialog-title'>
					{title}
				</DialogTitle>
				<IconButton
					aria-label='close'
					onClick={handleClose}
					sx={{
						position: 'absolute',
						right: 8,
						top: 8,
					}}
				>
					<CloseIcon />
				</IconButton>
				<DialogContent dividers>{children}</DialogContent>
				<DialogActions>
					<Button autoFocus onClick={handleClose}>
						Close
					</Button>
				</DialogActions>
			</BootstrapDialog>
		</React.Fragment>
	);
};

export default Modal;
