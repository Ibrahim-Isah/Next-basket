import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import StoreProvider from './StoreProvider';
import Header from '@/components/home/header';
import { Footer } from '@/components/home/footer';

const montserrat = Montserrat({
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Next Basket E-Commerce',
	description: 'E-Commerce web application',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<StoreProvider>
				<body className={montserrat.className}>
					<Header />
					{children}
					<Footer />
				</body>
			</StoreProvider>
		</html>
	);
}
