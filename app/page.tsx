import Hero from '@/components/home/hero';
import { Box } from '@mui/material';

export default function Home() {
	return (
		<main>
			<Box
				sx={{
					minHeight: '100vh',
					width: '100%',
				}}
			>
				<Hero />
			</Box>
		</main>
	);
}
