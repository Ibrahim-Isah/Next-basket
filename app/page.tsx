import CardWithBackground from '@/components/card-with-bg';
import Header from '@/components/home/header';
import Topbar from '@/components/home/topbar';
import { Box, Grid } from '@mui/material';

export default function Home() {
	return (
		<main>
			<Topbar />
			<Header />

			<Box
				sx={{
					minHeight: '100vh',
					width: '100%',
				}}
			>
				<Grid container>
					<Grid item xs={12} sm={12}>
						{[1, 2, 3, 4].map((item) => (
							<CardWithBackground key='item' />
						))}
					</Grid>
				</Grid>
			</Box>
		</main>
	);
}
