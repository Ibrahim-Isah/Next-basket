'use client';
import { Button, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const ErrorMessage = styled('h1')({
	marginBottom: '24px',
	fontSize: '2rem',
});

const ButtonContainer = styled('div')({
	display: 'flex',
	alignItems: 'center',
	gap: '16px',
});
export default function Error() {
	const router = useRouter();
	return (
		<Container>
			<ErrorMessage>Product does not Exist or an error occured!!!</ErrorMessage>
			<ButtonContainer>
				<Button
					variant='contained'
					color='primary'
					onClick={() => router.refresh()}
				>
					Try again
				</Button>
				<Typography variant='h6' fontWeight='bold'>
					OR
				</Typography>
				<Link href='/'>
					<Button variant='outlined'>Return to home page</Button>
				</Link>
			</ButtonContainer>
		</Container>
	);
}
