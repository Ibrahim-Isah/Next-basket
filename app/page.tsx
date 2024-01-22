'use client';

import CallToAction from '@/components/home/call-to-action';
import Featured from '@/components/home/featured';
import FeaturedPost from '@/components/home/featured-post';
import Hero from '@/components/home/hero';
import Services from '@/components/home/services';
import Testimonial from '@/components/home/testimonial';
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
				<Featured />
				<Services />
				<FeaturedPost />
				<Testimonial />
				<CallToAction />
			</Box>
		</main>
	);
}
